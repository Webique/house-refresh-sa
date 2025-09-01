import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Values } from '@/components/Values';
import { Services } from '@/components/Services';
import { Slogan } from '@/components/Slogan';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Values />
      <Services />
      <Slogan />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
