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
    <section id="values" className="py-8 lg:py-12 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 ${
            isRTL ? 'font-arabic' : 'font-english'
          }`}>
            {t('values.title')}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Mobile: Horizontal scroll layout */}
        <div className="block lg:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 bg-card rounded-xl p-4 shadow-card border border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-lg font-bold text-primary mb-1 ${
                      isRTL ? 'font-arabic' : 'font-english'
                    }`}>
                      {value.title}
                    </h3>
                    <p className={`text-xs text-muted-foreground mb-2 ${
                      isRTL ? 'font-english' : 'font-arabic'
                    }`}>
                      {value.subtitle}
                    </p>
                    <p className={`text-sm text-foreground/80 leading-relaxed ${
                      isRTL ? 'font-arabic text-right' : 'font-english text-left'
                    }`}>
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center bg-card rounded-xl p-6 shadow-card hover-lift border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className={`text-xl font-bold text-primary mb-2 ${
                isRTL ? 'font-arabic' : 'font-english'
              }`}>
                {value.title}
              </h3>
              
              <p className={`text-sm text-muted-foreground mb-3 ${
                isRTL ? 'font-english' : 'font-arabic'
              }`}>
                {value.subtitle}
              </p>
              
              <p className={`text-sm text-foreground/80 leading-relaxed ${
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