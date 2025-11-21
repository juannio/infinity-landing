import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChoose from '../components/WhyChoose';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className="relative flex flex-col w-full overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <WhyChoose />
      <CTA />
      <Footer />
    </main>
  );
}
