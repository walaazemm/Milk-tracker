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
  { id: 'MC-004', name: 'Rosie', variety: 'Guernesey', age: 4, weight: 540, lastProduction: 30 },
  { id: 'MC-005', name: 'Milka', variety: 'Holstein', age: 6, weight: 700, lastProduction: 33 },
  { id: 'MC-006', name: 'Bessie', variety: 'Jersey', age: 2, weight: 400, lastProduction: 24 },
  { id: 'MC-007', name: 'Cookie', variety: 'Suisse brune', age: 5, weight: 620, lastProduction: 31 },
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
      alert('Matriculation non trouvée. Veuillez vérifier et réessayer.');
    }
  };

  const filteredCows = mockCows.filter(cow =>
    cow.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cow.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cow.variety.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Suivi du cheptel</h1>
          <p className="text-gray-600 mt-2">Suivi et analyse des vaches laitières</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('matriculation')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'matriculation'
                ? 'bg-teal-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            Rechercher par matriculation
          </button>
          <button
            onClick={() => setActiveTab('list')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'list'
                ? 'bg-teal-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            Liste des vaches
          </button>
        </div>

        {/* Matriculation Tab */}
        {activeTab === 'matriculation' && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Entrer la matriculation</h2>
            <p className="text-gray-600 mb-6">Recherchez une vache spécifique en entrant son ID de matriculation</p>
            
            <form onSubmit={handleMatriculationSubmit} className="flex gap-4 mb-6">
              <input
                type="text"
                placeholder="MC-001 à MC-008"
                value={matriculation}
                onChange={(e) => setMatriculation(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition flex items-center gap-2"
              >
                Rechercher
                <ArrowRight size={20} />
              </button>
            </form>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                <strong>Matriculations disponibles:</strong> MC-001 à MC-008
              </p>
            </div>
          </div>
        )}

        {/* List Tab */}
        {activeTab === 'list' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Liste des vaches</h2>
            
            {/* Search Bar */}
            <div className="mb-6">
              <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg border border-gray-300">
                <Search size={20} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Recherchez par ID, nom ou variété..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent focus:outline-none text-gray-700"
                />
              </div>
            </div>

            {/* Cows Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b-2 border-gray-300">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">ID</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Nom</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Variété</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Âge</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Poids</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Production récente</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCows.length > 0 ? (
                    filteredCows.map((cow) => (
                      <tr key={cow.id} className="border-b hover:bg-gray-50 transition">
                        <td className="px-6 py-4 text-sm font-semibold text-gray-800">{cow.id}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{cow.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{cow.variety}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{cow.age} ans</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{cow.weight} kg</td>
                        <td className="px-6 py-4 text-sm">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                            {cow.lastProduction} L/jour
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <button
                            onClick={() => onNavigate('cowDetails', cow.id)}
                            className="text-teal-600 hover:text-teal-800 font-semibold flex items-center gap-1 transition"
                          >
                            Voir
                            <ArrowRight size={16} />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                        Aucune vache trouvée
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Summary */}
            <div className="mt-8 bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Total:</strong> {filteredCows.length} vache(s) trouvée(s)
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Cliquez sur "Voir" pour accéder au dossier technique complet de chaque vache
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
