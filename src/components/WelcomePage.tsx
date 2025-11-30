import { Calculator, TrendingUp, Milk, DollarSign } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface WelcomePageProps {
  onNavigate: (page: 'production' | 'dependencies' | 'monitoring' | 'prices') => void;
}

export function WelcomePage({ onNavigate }: WelcomePageProps) {
  const { t } = useLanguage();

  const cards = [
    {
      id: 'production',
      title: t('productionCalculating'),
      description: t('productionCalculatingDesc'),
      icon: Calculator,
      gradient: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
      page: 'production' as const,
    },
    {
      id: 'dependencies',
      title: t('dependenciesCalculation'),
      description: t('dependenciesCalculationDesc'),
      icon: TrendingUp,
      gradient: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      page: 'dependencies' as const,
    },
    {
      id: 'monitoring',
      title: t('cheptelMonitoring'),
      description: t('cheptelMonitoringDesc'),
      icon: Milk,
      gradient: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      page: 'monitoring' as const,
    },
    {
      id: 'prices',
      title: t('recentPrices'),
      description: t('recentPricesDesc'),
      icon: DollarSign,
      gradient: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      page: 'prices' as const,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="text-center space-y-4">
        <h2 className="text-gray-800">{t('welcome')} {t('appName')}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t('welcomeDescription')}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <button
              key={card.id}
              onClick={() => onNavigate(card.page)}
              className={`${card.bgColor} rounded-2xl p-8 text-left transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-200 group`}
            >
              <div className="space-y-4">
                <div className={`bg-gradient-to-br ${card.gradient} w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-gray-800">{card.title}</h3>
                  <p className="text-sm text-gray-600">{card.description}</p>
                </div>
                <div className="flex items-center text-sm text-gray-500 group-hover:text-gray-700">
                  <span>{t('accessModule')}</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
          <p className="text-sm text-gray-600">{t('totalCows')}</p>
          <p className="text-gray-800 mt-2">48</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
          <p className="text-sm text-gray-600">{t('todayProduction')}</p>
          <p className="text-gray-800 mt-2">1,245 L</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
          <p className="text-sm text-gray-600">{t('averagePerCow')}</p>
          <p className="text-gray-800 mt-2">25.9 L</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
          <p className="text-sm text-gray-600">{t('currentPrice')}</p>
          <p className="text-gray-800 mt-2">$0.45/L</p>
        </div>
      </div>
    </div>
  );
}