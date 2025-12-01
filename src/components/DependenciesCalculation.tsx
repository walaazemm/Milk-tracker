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
  { service: 'Soins d\'urgence', cost: 220, frequency: 'Au besoin' },
  { service: 'Soin des sabots', cost: 180, frequency: 'Bimensuel' },
];

export function DependenciesCalculation({ onNavigate }: DependenciesCalculationProps) {
  const [view, setView] = useState<'overview' | 'feed' | 'veterinary'>('overview');

  const totalMonthlyExpenses = monthlyExpenses[monthlyExpenses.length - 1];
  const totalCost = Object.values(totalMonthlyExpenses).reduce((sum, val) => typeof val === 'number' ? sum + val : sum, 0) as number;
  const totalFeed = feedBreakdown.reduce((sum, item) => sum + item.cost, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
        <h2 className="text-gray-800">Calcul des dépendances</h2>
        <p className="text-gray-600 mt-2">Suivi et analyse des dépenses opérationnelles et des coûts</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign className="w-6 h-6" />
            <p className="text-sm text-purple-50">Coût mensuel total</p>
          </div>
          <p className="text-white mt-2">${totalCost.toLocaleString()}</p>
          <p className="text-xs text-purple-100 mt-1">Toutes les dépenses incluses</p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <TrendingDown className="w-6 h-6" />
            <p className="text-sm text-green-50">Coûts d'alimentation</p>
          </div>
          <p className="text-white mt-2">${totalMonthlyExpenses.feed.toLocaleString()}</p>
          <p className="text-xs text-green-100 mt-1">Catégorie de dépense la plus importante</p>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <AlertCircle className="w-6 h-6" />
            <p className="text-sm text-blue-50">Vétérinaire</p>
          </div>
          <p className="text-white mt-2">${totalMonthlyExpenses.veterinary.toLocaleString()}</p>
          <p className="text-xs text-blue-100 mt-1">Santé et soins</p>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="w-6 h-6" />
            <p className="text-sm text-orange-50">Coût par vache</p>
          </div>
          <p className="text-white mt-2">${(totalCost / 48).toFixed(2)}</p>
          <p className="text-xs text-orange-100 mt-1">Moyenne mensuelle</p>
        </div>
      </div>

      {/* View Toggle */}
      <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-200">
        <div className="flex gap-2">
          <button
            onClick={() => setView('overview')}
            className={`flex-1 py-3 px-4 rounded-lg transition-all ${
              view === 'overview'
                ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Aperçu des dépenses
          </button>
          <button
            onClick={() => setView('feed')}
            className={`flex-1 py-3 px-4 rounded-lg transition-all ${
              view === 'feed'
                ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Analyse de l'alimentation
          </button>
          <button
            onClick={() => setView('veterinary')}
            className={`flex-1 py-3 px-4 rounded-lg transition-all ${
              view === 'veterinary'
                ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Coûts vétérinaires
          </button>
        </div>
      </div>

      {/* Content Area */}
      {view === 'overview' && (
        <>
          {/* Monthly Expenses Chart */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
            <h3 className="text-gray-800 mb-6">Ventilation des dépenses mensuelles</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={monthlyExpenses}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
                <Bar dataKey="feed" stackId="a" fill="#10b981" name="Alimentation" />
                <Bar dataKey="labor" stackId="a" fill="#3b82f6" name="Main-d'œuvre" />
                <Bar dataKey="veterinary" stackId="a" fill="#f59e0b" name="Vétérinaire" />
                <Bar dataKey="utilities" stackId="a" fill="#8b5cf6" name="Services publics" />
                <Bar dataKey="maintenance" stackId="a" fill="#ef4444" name="Maintenance" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Expense Trend */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
            <h3 className="text-gray-800 mb-6">Tendance des dépenses totales</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyExpenses.map(m => ({
                month: m.month,
                total: m.feed + m.veterinary + m.labor + m.utilities + m.maintenance
              }))}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="total"
                  stroke="#8b5cf6"
                  strokeWidth={3}
                  name="Dépenses totales ($)"
                  dot={{ fill: '#8b5cf6', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </>
      )}

      {view === 'feed' && (
        <>
          {/* Feed Breakdown */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
            <h3 className="text-gray-800 mb-6">Consommation et coûts d'alimentation</h3>
            <div className="space-y-4">
              {feedBreakdown.map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="text-gray-800">{item.type}</h4>
                      <p className="text-sm text-gray-600">{item.quantity} {item.unit} par jour</p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-700">${item.cost}</p>
                      <p className="text-xs text-gray-600">${(item.cost / item.quantity).toFixed(2)}/{item.unit}</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${(item.cost / totalFeed) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feed Chart */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
            <h3 className="text-gray-800 mb-6">Distribution des coûts d'alimentation</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={feedBreakdown}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="type" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="cost" fill="#10b981" name="Coût ($)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      )}

      {view === 'veterinary' && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
            <h3 className="text-gray-800 mb-6">Ventilation des services vétérinaires</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {veterinaryExpenses.map((service, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-gray-800">{service.service}</h4>
                      <p className="text-sm text-gray-600 mt-1">{service.frequency}</p>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-lg border border-blue-200">
                      <p className="text-blue-700">${service.cost}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Expenses */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
            <h3 className="text-gray-800 mb-6">Dépenses programmées à venir</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600" />
                  <div>
                    <p className="text-gray-800">Vaccinations trimestrielles</p>
                    <p className="text-sm text-gray-600">À prévoir dans 15 jours</p>
                  </div>
                </div>
                <p className="text-yellow-700">$280</p>
              </div>
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-gray-800">Soin bimensuel des sabots</p>
                    <p className="text-sm text-gray-600">À prévoir dans 8 jours</p>
                  </div>
                </div>
                <p className="text-blue-700">$180</p>
              </div>
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-gray-800">Visite mensuelle régulière</p>
                    <p className="text-sm text-gray-600">À prévoir dans 3 jours</p>
                  </div>
                </div>
                <p className="text-green-700">$450</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
