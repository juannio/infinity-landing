'use client';

import { motion } from 'framer-motion';
import { Zap, Lock, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function WhyChoose() {
    const { t } = useLanguage();

    const features = [
        {
            title: t('whyChoose.features.0.title'),
            description: t('whyChoose.features.0.description'),
            icon: <Zap className="w-6 h-6 text-yellow-400" />
        },
        {
            title: t('whyChoose.features.1.title'),
            description: t('whyChoose.features.1.description'),
            icon: <Lock className="w-6 h-6 text-cyan-400" />
        },
        {
            title: t('whyChoose.features.2.title'),
            description: t('whyChoose.features.2.description'),
            icon: <Users className="w-6 h-6 text-purple-400" />
        }
    ];

    const stats = [
        { label: t('whyChoose.stats.projects'), value: '500+' },
        { label: t('whyChoose.stats.satisfaction'), value: '99%' },
        { label: t('whyChoose.stats.uptime'), value: '99.9%' },
        { label: t('whyChoose.stats.partners'), value: '40+' }
    ];

    return (
        <section id="why-us" className="py-24 bg-[#05051a] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-cyan-400 font-medium tracking-widest uppercase mb-3">{t('whyChoose.heading')}</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 font-outfit leading-tight whitespace-pre-line">
                            {t('whyChoose.title')}
                        </h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            {t('whyChoose.description')}
                        </p>

                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">{feature.title}</h4>
                                        <p className="text-gray-400 text-sm">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Content - Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
                        <div className="grid grid-cols-2 gap-6 relative z-10">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="p-8 rounded-2xl glass border border-white/10 text-center hover:bg-white/5 transition-colors duration-300"
                                >
                                    <h4 className="text-4xl md:text-5xl font-bold text-white mb-2 font-outfit">
                                        {stat.value}
                                    </h4>
                                    <p className="text-gray-400 text-sm uppercase tracking-wider">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
