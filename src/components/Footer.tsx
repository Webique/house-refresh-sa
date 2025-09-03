import { useLanguage } from '@/hooks/useLanguage';

import { Mail, Phone } from 'lucide-react';

export function Footer() {
  const { isRTL, t } = useLanguage();

  const quickLinks = [
    { key: 'services', label: t('nav.services') },
    { key: 'values', label: t('nav.values') },
    { key: 'about', label: t('nav.about') },
    { key: 'contact', label: t('nav.contact') },
  ];

  const contactInfo = [
    { icon: Phone, text: '+966 57 020 0611', href: 'tel:+966570200611' },
    { icon: Mail, text: 'Refresh.house404@gmail.com', href: 'mailto:Refresh.house404@gmail.com' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className={`space-y-6 ${isRTL ? 'md:order-3' : 'md:order-1'}`}>
            <div>
              <img 
                src="/logo.png" 
                alt="House Refresh" 
                className="h-10 w-auto mb-4"
              />
              <h3 className={`text-xl font-bold ${isRTL ? 'font-arabic' : 'font-english'}`}>
                {t('footer.company')}
              </h3>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`${isRTL ? 'md:order-2' : 'md:order-2'}`}>
            <h4 className={`text-lg font-bold mb-4 ${isRTL ? 'font-arabic text-right' : 'font-english text-left'}`}>
              {t('footer.links')}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => scrollToSection(link.key)}
                    className={`text-primary-foreground/80 hover:text-primary-foreground transition-colors ${
                      isRTL ? 'font-arabic text-right block' : 'font-english text-left'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={`${isRTL ? 'md:order-1' : 'md:order-3'}`}>
            <h4 className={`text-lg font-bold mb-4 ${isRTL ? 'font-arabic text-right' : 'font-english text-left'}`}>
              {t('footer.contact')}
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`flex items-center space-x-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors ${
                      isRTL ? 'space-x-reverse' : ''
                    }`}
                  >
                    <item.icon className="w-4 h-4 flex-shrink-0" />
                    <span 
                      className={`text-sm ${isRTL ? 'font-arabic' : 'font-english'}`}
                      dir={item.text.includes('+966') ? 'ltr' : undefined}
                    >
                      {item.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-6">
          <p className={`text-center text-primary-foreground/60 text-sm ${
            isRTL ? 'font-arabic' : 'font-english'
          }`}>
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}