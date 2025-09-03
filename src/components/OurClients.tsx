import { useLanguage } from '@/hooks/useLanguage';

export function OurClients() {
  const { isRTL, t } = useLanguage();

  const clients = [
    { name: 'Client 1', logo: '/logo1.jpg' },
    { name: 'Client 2', logo: '/logo2.jpg' },
    { name: 'Client 3', logo: '/logo3.jpg' },
    { name: 'Client 4', logo: '/logo4.jpg' },
  ];

  return (
    <section id="clients" className="py-12 lg:py-16 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 ${
            isRTL ? 'font-arabic' : 'font-english'
          }`}>
            {t('clients.title')}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-4 lg:p-6 shadow-card hover-lift border border-border/50 flex items-center justify-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-16 lg:max-h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 