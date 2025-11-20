'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
    const { t } = useLanguage();

    const services = [
        {
            id: '01',
            title: t('services.items.0.title'),
            description: t('services.items.0.description'),
            colSpan: 'md:col-span-2',
            bg: 'bg-gradient-to-br from-neutral-900 to-neutral-950'
        },
        {
            id: '02',
            title: t('services.items.1.title'),
            description: t('services.items.1.description'),
            colSpan: 'md:col-span-1',
            bg: 'bg-neutral-900'
        },
        {
            id: '03',
            title: t('services.items.2.title'),
            description: t('services.items.2.description'),
            colSpan: 'md:col-span-1',
            bg: 'bg-neutral-900'
        },
        {
            id: '04',
            title: t('services.items.3.title'),
            description: t('services.items.3.description'),
            colSpan: 'md:col-span-2',
            bg: 'bg-gradient-to-bl from-neutral-900 to-neutral-950'
        }
    ];

    return (
        <section id="services" className="py-32 bg-black text-white relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter font-outfit whitespace-pre-line">
                        {t('services.heading')}
                    </h2>
                    <p className="text-gray-400 max-w-md text-right mt-8 md:mt-0 font-mono text-sm whitespace-pre-line">
                        {t('services.subheading')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`${service.colSpan} group relative h-[300px] p-8 rounded-none border border-white/10 overflow-hidden hover:border-white/30 transition-colors duration-500`}
                        >
                            <div className={`absolute inset-0 ${service.bg} opacity-50`} />
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <span className="font-mono text-xs text-gray-500">/{service.id}</span>
                                    <ArrowUpRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold mb-2 font-outfit">{service.title}</h3>
                                    <p className="text-gray-400 text-sm max-w-[80%]">{service.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
