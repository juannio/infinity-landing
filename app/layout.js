import './globals.css';
import { Inter, Outfit } from 'next/font/google';
import { LanguageProvider } from '../context/LanguageContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata = {
  title: 'The Technology Co.',
  description: 'Cutting-edge software solutions for the modern era.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased bg-[#000000] text-white min-h-screen selection:bg-cyan-500/30">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
