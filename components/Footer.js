'use client';

import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-black text-white py-20 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-end">
                <div>
                    <h2 className="text-[10vw] leading-none font-bold tracking-tighter font-outfit text-neutral-900 select-none">
                        INFINITY
                    </h2>
                </div>
                <div className="flex gap-8 font-mono text-xs text-gray-500 mb-4">
                    <a href="#" className="hover:text-white transition-colors">{t('footer.links.twitter')}</a>
                    <a href="#" className="hover:text-white transition-colors">{t('footer.links.github')}</a>
                    <a href="#" className="hover:text-white transition-colors">{t('footer.links.linkedin')}</a>
                </div>
            </div>
        </footer>
    );
}
