import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Calendar, Milk, Users, ArrowRight } from 'lucide-react';

interface ProductionCalculationProps {
  onNavigate: (page: 'monitoring') => void;
}

const weeklyData = [
  { day: 'Lun', production: 1180, avgPerCow: 24.6 },
  { day: 'Mar', production: 1220, avgPerCow: 25.4 },
  { day: 'Mer', production: 1245, avgPerCow: 25.9 },
  { day: 'Jeu', production: 1190, avgPerCow: 24.8 },
  { day: 'Ven', production: 1260, avgPerCow: 26.3 },
  { day: 'Sam', production: 1210, avgPerCow: 25.2 },
  { day: 'Dim', production: 1240, avgPerCow: 25.8 },
];

const monthlyData = [
  { month: 'Jan', production: 35400 },
  { month: 'Fév', production: 33800 },
  { month: 'Mar', production: 36200 },
  { month: 'Avr', production: 35900 },
  { month: 'Mai', production: 37100 },
  { month: 'Jun', production: 36500 },
  { month: 'Jul', production: 38200 },
  { month: 'Aoû', production: 37800 },
  { month: 'Sep', production: 36900 },
  { month: 'Oct', production: 37500 },
  { month: 'Nov', production: 36800 },
  { month: 'Déc', production: 35600 },
];

const varietyData = [
  { name: 'Holstein', value: 45, count: 25 },
  { name: 'Jersey', value: 25, count: 12 },
  { name: 'Guernsey', value: 15, count: 6 },
  { name: 'Brown Swiss', value: 15, count: 5 },
];

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#8b5cf6'];

export function ProductionCalculation({ onNavigate }: ProductionCalculationProps) {
  const [timeframe, setTimeframe] = useState<'week' | 'month'>('week');

  const totalWeekly = weeklyData.reduce((sum, day) => sum + day.production, 0);
  const avgDaily = totalWeekly / 7;
  const totalCows = 48;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-gray-800">Calcul de Production</h2>
            <p className="text-gray-600 mt-2">Analyse et statistiques complètes de la production</p>
          </div>
          <button
            onClick={() => onNavigate('monitoring')}
            className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
          >
            <Users className="w-5 h-5" />
            <span>Production par Individu</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <Milk className="w-6 h-6" />
            <p className="text-sm text-blue-50">Production d'Aujourd'hui</p>
          </div>
          <p className="text-white mt-2">1 245 L</p>
          <p className="text-xs text-blue-100 mt-1">+3,2% par rapport à hier</p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-6 h-6" />
            <p className="text-sm text-green-50">Moyenne Hebdomadaire</p>
          </div>
          <p className="text-white mt-2">{avgDaily.toFixed(0)} L/jour</p>
          <p className="text-xs text-green-100 mt-1">Moyenne sur 7 jours</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-6 h-6" />
            <p className="text-sm text-purple-50">Moyenne par Vache</p>
          </div>
          <p className="text-white mt-2">25,9 L</p>
          <p className="text-xs text-purple-100 mt-1">Par jour et par vache</p>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-6 h-6" />
            <p className="text-sm text-orange-50">Total Mensuel</p>
          </div>
          <p className="text-white mt-2">36 800 L</p>
          <p className="text-xs text-orange-100 mt-1">Mois en cours</p>
        </div>
      </div>

      {/* Timeframe Selection */}
      <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-gray-800">Tendances de Production</h3>
          <div className="flex gap-2">
            <button
              onClick={() => setTimeframe('week')}
              className={`px-4 py-2 rounded-lg transition-all ${
                timeframe === 'week'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Hebdomadaire
            </button>
            <button
              onClick={() => setTimeframe('month')}
              className={`px-4 py-2 rounded-lg transition-all ${
                timeframe === 'month'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Mensuel
            </button>
          </div>
        </div>

        {/* Line Chart */}
        {timeframe === 'week' ? (
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="day" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="production"
                stroke="#3b82f6"
                strokeWidth={3}
                name="Production Totale (L)"
                dot={{ fill: '#3b82f6', r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="avgPerCow"
                stroke="#10b981"
                strokeWidth={3}
                name="Moyenne par Vache (L)"
                dot={{ fill: '#10b981', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={monthlyData}>
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
              <Bar dataKey="production" fill="#3b82f6" name="Production Mensuelle (L)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Distribution Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Pie Chart - Production by Variety */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
          <h3 className="text-gray-800 mb-6">Distribution de Production par Race</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={varietyData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {varietyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart - Cows by Variety */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
          <h3 className="text-gray-800 mb-6">Composition du Troupeau</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={varietyData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis type="number" stroke="#6b7280" />
              <YAxis dataKey="name" type="category" stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="count" fill="#10b981" name="Nombre de Vaches" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Analysis */}
      <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
        <h3 className="text-gray-800 mb-6">Analyse de Performance</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Meilleurs Producteurs (30+ L/jour)</span>
              <span className="text-green-600">12 vaches</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '25%' }}></div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Producteurs Moyens (20-30 L/jour)</span>
              <span className="text-blue-600">28 vaches</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '58%' }}></div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Sous la Moyenne (&lt;20 L/jour)</span>
              <span className="text-orange-600">8 vaches</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: '17%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
