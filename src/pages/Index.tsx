import { Hero } from '@/components/Hero';
import { Values } from '@/components/Values';
import { Services } from '@/components/Services';
import { OurClients } from '@/components/OurClients';
import { Slogan } from '@/components/Slogan';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Values />
      <Services />
      <OurClients />
      <Slogan />
      <Contact />
      <Footer />
      <LanguageSwitcher />
    </div>
  );
};

export default Index;
