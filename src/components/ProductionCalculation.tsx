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
  { name: 'Guernesey', value: 15, count: 6 },
  { name: 'Suisse brune', value: 15, count: 5 },
];

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#8b5cf6'];

export function ProductionCalculation({ onNavigate }: ProductionCalculationProps) {
  const [timeframe, setTimeframe] = useState<'week' | 'month'>('week');
  const totalWeekly = weeklyData.reduce((sum, day) => sum + day.production, 0);
  const avgDaily = totalWeekly / 7;
  const totalCows = 48;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
            <Milk className="text-emerald-600" size={32} />
            Calcul de production
          </h1>
          <p className="text-gray-600 mt-2">Analyse complète de la production et statistiques</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 text-sm font-semibold">Production d'aujourd'hui</h3>
            <p className="text-3xl font-bold text-emerald-600 mt-2">1 245 L</p>
            <p className="text-xs text-green-600 mt-2">+3,2% par rapport à hier</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 text-sm font-semibold">Moyenne hebdomadaire</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">{avgDaily.toFixed(0)} L/jour</p>
            <p className="text-xs text-gray-500 mt-2">Moyenne sur 7 jours</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 text-sm font-semibold">Moyenne par vache</h3>
            <p className="text-3xl font-bold text-purple-600 mt-2">25,9 L</p>
            <p className="text-xs text-gray-500 mt-2">Par jour par vache</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 text-sm font-semibold">Total mensuel</h3>
            <p className="text-3xl font-bold text-orange-600 mt-2">36 800 L</p>
            <p className="text-xs text-gray-500 mt-2">Mois en cours</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Production Trends */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <TrendingUp size={20} className="text-emerald-600" />
              Production hebdomadaire
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="production" stroke="#10b981" name="Production (L)" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Breed Distribution */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Users size={20} className="text-blue-600" />
              Distribution des races
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={varietyData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
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
        </div>

        {/* Monthly Production */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Calendar size={20} className="text-orange-600" />
            Production mensuelle
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="production" fill="#3b82f6" name="Production (L)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Detailed Metrics */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-6">Détails de la production</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="border-l-4 border-emerald-600 pl-4">
              <p className="text-gray-600 text-sm">Production moyenne</p>
              <p className="text-2xl font-bold text-emerald-600">1 225 L</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <p className="text-gray-600 text-sm">Consommation alimentaire</p>
              <p className="text-2xl font-bold text-blue-600">2 160 kg</p>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <p className="text-gray-600 text-sm">Ratio conversion</p>
              <p className="text-2xl font-bold text-purple-600">0,57</p>
            </div>
            <div className="border-l-4 border-orange-600 pl-4">
              <p className="text-gray-600 text-sm">Efficacité laitière</p>
              <p className="text-2xl font-bold text-orange-600">91%</p>
            </div>
          </div>
        </div>

        {/* Period Selection */}
        <div className="mt-8 flex gap-4 justify-center">
          <button
            onClick={() => setTimeframe('week')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              timeframe === 'week'
                ? 'bg-emerald-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            Semaine
          </button>
          <button
            onClick={() => setTimeframe('month')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              timeframe === 'month'
                ? 'bg-emerald-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            Mois
          </button>
        </div>
      </div>
    </div>
  );
}
