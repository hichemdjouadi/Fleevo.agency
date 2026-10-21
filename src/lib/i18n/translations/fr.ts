import { TranslationDictionary } from "../types";

export const fr: TranslationDictionary = {
  locale: "fr",
  direction: "ltr",
  nav: {
    services: "Services",
    projects: "Projets",
    about: "À Propos",
    contact: "Contact",
    homeAria: "Accueil Fleevy",
    openMenu: "Ouvrir le menu de navigation",
    closeMenu: "Fermer le menu de navigation",
    hqNotice: "QG Alger · Infrastructure Distante Mondiale",
    switchLanguage: "Langue"
  },
  footer: {
    mainStudio: "Studio Principal",
    algiersHq: "QG Alger",
    algiersLocation: "Alger, Algérie",
    globalDelivery: "Déploiement Mondial",
    worldwide: "International",
    remoteInfra: "Ingénierie & Infrastructure à Distance",
    tagline: "Systèmes d'Acquisition Client & Infrastructure Numérique",
    whatsappAria: "Ligne Directe WhatsApp",
    emailAria: "Envoyer un e-mail à Fleevy",
    contactAria: "Contacter Fleevy"
  },
  contactForm: {
    successTitle: "Demande Reçue.",
    successDesc: "Merci. Nous avons bien reçu les détails de votre projet et nous vous répondrons sous 24 heures.",
    needLabel: "01 // De quoi avez-vous besoin ?",
    timelineLabel: "02 // Délais Souhaités",
    detailsLabel: "03 // Vos Coordonnées",
    nameLabel: "Votre Nom",
    namePlaceholder: "Nom complet",
    companyLabel: "Entreprise",
    companyPlaceholder: "Nom de l'entreprise ou de la marque",
    emailLabel: "Adresse E-mail",
    emailPlaceholder: "nom@entreprise.com",
    phoneLabel: "Numéro Téléphone / WhatsApp",
    phonePlaceholder: "+213 ... ou format international",
    projectScopeLabel: "Périmètre du Projet & Objectifs",
    projectScopePlaceholder: "Décrivez brièvement votre offre, vos goulots d'étranglement ou votre projet...",
    submitBtn: "Envoyer la Demande",
    submittingBtn: "Envoi en cours...",
    securityBadge: "Revue Confidentielle · Accès Direct Ingénieur · Réponse sous 24h",
    errorRequired: "Veuillez renseigner votre nom, entreprise, e-mail et numéro de téléphone.",
    errorInterests: "Veuillez sélectionner au moins une option.",
    services: {
      website: "Site Web / Landing Page",
      ecommerce: "Boutique E-Commerce",
      crm: "CRM Sur Mesure / App Web",
      ads: "Publicités Meta & Scripts Vidéo",
      audit: "Audit Conversion & Contenu",
      aiAgent: "Agent IA Spécialisé"
    },
    timelines: {
      rightAway: "Immédiatement",
      twoToFourWeeks: "Sous 2 à 4 semaines",
      planningAhead: "Planification à venir"
    }
  },
  onboardingWizard: {
    badge: "Assistant de Cadrage Immédiat",
    stepPrefix: "Étape",
    stepOf: "sur 3",
    blueprintReady: "Plan d'Architecture Prêt",
    step1: {
      title: "Quelle infrastructure numérique correspond à votre entreprise ?",
      subhead: "Sélectionnez le système prioritaire pour moderniser vos opérations.",
      options: [
        {
          id: "ecom",
          title: "01. Moteur E-Commerce Direct",
          desc: "Boutique ultra-rapide avec synchronisation transporteurs (Yalidine/ZR) et commande en 1 clic."
        },
        {
          id: "lead",
          title: "02. Tunnel d'Acquisition Client",
          desc: "Pages de conversion haute performance qualifiant les prospects vers un rendez-vous confirmé."
        },
        {
          id: "crm",
          title: "03. Portail CRM & Ops Sur Mesure",
          desc: "Portails web internes pour remplacer les tableurs désorganisés et les échanges manuels WhatsApp."
        },
        {
          id: "ads",
          title: "04. Stratégie & Publicités Meta",
          desc: "Créatifs direct-response et campagnes ciblées pilotées par un tracking rigoureux."
        }
      ]
    },
    step2: {
      title: "Quel est votre principal frein de croissance aujourd'hui ?",
      subhead: "Identifiez le point de friction majeur dans vos opérations.",
      backBtn: "Revenir au choix du système",
      options: [
        {
          id: "dm_chaos",
          title: "Commandes perdues dans les messages",
          desc: "Les acheteurs abandonnent en attendant des heures une confirmation manuelle sur Instagram/WhatsApp."
        },
        {
          id: "marketplace_fees",
          title: "Commissions élevées des plateformes",
          desc: "Zéro donnée client directe, zéro réachat automatique, et marges réduites."
        },
        {
          id: "blind_ads",
          title: "Dépenses publicitaires à l'aveugle",
          desc: "Le budget part sans savoir quelle campagne génère réellement les ventes."
        },
        {
          id: "sheet_chaos",
          title: "Désorganisation et tableurs manuels",
          desc: "Relances manquées, erreurs de saisie et désorganisation du suivi commercial."
        }
      ]
    },
    step3: {
      title: "Quand souhaitez-vous que ce système soit opérationnel ?",
      subhead: "Permet de bloquer la bande passante technique nécessaire.",
      backBtn: "Revenir au goulot d'étranglement",
      options: [
        {
          id: "asap",
          title: "Sprint Prioritaire (< 14 jours)",
          desc: "Déploiement accéléré pour débloquer votre acquisition au plus vite.",
          badge: "Sprint",
          window: "10 à 14 Jours Ouvrés"
        },
        {
          id: "standard",
          title: "Feuille de Route Standard (3 à 5 semaines)",
          desc: "Lancement phasé avec formation de vos équipes et phase de test.",
          badge: "Planifié",
          window: "3 à 5 Semaines"
        },
        {
          id: "exploring",
          title: "Étude de faisabilité pour le trimestre prochain",
          desc: "Audit des besoins et cadrage technique sans urgence immédiate.",
          badge: "Audit",
          window: "Flexible"
        }
      ]
    },
    step4: {
      title: "Plan d'Architecture Prêt",
      subhead: "Calculé sur mesure d'après vos priorités et vos opérations.",
      cardSystemLabel: "Architecture Recommandée",
      cardWindowLabel: "Délai Estimé",
      cardChallengeLabel: "Solution au Goulot d'Étranglement",
      cardDeliverablesLabel: "Livrables Inclus",
      deliverables: [
        "Plateforme web sur mesure ultra-rapide (< 1 seconde) en Next.js & Supabase",
        "Synchronisation API avec les transporteurs algériens (Yalidine / ZR Express)",
        "Propriété intégrale du code source et de vos bases de données, 0% d'abonnement captif"
      ],
      whatsappBtn: "Envoyer le Plan à Hichem sur WhatsApp",
      resetBtn: "↺ Réinitialiser et tester une autre configuration",
      waPrefix: "Bonjour Hichem, j'ai configuré mon projet via l'assistant Fleevy :",
      waSystemLabel: "Système",
      waChallengeLabel: "Défi Majeur",
      waTimelineLabel: "Échéance",
      waClosing: "Je souhaite échanger sur le plan technique et vérifier vos disponibilités."
    }
  },
  faq: {
    title: "Questions Fréquentes",
    subtitle: "Des réponses précises sur notre méthode de conception et de déploiement.",
    items: [
      {
        question: "En quoi Fleevy diffère-t-il d'une agence classique ?",
        answer: "La plupart des agences livrent de simples sites vitrines statiques. Nous concevons des systèmes complets d'acquisition client avec qualification instantanée par bot WhatsApp et publicités Meta ciblées."
      },
      {
        question: "Comment fonctionne la qualification par bot automatisé ?",
        answer: "Dès qu'un visiteur remplit une demande ou passe commande, notre bot WhatsApp ou Telegram qualifie son besoin et transmet la fiche prospect sur votre téléphone en 30 secondes."
      },
      {
        question: "Restons-nous propriétaires du code et des données ?",
        answer: "Oui. Vous possédez l'intégralité du code source et de vos bases de données, sans abonnement captif ni dépendance logicielle."
      },
      {
        question: "Quels sont les délais moyens de livraison ?",
        answer: "La plupart de nos plateformes sont déployées en production en deux à quatre semaines, configuration des bots et tests inclus."
      },
      {
        question: "Que se passe-t-il lors de l'appel stratégique ?",
        answer: "Nous analysons votre parcours actuel, identifions où vos prospects abandonnent, et traçons un plan de déploiement technique clair."
      }
    ]
  },
  heroVisual: {
    projects: [
      {
        id: "mopizza",
        tabLabel: "Mo Pizza",
        shortLabel: "Mo Pizza",
        client: "Mo Pizza Restaurants",
        category: "Moteur de Commande Directe & Mobile",
        statusBadge: "Plateforme en Production",
        ctaText: "Voir la Plateforme en Ligne",
        ctaTextDesktop: "Voir la Plateforme en Ligne (Mo Pizza Commande Directe)",
        benefits: [
          { direction: "up", label: "0% Commission Commandes Directes" },
          { direction: "up", label: "Vitesse Mobile Moins de 800ms" }
        ]
      },
      {
        id: "adrena",
        tabLabel: "Adréna Club",
        shortLabel: "Adréna",
        client: "Adréna Club (Bab Ezzouar)",
        category: "Club Athlétique & Système d'Inscription",
        statusBadge: "Aperçu Privé · Déploiement Staging",
        ctaText: "Explorer la Plateforme",
        ctaTextDesktop: "Explorer la Plateforme (Adréna Club)",
        benefits: [
          { direction: "up", label: "Adhésion Directe WhatsApp (dès 3 000 DA)" },
          { direction: "down", label: "Désengorgement de l'Accueil" }
        ]
      },
      {
        id: "almadina",
        tabLabel: "Librairie Almadina",
        shortLabel: "Almadina",
        client: "Éditions Almadina",
        category: "Architecture Catalogue Headless",
        statusBadge: "Plateforme en Production",
        ctaText: "Voir la Plateforme en Ligne",
        ctaTextDesktop: "Voir la Plateforme en Ligne (Librairie Almadina)",
        benefits: [
          { direction: "up", label: "Recherche Instantanée par Titre & ISBN" },
          { direction: "down", label: "Zéro Perte Panier 58 Wilayas" }
        ]
      }
    ]
  },
  featuredWork: {
    projects: [
      {
        id: "mopizza",
        title: "Mo Pizza Commande Directe",
        niche: "Restauration & Accueil · Commerce Mobile Direct",
        deployment: "Commerce Mobile Direct & Triage Multilingue",
        summary: "Moteur de commande directe pour le réseau de 5 restaurants de Morad Oudia, supprimant les commissions des plateformes tierces grâce à la transmission directe par appel et WhatsApp.",
        statusBadge: "Plateforme en Production",
        benefits: [
          { direction: "up", label: "0% Commission Commandes Directes" },
          { direction: "up", label: "Commande Multilingue Instantanée" }
        ]
      },
      {
        id: "almadina",
        title: "Librairie Almadina",
        niche: "E-Commerce Headless · Édition Universitaire",
        deployment: "Catalogue Headless & Pipeline Logistique",
        summary: "Librairie en ligne ultra-rapide avec moteur de recherche instantané et paiement à la livraison sur les 58 wilayas.",
        statusBadge: "Plateforme en Production",
        benefits: [
          { direction: "up", label: "Vitesse de Recherche & Découverte" },
          { direction: "down", label: "Baisse des Abandons sur Mobile" }
        ]
      },
      {
        id: "adrena",
        title: "Adréna Club",
        niche: "Athlétisme & Combat · Réservation d'Adhésion",
        deployment: "Plateforme 2 Étages & Inscription WhatsApp",
        summary: "Plateforme d'entraînement sur deux étages à Bab Ezzouar avec plannings en temps réel, créneaux femmes dédiés et intégration directe d'adhésion via WhatsApp dès 3 000 DA/mois.",
        statusBadge: "Aperçu Privé · Déploiement Staging",
        benefits: [
          { direction: "up", label: "Adhésion Directe WhatsApp (dès 3 000 DA)" },
          { direction: "down", label: "Désengorgement des Appels Accueil" }
        ]
      },
      {
        id: "tawheed",
        title: "Librairie Tawheed & Sunnah",
        niche: "Distribution & Édition · Commerce Numérique",
        deployment: "Pipeline de Vente Mobile Zéro Latence",
        summary: "Architecture de catalogue arabe haute performance avec synchronisation transporteurs sur 69 wilayas, retrait double point de vente et vérification instantanée WhatsApp.",
        statusBadge: "Plateforme en Production",
        benefits: [
          { direction: "up", label: "Intégration Transporteurs Nationaux" },
          { direction: "down", label: "Suppression de la Saisie Manuelle" }
        ]
      }
    ]
  },
  home: {
    hero: {
      headlineStart: "Nous concevons des systèmes d'acquisition client ",
      headlineEnd: "& des infrastructures numériques.",
      subtitle: "Plateformes web ultra-rapides, boutiques mobiles et applications connectées à des bots WhatsApp instantanés et des publicités Meta ciblées.",
      ctaPrimary: "Lancer Votre Projet",
      ctaSecondary: "Explorer Nos Réalisations",
      badges: {
        speed: "Chargement Edge < 800ms",
        bot: "Qualification Bot en 30s",
        commission: "0% Commission Préservée"
      }
    },
    pillars: {
      badge: "LES DEUX PILIERS",
      headline: "Quand l'ingénierie rencontre l'acquisition client.",
      subhead: "Le code seul ne suffit pas à faire croître une entreprise. Nous associons une infrastructure technique sur mesure à une génération de demande hautement ciblée.",
      pillarOneTitle: "Infrastructure Numérique & Systèmes",
      pillarOneDesc: "Plateformes web rapides, boutiques mobiles et outils internes conçus sur mesure.",
      pillarTwoTitle: "Génération de Demande & Croissance Directe",
      pillarTwoDesc: "Campagnes publicitaires Meta, direction de scripts vidéo et optimisation de conversion.",
      pillarOneServices: [
        {
          num: "01",
          title: "Tunnels d'Acquisition & Vitrines de Marque",
          desc: "Sites de services conçus pour capter des prospects qualifiés et finaliser les échanges directement sur WhatsApp.",
          tags: ["Triage Instantané par Bot", "Réservation sans Friction"]
        },
        {
          num: "02",
          title: "Boutiques E-Commerce & Commande Directe",
          desc: "Boutiques mobiles sans commission intermédiaire avec notifications immédiates en cuisine ou en entrepôt.",
          tags: ["0% Commission", "Paiement à la Livraison 58 Wilayas"]
        },
        {
          num: "03",
          title: "Applications Web, CRM Propriétaires & Automatisation",
          desc: "Pipelines de suivi commercial légers, espaces clients et automatisations qui suppriment la saisie manuelle.",
          tags: ["CRM sur Mesure", "Automatisation Métier"]
        }
      ],
      pillarTwoServices: [
        {
          num: "01",
          title: "Stratégie Marketing Complète & Publicités Meta",
          desc: "Campagnes ciblées sur Facebook et Instagram combinées à une stratégie d'acquisition claire et des scripts vidéo percutants.",
          tags: ["Stratégie d'Acquisition", "Scripts Vidéo", "Publicités Meta"]
        },
        {
          num: "02",
          title: "Audits de Conversion & Fuites de Pipeline",
          desc: "Un diagnostic précis des points d'abandon de vos prospects et une feuille de route concrète pour accélérer vos revenus.",
          tags: ["Audit de Tunnel", "Feuille de Route"]
        },
        {
          num: "03",
          title: "Finition & Crédibilité de Marque",
          desc: "Identité visuelle soignée et gabarits publicitaires de marque inclus gratuitement dans nos projets principaux.",
          tags: ["Bonus Inclus", "Gabarits Publicitaires"]
        }
      ]
    },
    flow: {
      badge: "LA BOUCLE D'ACQUISITION",
      headline: "La boucle d'acquisition en 3 étapes.",
      subhead: "Comment transformer un trafic froid en clients payants sans friction manuelle.",
      steps: [
        {
          num: "01",
          phase: "Attirer",
          title: "Publicités & Scripts Vidéo",
          desc: "Des publicités Meta ciblées et des accroches vidéo précises attirent des acheteurs prêts à passer à l'action."
        },
        {
          num: "02",
          phase: "Convertir",
          title: "Plateformes d'Acquisition & CRM",
          desc: "Des interfaces rapides et des CRM légers qui transforment les visiteurs en commandes ou rendez-vous confirmés."
        },
        {
          num: "03",
          phase: "Conclure",
          title: "Alerte Bot en 30s",
          desc: "Des bots WhatsApp ou Telegram automatisés qualifient la demande et alertent immédiatement votre équipe."
        }
      ]
    },
    showcase: {
      headline: "Réalisations Sélectionnées",
      subhead: "De vrais systèmes conçus pour des entreprises en pleine expansion en Algérie et à l'international.",
      viewAll: "Voir Tous les Projets"
    },
    founder: {
      badge: "COLLABORATION TECHNIQUE DIRECTE",
      quote: "Chez Fleevy, vous n'échangez pas avec des chargés de clientèle intermédiaires. Vous travaillez directement avec des ingénieurs et stratèges seniors qui conçoivent et éprouvent votre système dès le premier jour.",
      founderName: "Hichem Djouadi",
      founderRole: "Fondateur & Architecte Systèmes"
    },
    ctaBanner: {
      headline: "Prêt à structurer une acquisition prévisible ?",
      subhead: "Planifiez un point technique de 20 minutes ou écrivez-nous sur WhatsApp pour un audit immédiat.",
      primaryBtn: "Envoyer Votre Projet",
      whatsappBtn: "Accès Direct WhatsApp"
    }
  },
  services: {
    hero: {
      badge: "SOLUTIONS & ARCHITECTURE",
      headline: "Une infrastructure numérique conçue pour convertir les visiteurs en clients payants.",
      subhead: "Nous bâtissons des plateformes d'acquisition sur mesure, des boutiques mobiles et des outils internes couplés à des publicités Meta ciblées et une stratégie de conversion directe."
    },
    pillarOneBadge: "PILIER 01 // INFRASTRUCTURE NUMÉRIQUE",
    pillarOneTitle: "Plateformes Web Sur Mesure & Systèmes Automatisés",
    pillarOneDesc: "Des bases techniques développées avec Next.js, PostgreSQL et des webhooks de messagerie instantanée. Zéro modèle tout fait. Zéro dépendance.",
    pillarOneItems: [
      {
        num: "01",
        title: "Tunnels d'Acquisition & Vitrines de Marque",
        badge: "Cliniques, Cabinets & Services Haut de Gamme",
        sla: "Livraison en 2–3 Semaines",
        desc: "Des plateformes à forte conversion conçues pour capter des demandes qualifiées et éliminer les relances téléphoniques interminables.",
        deliverables: [
          "Vitrine mobile Next.js ultra-rapide (chargement < 1s)",
          "Bot WhatsApp de pré-qualification et de triage",
          "Alertes de notification de prospect immédiates (< 30s)",
          "Synchronisation directe avec Google Calendar et base CRM"
        ],
        proofLabel: "Cas Adréna Club"
      },
      {
        num: "02",
        title: "Boutiques E-Commerce & Commande Directe",
        badge: "Marques D2C, Commerce & Restauration",
        sla: "Livraison en 2–3 Semaines",
        desc: "Des boutiques digitales dédiées qui suppriment les commissions de 15 à 30 % des agrégateurs, calculent la livraison 58 wilayas et acheminent les commandes vers WhatsApp.",
        deliverables: [
          "Boutique mobile Next.js optimisée pour les réseaux 4G",
          "Tunnel de commande avec paiement à la livraison 58 Wilayas",
          "Bot d'expédition instantanée sur WhatsApp (< 30s)",
          "0% de commission · Propriété totale du code et des données"
        ],
        proofLabel: "Cas Tawheed & Mo Pizza"
      },
      {
        num: "03",
        title: "Applications Web, CRM Propriétaires & Automatisation",
        badge: "Opérations Multi-Agences & Logistique",
        sla: "Livraison en 3–4 Semaines",
        desc: "Des pipelines de suivi commercial sur mesure, des portails d'expédition et des automatisations qui remplacent les feuilles Excel chaotiques.",
        deliverables: [
          "CRM visuel et intuitif de suivi des opportunités",
          "Alertes d'inactivité pour éviter que les prospects ne refroidissent",
          "Webhooks de synchronisation automatique avec les transporteurs",
          "Accès collaborateurs par rôles avec souveraineté des données"
        ],
        proofLabel: "Fleevy Command Center"
      }
    ],
    pillarTwoBadge: "PILIER 02 // GÉNÉRATION DE DEMANDE",
    pillarTwoTitle: "Publicités Meta Ciblées & Stratégie Directe",
    pillarTwoDesc: "Nous connectons votre infrastructure à des campagnes publicitaires rentables et des orientations vidéo précises pour générer un volume régulier de commandes.",
    pillarTwoItems: [
      {
        num: "01",
        title: "Stratégie Marketing Complète & Publicités Meta",
        badge: "Stratégie & Demande Payante",
        sla: "Mise en Place en 1–2 Semaines",
        desc: "Nous concevons votre stratégie d'acquisition de bout en bout, rédigeons des scripts vidéo percutants et gérons des publicités Facebook & Instagram calibrées pour générer des commandes WhatsApp réelles.",
        deliverables: [
          "Positionnement et stratégie d'acquisition complète",
          "Scripts vidéo à réponse directe et formules d'accroche",
          "Campagnes publicitaires ciblées sur Facebook et Instagram",
          "Configuration Pixel, API Conversions et suivi WhatsApp"
        ]
      },
      {
        num: "02",
        title: "Audits de Conversion & Fuites de Pipeline",
        badge: "Audit de Croissance",
        sla: "Restitution sous 48 Heures",
        desc: "Un diagnostic rapide en 48h de votre marketing, de vos réseaux et de votre site pour repérer exactement où vous perdez des ventes et quels contenus activer.",
        deliverables: [
          "Analyse vidéo et rapport PDF du parcours d'achat sous 48h",
          "Revue du positionnement de l'offre et des points de friction",
          "Feuille de route stratégique de contenu organique",
          "Liste priorisée d'actions rapides pour générer du revenu"
        ]
      },
      {
        num: "03",
        title: "Finition & Crédibilité de Marque",
        badge: "Bonus Inclus Gratuitement",
        sla: "Inclus avec la Réalisation",
        desc: "Une finition visuelle haut de gamme qui confère immédiatement à votre entreprise une autorité incontestable. Incluse sans surcoût avec chaque projet web.",
        deliverables: [
          "Typographie soignée et palette de couleurs cohérente",
          "Modèles graphiques pour publicités et profils sociaux",
          "Avatar personnalisé et texte d'accueil pour bot WhatsApp",
          "Finition vectorielle du logo et exports haute résolution"
        ]
      }
    ],
    comparison: {
      badge: "LA DIFFÉRENCE",
      headline: "Agences Traditionnelles vs Fleevy",
      subhead: "Pourquoi les dirigeants choisissent un partenaire d'ingénierie et d'acquisition.",
      colAgency: "Agence Traditionnelle",
      colFleevy: "Systèmes Fleevy",
      rows: [
        {
          metric: "Objectif Principal",
          agency: "Brochures décoratives et design superficiel",
          fleevy: "Génération de revenus et qualification automatisée"
        },
        {
          metric: "Socle Technique",
          agency: "WordPress surchargé ou éditeurs propriétaires fermés",
          fleevy: "Next.js sur mesure, TypeScript et PostgreSQL"
        },
        {
          metric: "Performance Mobile",
          agency: "3 à 6 secondes de chargement sur réseau 4G",
          fleevy: "Chargement en moins de 800ms à la périphérie"
        },
        {
          metric: "Gestion des Prospects",
          agency: "Formulaires statiques perdus dans les spams",
          fleevy: "Qualification immédiate en 30s par bot WhatsApp"
        },
        {
          metric: "Propriété du Code & Données",
          agency: "Abonnements d'hébergement captifs",
          fleevy: "100% de propriété client sur tous les actifs"
        }
      ]
    },
    guarantees: {
      badge: "NOTRE ENGAGEMENT",
      headline: "Garanties d'Ingénierie",
      items: [
        {
          title: "Délais & Livrables Fermes",
          desc: "Chaque étape est fixée contractuellement avec des fenêtres de livraison précises. Pas de dérive, pas d'allers-retours interminables."
        },
        {
          title: "Zéro Dépendance Plateforme",
          desc: "Le code source, les identifiants de base de données et les comptes publicitaires restent votre propriété exclusive à vie."
        },
        {
          title: "Ligne Directe avec l'Ingénieur",
          desc: "Vous échangez directement avec les concepteurs sur WhatsApp. Aucun intermédiaire commercial, aucune déperdition d'information."
        }
      ]
    },
    bottomCta: {
      headline: "Prêt à faire passer votre infrastructure au niveau supérieur ?",
      subhead: "Analysons ensemble votre tunnel actuel pour identifier les opportunités de revenus inexploitées.",
      ctaBtn: "Démarrer Votre Projet",
      whatsappBtn: "Accès Direct WhatsApp"
    }
  },
  work: {
    hero: {
      badge: "ÉTUDES DE CAS & ARCHITECTURE",
      headline: "Des systèmes conçus pour la vitesse, la conversion et zéro perte d'opportunité.",
      subhead: "Découvrez les plateformes en production et les environnements de test conçus par Fleevy."
    },
    filters: {
      all: "Tous les Projets",
      commerce: "Commerce Direct",
      webapp: "Applications & Systèmes"
    },
    projects: [
      {
        title: "Mo Pizza Commande Directe",
        category: "Commerce Direct & Architecture de Triage Multilingue",
        filterCategory: "commerce",
        client: "Mo Pizza Restaurants (Morad Oudia)",
        systemType: "Moteur de Commande Directe & Mobile",
        statusBadge: "Plateforme en Production",
        summary: "Moteur de commande directe pour le réseau de 5 restaurants de Morad Oudia, supprimant les commissions des plateformes tierces grâce à la transmission directe par appel et WhatsApp.",
        benefits: [
          {
            direction: "up",
            type: "Résultat Commercial",
            headline: "0% Commission Préservée en Direct",
            detail: "Évite les 15 à 30 % de frais d'agrégateurs grâce à la transmission directe par WhatsApp et appel vers les cuisines."
          },
          {
            direction: "up",
            type: "Problème Résolu",
            headline: "Commande Multilingue Instantanée sans Application",
            detail: "Panier interactif fluide en français, arabe et anglais sur 5 points de vente sans téléchargement nécessaire."
          }
        ]
      },
      {
        title: "Librairie Almadina",
        category: "E-Commerce Headless & Infrastructure de Distribution",
        filterCategory: "commerce",
        client: "Éditions Almadina",
        systemType: "Moteur de Catalogue Headless & Stocks",
        statusBadge: "Plateforme en Production",
        summary: "Librairie en ligne ultra-rapide avec moteur de recherche instantané et paiement à la livraison sur les 58 wilayas.",
        benefits: [
          {
            direction: "up",
            type: "Résultat Commercial",
            headline: "Vitesse de Recherche & Découverte",
            detail: "Recherche instantanée dans un catalogue de plusieurs milliers d'ouvrages."
          },
          {
            direction: "down",
            type: "Problème Résolu",
            headline: "Réduction des Abandons sur Mobile",
            detail: "Processus de commande rapide avec paiement à la livraison 58 wilayas."
          }
        ]
      },
      {
        title: "Adréna Club",
        category: "Club Athlétique Haut de Gamme & Inscription WhatsApp",
        filterCategory: "webapp",
        client: "Adréna Club (Bab Ezzouar)",
        systemType: "Infrastructure 2 Étages & Onboarding WhatsApp",
        statusBadge: "Aperçu Privé · Déploiement Staging",
        summary: "Plateforme d'entraînement sur deux étages à Bab Ezzouar avec plannings en temps réel, créneaux femmes dédiés et intégration directe d'adhésion via WhatsApp dès 3 000 DA/mois.",
        benefits: [
          {
            direction: "up",
            type: "Résultat Commercial",
            headline: "Inscriptions Directes WhatsApp",
            detail: "Demandes d'adhésion qualifiées transmises sur WhatsApp avec choix préalable des formules dès 3 000 DA/mois."
          },
          {
            direction: "down",
            type: "Problème Résolu",
            headline: "Désengorgement du Standard Téléphonique",
            detail: "Les plannings en temps réel et les réponses pré-formatées réduisent considérablement les appels répétitifs."
          }
        ]
      },
      {
        title: "Librairie Tawheed & Sunnah",
        category: "Édition & Distribution · Commerce Numérique",
        filterCategory: "commerce",
        client: "Éditions Tawheed",
        systemType: "Pipeline Commercial Mobile Zéro Latence",
        statusBadge: "Plateforme en Production",
        summary: "Architecture de catalogue arabe haute performance avec synchronisation transporteurs sur 69 wilayas, retrait double point de vente et vérification instantanée WhatsApp.",
        benefits: [
          {
            direction: "up",
            type: "Résultat Commercial",
            headline: "Synchronisation Nationale Transporteurs",
            detail: "Expédition postale et transporteurs automatisée avec rapprochement du paiement à la livraison."
          },
          {
            direction: "down",
            type: "Problème Résolu",
            headline: "Suppression des Frictions Manuelles",
            detail: "Remplacement de la saisie manuelle des commandes par un flux entièrement automatisé."
          }
        ]
      }
    ],
    bottomCta: {
      headline: "Vous avez un projet en tête ?",
      subhead: "Discutons de la manière dont une architecture sur mesure peut accélérer votre croissance.",
      ctaBtn: "Lancer Votre Projet",
      whatsappBtn: "Accès Direct WhatsApp"
    }
  },
  about: {
    hero: {
      headlineStart: "Nous existons parce que la majorité des agences conçoivent des ",
      headlineEnd: "vitrines sans la plomberie d'acquisition nécessaire.",
      subhead: "Nous remplaçons les sites plaquettes lents par des plateformes d'acquisition réactives, une qualification par bot WhatsApp et des publicités Meta ciblées.",
      ledger: {
        speedTitle: "Chargement Edge < 800ms",
        speedSub: "Optimisé pour les réseaux 4G mobiles",
        botTitle: "Triage Bot en 30 Secondes",
        botSub: "Qualification instantanée de chaque prospect",
        lockinTitle: "Zéro Dépendance Propriétaire",
        lockinSub: "100% de propriété sur le code et les données"
      }
    },
    standards: {
      badge: "STANDARDS D'INGÉNIERIE",
      headline: "Notre exigence de conception.",
      subhead: "Chaque ligne de code et chaque script publicitaire répond à des critères stricts de performance.",
      items: [
        {
          num: "01",
          badge: "Architecture Sur Mesure",
          title: "Création Dédiée, Zéro Modèle",
          desc: "Chaque mise en page et chaque tunnel de conversion est développé sur mesure pour votre modèle économique.",
          benchmark: "Codebase 100% Dédiée"
        },
        {
          num: "02",
          badge: "Vitesse Mobile",
          title: "La Performance comme Standard",
          desc: "Nos pages compilées à la périphérie chargent en moins de 800ms sur mobile 4G, sans le moindre ralentissement.",
          benchmark: "< 800ms sur Mobile"
        },
        {
          num: "03",
          badge: "Pérennité Technique",
          title: "Des Bases Conçues pour Durer",
          desc: "Développé avec TypeScript strict, Next.js et PostgreSQL pour garantir des évolutions sans régression.",
          benchmark: "TypeScript Strict & RLS"
        }
      ]
    },
    techStack: {
      badge: "LE SOCLE TECHNIQUE",
      headline: "Stack d'Architecture Moderne",
      subhead: "Des outils professionnels assurant une rapidité, une robustesse et une sécurité optimales.",
      items: [
        {
          num: "01",
          name: "Next.js App Router",
          category: "Frontend & Runtime Edge",
          detail: "Rendu serveur ultra-rapide pour les performances mobiles."
        },
        {
          num: "02",
          name: "TypeScript",
          category: "Langage & Typage Stricte",
          detail: "Sécurité de typage rigoureuse sur chaque module."
        },
        {
          num: "03",
          name: "PostgreSQL & Supabase",
          category: "Base de Données & Authentification",
          detail: "Bases cloud sécurisées avec synchronisation en temps réel."
        },
        {
          num: "04",
          name: "Tailwind CSS",
          category: "Système de Design & Tokens",
          detail: "Styles épurés avec zéro surcharge CSS inutile."
        },
        {
          num: "05",
          name: "Framer Motion",
          category: "Chorégraphie Cinétique",
          detail: "Transitions fluides et réactives basées sur la physique."
        },
        {
          num: "06",
          name: "Webhooks & Bots Automatisés",
          category: "Acquisition & Logistique",
          detail: "Alertes prospects instantanées sur WhatsApp ou Telegram."
        }
      ]
    },
    founder: {
      badge: "RELATION DIRECTE AVEC LES BÂTISSEURS",
      headline: "Pourquoi Fleevy a été créé.",
      paragraphs: [
        "En 2024, trop d'agences continuent de vendre des sites web comme de simples brochures décoratives. Elles facturent des forfaits mensuels pour des éditeurs de pages qui mettent 5 secondes à charger sur smartphone et laissent les demandes clients pourrir dans des boîtes mail oubliées.",
        "Nous avons fondé Fleevy sur un constat sans appel : les entreprises modernes sur des marchés compétitifs n'ont pas besoin de pages statiques supplémentaires. Elles ont besoin d'une infrastructure d'acquisition : des systèmes qui s'affichent instantanément en 4G, qualifient les acheteurs en 30 secondes sur WhatsApp et génèrent un chiffre d'affaires mesurable grâce à la publicité ciblée.",
        "Chaque client chez Fleevy collabore directement avec des ingénieurs seniors. Aucun commercial intermédiaire, aucun délai administratif : une ingénierie agile dédiée à votre croissance commerciale."
      ],
      founderName: "Hichem Djouadi",
      founderRole: "Fondateur & Directeur Technique"
    },
    bottomCta: {
      headline: "Bâtissons votre avantage concurrentiel.",
      subhead: "Prêt à déployer une infrastructure d'acquisition conçue spécifiquement pour votre modèle de revenus ?",
      ctaBtn: "Lancer Votre Projet",
      whatsappBtn: "Accès Direct WhatsApp"
    }
  },
  contact: {
    hero: {
      badge: "CANAL D'ACQUISITION DIRECT",
      headline: "Construisons un moteur d'acquisition performant et pérenne.",
      subhead: "Choisissez votre canal. Écrivez-nous directement sur WhatsApp pour un diagnostic immédiat, ou détaillez vos besoins ci-dessous pour recevoir un plan technique sous 24 heures."
    },
    modeToggle: {
      wizard: "⚡ Cadrage Rapide en 3 Clics",
      form: "📝 Demande Détaillée"
    },
    fastLane: {
      badge: "VOIE RAPIDE WHATSAPP",
      responseBadge: "Réponse < 15min",
      headline: "Vous préférez échanger directement plutôt que remplir un formulaire ?",
      body: "Passez le formulaire. Envoyez le lien de votre site ou votre cahier des charges directement à Hichem sur WhatsApp. Vous recevrez une note vocale ou une analyse écrite avec des recommandations techniques précises.",
      founderName: "Hichem Djouadi",
      founderRole: "Fondateur & Directeur Technique",
      ctaBtn: "Écrire sur WhatsApp"
    },
    reassurance: {
      noSalesReps: "Zéro commercial · Échange direct avec l'ingénieur",
      fixedProposal: "Proposition et tarification fermes sous 24h",
      confidential: "Examen 100% confidentiel de votre projet"
    }
  },
  preloader: {
    words: ["Architecture", "Automatisation", "Performance", "Fleevy."]
  },
  error: {
    title: "Systèmes ",
    titleItalic: "hors ligne.",
    message: "Nous avons rencontré une anomalie dans l'architecture de déploiement.",
    reboot: "Redémarrer le Moteur",
    returnBase: "Retour à l'Accueil"
  },
  notFound: {
    badge: "404 // PAGE INTROUVABLE",
    title: "Page ",
    titleItalic: "introuvable.",
    message: "L'itinéraire demandé n'existe pas ou a été déplacé au sein de notre architecture.",
    returnHome: "Retour à l'Accueil",
    exploreServices: "Nos Services"
  }
};
