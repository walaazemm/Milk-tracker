import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { DollarSign, TrendingDown, AlertCircle, CheckCircle } from 'lucide-react';

interface DependenciesCalculationProps {
  onNavigate: (page: string) => void;
}

const monthlyExpenses = [
  { month: 'Jan', feed: 8500, veterinary: 1200, labor: 4500, utilities: 800, maintenance: 600 },
  { month: 'Fév', feed: 8200, veterinary: 900, labor: 4500, utilities: 750, maintenance: 400 },
  { month: 'Mar', feed: 8800, veterinary: 1500, labor: 4500, utilities: 820, maintenance: 850 },
  { month: 'Avr', feed: 8600, veterinary: 1100, labor: 4700, utilities: 780, maintenance: 500 },
  { month: 'Mai', feed: 9000, veterinary: 1300, labor: 4700, utilities: 800, maintenance: 700 },
  { month: 'Jun', feed: 8900, veterinary: 950, labor: 4700, utilities: 850, maintenance: 450 },
];

const feedBreakdown = [
  { type: 'Foin', quantity: 850, cost: 2550, unit: 'kg' },
  { type: 'Ensilage', quantity: 1200, cost: 2400, unit: 'kg' },
  { type: 'Concentrés', quantity: 600, cost: 3000, unit: 'kg' },
  { type: 'Suppléments', quantity: 150, cost: 450, unit: 'kg' },
];

const veterinaryExpenses = [
  { service: 'Visites régulières', cost: 450, frequency: 'Mensuel' },
  { service: 'Vaccinations', cost: 280, frequency: 'Trimestriel' },
  { service: 'Soins d\'urgence', cost: 220, frequency: 'Selon les besoins' },
  { service: 'Soin des sabots', cost: 180, frequency: 'Bimensuel' },
];

export function DependenciesCalculation({ onNavigate }: DependenciesCalculationProps) {
  const [view, setView] = useState<'overview' | 'feed' | 'veterinary'>('overview');
  const totalMonthlyExpenses = monthlyExpenses[monthlyExpenses.length - 1];
  const totalCost = Object.values(totalMonthlyExpenses).reduce((sum, val) => typeof val === 'number' ? sum + val : sum, 0) as number;
  const totalFeed = feedBreakdown.reduce((sum, item) => sum + item.cost, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
            <DollarSign className="text-orange-600" size={32} />
            Calcul des dépendances
          </h1>
          <p className="text-gray-600 mt-2">Suivi et analyse des dépenses opérationnelles et des coûts</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 text-sm font-semibold">Coût mensuel total</h3>
            <p className="text-3xl font-bold text-red-600 mt-2">${totalCost.toLocaleString()}</p>
            <p className="text-xs text-gray-500 mt-2">Toutes les dépenses incluses</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 text-sm font-semibold">Coûts alimentaires</h3>
            <p className="text-3xl font-bold text-orange-600 mt-2">${totalMonthlyExpenses.feed.toLocaleString()}</p>
            <p className="text-xs text-gray-500 mt-2">Catégorie de dépense la plus importante</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 text-sm font-semibold">Vétérinaire</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">${totalMonthlyExpenses.veterinary.toLocaleString()}</p>
            <p className="text-xs text-gray-500 mt-2">Santé et soins</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 text-sm font-semibold">Coût par vache</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">${(totalCost / 48).toFixed(2)}</p>
            <p className="text-xs text-gray-500 mt-2">Moyenne mensuelle</p>
          </div>
        </div>

        {/* View Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setView('overview')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              view === 'overview' ? 'bg-orange-600 text-white' : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            Aperçu
          </button>
          <button
            onClick={() => setView('feed')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              view === 'feed' ? 'bg-orange-600 text-white' : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            Ventilation alimentaire
          </button>
          <button
            onClick={() => setView('veterinary')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              view === 'veterinary' ? 'bg-orange-600 text-white' : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            Vétérinaire
          </button>
        </div>

        {/* Expenses Chart */}
        {view === 'overview' && (
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Dépenses mensuelles</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyExpenses}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="feed" stackId="a" fill="#f97316" name="Alimentation" />
                <Bar dataKey="veterinary" stackId="a" fill="#10b981" name="Vétérinaire" />
                <Bar dataKey="labor" stackId="a" fill="#3b82f6" name="Main-d'œuvre" />
                <Bar dataKey="utilities" stackId="a" fill="#8b5cf6" name="Services publics" />
                <Bar dataKey="maintenance" stackId="a" fill="#ef4444" name="Maintenance" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Feed Breakdown */}
        {view === 'feed' && (
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-6">Ventilation des aliments</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-300">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Type</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Quantité</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Coût</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Coût unitaire</th>
                  </tr>
                </thead>
                <tbody>
                  {feedBreakdown.map((item, idx) => (
                    <tr key={idx} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-700 font-medium">{item.type}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{item.quantity} {item.unit} par jour</td>
                      <td className="px-6 py-4 text-sm font-semibold text-orange-600">${item.cost}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">${(item.cost / item.quantity).toFixed(2)}/{item.unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Veterinary Services */}
        {view === 'veterinary' && (
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-6">Services vétérinaires</h2>
              <div className="space-y-4">
                {veterinaryExpenses.map((service, idx) => (
                  <div key={idx} className="border-l-4 border-green-600 pl-4 py-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{service.service}</span>
                      <span className="text-green-600 font-bold">${service.cost}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{service.frequency}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Vaccinations */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <AlertCircle size={20} className="text-red-600" />
                Vaccinations à venir
              </h2>
              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                  <p className="font-semibold text-blue-900">Vaccinations trimestrielles</p>
                  <p className="text-sm text-blue-700 mt-1">À prévoir dans 15 jours</p>
                  <p className="text-lg font-bold text-blue-600 mt-2">280 $</p>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded">
                  <p className="font-semibold text-amber-900">Soin des sabots bimensuel</p>
                  <p className="text-sm text-amber-700 mt-1">À prévoir dans 8 jours</p>
                  <p className="text-lg font-bold text-amber-600 mt-2">180 $</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                  <p className="font-semibold text-green-900">Visite mensuelle régulière</p>
                  <p className="text-sm text-green-700 mt-1">À prévoir dans 3 jours</p>
                  <p className="text-lg font-bold text-green-600 mt-2">450 $</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
