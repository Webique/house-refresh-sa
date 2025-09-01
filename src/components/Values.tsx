import { useLanguage } from '@/hooks/useLanguage';
import { Award, Shield, Leaf } from 'lucide-react';

export function Values() {
  const { isRTL, t } = useLanguage();

  const values = [
    {
      icon: Award,
      title: t('values.excellence.title'),
      subtitle: t('values.excellence.subtitle'),
      description: t('values.excellence.description'),
    },
    {
      icon: Shield,
      title: t('values.professionalism.title'),
      subtitle: t('values.professionalism.subtitle'),
      description: t('values.professionalism.description'),
    },
    {
      icon: Leaf,
      title: t('values.sustainability.title'),
      subtitle: t('values.sustainability.subtitle'),
      description: t('values.sustainability.description'),
    },
  ];

  return (
    <section id="values" className="py-16 lg:py-24 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-8 ${
            isRTL ? 'font-arabic' : 'font-english'
          }`}>
            {t('values.title')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center bg-card rounded-2xl p-8 shadow-card hover-lift border border-border/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className={`text-2xl font-bold text-primary mb-2 ${
                isRTL ? 'font-arabic' : 'font-english'
              }`}>
                {value.title}
              </h3>
              
              <p className={`text-sm text-muted-foreground mb-4 ${
                isRTL ? 'font-english' : 'font-arabic'
              }`}>
                {value.subtitle}
              </p>
              
              <p className={`text-foreground/80 leading-relaxed ${
                isRTL ? 'font-arabic text-right' : 'font-english text-left'
              }`}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}