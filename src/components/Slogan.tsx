import { useLanguage } from '@/hooks/useLanguage';

export function Slogan() {
  const { isRTL, t } = useLanguage();

  return (
    <section className="py-16 lg:py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary-foreground/20 rounded-full -translate-x-16 -translate-y-16" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary-foreground/20 rounded-full translate-x-12 translate-y-12" />
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-primary-foreground/30 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-primary-foreground/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${
            isRTL ? 'font-arabic' : 'font-english'
          }`}>
            {t('slogan.text')}
          </h2>
        </div>
      </div>
    </section>
  );
}