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
    notes: 'Meilleure performante, production constante',
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
    notes: 'Lait riche en matière grasse',
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
    notes: 'Génétique solide, excellente reproductrice',
  },
  'MC-004': {
    id: 'MC-004',
    name: 'Rosie',
    variety: 'Guernsey',
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
    notes: 'Lait doré, riche en matière grasse',
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
    notes: 'Vache expérimentée, productrice fiable',
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
    variety: 'Brown Swiss',
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
      <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 text-center">
        <p className="text-gray-600">Vache non trouvée</p>
        <button
          onClick={() => onNavigate('monitoring')}
          className="mt-4 text-green-600 hover:text-green-700"
        >
          Retour à la surveillance
        </button>
      </div>
    );
  }

  const healthColor = cow.health === 'Excellent' ? 'text-green-600 bg-green-50' : 'text-blue-600 bg-blue-50';

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => onNavigate('monitoring')}
          className="p-2 hover:bg-white rounded-lg transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <div>
          <h2 className="text-gray-800">Dossier technique</h2>
          <p className="text-gray-600">Dossier individuel de vache</p>
        </div>
      </div>

      {/* Carte d'informations principales */}
      <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-start justify-between">
          <div>
            <div className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm mb-4">
              {cow.id}
            </div>
            <h1 className="text-white mb-2">{cow.name}</h1>
            <p className="text-green-50 text-lg">{cow.variety}</p>
          </div>
          <div className={`${healthColor} px-4 py-2 rounded-xl flex items-center gap-2`}>
            <Heart className="w-4 h-4" />
            <span>{cow.health}</span>
          </div>
        </div>
      </div>

      {/* Grille de statistiques */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <Scale className="w-5 h-5 text-blue-600" />
            <p className="text-sm text-gray-600">Poids</p>
          </div>
          <p className="text-gray-800">{cow.weight} kg</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-5 h-5 text-purple-600" />
            <p className="text-sm text-gray-600">Âge</p>
          </div>
          <p className="text-gray-800">{cow.age} ans</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <Milk className="w-5 h-5 text-green-600" />
            <p className="text-sm text-gray-600">Production moyenne</p>
          </div>
          <p className="text-gray-800">{cow.avgProduction} L/jour</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <Activity className="w-5 h-5 text-orange-600" />
            <p className="text-sm text-gray-600">Vêlages</p>
          </div>
          <p className="text-gray-800">{cow.calvingHistory}</p>
        </div>
      </div>

      {/* Informations détaillées */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Informations de base */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <DnaIcon className="w-5 h-5 text-green-600" />
            <h3 className="text-gray-800">Informations de base</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Date de naissance</span>
              <span className="text-gray-800">{cow.birthDate}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Date d'achat</span>
              <span className="text-gray-800">{cow.purchaseDate}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Jour de lactation actuel</span>
              <span className="text-gray-800">{cow.currentLactation} jours</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Période de lactation</span>
              <span className="text-gray-800">{cow.lactationPeriod} jours</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Consommation alimentaire</span>
              <span className="text-gray-800">{cow.feedConsumption} kg/jour</span>
            </div>
          </div>
        </div>

        {/* Santé et vaccination */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-red-600" />
            <h3 className="text-gray-800">Santé et vaccination</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">État de santé</span>
              <span className={`px-3 py-1 rounded-full text-sm ${healthColor}`}>
                {cow.health}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Dernière vaccination</span>
              <span className="text-gray-800">{cow.lastVaccination}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Prochaine vaccination</span>
              <span className="text-gray-800">{cow.nextVaccination}</span>
            </div>
          </div>
        </div>

        {/* Statistiques de production */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Milk className="w-5 h-5 text-blue-600" />
            <h3 className="text-gray-800">Statistiques de production</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Production quotidienne moyenne</span>
              <span className="text-gray-800">{cow.avgProduction} L</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Production totale de la vie</span>
              <span className="text-gray-800">{cow.totalProduction.toLocaleString()} L</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Historique de vêlage</span>
              <span className="text-gray-800">{cow.calvingHistory} vêlages</span>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-5 h-5 text-purple-600" />
            <h3 className="text-gray-800">Notes et observations</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">{cow.notes}</p>
        </div>
      </div>
    </div>
  );
}
