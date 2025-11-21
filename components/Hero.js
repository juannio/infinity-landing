'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

// Vertex Shader
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Fragment Shader
const fragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  varying vec2 vUv;

  // Simplex 2D noise
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = vUv;
    
    // Warping effect based on mouse and time
    float noiseVal = snoise(uv * 3.0 + uTime * 0.2 + uMouse * 0.5);
    
    // Create lines/flow
    float lines = sin(uv.y * 50.0 + noiseVal * 10.0 + uTime);
    lines = smoothstep(0.4, 0.5, lines) - smoothstep(0.5, 0.6, lines);
    
    // Color gradient
    vec3 color1 = vec3(0.0, 0.0, 0.0); // Black
    vec3 color2 = vec3(0.5, 0.0, 1.0); // Purple
    vec3 color3 = vec3(0.0, 1.0, 1.0); // Cyan
    
    vec3 finalColor = mix(color1, color2, uv.y + noiseVal * 0.5);
    finalColor = mix(finalColor, color3, lines * 0.8);
    
    // Vignette
    float dist = distance(uv, vec2(0.5));
    finalColor *= 1.0 - dist * 1.2;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

function FlowField() {
  const mesh = useRef();
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
    }),
    []
  );

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
      mesh.current.material.uniforms.uMouse.value.lerp(
        new THREE.Vector2(state.mouse.x, state.mouse.y),
        0.1
      );
    }
  });

  return (
    <mesh ref={mesh} scale={[2, 2, 1]}>
      <planeGeometry args={[10, 10]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }} gl={{ antialias: false }}>
          <FlowField />
          <EffectComposer>
            <Bloom
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
              height={300}
              intensity={0.8}
            />
            <Noise opacity={0.05} />
          </EffectComposer>
        </Canvas>
      </div>
      {/* Content */}
      <div className="relative z-20 px-6 w-full max-w-7xl mx-auto pointer-events-none mix-blend-difference">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center w-full gap-1">
            <div className="flex text-center border rounded-full px-[clamp(2rem,6vw,4rem)] py-5 bg-[#112252]">
              <h1 className="text-[clamp(1.0rem,5vw,2.4rem)] leading-[0.8] tracking-tighter text-white font-outfit select-none">
                The
              </h1>
            </div>
            <div className="flex text-center border rounded-full px-[clamp(2.5rem,7vw,10rem)] py-5 bg-[#6F15E6]">
              <h1 className="text-[clamp(1.6rem,12vw,6rem)] leading-[0.8] tracking-tighter text-white font-outfit select-none">
                {'<Technology>'}
              </h1>
            </div>
            <div className="flex text-center border rounded-full px-[clamp(1.5rem,6vw,3rem)] py-5 bg-[#000000]">
              <h1 className="text-[clamp(1.3rem,9vw,5rem)] leading-[0.8] tracking-tighter text-white font-outfit select-none">
                co.
              </h1>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between w-full border-t border-white/20 pt-6 mt-6">
              <p className="text-sm md:text-base text-white-400 max-w-xs text-left font-mono">
                {t('hero.systemStatus')}
                <br />
                {t('hero.tagline')}
              </p>
              <p className="text-sm md:text-base text-white tracking-widest uppercase mt-4 md:mt-0">
                {t('hero.scroll')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
