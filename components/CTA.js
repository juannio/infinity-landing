'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function CTA() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Background Image/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#030014] to-[#0a0a2e] z-0" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay z-0" />

            <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-outfit">
                        {t('cta.heading')}
                    </h2>
                    <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                        {t('cta.subheading')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                                {t('cta.buttonPrimary')} <ArrowRight className="w-5 h-5" />
                            </span>
                        </button>

                        <button className="px-8 py-4 rounded-full glass text-white font-medium hover:bg-white/10 transition-all border border-white/10">
                            {t('cta.buttonSecondary')}
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
