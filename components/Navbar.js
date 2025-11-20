'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
    const { t, language, toggleLanguage } = useLanguage();

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-6 mix-blend-difference text-white"
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold tracking-tighter font-outfit">
                    {t('hero.title')}
                </Link>

                <div className="flex items-center gap-8 text-sm font-mono">
                    <div className="hidden md:flex gap-8">
                        <Link href="#services" className="hover:text-gray-300 transition-colors">{t('nav.work')}</Link>
                        <Link href="#why-us" className="hover:text-gray-300 transition-colors">{t('nav.agency')}</Link>
                        <Link href="#contact" className="hover:text-gray-300 transition-colors">{t('nav.contact')}</Link>
                    </div>

                    <button
                        onClick={toggleLanguage}
                        className="px-3 py-1 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all"
                    >
                        {language === 'en' ? 'ES' : 'EN'}
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
