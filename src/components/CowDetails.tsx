import { ArrowLeft, Calendar, Activity, Heart, Milk, Scale, DnaIcon } from 'lucide-react';

interface CowDetailsProps {
  cowId: string;
  onNavigate: (page: 'monitoring') => void;
}

const cowData: Record<string, any> = {
  'MC-001': {
    id: 'MC-001',
    name: 'Bella',
    variety: 'Holstein',
    age: 4,
    weight: 650,
    birthDate: '2021-03-15',
    purchaseDate: '2021-04-20',
    health: 'Excellent',
    lastVaccination: '2024-10-15',
    nextVaccination: '2025-01-15',
    avgProduction: 32,
    totalProduction: 38400,
    lactationPeriod: 280,
    calvingHistory: 3,
    currentLactation: 120,
    feedConsumption: 45,
    notes: 'Meilleure performeuse, production constante',
  },
  'MC-002': {
    id: 'MC-002',
    name: 'Daisy',
    variety: 'Jersey',
    age: 3,
    weight: 420,
    birthDate: '2022-05-10',
    purchaseDate: '2022-06-15',
    health: 'Bon',
    lastVaccination: '2024-11-01',
    nextVaccination: '2025-02-01',
    avgProduction: 28,
    totalProduction: 22400,
    lactationPeriod: 260,
    calvingHistory: 2,
    currentLactation: 95,
    feedConsumption: 38,
    notes: 'Lait à haute teneur en matière grasse',
  },
  'MC-003': {
    id: 'MC-003',
    name: 'Luna',
    variety: 'Holstein',
    age: 5,
    weight: 680,
    birthDate: '2020-08-22',
    purchaseDate: '2020-09-30',
    health: 'Excellent',
    lastVaccination: '2024-09-20',
    nextVaccination: '2024-12-20',
    avgProduction: 35,
    totalProduction: 52500,
    lactationPeriod: 290,
    calvingHistory: 4,
    currentLactation: 145,
    feedConsumption: 48,
    notes: 'Génétique forte, excellente reproductrice',
  },
  'MC-004': {
    id: 'MC-004',
    name: 'Rosie',
    variety: 'Guernesey',
    age: 4,
    weight: 540,
    birthDate: '2021-06-18',
    purchaseDate: '2021-07-25',
    health: 'Bon',
    lastVaccination: '2024-10-25',
    nextVaccination: '2025-01-25',
    avgProduction: 30,
    totalProduction: 36000,
    lactationPeriod: 275,
    calvingHistory: 3,
    currentLactation: 110,
    feedConsumption: 42,
    notes: 'Lait doré, haute teneur en beurre',
  },
  'MC-005': {
    id: 'MC-005',
    name: 'Milka',
    variety: 'Holstein',
    age: 6,
    weight: 700,
    birthDate: '2019-11-30',
    purchaseDate: '2020-01-10',
    health: 'Bon',
    lastVaccination: '2024-08-15',
    nextVaccination: '2024-11-15',
    avgProduction: 33,
    totalProduction: 59400,
    lactationPeriod: 285,
    calvingHistory: 5,
    currentLactation: 160,
    feedConsumption: 50,
    notes: 'Vache vétéran, productrice fiable',
  },
  'MC-006': {
    id: 'MC-006',
    name: 'Bessie',
    variety: 'Jersey',
    age: 2,
    weight: 400,
    birthDate: '2023-02-14',
    purchaseDate: '2023-03-20',
    health: 'Excellent',
    lastVaccination: '2024-11-10',
    nextVaccination: '2025-02-10',
    avgProduction: 24,
    totalProduction: 8640,
    lactationPeriod: 240,
    calvingHistory: 1,
    currentLactation: 60,
    feedConsumption: 35,
    notes: 'Jeune génisse, première lactation',
  },
  'MC-007': {
    id: 'MC-007',
    name: 'Cookie',
    variety: 'Suisse brune',
    age: 5,
    weight: 620,
    birthDate: '2020-10-05',
    purchaseDate: '2020-11-12',
    health: 'Excellent',
    lastVaccination: '2024-09-30',
    nextVaccination: '2024-12-30',
    avgProduction: 31,
    totalProduction: 46500,
    lactationPeriod: 280,
    calvingHistory: 4,
    currentLactation: 130,
    feedConsumption: 44,
    notes: 'Race robuste, bonne pour le pâturage',
  },
  'MC-008': {
    id: 'MC-008',
    name: 'Honey',
    variety: 'Holstein',
    age: 3,
    weight: 630,
    birthDate: '2022-07-20',
    purchaseDate: '2022-08-28',
    health: 'Bon',
    lastVaccination: '2024-10-30',
    nextVaccination: '2025-01-30',
    avgProduction: 29,
    totalProduction: 26100,
    lactationPeriod: 270,
    calvingHistory: 2,
    currentLactation: 105,
    feedConsumption: 40,
    notes: 'Tempérament doux, facile à manipuler',
  },
};

export function CowDetails({ cowId, onNavigate }: CowDetailsProps) {
  const cow = cowData[cowId];

  if (!cow) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-600 text-lg">Vache non trouvée</p>
          <button
            onClick={() => onNavigate('monitoring')}
            className="mt-4 text-green-600 hover:text-green-700 flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Retour au suivi
          </button>
        </div>
      </div>
    );
  }

  const healthColor = cow.health === 'Excellent' ? 'text-green-600 bg-green-50' : 'text-blue-600 bg-blue-50';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <button
          onClick={() => onNavigate('monitoring')}
          className="p-2 hover:bg-white rounded-lg transition-colors mb-6 inline-flex items-center gap-2 text-gray-700"
        >
          <ArrowLeft size={20} />
          Retour
        </button>

        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dossier technique</h1>
        <p className="text-gray-600 mb-8">Dossier individuel de la vache</p>

        {/* Main Info Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-gray-600 text-sm font-semibold">ID</p>
              <p className="text-2xl font-bold text-gray-800 mt-2">{cow.id}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-semibold">Nom</p>
              <p className="text-2xl font-bold text-gray-800 mt-2">{cow.name}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-semibold">Variété</p>
              <p className="text-2xl font-bold text-gray-800 mt-2">{cow.variety}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-semibold">État de santé</p>
              <p className={`text-2xl font-bold mt-2 ${healthColor} px-3 py-1 rounded-full text-center`}>
                {cow.health}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-semibold flex items-center gap-2">
              <Scale size={18} /> Poids
            </p>
            <p className="text-2xl font-bold text-blue-600 mt-3">{cow.weight} kg</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-semibold flex items-center gap-2">
              <Calendar size={18} /> Âge
            </p>
            <p className="text-2xl font-bold text-purple-600 mt-3">{cow.age} ans</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-semibold flex items-center gap-2">
              <Milk size={18} /> Production moyenne
            </p>
            <p className="text-2xl font-bold text-green-600 mt-3">{cow.avgProduction} L/jour</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-semibold flex items-center gap-2">
              <Activity size={18} /> Vêlages
            </p>
            <p className="text-2xl font-bold text-orange-600 mt-3">{cow.calvingHistory}</p>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Basic Information */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
              <DnaIcon size={20} className="text-blue-600" />
              Informations de base
            </h2>
            <div className="space-y-4">
              <div className="border-b pb-3">
                <p className="text-gray-600 text-sm">Date de naissance</p>
                <p className="text-gray-800 font-semibold mt-1">{cow.birthDate}</p>
              </div>
              <div className="border-b pb-3">
                <p className="text-gray-600 text-sm">Date d'achat</p>
                <p className="text-gray-800 font-semibold mt-1">{cow.purchaseDate}</p>
              </div>
              <div className="border-b pb-3">
                <p className="text-gray-600 text-sm">Jour de lactation actuel</p>
                <p className="text-gray-800 font-semibold mt-1">{cow.currentLactation} jours</p>
              </div>
              <div className="border-b pb-3">
                <p className="text-gray-600 text-sm">Période de lactation</p>
                <p className="text-gray-800 font-semibold mt-1">{cow.lactationPeriod} jours</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Consommation alimentaire</p>
                <p className="text-gray-800 font-semibold mt-1">{cow.feedConsumption} kg/jour</p>
              </div>
            </div>
          </div>

          {/* Health & Vaccination */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Heart size={20} className="text-red-600" />
              Santé et vaccination
            </h2>
            <div className="space-y-4">
              <div className="border-b pb-3">
                <p className="text-gray-600 text-sm">État de santé</p>
                <p className={`font-semibold mt-1 ${healthColor} px-2 py-1 rounded`}>{cow.health}</p>
              </div>
              <div className="border-b pb-3">
                <p className="text-gray-600 text-sm">Dernière vaccination</p>
                <p className="text-gray-800 font-semibold mt-1">{cow.lastVaccination}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Prochaine vaccination</p>
                <p className="text-gray-800 font-semibold mt-1">{cow.nextVaccination}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Production Stats */}
        <div className="bg-white rounded-lg shadow p-6 mt-8 mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-6">Statistiques de production</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-gray-600 text-sm">Production quotidienne moyenne</p>
              <p className="text-3xl font-bold text-green-600 mt-3">{cow.avgProduction} L</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm">Production totale au cours de la vie</p>
              <p className="text-3xl font-bold text-blue-600 mt-3">{cow.totalProduction.toLocaleString()} L</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm">Historique des vêlages</p>
              <p className="text-3xl font-bold text-orange-600 mt-3">{cow.calvingHistory} vêlages</p>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Notes et observations</h2>
          <p className="text-gray-700 italic">{cow.notes}</p>
        </div>
      </div>
    </div>
  );
}
