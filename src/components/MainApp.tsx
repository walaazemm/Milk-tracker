import { useState } from 'react';
import { WelcomePage } from './WelcomePage';
import { ProductionCalculation } from './ProductionCalculation';
import { DependenciesCalculation } from './DependenciesCalculation';
import { CheptelMonitoring } from './CheptelMonitoring';
import { CowDetails } from './CowDetails';
import { RecentPrices } from './RecentPrices';
import { LanguageSelector } from './LanguageSelector';
import { Bell, Milk } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

type Page = 'welcome' | 'production' | 'dependencies' | 'monitoring' | 'prices' | 'cowDetails';

export function MainApp() {
  const { t, language } = useLanguage();
  const [currentPage, setCurrentPage] = useState<Page>('welcome');
  const [selectedCow, setSelectedCow] = useState<string | null>(null);
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Cow #MC-001 production below average', time: '2h ago', read: false },
    { id: 2, message: 'Milk prices increased by 5%', time: '5h ago', read: false },
    { id: 3, message: 'Vaccination schedule reminder', time: '1d ago', read: true },
  ]);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleNavigate = (page: Page, cowId?: string) => {
    setCurrentPage(page);
    if (cowId) setSelectedCow(cowId);
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const isRTL = language === 'ar';

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div 
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleNavigate('welcome')}
            >
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-2 rounded-xl">
                <Milk className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-green-800">{t('appName')}</h1>
                <p className="text-sm text-gray-500">{t('appTagline')}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <LanguageSelector />

              {/* Notification Button */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowNotifications(!showNotifications);
                    if (!showNotifications) markAllAsRead();
                  }}
                  className="relative p-3 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Bell className="w-6 h-6 text-gray-700" />
                  {unreadCount > 0 && (
                    <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div className={`absolute ${isRTL ? 'left-0' : 'right-0'} mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden`}>
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4">
                      <h3 className="text-white">{t('notifications')}</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map(notif => (
                        <div
                          key={notif.id}
                          className={`p-4 border-b border-gray-100 hover:bg-gray-50 ${!notif.read ? 'bg-blue-50' : ''}`}
                        >
                          <p className="text-sm text-gray-800">{notif.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentPage === 'welcome' && <WelcomePage onNavigate={handleNavigate} />}
        {currentPage === 'production' && <ProductionCalculation onNavigate={handleNavigate} />}
        {currentPage === 'dependencies' && <DependenciesCalculation onNavigate={handleNavigate} />}
        {currentPage === 'monitoring' && <CheptelMonitoring onNavigate={handleNavigate} />}
        {currentPage === 'prices' && <RecentPrices onNavigate={handleNavigate} />}
        {currentPage === 'cowDetails' && selectedCow && <CowDetails cowId={selectedCow} onNavigate={handleNavigate} />}
      </main>
    </div>
  );
}
