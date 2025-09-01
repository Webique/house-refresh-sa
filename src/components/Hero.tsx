import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { MessageCircle, FileText, Sparkles, Users, Zap } from 'lucide-react';
import heroImage from '@/assets/hero-cleaning-interior.jpg';

export function Hero() {
  const { isRTL, t } = useLanguage();

  const trustBadges = [
    { icon: Users, text: t('badge.team') },
    { icon: Zap, text: t('badge.fast') },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center pt-16 sm:pt-20 overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src={heroImage} 
          alt="Premium clean interior" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/60" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-sparkle" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary/30 rounded-full animate-sparkle" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary/25 rounded-full animate-sparkle" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-primary/20 rounded-full animate-sparkle" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up px-2 sm:px-0">
          {/* Main heading */}
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-primary mb-4 sm:mb-6 leading-tight px-2 ${
            isRTL ? 'font-arabic' : 'font-english'
          }`}>
            {t('hero.title')}
          </h1>
          
          {/* Subtitle */}
          <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary/80 mb-6 sm:mb-8 font-medium px-2 ${
            isRTL ? 'font-arabic' : 'font-english'
          }`}>
            {t('hero.subtitle')}
          </p>

          {/* Description */}
          <p className={`text-base sm:text-lg md:text-xl text-foreground/70 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 ${
            isRTL ? 'font-arabic' : 'font-english'
          }`}>
            {t('hero.description')}
          </p>

          {/* CTAs */}
          <div className="flex justify-center items-center mb-12 sm:mb-16 px-4">
            <Button
              size="lg"
              onClick={() => window.open('https://wa.me/966570200611?text=مرحبا، أود%20الاستفسار%20عن%20خدمات%20هاوس%20ريفريش', '_blank')}
              className="bg-primary hover:bg-primary-foreground hover:text-primary text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 hover-lift transform hover:scale-105 transition-all duration-300 w-full sm:w-auto max-w-sm"
            >
              <MessageCircle className={`w-4 h-4 sm:w-5 sm:h-5 ${isRTL ? 'ml-2 sm:ml-3' : 'mr-2 sm:mr-3'}`} />
              {t('hero.cta.whatsapp')}
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 max-w-3xl mx-auto px-4">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-3 sm:p-4 bg-card/50 backdrop-blur-sm rounded-lg sm:rounded-xl border border-border/50 hover-lift min-w-[120px] sm:min-w-[140px]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <badge.icon className="w-4 h-4 sm:w-6 sm:h-6 text-primary mb-1 sm:mb-2" />
                <span className={`text-xs font-medium text-center leading-tight ${
                  isRTL ? 'font-arabic' : 'font-english'
                }`}>
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gentle gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}