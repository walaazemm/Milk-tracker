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
  { region: 'North Region', price: 0.46, trend: 'up', change: 2.2 },
  { region: 'South Region', price: 0.44, trend: 'down', change: -1.1 },
  { region: 'East Region', price: 0.45, trend: 'up', change: 0.9 },
  { region: 'West Region', price: 0.47, trend: 'up', change: 3.5 },
];

const monthlyComparison = [
  { month: 'Jan', lastYear: 0.38, thisYear: 0.42 },
  { month: 'Feb', lastYear: 0.39, thisYear: 0.43 },
  { month: 'Mar', lastYear: 0.40, thisYear: 0.44 },
  { month: 'Apr', lastYear: 0.41, thisYear: 0.45 },
  { month: 'May', lastYear: 0.42, thisYear: 0.45 },
  { month: 'Jun', lastYear: 0.43, thisYear: 0.46 },
];

export function RecentPrices({ onNavigate }: RecentPricesProps) {
  const [view, setView] = useState<'trends' | 'regional' | 'comparison'>('trends');

  const currentPrice = priceHistory[priceHistory.length - 1].price;
  const previousPrice = priceHistory[priceHistory.length - 2].price;
  const priceChange = ((currentPrice - previousPrice) / previousPrice) * 100;
  const avgPrice = priceHistory.reduce((sum, item) => sum + item.price, 0) / priceHistory.length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
        <h2 className="text-gray-800">Recent Milk Prices</h2>
        <p className="text-gray-600 mt-2">Track current market prices and trends</p>
      </div>

      {/* Price Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign className="w-6 h-6" />
            <p className="text-sm text-green-50">Current Price</p>
          </div>
          <p className="text-white mt-2">${currentPrice.toFixed(2)}/L</p>
          <div className="flex items-center gap-1 mt-1">
            {priceChange >= 0 ? (
              <>
                <TrendingUp className="w-4 h-4 text-green-100" />
                <p className="text-xs text-green-100">+{priceChange.toFixed(1)}% this week</p>
              </>
            ) : (
              <>
                <TrendingDown className="w-4 h-4 text-green-100" />
                <p className="text-xs text-green-100">{priceChange.toFixed(1)}% this week</p>
              </>
            )}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-6 h-6" />
            <p className="text-sm text-blue-50">Average Price</p>
          </div>
          <p className="text-white mt-2">${avgPrice.toFixed(2)}/L</p>
          <p className="text-xs text-blue-100 mt-1">12-week average</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <Globe className="w-6 h-6" />
            <p className="text-sm text-purple-50">Regional High</p>
          </div>
          <p className="text-white mt-2">$0.47/L</p>
          <p className="text-xs text-purple-100 mt-1">West Region</p>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-6 h-6" />
            <p className="text-sm text-orange-50">Monthly Revenue</p>
          </div>
          <p className="text-white mt-2">$16,560</p>
          <p className="text-xs text-orange-100 mt-1">Based on current price</p>
        </div>
      </div>

      {/* View Toggle */}
      <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-200">
        <div className="flex gap-2">
          <button
            onClick={() => setView('trends')}
            className={`flex-1 py-3 px-4 rounded-lg transition-all ${
              view === 'trends'
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Price Trends
          </button>
          <button
            onClick={() => setView('regional')}
            className={`flex-1 py-3 px-4 rounded-lg transition-all ${
              view === 'regional'
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Regional Prices
          </button>
          <button
            onClick={() => setView('comparison')}
            className={`flex-1 py-3 px-4 rounded-lg transition-all ${
              view === 'comparison'
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Year Comparison
          </button>
        </div>
      </div>

      {/* Content Area */}
      {view === 'trends' && (
        <>
          {/* Price Trend Chart */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
            <h3 className="text-gray-800 mb-6">Price Trend (Last 12 Weeks)</h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={priceHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="date" stroke="#6b7280" />
                <YAxis stroke="#6b7280" domain={[0.40, 0.50]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                  formatter={(value: any) => [`$${value.toFixed(2)}/L`, 'Price']}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#10b981"
                  strokeWidth={3}
                  name="Milk Price ($/L)"
                  dot={{ fill: '#10b981', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Volume Chart */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
            <h3 className="text-gray-800 mb-6">Production Volume vs Price</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={priceHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="date" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="volume" fill="#3b82f6" name="Volume (L)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      )}

      {view === 'regional' && (
        <div className="space-y-6">
          {/* Regional Price Cards */}
          <div className="grid md:grid-cols-2 gap-4">
            {regionalPrices.map((region, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-gray-800">{region.region}</h4>
                      <p className="text-sm text-gray-600">Current market price</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-800">${region.price.toFixed(2)}/L</p>
                    <div className={`flex items-center gap-1 justify-end mt-1 ${
                      region.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {region.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      <span className="text-sm">{Math.abs(region.change)}%</span>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      region.trend === 'up' ? 'bg-green-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${(region.price / 0.50) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Regional Comparison Chart */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
            <h3 className="text-gray-800 mb-6">Regional Price Comparison</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={regionalPrices} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" domain={[0, 0.50]} stroke="#6b7280" />
                <YAxis dataKey="region" type="category" stroke="#6b7280" width={120} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                  formatter={(value: any) => [`$${value.toFixed(2)}/L`, 'Price']}
                />
                <Bar dataKey="price" fill="#10b981" name="Price ($/L)" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {view === 'comparison' && (
        <div className="space-y-6">
          {/* Year-over-Year Comparison */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
            <h3 className="text-gray-800 mb-6">Year-over-Year Price Comparison</h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={monthlyComparison}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" domain={[0.35, 0.50]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                  formatter={(value: any) => [`$${value.toFixed(2)}/L`, 'Price']}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="lastYear"
                  stroke="#94a3b8"
                  strokeWidth={2}
                  name="Last Year"
                  strokeDasharray="5 5"
                  dot={{ fill: '#94a3b8', r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="thisYear"
                  stroke="#10b981"
                  strokeWidth={3}
                  name="This Year"
                  dot={{ fill: '#10b981', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Price Change Analysis */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-6 h-6 text-green-600" />
                <h4 className="text-gray-800">Average Increase</h4>
              </div>
              <p className="text-green-700">+9.5%</p>
              <p className="text-sm text-gray-600 mt-1">Year-over-year growth</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <DollarSign className="w-6 h-6 text-blue-600" />
                <h4 className="text-gray-800">Revenue Impact</h4>
              </div>
              <p className="text-blue-700">+$1,850</p>
              <p className="text-sm text-gray-600 mt-1">Monthly increase</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-6 h-6 text-purple-600" />
                <h4 className="text-gray-800">Best Month</h4>
              </div>
              <p className="text-purple-700">July</p>
              <p className="text-sm text-gray-600 mt-1">Peak pricing period</p>
            </div>
          </div>
        </div>
      )}

      {/* Market Insights */}
      <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
        <h3 className="text-gray-800 mb-4">Market Insights</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
            <TrendingUp className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <p className="text-gray-800">Positive market trend</p>
              <p className="text-sm text-gray-600 mt-1">Milk prices have increased by 9.5% compared to last year, driven by strong demand and stable production costs.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <Globe className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-gray-800">Regional variations</p>
              <p className="text-sm text-gray-600 mt-1">West Region shows the highest prices due to increased local demand and limited supply from nearby farms.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
