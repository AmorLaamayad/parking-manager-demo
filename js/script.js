// ترجمة المحتوى
const translations = {
    fr: {
        // Navigation
        nav_accueil: "Accueil",
        nav_features: "Fonctionnalités",
        nav_hierarchy: "Hiérarchie",
        nav_platform: "Plateforme",
        nav_download: "Télécharger",
        
        // Hero
        hero_title: "Gestion <span class='highlight'>intelligente</span> des parkings",
        hero_desc: "Solution complète pour la gestion des parkings publics et privés. Application mobile pour les agents + Plateforme web pour les municipalités et investisseurs.",
        hero_btn_apk: "Télécharger l'APK",
        hero_btn_platform: "Découvrir la plateforme",
        hero_stat_features: "Fonctionnalités",
        hero_stat_wilayas: "Wilayas",
        hero_stat_available: "Disponible",
        
        // Features
        features_title: "Fonctionnalités de l'application",
        features_subtitle: "Une application mobile puissante pour les agents de parking",
        feature_qr: "Scan QR Code",
        feature_qr_desc: "Sortie rapide par scan du QR code sur le ticket",
        feature_plate: "Scan plaque",
        feature_plate_desc: "Reconnaissance automatique des plaques d'immatriculation",
        feature_print: "Impression Bluetooth",
        feature_print_desc: "Impression des tickets et reçus sur imprimante thermique",
        feature_calc: "Calcul automatique",
        feature_calc_desc: "Calcul du montant selon la durée de stationnement",
        feature_report: "Rapports quotidiens",
        feature_report_desc: "Statistiques détaillées et impression",
        feature_map: "Géolocalisation",
        feature_map_desc: "Affichage du parking sur Google Maps",
        
        // Hierarchy
        hierarchy_title: "Hiérarchie administrative",
        hierarchy_subtitle: "Une structure claire pour la gestion des parkings à l'échelle nationale",
        level_region: "الإقليم",
        level_wilaya: "الولاية",
        level_daira: "الدائرة",
        level_commune: "البلدية",
        level_space: "مساحة الموقف",
        level_contract: "عقد كراء",
        level_investor: "مستثمر",
        level_agent: "عامل",
        
        // Platform
        platform_title: "Plateforme web centralisée",
        platform_subtitle: "Une solution pour tous les acteurs",
        platform_commune: "Municipalité",
        platform_wilaya: "Wilaya / Daira",
        platform_investor: "Investisseur",
        platform_admin: "Super Admin",
        commune_feature_1: "Ajouter des espaces de parking",
        commune_feature_2: "Gérer les appels d'offres",
        commune_feature_3: "Suivre les contrats",
        commune_feature_4: "Percevoir les redevances",
        wilaya_feature_1: "Valider les espaces",
        wilaya_feature_2: "Superviser les municipalités",
        wilaya_feature_3: "Rapports régionaux",
        investor_feature_1: "Postuler pour les contrats",
        investor_feature_2: "Gérer ses parkings",
        investor_feature_3: "Recruter des agents",
        investor_feature_4: "Consulter les rapports",
        admin_feature_1: "Gérer tous les utilisateurs",
        admin_feature_2: "Superviser tout le système",
        admin_feature_3: "Rapports nationaux",
        admin_feature_4: "Configurer les paramètres",
        
        // Access
        access_title: "Accès aux plateformes",
        access_subtitle: "Cliquez pour découvrir les interfaces démo",
        access_region: "Région",
        access_region_desc: "Superviser toutes les wilayas",
        access_wilaya: "Wilaya / Daïra",
        access_wilaya_desc: "Approuver les espaces, superviser",
        access_commune: "Municipalité",
        access_commune_desc: "Gérer les espaces, contrats et investisseurs",
        access_investor: "Investisseur",
        access_investor_desc: "Gérer vos parkings, agents et revenus",
        access_admin: "Super Admin",
        access_admin_desc: "Administration complète de la plateforme",
        
        // Download
        download_title: "Téléchargez l'application",
        download_desc: "Application Android pour les agents de parking",
        download_version: "Version: 1.0",
        download_size: "Taille: 19.5 MB",
        download_android: "Android 7.0+",
        download_btn: "Télécharger APK",
        demo_credentials: "Identifiants de démo :",
        
        // Footer
        footer_home: "Accueil",
        footer_features: "Fonctionnalités",
        footer_hierarchy: "Hiérarchie",
        footer_platform: "Plateforme",
        footer_copyright: "Parking Manager - Solution de gestion de parkings",

        // فرنسي
        gallery_title: "Captures d'écran de l'application",
        gallery_subtitle: "Découvrez l'interface de l'application mobile",
        gallery_login: "Écran de connexion",
        gallery_dashboard: "Tableau de bord",
        gallery_checkin: "Entrée véhicule",
        gallery_checkout: "Sortie véhicule",
        gallery_qrcode: "Scan QR Code",
        gallery_report: "Rapport quotidien",
        gallery_printer: "Paramètres de l'imprimante"
    },
    ar: {
        nav_accueil: "الرئيسية",
        nav_features: "الميزات",
        nav_hierarchy: "التسلسل الإداري",
        nav_platform: "المنصة",
        nav_download: "تحميل",
        
        hero_title: "إدارة <span class='highlight'>ذكية</span> للمواقف",
        hero_desc: "حل متكامل لإدارة مواقف السيارات العامة والخاصة. تطبيق جوال للعمال + منصة ويب للبلديات والمستثمرين.",
        hero_btn_apk: "تحميل التطبيق",
        hero_btn_platform: "اكتشف المنصة",
        hero_stat_features: "ميزة",
        hero_stat_wilayas: "ولاية",
        hero_stat_available: "متاحة",
        
        features_title: "ميزات التطبيق",
        features_subtitle: "تطبيق جوال قوي لعمال مواقف السيارات",
        feature_qr: "مسح رمز QR",
        feature_qr_desc: "خروج سريع بمسح رمز QR من التذكرة",
        feature_plate: "مسح اللوحة",
        feature_plate_desc: "التعرف التلقائي على لوحات الترقيم",
        feature_print: "طباعة بلوتوث",
        feature_print_desc: "طباعة التذاكر والإيصالات على طابعة حرارية",
        feature_calc: "حساب تلقائي",
        feature_calc_desc: "حساب المبلغ حسب مدة الوقوف",
        feature_report: "تقارير يومية",
        feature_report_desc: "إحصائيات مفصلة وقابلة للطباعة",
        feature_map: "تحديد الموقع",
        feature_map_desc: "عرض الموقف على خرائط Google",
        
        hierarchy_title: "التسلسل الإداري",
        hierarchy_subtitle: "هيكل واضح لإدارة مواقف السيارات على المستوى الوطني",
        level_region: "الإقليم",
        level_wilaya: "الولاية",
        level_daira: "الدائرة",
        level_commune: "البلدية",
        level_space: "مساحة الموقف",
        level_contract: "عقد كراء",
        level_investor: "مستثمر",
        level_agent: "عامل",
        
        platform_title: "منصة ويب مركزية",
        platform_subtitle: "حل لجميع الأطراف",
        platform_commune: "البلدية",
        platform_wilaya: "الولاية / الدائرة",
        platform_investor: "المستثمر",
        platform_admin: "المدير العام",
        commune_feature_1: "إضافة مساحات المواقف",
        commune_feature_2: "إدارة طلبات العروض",
        commune_feature_3: "متابعة العقود",
        commune_feature_4: "تحصيل الإتاوات",
        wilaya_feature_1: "الموافقة على المساحات",
        wilaya_feature_2: "الإشراف على البلديات",
        wilaya_feature_3: "تقارير جهوية",
        investor_feature_1: "التقدم للعقود",
        investor_feature_2: "إدارة مواقفه",
        investor_feature_3: "توظيف عمال",
        investor_feature_4: "اطلاع على التقارير",
        admin_feature_1: "إدارة جميع المستخدمين",
        admin_feature_2: "الإشراف على النظام",
        admin_feature_3: "تقارير وطنية",
        admin_feature_4: "إعدادات النظام",
        
        access_title: "الوصول إلى المنصات",
        access_subtitle: "انقر لاكتشاف واجهات العرض",
        access_region: "الإقليم",
        access_region_desc: "الإشراف على جميع الولايات",
        access_wilaya: "الولاية / الدائرة",
        access_wilaya_desc: "الموافقة على المساحات والإشراف",
        access_commune: "البلدية",
        access_commune_desc: "إدارة المساحات والعقود والمستثمرين",
        access_investor: "المستثمر",
        access_investor_desc: "إدارة مواقفك وعمالك وإيراداتك",
        access_admin: "المدير العام",
        access_admin_desc: "الإدارة الكاملة للمنصة",
        
        download_title: "حمّل التطبيق",
        download_desc: "تطبيق أندرويد لعمال مواقف السيارات",
        download_version: "الإصدار: 1.0",
        download_size: "الحجم: 19.5 ميجابايت",
        download_android: "أندرويد 7.0+",
        download_btn: "تحميل APK",
        demo_credentials: "بيانات الدخول التجريبية:",
        
        footer_home: "الرئيسية",
        footer_features: "الميزات",
        footer_hierarchy: "التسلسل الإداري",
        footer_platform: "المنصة",
        footer_copyright: "مدير المواقف - حل إدارة مواقف السيارات",

        // عربي
        gallery_title: "لقطات شاشة التطبيق",
        gallery_subtitle: "اكتشف واجهة التطبيق",
        gallery_login: "شاشة تسجيل الدخول",
        gallery_dashboard: "لوحة التحكم",
        gallery_checkin: "إدخال السيارة",
        gallery_checkout: "إخراج السيارة",
        gallery_qrcode: "مسح QR Code",
        gallery_report: "التقرير اليومي",
        gallery_printer: "إعدادات الطابعة"
    },
    en: {
        nav_accueil: "Home",
        nav_features: "Features",
        nav_hierarchy: "Hierarchy",
        nav_platform: "Platform",
        nav_download: "Download",
        
        hero_title: "<span class='highlight'>Smart</span> Parking Management",
        hero_desc: "Complete solution for public and private parking management. Mobile app for agents + Web platform for municipalities and investors.",
        hero_btn_apk: "Download APK",
        hero_btn_platform: "Discover Platform",
        hero_stat_features: "Features",
        hero_stat_wilayas: "Provinces",
        hero_stat_available: "Available",
        
        features_title: "App Features",
        features_subtitle: "Powerful mobile app for parking agents",
        feature_qr: "QR Code Scan",
        feature_qr_desc: "Fast exit by scanning QR code on ticket",
        feature_plate: "License Plate Scan",
        feature_plate_desc: "Automatic license plate recognition",
        feature_print: "Bluetooth Printing",
        feature_print_desc: "Print tickets and receipts on thermal printer",
        feature_calc: "Automatic Calculation",
        feature_calc_desc: "Calculate amount based on parking duration",
        feature_report: "Daily Reports",
        feature_report_desc: "Detailed printable statistics",
        feature_map: "Geolocation",
        feature_map_desc: "Display parking location on Google Maps",
        
        hierarchy_title: "Administrative Hierarchy",
        hierarchy_subtitle: "Clear structure for nationwide parking management",
        level_region: "Region",
        level_wilaya: "Province",
        level_daira: "District",
        level_commune: "Municipality",
        level_space: "Parking Space",
        level_contract: "Rental Contract",
        level_investor: "Investor",
        level_agent: "Agent",
        
        platform_title: "Centralized Web Platform",
        platform_subtitle: "One solution for all stakeholders",
        platform_commune: "Municipality",
        platform_wilaya: "Province / District",
        platform_investor: "Investor",
        platform_admin: "Super Admin",
        commune_feature_1: "Add parking spaces",
        commune_feature_2: "Manage tenders",
        commune_feature_3: "Track contracts",
        commune_feature_4: "Collect fees",
        wilaya_feature_1: "Validate spaces",
        wilaya_feature_2: "Supervise municipalities",
        wilaya_feature_3: "Regional reports",
        investor_feature_1: "Apply for contracts",
        investor_feature_2: "Manage parking lots",
        investor_feature_3: "Recruit agents",
        investor_feature_4: "View reports",
        admin_feature_1: "Manage all users",
        admin_feature_2: "Supervise entire system",
        admin_feature_3: "National reports",
        admin_feature_4: "System settings",
        
        access_title: "Platform Access",
        access_subtitle: "Click to discover demo interfaces",
        access_region: "Region",
        access_region_desc: "Supervise all provinces",
        access_wilaya: "Province / District",
        access_wilaya_desc: "Approve spaces, supervise",
        access_commune: "Municipality",
        access_commune_desc: "Manage spaces, contracts and investors",
        access_investor: "Investor",
        access_investor_desc: "Manage parking lots, agents and revenues",
        access_admin: "Super Admin",
        access_admin_desc: "Complete platform administration",
        
        download_title: "Download the App",
        download_desc: "Android app for parking agents",
        download_version: "Version: 1.0",
        download_size: "Size: 19.5 MB",
        download_android: "Android 7.0+",
        download_btn: "Download APK",
        demo_credentials: "Demo credentials:",
        
        footer_home: "Home",
        footer_features: "Features",
        footer_hierarchy: "Hierarchy",
        footer_platform: "Platform",
        footer_copyright: "Parking Manager - Parking Management Solution",

        // إنجليزي
        gallery_title: "App Screenshots",
        gallery_subtitle: "Discover the mobile app interface",
        gallery_login: "Login screen",
        gallery_dashboard: "Dashboard",
        gallery_checkin: "Check-In",
        gallery_checkout: "Check-Out",
        gallery_qrcode: "QR Code Scan",
        gallery_report: "Daily Report",
        gallery_printer: "Printer Settings"
    }
};

let currentLang = 'fr';

function changeLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    // Mettre à jour la direction du texte pour l'arabe
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
        document.body.style.fontFamily = "'Cairo', 'Tahoma', sans-serif";
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', lang === 'fr' ? 'fr' : 'en');
        document.body.style.fontFamily = "'Cairo', 'Segoe UI', sans-serif";
    }
    
    // Mettre à jour les boutons actifs
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Mettre à jour tous les éléments avec data-key
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (t[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = t[key];
            } else if (element.innerHTML.includes('<span')) {
                // Pour les titres avec spans
                const spanContent = element.querySelector('span');
                if (spanContent && key === 'hero_title') {
                    element.innerHTML = t[key];
                } else {
                    element.textContent = t[key];
                }
            } else {
                element.textContent = t[key];
            }
        }
    });
}

// Menu mobile toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Fermer le menu mobile lors du clic sur un lien
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .platform-card, .level, .access-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Téléchargement APK
const downloadBtn = document.getElementById('downloadApkBtn');
if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Le fichier APK sera disponible prochainement.\nContactez l\'administrateur pour obtenir l\'application.');
    });
}

// Écouteurs pour les boutons de langue
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        changeLanguage(btn.dataset.lang);
    });
});

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('fr');
});