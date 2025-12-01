import { useState } from 'react';
import { Search, List, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface CheptelMonitoringProps {
  onNavigate: (page: 'cowDetails', cowId: string) => void;
}

const mockCows = [
  { id: 'MC-001', name: 'Bella', variety: 'Holstein', age: 4, weight: 650, lastProduction: 32 },
  { id: 'MC-002', name: 'Daisy', variety: 'Jersey', age: 3, weight: 420, lastProduction: 28 },
  { id: 'MC-003', name: 'Luna', variety: 'Holstein', age: 5, weight: 680, lastProduction: 35 },
  { id: 'MC-004', name: 'Rosie', variety: 'Guernsey', age: 4, weight: 540, lastProduction: 30 },
  { id: 'MC-005', name: 'Milka', variety: 'Holstein', age: 6, weight: 700, lastProduction: 33 },
  { id: 'MC-006', name: 'Bessie', variety: 'Jersey', age: 2, weight: 400, lastProduction: 24 },
  { id: 'MC-007', name: 'Cookie', variety: 'Brown Swiss', age: 5, weight: 620, lastProduction: 31 },
  { id: 'MC-008', name: 'Honey', variety: 'Holstein', age: 3, weight: 630, lastProduction: 29 },
];

export function CheptelMonitoring({ onNavigate }: CheptelMonitoringProps) {
  const [matriculation, setMatriculation] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'matriculation' | 'list'>('matriculation');
  const { t } = useLanguage();

const handleMatriculationSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const cow = mockCows.find(c => c.id.toLowerCase() === matriculation.toLowerCase());
  if (cow) {
    onNavigate('cowDetails', cow.id);
  } else {
    alert('Matricule non trouvé. Veuillez vérifier et réessayer.');
  }
};
  
  const filteredCows = mockCows.filter(cow =>
    cow.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cow.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cow.variety.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
        <h2 className="text-gray-800">{t('cheptelMonitoring')}</h2>
        <p className="text-gray-600 mt-2">{t('cheptelMonitoringDesc')}</p>
      </div>

      {/* Tab Selection */}
      <div className="flex gap-4">
        <button
          onClick={() => setActiveTab('matriculation')}
          className={`flex-1 py-4 px-6 rounded-xl transition-all ${
            activeTab === 'matriculation'
              ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
              : 'bg-white text-gray-700 border border-gray-200 hover:border-green-300'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Search className="w-5 h-5" />
            <span>{t('searchByMatriculation')}</span>
          </div>
        </button>
        <button
          onClick={() => setActiveTab('list')}
          className={`flex-1 py-4 px-6 rounded-xl transition-all ${
            activeTab === 'list'
              ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
              : 'bg-white text-gray-700 border border-gray-200 hover:border-green-300'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <List className="w-5 h-5" />
            <span>{t('browseAllIndividuals')}</span>
          </div>
        </button>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
        {activeTab === 'matriculation' ? (
          <div className="max-w-md mx-auto space-y-6">
            <div className="text-center space-y-2">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Search className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-gray-800">{t('enterMatriculation')}</h3>
              <p className="text-sm text-gray-600">{t('enterMatriculationDesc')}</p>
            </div>

            <form onSubmit={handleMatriculationSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  value={matriculation}
                  onChange={(e) => setMatriculation(e.target.value)}
                  placeholder="e.g., MC-001"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>{t('accessTechnicalFile')}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                {t('availableMatriculations')}: MC-001 to MC-008
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('searchPlaceholder')}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Cows List */}
            <div className="grid gap-4">
              {filteredCows.map((cow) => (
                <button
                  key={cow.id}
                  onClick={() => onNavigate('cowDetails', cow.id)}
                  className="bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 p-6 rounded-xl border border-green-200 transition-all hover:shadow-lg text-left group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        <div className="bg-white p-3 rounded-lg border border-green-200">
                          <span className="text-green-700">{cow.id}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-gray-800">{cow.name}</h4>
                          <p className="text-sm text-gray-600">{cow.variety}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mt-4">
                        <div>
                          <p className="text-xs text-gray-500">{t('age')}</p>
                          <p className="text-sm text-gray-800">{cow.age} {t('years')}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">{t('weight')}</p>
                          <p className="text-sm text-gray-800">{cow.weight} kg</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">{t('lastProduction')}</p>
                          <p className="text-sm text-gray-800">{cow.lastProduction} L</p>
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-green-600 group-hover:translate-x-2 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
