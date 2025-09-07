import { useLanguage } from '@/hooks/useLanguage';
import { Languages } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage, isRTL } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      title={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
    >
      <div className="flex items-center space-x-1">
        <Languages className="w-3 h-3" />
        <span className="text-xs font-medium">
          {language === 'ar' ? 'EN' : 'عربي'}
        </span>
      </div>
    </button>
  );
} 