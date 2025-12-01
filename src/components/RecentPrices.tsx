import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Calendar, Globe, MapPin } from 'lucide-react';

interface RecentPricesProps {
  onNavigate: (page: string) => void;
}

const priceHistory = [
  { date: '01 Jun', price: 0.42, volume: 36500 },
  { date: '08 Jun', price: 0.43, volume: 36800 },
  { date: '15 Jun', price: 0.44, volume: 37200 },
  { date: '22 Jun', price: 0.45, volume: 37100 },
  { date: '29 Jun', price: 0.45, volume: 36900 },
  { date: '06 Jul', price: 0.46, volume: 38200 },
  { date: '13 Jul', price: 0.47, volume: 37800 },
  { date: '20 Jul', price: 0.46, volume: 37500 },
  { date: '27 Jul', price: 0.45, volume: 36800 },
  { date: '03 Aug', price: 0.45, volume: 37600 },
  { date: '10 Aug', price: 0.44, volume: 37200 },
  { date: '17 Aug', price: 0.45, volume: 38100 },
];

const regionalPrices = [
  { region: 'Région nord', price: 0.46, trend: 'up', change: 2.2 },
  { region: 'Région sud', price: 0.44, trend: 'down', change: -1.1 },
  { region: 'Région est', price: 0.45, trend: 'up', change: 0.9 },
  { region: 'Région ouest', price: 0.47, trend: 'up', change: 3.5 },
];

const monthlyComparison = [
  { month: 'Jan', lastYear: 0.38, thisYear: 0.42 },
  { month: 'Fév', lastYear: 0.39, thisYear: 0.43 },
  { month: 'Mar', lastYear: 0.40, thisYear: 0.44 },
  { month: 'Avr', lastYear: 0.41, thisYear: 0.45 },
  { month: 'Mai', lastYear: 0.42, thisYear: 0.45 },
  { month: 'Jun', lastYear: 0.43, thisYear: 0.46 },
];

export function RecentPrices({ onNavigate }: RecentPricesProps) {
  const [view, setView] = useState<'trends' | 'regional' | 'comparison'>('trends');
  const currentPrice = priceHistory[priceHistory.length - 1].price;
  const previousPrice = priceHistory[priceHistory.length - 2].price;
  const priceChange = ((currentPrice - previousPrice) / previousPrice) * 100;
  const avgPrice = priceHistory.reduce((sum, item) => sum + item.price, 0) / priceHistory.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
            <DollarSign className="text-green-600" size={32} />
            Prix récents
          </h1>
          <p className="text-gray-600 mt-2">Suivi des prix du marché actuel et des tendances</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 text-sm font-semibold">Prix actuel</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">${currentPrice.toFixed(2)}/L</p>
            <p className={`text-sm mt-2 flex items-center gap-1 ${priceChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {priceChange >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(1)}% cette semaine
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 text-sm font-semibold">Prix moyen</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">${avgPrice.toFixed(2)}/L</p>
            <p className="text-xs text-gray-500 mt-2">Moyenne sur 12 semaines</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 text-sm font-semibold">Prix régional le plus élevé</h3>
            <p className="text-3xl font-bold text-orange-600 mt-2">$0,47/L</p>
            <p className="text-xs text-gray-500 mt-2">Région ouest</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 text-sm font-semibold">Revenu mensuel</h3>
            <p className="text-3xl font-bold text-purple-600 mt-2">$16 560</p>
            <p className="text-xs text-gray-500 mt-2">Basé sur le prix actuel</p>
          </div>
        </div>

        {/* View Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setView('trends')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              view === 'trends' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            Tendances des prix
          </button>
          <button
            onClick={() => setView('regional')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              view === 'regional' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            Prix régionaux
          </button>
          <button
            onClick={() => setView('comparison')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              view === 'comparison' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            Comparaison d'une année à l'autre
          </button>
        </div>

        {/* Price Trends Chart */}
        {view === 'trends' && (
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <TrendingUp size={20} className="text-green-600" />
              Tendances des prix
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={priceHistory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip formatter={(value) => `$${value.toFixed(2)}/L`} />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#10b981" strokeWidth={2} name="Prix du lait ($/L)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Regional Prices */}
        {view === 'regional' && (
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <MapPin size={20} className="text-red-600" />
                Prix régionaux
              </h2>
              <div className="space-y-4">
                {regionalPrices.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-gray-800 font-semibold">{item.region}</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Prix du marché actuel: <span className="font-semibold">${item.price.toFixed(2)}/L</span>
                      </p>
                    </div>
                    <div className={`text-lg font-bold flex items-center gap-1 ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {item.trend === 'up' ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
                      {item.change > 0 ? '+' : ''}{item.change.toFixed(1)}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-6">Insights du marché</h2>
              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                  <p className="text-green-900 font-semibold">Croissance d'une année à l'autre</p>
                  <p className="text-2xl font-bold text-green-600 mt-2">+9,5%</p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                  <p className="text-blue-900 font-semibold">Augmentation mensuelle</p>
                  <p className="text-2xl font-bold text-blue-600 mt-2">+1 850 $</p>
                </div>
                <div className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded">
                  <p className="text-orange-900 font-semibold">Période de prix maximum</p>
                  <p className="text-2xl font-bold text-orange-600 mt-2">Juillet</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Year-over-Year Comparison */}
        {view === 'comparison' && (
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Calendar size={20} className="text-purple-600" />
              Comparaison d'une année à l'autre
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => `$${value.toFixed(2)}/L`} />
                <Legend />
                <Bar dataKey="lastYear" fill="#94a3b8" name="Année dernière" />
                <Bar dataKey="thisYear" fill="#10b981" name="Cette année" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Tendance positive du marché</h2>
            <p className="text-gray-700 mb-4">
              Les prix du lait ont augmenté de 9,5% par rapport à l'année dernière, stimulés par une forte demande 
              et des coûts de production stables.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Demande forte et croissante</li>
              <li>✓ Coûts de production stables</li>
              <li>✓ Tendance à la hausse durable</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Variations régionales</h2>
            <p className="text-gray-700 mb-4">
              La région ouest affiche les prix les plus élevés en raison de la demande locale accrue et de l'offre 
              limitée des fermes voisines.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Région ouest: $0,47/L (plus élevé)</li>
              <li>• Région nord: $0,46/L</li>
              <li>• Région est: $0,45/L</li>
              <li>• Région sud: $0,44/L (plus bas)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
