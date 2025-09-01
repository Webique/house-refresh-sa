import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail, Phone } from 'lucide-react';

export function Contact() {
  const { isRTL, t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      text: '+966 57 020 0611',
      href: 'tel:+966570200611'
    },
    {
      icon: Mail,
      text: 'Refresh.house404@gmail.com',
      href: 'mailto:Refresh.house404@gmail.com'
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 ${
            isRTL ? 'font-arabic' : 'font-english'
          }`}>
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className={`text-lg text-foreground/80 max-w-2xl mx-auto ${
            isRTL ? 'font-arabic' : 'font-english'
          }`}>
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <h3 className={`text-2xl font-bold text-primary mb-6 ${
                isRTL ? 'font-arabic text-right' : 'font-english text-left'
              }`}>
                {t('footer.contact')}
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`flex items-center space-x-3 text-foreground hover:text-primary transition-colors group ${
                      isRTL ? 'space-x-reverse' : ''
                    }`}
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className={isRTL ? 'font-arabic' : 'font-english'}>
                      {item.text}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}