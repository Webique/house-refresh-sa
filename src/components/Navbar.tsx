import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

import { MessageCircle, Menu, X } from 'lucide-react';

export function Navbar() {
  const { language, setLanguage, isRTL, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const navItems = [
    { key: 'services', label: t('nav.services') },
    { key: 'values', label: t('nav.values') },
    { key: 'about', label: t('nav.about') },
    { key: 'contact', label: t('nav.contact') },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fffcdf] transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className={`flex items-center ${isRTL ? 'order-3' : 'order-1'}`}>
            <img 
              src="/logo.png" 
              alt="House Refresh" 
              className="h-8 w-auto sm:h-10"
            />
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center space-x-8 ${isRTL ? 'space-x-reverse order-1' : 'order-2'}`}>
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className={`text-[#0c2a26] hover:text-[#0c2a26]/80 transition-colors font-medium ${
                  isRTL ? 'font-arabic' : 'font-english'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className={`hidden lg:flex items-center space-x-4 ${isRTL ? 'space-x-reverse order-2' : 'order-3'}`}>
            <button
              onClick={toggleLanguage}
              className="text-sm text-[#0c2a26]/70 hover:text-[#0c2a26] transition-colors"
            >
              {t('nav.language')}
            </button>
            <Button
              onClick={() => window.open('https://wa.me/966570200611?text=مرحبا، أود%20الاستفسار%20عن%20خدمات%20هاوس%20ريفريش', '_blank')}
              className="bg-[#0c2a26] hover:bg-[#0c2a26]/90 text-[#fffcdf] hover-lift"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              {t('nav.whatsapp')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className={`lg:hidden ${isRTL ? 'order-1' : 'order-3'}`}>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#0c2a26] hover:text-[#0c2a26]/80 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#fffcdf] border-t border-[#0c2a26]/20 shadow-soft">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className={`block w-full text-left text-[#0c2a26] hover:text-[#0c2a26]/80 transition-colors font-medium py-2 ${
                    isRTL ? 'font-arabic text-right' : 'font-english text-left'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-[#0c2a26]/20 space-y-3">
                <button
                  onClick={toggleLanguage}
                  className={`block w-full text-sm text-[#0c2a26]/70 hover:text-[#0c2a26] transition-colors py-2 ${
                    isRTL ? 'text-right' : 'text-left'
                  }`}
                >
                  {t('nav.language')}
                </button>
                <Button
                  onClick={() => window.open('https://wa.me/966570200611?text=مرحبا، أود%20الاستفسار%20عن%20خدمات%20هاوس%20ريفريش', '_blank')}
                  className="w-full bg-[#0c2a26] hover:bg-[#0c2a26]/90 text-[#fffcdf]"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {t('nav.whatsapp')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}