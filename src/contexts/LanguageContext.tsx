import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // App Name
    appName: 'MilkTrack',
    appTagline: 'Real-time Monitoring',
    
    // Welcome Landing Page
    welcomeTitle: 'Welcome to MilkTrack',
    welcomeSubtitle: 'Advanced Milk Production Management System',
    welcomeDescription: 'Monitor your dairy farm with precision. Track production, manage your herd, and optimize your operations in real-time.',
    getStarted: 'Get Started',
    
    // Navigation
    welcome: 'Welcome',
    notifications: 'Notifications',
    
    // Main Cards
    productionCalculating: 'Production Calculating',
    productionCalculatingDesc: 'Monitor and analyze milk production with detailed charts and statistics',
    dependenciesCalculation: 'Dependencies Calculation',
    dependenciesCalculationDesc: 'Track feed, veterinary costs, and operational expenses',
    cheptelMonitoring: 'Cheptel Monitoring',
    cheptelMonitoringDesc: 'Access individual cow records and health tracking',
    recentPrices: 'Recent Prices of Milk',
    recentPricesDesc: 'Stay updated with current market prices and trends',
    accessModule: 'Access module',
    
    // Quick Stats
    totalCows: 'Total Cows',
    todayProduction: 'Today\'s Production',
    averagePerCow: 'Average/Cow',
    currentPrice: 'Current Price',
    
    // Cheptel Monitoring
    searchByMatriculation: 'Search by Matriculation',
    browseAllIndividuals: 'Browse All Individuals',
    enterMatriculation: 'Enter Matriculation Number',
    enterMatriculationDesc: 'Type the cow\'s unique identification number',
    accessTechnicalFile: 'Access Technical File',
    availableMatriculations: 'Available matriculations',
    searchPlaceholder: 'Search by matriculation, name, or variety...',
    age: 'Age',
    weight: 'Weight',
    lastProduction: 'Last Production',
    years: 'years',
    
    // Cow Details
    technicalFile: 'Technical File',
    individualCowRecord: 'Individual cow record',
    backToMonitoring: 'Back to Monitoring',
    basicInformation: 'Basic Information',
    healthVaccination: 'Health & Vaccination',
    productionStatistics: 'Production Statistics',
    notesObservations: 'Notes & Observations',
    birthDate: 'Birth Date',
    purchaseDate: 'Purchase Date',
    currentLactationDay: 'Current Lactation Day',
    lactationPeriod: 'Lactation Period',
    feedConsumption: 'Feed Consumption',
    healthStatus: 'Health Status',
    lastVaccination: 'Last Vaccination',
    nextVaccination: 'Next Vaccination',
    avgDailyProduction: 'Average Daily Production',
    totalLifetimeProduction: 'Total Lifetime Production',
    calvingHistory: 'Calving History',
    calvings: 'calvings',
    days: 'days',
    
    // Production Calculation
    completeProductionAnalysis: 'Complete production analysis and statistics',
    productionPerIndividual: 'Production per Individual',
    weeklyAverage: 'Weekly Average',
    perCowAverage: 'Per Cow Average',
    monthlyTotal: 'Monthly Total',
    fromYesterday: 'from yesterday',
    dayAverage: 'day average',
    perDayPerCow: 'Per day per cow',
    currentMonth: 'Current month',
    productionTrends: 'Production Trends',
    weekly: 'Weekly',
    monthly: 'Monthly',
    totalProduction: 'Total Production',
    avgPerCow: 'Avg per Cow',
    monthlyProduction: 'Monthly Production',
    productionDistribution: 'Production Distribution by Variety',
    cheptelComposition: 'Cheptel Composition',
    numberOfCows: 'Number of Cows',
    performanceAnalysis: 'Performance Analysis',
    topPerformers: 'Top Performers (30+ L/day)',
    averagePerformers: 'Average Performers (20-30 L/day)',
    belowAverage: 'Below Average (<20 L/day)',
    cows: 'cows',
    
    // Dependencies
    trackOperationalExpenses: 'Track and analyze operational expenses and costs',
    totalMonthlyCost: 'Total Monthly Cost',
    allExpensesIncluded: 'All expenses included',
    feedCosts: 'Feed Costs',
    largestExpenseCategory: 'Largest expense category',
    veterinary: 'Veterinary',
    healthCare: 'Health & care',
    costPerCow: 'Cost per Cow',
    monthlyAverage: 'Monthly average',
    expenseOverview: 'Expense Overview',
    feedAnalysis: 'Feed Analysis',
    veterinaryCosts: 'Veterinary Costs',
    monthlyExpenseBreakdown: 'Monthly Expense Breakdown',
    feed: 'Feed',
    labor: 'Labor',
    utilities: 'Utilities',
    maintenance: 'Maintenance',
    totalExpenseTrend: 'Total Expense Trend',
    totalExpenses: 'Total Expenses',
    feedConsumptionCosts: 'Feed Consumption & Costs',
    perDay: 'per day',
    feedCostDistribution: 'Feed Cost Distribution',
    cost: 'Cost',
    veterinaryServicesBreakdown: 'Veterinary Services Breakdown',
    upcomingScheduledExpenses: 'Upcoming Scheduled Expenses',
    dueIn: 'Due in',
    
    // Prices
    trackMarketPrices: 'Track current market prices and trends',
    positiveMarketTrend: 'Positive market trend',
    regionalVariations: 'Regional variations',
    thisWeek: 'this week',
    weekAverage: 'week average',
    regionalHigh: 'Regional High',
    monthlyRevenue: 'Monthly Revenue',
    basedOnCurrentPrice: 'Based on current price',
    priceTrends: 'Price Trends',
    regionalPrices: 'Regional Prices',
    yearComparison: 'Year Comparison',
    priceTrendLast12Weeks: 'Price Trend (Last 12 Weeks)',
    price: 'Price',
    productionVolumeVsPrice: 'Production Volume vs Price',
    volume: 'Volume',
    regionalPriceComparison: 'Regional Price Comparison',
    yearOverYearComparison: 'Year-over-Year Price Comparison',
    lastYear: 'Last Year',
    thisYear: 'This Year',
    averageIncrease: 'Average Increase',
    yearOverYearGrowth: 'Year-over-year growth',
    revenueImpact: 'Revenue Impact',
    monthlyIncrease: 'Monthly increase',
    bestMonth: 'Best Month',
    peakPricingPeriod: 'Peak pricing period',
    marketInsights: 'Market Insights',
  },
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
    
    // Main Cards
    productionCalculating: 'Calcul de Production',
    productionCalculatingDesc: 'Surveiller et analyser la production laitière avec des graphiques et statistiques détaillés',
    dependenciesCalculation: 'Calcul des Dépendances',
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
    appName: 'MilkTrack',
    appTagline: 'المراقبة في الوقت الفعلي',
    
    // Welcome Landing Page
    welcomeTitle: 'مرحباً بك في MilkTrack',
    welcomeSubtitle: 'نظام متقدم لإدارة إنتاج الحليب',
    welcomeDescription: 'راقب مزرعة الألبان الخاصة بك بدقة. تتبع الإنتاج وإدارة القطيع وتحسين العمليات في الوقت الفعلي.',
    getStarted: 'ابدأ الآن',
    
    // Navigation
    welcome: 'الترحيب',
    notifications: 'الإشعارات',
    
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
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
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
