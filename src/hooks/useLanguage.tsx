import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ar: {
    // Navigation
    'nav.services': 'الخدمات',
    'nav.values': 'القيم',
    'nav.about': 'من نحن',
    'nav.contact': 'تواصل معنا',
    'nav.whatsapp': 'واتساب',
    'nav.language': 'English',

    // Hero
    'hero.title': 'هاوس ريفرش ومعايير عالية الجودة',
    'hero.subtitle': 'هاوس ريفرش تضع معايير عالية في إدارة الممتلكات، بلمسة تجمع الدقة والفخامة.',
    'hero.description': 'ندير المرافق واتحاد الملاك باحترافية تضمن الاستدامة والراحة، مع عناية فندقية تحافظ على جودة الحياة',
    'hero.cta.whatsapp': 'تواصل عبر واتساب',
    'hero.cta.quote': 'احصل على عرض سعر',

    // Trust badges
    'badge.eco': 'صديق للبيئة',
    'badge.team': 'فريق مدرب',
    'badge.fast': 'سريع ومخصص',
    'badge.saudi': 'شركة سعودية',

    // About
    'about.title': 'هاوس ريفرش ومعايير عالية الجودة',
    'about.content': 'شركة سعودية متخصصة في تقديم خدمات النظافة الاحترافية بأساليب عصرية. نوفر حلول النظافة والصيانة المتكاملة من خلال فريق عمل مدرّب وتجهيزات متقدمة، ومواد آمنة وصديقة للبيئة تناسب البيوت والمكاتب والعقارات الجديدة.',

    // Values
    'values.title': 'قيمنا',
    'values.excellence.title': 'التميز',
    'values.excellence.subtitle': 'Service Excellence',
    'values.excellence.description': 'نسعى لتجربة عميل مريحة، سريعة، وشخصية، مبنية على استماع وفهم حقيقي للاحتياج.',
    'values.professionalism.title': 'الاحترافية',
    'values.professionalism.subtitle': 'Professionalism',
    'values.professionalism.description': 'نلتزم بمعايير عالية في الأداء والتنفيذ لضمان نتائج تُرضي عملاءنا وتفوق توقعاتهم.',
    'values.sustainability.title': 'الاستدامة',
    'values.sustainability.subtitle': 'Sustainability',
    'values.sustainability.description': 'نحرص على استخدام حلول ومنتجات صديقة للبيئة، حفاظًا على صحة عملائنا وكوكبنا.',

    // Services
    'services.title': 'خدماتنا',
    'services.hotel.title': 'إدارة وتنظيف فندقي',
    'services.hotel.subtitle': 'Hotel Management & Cleaning',
    'services.hotel.description': 'خدمات إدارة وتنظيف فندقية متخصصة تضمن أعلى معايير النظافة والراحة للضيوف.',
    'services.facilities.title': 'ادارة وتشغيل المرافق',
    'services.facilities.subtitle': 'Facilities Management & Operation',
    'services.facilities.description': 'إدارة وتشغيل المرافق باحترافية عالية مع صيانة دورية وخدمات متكاملة.',
    'services.establishments.title': 'خدمات مخصصه للمنشأت',
    'services.establishments.subtitle': 'Customized Establishment Services',
    'services.establishments.description': 'حلول مخصصة للمنشآت التجارية والصناعية مع خدمات تنظيف وصيانة متخصصة.',
    'services.cta': 'احصل على عرض سعر',

    // Slogan
    'slogan.text': 'مكانك، بنسخة تليق فيك',

    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'احصل على استشارة مجانية وعرض سعر مخصص',
    'contact.form.name': 'الاسم',
    'contact.form.phone': 'رقم الهاتف / واتساب',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.property': 'نوع العقار',
    'contact.form.property.home': 'منزل',
    'contact.form.property.office': 'مكتب',
    'contact.form.property.new': 'عقار جديد',
    'contact.form.service': 'الخدمة المطلوبة',
    'contact.form.service.quick': 'تنظيف سريع',
    'contact.form.service.deep': 'تنظيف عميق',
    'contact.form.service.furniture': 'تنظيف مفروشات',
    'contact.form.service.properties': 'تنظيف عقارات',
    'contact.form.service.establishments': 'خدمات منشآت',
    'contact.form.message': 'رسالة إضافية',
    'contact.form.submit': 'إرسال الطلب',
    'contact.form.success': 'شكراً! سنتواصل معك قريباً عبر واتساب أو البريد الإلكتروني.',

    // Footer
    'footer.company': 'هاوس ريفرش',
    'footer.description': 'خدمات تنظيف احترافية بمعايير عالية الجودة',
    'footer.contact': 'معلومات التواصل',
    'footer.links': 'روابط سريعة',
    'footer.website': 'الموقع الإلكتروني',
    'footer.rights': '© 2024 هاوس ريفرش. جميع الحقوق محفوظة.',

    // Clients
    'clients.title': 'شركاء النجاح',
  },
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.values': 'Values',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.whatsapp': 'WhatsApp',
    'nav.language': 'العربية',

    // Hero
    'hero.title': 'House Refresh',
    'hero.subtitle': 'High Standards, Spotless Results.',
    'hero.description': 'A Saudi company specializing in modern, professional cleaning services with high quality standards.',
    'hero.cta.whatsapp': 'Contact via WhatsApp',
    'hero.cta.quote': 'Request a Quote',

    // Trust badges
    'badge.eco': 'Eco-Friendly',
    'badge.team': 'Trained Team',
    'badge.fast': 'Fast & Personalized',
    'badge.saudi': 'Saudi Company',

    // About
    'about.title': 'House Refresh with high quality standards',
    'about.content': 'A Saudi company specializing in modern, professional cleaning services. We deliver integrated cleaning and maintenance solutions through a trained team, advanced equipment, and eco-friendly, safe products—ideal for homes, offices, and newly built properties.',

    // Values
    'values.title': 'Our Values',
    'values.excellence.title': 'Service Excellence',
    'values.excellence.subtitle': 'التميز',
    'values.excellence.description': 'A comfortable, fast, and personalized experience built on real listening and understanding.',
    'values.professionalism.title': 'Professionalism',
    'values.professionalism.subtitle': 'الاحترافية',
    'values.professionalism.description': 'High standards in execution to deliver results that satisfy and exceed expectations.',
    'values.sustainability.title': 'Sustainability',
    'values.sustainability.subtitle': 'الاستدامة',
    'values.sustainability.description': 'Eco-friendly solutions and products to protect our clients\' health and our planet.',

    // Services
    'services.title': 'Our Services',
    'services.hotel.title': 'Hotel Management & Cleaning',
    'services.hotel.subtitle': 'إدارة وتنظيف فندقي',
    'services.hotel.description': 'Specialized hotel management and cleaning services ensuring the highest standards of cleanliness and guest comfort.',
    'services.facilities.title': 'Facilities Management & Operation',
    'services.facilities.subtitle': 'ادارة وتشغيل المرافق',
    'services.facilities.description': 'Professional facilities management and operation with regular maintenance and comprehensive services.',
    'services.establishments.title': 'Customized Establishment Services',
    'services.establishments.subtitle': 'خدمات مخصصه للمنشأت',
    'services.establishments.description': 'Customized solutions for commercial and industrial establishments with specialized cleaning and maintenance services.',
    'services.cta': 'Get a Quote',

    // Slogan
    'slogan.text': 'Your Space, Refreshed — To Reflect You',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get a free consultation and personalized quote',
    'contact.form.name': 'Name',
    'contact.form.phone': 'Phone / WhatsApp',
    'contact.form.email': 'Email',
    'contact.form.property': 'Property Type',
    'contact.form.property.home': 'Home',
    'contact.form.property.office': 'Office',
    'contact.form.property.new': 'New Build',
    'contact.form.service': 'Preferred Service',
    'contact.form.service.quick': 'Quick Cleaning',
    'contact.form.service.deep': 'Deep Cleaning',
    'contact.form.service.furniture': 'Furniture Cleaning',
    'contact.form.service.properties': 'Properties Cleaning',
    'contact.form.service.establishments': 'Establishments Services',
    'contact.form.message': 'Additional Message',
    'contact.form.submit': 'Send Request',
    'contact.form.success': 'Thanks! We\'ll get back to you shortly on WhatsApp or email.',

    // Footer
    'footer.company': 'House Refresh',
    'footer.description': 'Professional cleaning services with high quality standards',
    'footer.contact': 'Contact Information',
    'footer.links': 'Quick Links',
    'footer.website': 'Website',
    'footer.rights': '© 2024 House Refresh. All rights reserved.',

    // Clients
    'clients.title': 'Success Partners',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      isRTL: language === 'ar',
      t
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}