import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // App Name
    appName: 'MilkTrack',
    appTagline: 'Surveillance en Temps Réel',

    // Welcome Landing Page
    welcomeTitle: 'Bienvenue sur MilkTrack',
    welcomeSubtitle: 'Système Avancé de Gestion de Production Laitière',
    welcomeDescription: 'Surveillez votre ferme laitière avec précision. Suivez la production, gérez votre troupeau et optimisez vos opérations en temps réel.',
    getStarted: 'Commencer',

    // Navigation
    welcome: 'Bienvenue',
    notifications: 'Notifications',
    languageSwitch: 'Langue',
    french: 'Français',
    arabic: 'العربية',

    // Main Cards
    productionCalculating: 'Calcul de Production',
    productionCalculatingDesc: 'Surveiller et analyser la production laitière avec des graphiques et statistiques détaillés',
    dependenciesCalculation: 'Calcul des Dépenses',
    dependenciesCalculationDesc: 'Suivre l\'alimentation, les coûts vétérinaires et les dépenses opérationnelles',
    cheptelMonitoring: 'Surveillance du Cheptel',
    cheptelMonitoringDesc: 'Accéder aux dossiers individuels et au suivi de santé',
    recentPrices: 'Prix Récents du Lait',
    recentPricesDesc: 'Restez informé des prix et tendances actuels du marché',
    accessModule: 'Accéder au module',

    // Quick Stats
    totalCows: 'Total Vaches',
    todayProduction: 'Production du Jour',
    averagePerCow: 'Moyenne/Vache',
    currentPrice: 'Prix Actuel',

    // Cheptel Monitoring
    searchByMatriculation: 'Recherche par Matricule',
    browseAllIndividuals: 'Parcourir Tous les Individus',
    enterMatriculation: 'Entrer le Numéro de Matricule',
    enterMatriculationDesc: 'Tapez le numéro d\'identification unique de la vache',
    accessTechnicalFile: 'Accéder au Fichier Technique',
    availableMatriculations: 'Matricules disponibles',
    searchPlaceholder: 'Rechercher par matricule, nom ou variété...',
    age: 'Âge',
    weight: 'Poids',
    lastProduction: 'Dernière Production',
    years: 'ans',

    // Cow Details
    technicalFile: 'Fiche Technique',
    individualCowRecord: 'Dossier individuel de la vache',
    backToMonitoring: 'Retour à la Surveillance',
    basicInformation: 'Informations de Base',
    healthVaccination: 'Santé & Vaccination',
    productionStatistics: 'Statistiques de Production',
    notesObservations: 'Notes & Observations',
    birthDate: 'Date de Naissance',
    purchaseDate: 'Date d\'Achat',
    currentLactationDay: 'Jour de Lactation Actuel',
    lactationPeriod: 'Période de Lactation',
    feedConsumption: 'Consommation d\'Aliments',
    healthStatus: 'État de Santé',
    lastVaccination: 'Dernière Vaccination',
    nextVaccination: 'Prochaine Vaccination',
    avgDailyProduction: 'Production Quotidienne Moyenne',
    totalLifetimeProduction: 'Production Totale à Vie',
    calvingHistory: 'Historique de Vêlage',
    calvings: 'vêlages',
    days: 'jours',

    // Production Calculation
    completeProductionAnalysis: 'Analyse complète de production et statistiques',
    productionPerIndividual: 'Production par Individu',
    weeklyAverage: 'Moyenne Hebdomadaire',
    perCowAverage: 'Moyenne par Vache',
    monthlyTotal: 'Total Mensuel',
    fromYesterday: 'd\'hier',
    dayAverage: 'moyenne sur 7 jours',
    perDayPerCow: 'Par jour par vache',
    currentMonth: 'Mois actuel',
    productionTrends: 'Tendances de Production',
    weekly: 'Hebdomadaire',
    monthly: 'Mensuel',
    totalProduction: 'Production Totale',
    avgPerCow: 'Moy par Vache',
    monthlyProduction: 'Production Mensuelle',
    productionDistribution: 'Distribution de Production par Variété',
    cheptelComposition: 'Composition du Cheptel',
    numberOfCows: 'Nombre de Vaches',
    performanceAnalysis: 'Analyse de Performance',
    topPerformers: 'Meilleures Performances (30+ L/jour)',
    averagePerformers: 'Performances Moyennes (20-30 L/jour)',
    belowAverage: 'Sous la Moyenne (<20 L/jour)',
    cows: 'vaches',

    // Dependencies
    trackOperationalExpenses: 'Suivre et analyser les dépenses et coûts opérationnels',
    totalMonthlyCost: 'Coût Mensuel Total',
    allExpensesIncluded: 'Toutes dépenses incluses',
    feedCosts: 'Coûts d\'Alimentation',
    largestExpenseCategory: 'Plus grande catégorie de dépenses',
    veterinary: 'Vétérinaire',
    healthCare: 'Santé & soins',
    costPerCow: 'Coût par Vache',
    monthlyAverage: 'Moyenne mensuelle',
    expenseOverview: 'Aperçu des Dépenses',
    feedAnalysis: 'Analyse Alimentaire',
    veterinaryCosts: 'Coûts Vétérinaires',
    monthlyExpenseBreakdown: 'Répartition des Dépenses Mensuelles',
    feed: 'Alimentation',
    labor: 'Main-d\'œuvre',
    utilities: 'Services',
    maintenance: 'Maintenance',
    totalExpenseTrend: 'Tendance des Dépenses Totales',
    totalExpenses: 'Dépenses Totales',
    feedConsumptionCosts: 'Consommation & Coûts d\'Alimentation',
    perDay: 'par jour',
    feedCostDistribution: 'Distribution des Coûts d\'Alimentation',
    cost: 'Coût',
    veterinaryServicesBreakdown: 'Répartition des Services Vétérinaires',
    upcomingScheduledExpenses: 'Dépenses Programmées à Venir',
    dueIn: 'Dans',

    // Prices
    trackMarketPrices: 'Suivre les prix et tendances actuels du marché',
    positiveMarketTrend: 'Tendance positive du marché',
    regionalVariations: 'Variations régionales',
    thisWeek: 'cette semaine',
    weekAverage: 'moyenne hebdomadaire',
    regionalHigh: 'Maximum Régional',
    monthlyRevenue: 'Revenu Mensuel',
    basedOnCurrentPrice: 'Basé sur le prix actuel',
    priceTrends: 'Tendances des Prix',
    regionalPrices: 'Prix Régionaux',
    yearComparison: 'Comparaison Annuelle',
    priceTrendLast12Weeks: 'Tendance des Prix (12 Dernières Semaines)',
    price: 'Prix',
    productionVolumeVsPrice: 'Volume de Production vs Prix',
    volume: 'Volume',
    regionalPriceComparison: 'Comparaison des Prix Régionaux',
    yearOverYearComparison: 'Comparaison d\'une Année sur l\'Autre',
    lastYear: 'Année Dernière',
    thisYear: 'Cette Année',
    averageIncrease: 'Augmentation Moyenne',
    yearOverYearGrowth: 'Croissance annuelle',
    revenueImpact: 'Impact sur les Revenus',
    monthlyIncrease: 'Augmentation mensuelle',
    bestMonth: 'Meilleur Mois',
    peakPricingPeriod: 'Période de prix maximaux',
    marketInsights: 'Aperçus du Marché',
  },

  ar: {
    // App Name
    appName: 'ميلك تراك',
    appTagline: 'المراقبة في الوقت الفعلي',

    // Welcome Landing Page
    welcomeTitle: 'مرحباً بك في ميلك تراك',
    welcomeSubtitle: 'نظام متقدم لإدارة إنتاج الحليب',
    welcomeDescription: 'راقب مزرعة الألبان الخاصة بك بدقة. تتبع الإنتاج وإدارة القطيع وتحسين العمليات في الوقت الفعلي.',
    getStarted: 'ابدأ الآن',

    // Navigation
    welcome: 'أهلاً وسهلاً',
    notifications: 'الإشعارات',
    languageSwitch: 'اللغة',
    french: 'الفرنسية',
    arabic: 'العربية',

    // Main Cards
    productionCalculating: 'حساب الإنتاج',
    productionCalculatingDesc: 'مراقبة وتحليل إنتاج الحليب بمخططات وإحصائيات مفصلة',
    dependenciesCalculation: 'حساب التبعيات',
    dependenciesCalculationDesc: 'تتبع تكاليف العلف والبيطرة والمصاريف التشغيلية',
    cheptelMonitoring: 'مراقبة القطيع',
    cheptelMonitoringDesc: 'الوصول إلى سجلات الأبقار الفردية وتتبع الصحة',
    recentPrices: 'الأسعار الحديثة للحليب',
    recentPricesDesc: 'ابق على اطلاع بأسعار واتجاهات السوق الحالية',
    accessModule: 'الوصول إلى الوحدة',

    // Quick Stats
    totalCows: 'إجمالي الأبقار',
    todayProduction: 'إنتاج اليوم',
    averagePerCow: 'المتوسط/بقرة',
    currentPrice: 'السعر الحالي',

    // Cheptel Monitoring
    searchByMatriculation: 'البحث بالرقم التسلسلي',
    browseAllIndividuals: 'تصفح جميع الأفراد',
    enterMatriculation: 'أدخل الرقم التسلسلي',
    enterMatriculationDesc: 'اكتب رقم التعريف الفريد للبقرة',
    accessTechnicalFile: 'الوصول إلى الملف التقني',
    availableMatriculations: 'الأرقام التسلسلية المتاحة',
    searchPlaceholder: 'البحث بالرقم التسلسلي أو الاسم أو النوع...',
    age: 'العمر',
    weight: 'الوزن',
    lastProduction: 'آخر إنتاج',
    years: 'سنوات',

    // Cow Details
    technicalFile: 'الملف التقني',
    individualCowRecord: 'سجل البقرة الفردي',
    backToMonitoring: 'العودة إلى المراقبة',
    basicInformation: 'المعلومات الأساسية',
    healthVaccination: 'الصحة والتطعيم',
    productionStatistics: 'إحصائيات الإنتاج',
    notesObservations: 'الملاحظات والمشاهدات',
    birthDate: 'تاريخ الميلاد',
    purchaseDate: 'تاريخ الشراء',
    currentLactationDay: 'يوم الإرضاع الحالي',
    lactationPeriod: 'فترة الإرضاع',
    feedConsumption: 'استهلاك العلف',
    healthStatus: 'الحالة الصحية',
    lastVaccination: 'آخر تطعيم',
    nextVaccination: 'التطعيم القادم',
    avgDailyProduction: 'متوسط الإنتاج اليومي',
    totalLifetimeProduction: 'إجمالي الإنتاج مدى الحياة',
    calvingHistory: 'تاريخ الولادة',
    calvings: 'ولادات',
    days: 'أيام',

    // Production Calculation
    completeProductionAnalysis: 'تحليل شامل للإنتاج والإحصائيات',
    productionPerIndividual: 'الإنتاج لكل فرد',
    weeklyAverage: 'المتوسط الأسبوعي',
    perCowAverage: 'المتوسط لكل بقرة',
    monthlyTotal: 'الإجمالي الشهري',
    fromYesterday: 'من الأمس',
    dayAverage: 'متوسط 7 أيام',
    perDayPerCow: 'في اليوم لكل بقرة',
    currentMonth: 'الشهر الحالي',
    productionTrends: 'اتجاهات الإنتاج',
    weekly: 'أسبوعي',
    monthly: 'شهري',
    totalProduction: 'الإنتاج الإجمالي',
    avgPerCow: 'المتوسط لكل بقرة',
    monthlyProduction: 'الإنتاج الشهري',
    productionDistribution: 'توزيع الإنتاج حسب النوع',
    cheptelComposition: 'تكوين القطيع',
    numberOfCows: 'عدد الأبقار',
    performanceAnalysis: 'تحليل الأداء',
    topPerformers: 'الأداء الأفضل (30+ لتر/يوم)',
    averagePerformers: 'الأداء المتوسط (20-30 لتر/يوم)',
    belowAverage: 'أقل من المتوسط (<20 لتر/يوم)',
    cows: 'أبقار',

    // Dependencies
    trackOperationalExpenses: 'تتبع وتحليل المصاريف والتكاليف التشغيلية',
    totalMonthlyCost: 'التكلفة الشهرية الإجمالية',
    allExpensesIncluded: 'جميع النفقات مشمولة',
    feedCosts: 'تكاليف العلف',
    largestExpenseCategory: 'أكبر فئة نفقات',
    veterinary: 'البيطرة',
    healthCare: 'الصحة والرعاية',
    costPerCow: 'التكلفة لكل بقرة',
    monthlyAverage: 'المتوسط الشهري',
    expenseOverview: 'نظرة عامة على النفقات',
    feedAnalysis: 'تحليل العلف',
    veterinaryCosts: 'تكاليف البيطرة',
    monthlyExpenseBreakdown: 'تفصيل النفقات الشهرية',
    feed: 'العلف',
    labor: 'العمالة',
    utilities: 'المرافق',
    maintenance: 'الصيانة',
    totalExpenseTrend: 'اتجاه النفقات الإجمالية',
    totalExpenses: 'النفقات الإجمالية',
    feedConsumptionCosts: 'استهلاك وتكاليف العلف',
    perDay: 'في اليوم',
    feedCostDistribution: 'توزيع تكاليف العلف',
    cost: 'التكلفة',
    veterinaryServicesBreakdown: 'تفصيل الخدمات البيطرية',
    upcomingScheduledExpenses: 'النفقات المجدولة القادمة',
    dueIn: 'خلال',

    // Prices
    trackMarketPrices: 'تتبع أسعار واتجاهات السوق الحالية',
    positiveMarketTrend: 'اتجاه السوق الإيجابي',
    regionalVariations: 'الاختلافات الإقليمية',
    thisWeek: 'هذا الأسبوع',
    weekAverage: 'متوسط الأسبوع',
    regionalHigh: 'أعلى سعر إقليمي',
    monthlyRevenue: 'الإيرادات الشهرية',
    basedOnCurrentPrice: 'بناءً على السعر الحالي',
    priceTrends: 'اتجاهات الأسعار',
    regionalPrices: 'الأسعار الإقليمية',
    yearComparison: 'مقارنة سنوية',
    priceTrendLast12Weeks: 'اتجاه السعر (آخر 12 أسبوع)',
    price: 'السعر',
    productionVolumeVsPrice: 'حجم الإنتاج مقابل السعر',
    volume: 'الحجم',
    regionalPriceComparison: 'مقارنة الأسعار الإقليمية',
    yearOverYearComparison: 'المقارنة من سنة إلى أخرى',
    lastYear: 'السنة الماضية',
    thisYear: 'هذه السنة',
    averageIncrease: 'متوسط الزيادة',
    yearOverYearGrowth: 'النمو السنوي',
    revenueImpact: 'تأثير الإيرادات',
    monthlyIncrease: 'الزيادة الشهرية',
    bestMonth: 'أفضل شهر',
    peakPricingPeriod: 'فترة ذروة الأسعار',
    marketInsights: 'رؤى السوق',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default to French, NO English
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
