import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Building2, Home } from 'lucide-react';

export function Services() {
  const { isRTL, t } = useLanguage();

  const services = [
    {
      icon: Building2,
      title: t('services.establishments.title'),
      subtitle: t('services.establishments.subtitle'),
      description: t('services.establishments.description'),
    },
    {
      icon: Home,
      title: t('services.properties.title'),
      subtitle: t('services.properties.subtitle'),
      description: t('services.properties.description'),
    },
  ];

  const openWhatsApp = () => {
    window.open('https://wa.me/966570200611?text=مرحبا، أود%20الاستفسار%20عن%20خدمات%20هاوس%20ريفريش%20و%20الحصول%20على%20عرض%20سعر', '_blank');
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-8 ${
            isRTL ? 'font-arabic' : 'font-english'
          }`}>
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-card rounded-2xl p-6 shadow-card hover-lift border border-border/50 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 group-hover:bg-primary/20 rounded-xl mb-6 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className={`text-xl font-bold text-primary mb-2 leading-tight ${
                isRTL ? 'font-arabic text-right' : 'font-english text-left'
              }`}>
                {service.title}
              </h3>
              
              <p className={`text-sm text-muted-foreground mb-4 ${
                isRTL ? 'font-arabic text-right' : 'font-english text-left'
              }`}>
                {service.subtitle}
              </p>
              
              <p className={`text-foreground/80 leading-relaxed mb-6 ${
                isRTL ? 'font-arabic text-right' : 'font-english text-left'
              }`}>
                {service.description}
              </p>
              
              <Button
                size="sm"
                variant="outline"
                onClick={openWhatsApp}
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                {t('services.cta')}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}