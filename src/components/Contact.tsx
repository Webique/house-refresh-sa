import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { MessageCircle, Mail, Phone, Globe } from 'lucide-react';

export function Contact() {
  const { isRTL, t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    property: '',
    service: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: t('contact.form.success'),
      duration: 5000,
    });

    setFormData({
      name: '',
      phone: '',
      email: '',
      property: '',
      service: '',
      message: '',
    });

    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      text: '+966 57 020 0611',
      href: 'tel:+966570200611'
    },
    {
      icon: MessageCircle,
      text: 'WhatsApp',
      href: 'https://wa.me/966570200611'
    },
    {
      icon: Mail,
      text: 'Refresh.house404@gmail.com',
      href: 'mailto:Refresh.house404@gmail.com'
    },
    {
      icon: Globe,
      text: 'www.house-refreshes.com',
      href: 'https://www.house-refreshes.com'
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

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className={isRTL ? 'font-arabic' : 'font-english'}>
                    {t('contact.form.name')}
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="mt-2"
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className={isRTL ? 'font-arabic' : 'font-english'}>
                    {t('contact.form.phone')}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                    className="mt-2"
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className={isRTL ? 'font-arabic' : 'font-english'}>
                  {t('contact.form.email')}
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="mt-2"
                  dir="ltr"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label className={isRTL ? 'font-arabic' : 'font-english'}>
                    {t('contact.form.property')}
                  </Label>
                  <Select value={formData.property} onValueChange={(value) => handleInputChange('property', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="home">{t('contact.form.property.home')}</SelectItem>
                      <SelectItem value="office">{t('contact.form.property.office')}</SelectItem>
                      <SelectItem value="new">{t('contact.form.property.new')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className={isRTL ? 'font-arabic' : 'font-english'}>
                    {t('contact.form.service')}
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="quick">{t('contact.form.service.quick')}</SelectItem>
                      <SelectItem value="deep">{t('contact.form.service.deep')}</SelectItem>
                      <SelectItem value="furniture">{t('contact.form.service.furniture')}</SelectItem>
                      <SelectItem value="properties">{t('contact.form.service.properties')}</SelectItem>
                      <SelectItem value="establishments">{t('contact.form.service.establishments')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="message" className={isRTL ? 'font-arabic' : 'font-english'}>
                  {t('contact.form.message')}
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={4}
                  className="mt-2"
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-foreground hover:text-primary hover-lift"
              >
                {isSubmitting ? '...' : t('contact.form.submit')}
              </Button>
            </form>
          </div>

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

            {/* WhatsApp CTA */}
            <div className="bg-success/10 rounded-2xl p-8 border border-success/20">
              <h4 className={`text-xl font-bold text-success mb-4 ${
                isRTL ? 'font-arabic text-right' : 'font-english text-left'
              }`}>
                {t('nav.whatsapp')}
              </h4>
              <p className={`text-foreground/80 mb-6 ${
                isRTL ? 'font-arabic text-right' : 'font-english text-left'
              }`}>
                {isRTL 
                  ? 'تواصل معنا مباشرة عبر واتساب للحصول على رد سريع'
                  : 'Contact us directly via WhatsApp for quick response'
                }
              </p>
              <Button
                onClick={() => window.open('https://wa.me/966570200611?text=مرحبا، أود%20الاستفسار%20عن%20خدمات%20هاوس%20ريفريش', '_blank')}
                className="w-full bg-success hover:bg-success/90 text-success-foreground"
              >
                <MessageCircle className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('nav.whatsapp')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}