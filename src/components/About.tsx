import { useLanguage } from '@/hooks/useLanguage';

export function About() {
  const { isRTL, t } = useLanguage();

  return (
    <section id="about" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-8 ${
            isRTL ? 'font-arabic' : 'font-english'
          }`}>
            {t('about.title')}
          </h2>
          
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full" />
          
          <p className={`text-lg sm:text-xl text-foreground/80 leading-relaxed ${
            isRTL ? 'font-arabic text-right' : 'font-english text-left'
          }`}>
            {t('about.content')}
          </p>
        </div>
      </div>
    </section>
  );
}