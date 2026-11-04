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
    budgetLabel: "02 // Enveloppe d'Investissement",
    timelineLabel: "03 // Délais Souhaités",
    detailsLabel: "04 // Vos Coordonnées",
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
    budgets: {
      standard: "150 000 – 250 000 DA (Plateforme Essentielle)",
      growth: "250 000 – 450 000 DA (Commerce Complet & Logistique)",
      enterprise: "450 000+ DA (Infrastructure Entreprise / Application Sur Mesure)"
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
    engineSimulator: {
      badge: "LABO D'AUTOMATISATION // SYSTÈME INTERACTIF",
      headline: "Testez le moteur autonome en temps réel.",
      subhead: "L'automatisation ne se résume pas à un widget de chat. C'est une cascade d'événements continue : attribution publicitaire, chargement sub-seconde, qualification intelligente, synchronisation de base de données et dispatching.",
      triggerBtn: "Lancer la Simulation Autonome",
      resetBtn: "Réinitialiser la Télémétrie",
      statusIdle: "Prêt pour le test de télémétrie",
      statusRunning: "Exécution de la cascade d'événements...",
      statusComplete: "Exécution terminée avec succès · 0 intervention manuelle",
      scenarios: [
        {
          id: "clinic",
          name: "Clinique Médicale & Consultations VIP",
          niche: "Santé & Prestations à Haute Valeur",
          badge: "Pipeline de Rendez-vous",
          desc: "Le patient clique sur l'annonce, est pré-qualifié par le bot de diagnostic et réserve son créneau en direct.",
          speedMetric: "1.8s Temps d'exécution total",
          commissionMetric: "0% Commission Intermédiaire",
          resultSummary: "Consultation confirmée dans Google Calendar et alerte envoyée à l'accueil en 18 secondes.",
          events: [
            {
              timestamp: "00:00.15",
              step: "01",
              title: "Handshake d'Attribution Meta CAPI",
              detail: "Vérification côté serveur direct sans perte due aux cookies tiers désactivés.",
              system: "Meta Conversions API",
              badge: "Télémétrie OK"
            },
            {
              timestamp: "00:00.38",
              step: "02",
              title: "Infrastructure Edge Sub-Seconde",
              detail: "Rendu Next.js dynamique en 240ms sur réseau mobile 4G. 0% d'abandon visiteur.",
              system: "Nœuds Edge Vercel",
              badge: "Chargement 240ms"
            },
            {
              timestamp: "00:01.05",
              step: "03",
              title: "Qualification Autonome du Patient",
              detail: "Le bot recueille les symptômes, le créneau souhaité et valide le numéro sans humain.",
              system: "Agent d'Intake Intelligent",
              badge: "Qualifié"
            },
            {
              timestamp: "00:01.62",
              step: "04",
              title: "Synchronisation Calendrier & Base",
              detail: "Créneau verrouillé dans Google Calendar ; dossier patient chiffré dans PostgreSQL.",
              system: "Google Calendar + Supabase",
              badge: "Créneau Réservé"
            },
            {
              timestamp: "00:01.80",
              step: "05",
              title: "Alerte de Dispatching Immédiate",
              detail: "Dossier complet transmis sur le WhatsApp & Telegram de la réception en 18 secondes.",
              system: "Webhook de Notification",
              badge: "Équipe Alertée"
            }
          ]
        },
        {
          id: "ecommerce",
          name: "Commerce D2C & Restauration Directe",
          niche: "Retail, Food & Paiement à la Livraison 58 Wilayas",
          badge: "Commerce Direct 0% Commission",
          desc: "Commande mobile fluide avec calcul automatique des frais de livraison vers 58 wilayas.",
          speedMetric: "1.4s Temps d'exécution",
          commissionMetric: "0% Commission Prélevée",
          resultSummary: "Commande enregistrée, expédition 58 wilayas calculée, bon envoyé au préparateur.",
          events: [
            {
              timestamp: "00:00.12",
              step: "01",
              title: "Récupération Instantanée du Catalogue",
              detail: "Produit mis en cache sur le CDN Edge. Tunnel de commande ouvert à latence zéro.",
              system: "Cache Edge Commerce",
              badge: "En Cache"
            },
            {
              timestamp: "00:00.45",
              step: "02",
              title: "Moteur de Tarification 58 Wilayas",
              detail: "Calcul instantané livraison à domicile vs bureau pour chaque wilaya et commune.",
              system: "Routeur Logistique",
              badge: "Tarif Calculé"
            },
            {
              timestamp: "00:00.95",
              step: "03",
              title: "Validation Téléphone & Coordonnées",
              detail: "Vérification automatisée du format téléphonique et de l'adresse en moins de 20ms.",
              system: "Passerelle de Contrôle",
              badge: "Vérifié"
            },
            {
              timestamp: "00:01.35",
              step: "04",
              title: "Dispatching Entrepôt & Cuisine",
              detail: "Bon de préparation et détails envoyés directement au préparateur et livreur.",
              system: "Hook Entrepôt",
              badge: "Expédié"
            }
          ]
        },
        {
          id: "b2b",
          name: "Services B2B, Immobilier & Conseil",
          niche: "Prestations Corporate & Mandats Premium",
          badge: "Pipeline de Scoring Client",
          desc: "Le prospect évalue son projet, qualifie sa tranche budgétaire et bloque un rendez-vous stratégique.",
          speedMetric: "2.1s Temps d'exécution",
          commissionMetric: "100% Souveraineté Données",
          resultSummary: "Prospect qualifié haute priorité, NDA transmis, fondateur alerté avec briefing complet.",
          events: [
            {
              timestamp: "00:00.20",
              step: "01",
              title: "Estimation Interactive de Périmètre",
              detail: "Calculateur de scope recueillant taille d'entreprise, budget cible et calendrier.",
              system: "Moteur d'Intake Dynamique",
              badge: "Demande Reçue"
            },
            {
              timestamp: "00:00.85",
              step: "02",
              title: "Algorithme de Scoring Automatique",
              detail: "Score Tier-A attribué (budget élevé) ; accès direct à l'agenda de direction sans attente.",
              system: "Moteur de Scoring",
              badge: "Client Prioritaire"
            },
            {
              timestamp: "00:01.50",
              step: "03",
              title: "Allocation de Créneau Direction",
              detail: "Consultation Zoom fixée dans l'agenda du dirigeant avec briefing préparatoire.",
              system: "Google Calendar Sync",
              badge: "Réunion Bloquée"
            },
            {
              timestamp: "00:02.10",
              step: "04",
              title: "Notification Cryptée Canal VIP",
              detail: "Alerte instantanée sur le canal direct du fondateur avec dossier complet du prospect.",
              system: "Alerte Chiffrée Telegram/WhatsApp",
              badge: "Direction Alertée"
            }
          ]
        }
      ]
    },
    leakDiagnostic: {
      badge: "DIAGNOSTIC DE PERTE // INSPECTION TECHNIQUE",
      headline: "Où disparaissent 80% des budgets marketing ?",
      subhead: "La plupart des dirigeants pensent avoir un problème de publicité. En réalité, leur infrastructure technique perd des clients à chaque étape. Voici l'anatomie exacte du système.",
      traditionalTab: "La Structure Fragmentée (La Fuite Invisible)",
      fleevyTab: "La Machine Autonome Fleevy (Capture Immédiate)",
      stages: [
        {
          id: "speed",
          num: "01",
          title: "Vitesse de Premier Contact & Rendu",
          traditional: {
            headline: "7 à 11 Secondes sur des Thèmes Wordpress Lourds",
            desc: "Thèmes surchargés et extensions lentes qui rament sur le réseau 4G algérien. Les visiteurs cliquent sur retour avant même d'avoir vu votre offre.",
            metric: "53% d'Abandon Avant Rendu",
            badge: "Hémorragie de Trafic"
          },
          fleevy: {
            headline: "240ms Rendu Edge Statique Instantané",
            desc: "Architecture Next.js pré-rendue sur le réseau Edge. Affichage immédiat en un battement de cil sur tout smartphone, préservant 100% du trafic.",
            metric: "99.2% de Rétention Visiteurs",
            badge: "Zéro Perte"
          }
        },
        {
          id: "intake",
          num: "02",
          title: "Capture de Leads & Délai de Réponse",
          traditional: {
            headline: "DMs Instagram Désordonnés & Réponse en 4 Heures",
            desc: "Les prospects écrivent en privé ou remplissent des formulaires passifs. L'équipe répond des heures plus tard quand le client a déjà acheté ailleurs.",
            metric: "68% de Perte de Conversion",
            badge: "Demandes Perdues"
          },
          fleevy: {
            headline: "Intake Autonome en Moins de 15 Secondes",
            desc: "Des agents intelligents disponibles 24/7 qui posent les bonnes questions de qualification et capturent les détails quand l'intention d'achat est maximale.",
            metric: "< 15s Réponse Immédiate",
            badge: "100% Capté"
          }
        },
        {
          id: "ops",
          num: "03",
          title: "Gestion Opérationnelle & Synchronisation",
          traditional: {
            headline: "Copier-Coller Manuel & Tableurs Éparpillés",
            desc: "Commandes et réservations notées manuellement dans Excel, des groupes WhatsApp ou des cahiers. Erreurs humaines et oublis quotidiens.",
            metric: "Opérations Quotidiennes Chaotiques",
            badge: "Erreur Humaine"
          },
          fleevy: {
            headline: "Pipeline de Synchronisation Multi-Canal",
            desc: "Chaque confirmation verrouille un créneau Google Calendar, met à jour la base PostgreSQL et alerte l'équipe de livraison en quelques secondes.",
            metric: "0 Intervention Manuelle",
            badge: "Pilotage Automatique"
          }
        },
        {
          id: "economics",
          num: "04",
          title: "Rentabilité Nette & Souveraineté Logicielle",
          traditional: {
            headline: "15% à 30% de Commissions & Abonnements Mensuels",
            desc: "Les marketplaces de livraison prélèvent 20% de votre marge, tandis que les CMS propriétaires enferment vos données et vous facturent chaque mois.",
            metric: "20% de Marge Cédée",
            badge: "Taxe Intermédiaire"
          },
          fleevy: {
            headline: "0% Commission & 100% Souveraineté du Code",
            desc: "Vous êtes le seul propriétaire du logiciel, de la base et des données clients. Zéro commission prélevée et une indépendance financière absolue.",
            metric: "0% Commission · 100% Propriété",
            badge: "Souveraineté Totale"
          }
        }
      ],
      bottomNotice: {
        headline: "Cessez de brûler votre budget dans un panier percé.",
        desc: "Nous diagnostiquons votre infrastructure actuelle, colmatons chaque fuite et déployons une machine d'acquisition autonome qui convertit.",
        cta: "Demander un Diagnostic d'Infrastructure"
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
    pillarOneBadge: "PILIER 01 // INFRASTRUCTURE",
    pillarOneTitle: "Plateformes Souveraines & Systèmes Automatisés",
    pillarOneDesc: "Bases techniques sur-mesure ultra-rapides reliées directement à WhatsApp sans abonnement captif.",
    pillarOneItems: [
      {
        num: "01",
        title: "Vitrines de Marque & Tunnels d'Acquisition",
        badge: "Cliniques & Services Premium",
        sla: "Livraison en 2–3 Semaines",
        desc: "Vitrines ultra-rapides avec triage WhatsApp. Transforme chaque demande qualifiée en rendez-vous sans relance téléphonique.",
        deliverables: [
          "Chargement edge < 1s",
          "Bot de triage WhatsApp",
          "Alerte équipe < 30 secondes",
          "Synchro Google Calendar"
        ],
        proofLabel: "Cas Adréna Club"
      },
      {
        num: "02",
        title: "Boutiques E-Commerce & Commande Directe",
        badge: "D2C, Commerce & Restauration",
        sla: "Livraison en 2–3 Semaines",
        desc: "Boutique en ligne indépendante avec paiement à la livraison 58 wilayas et acheminement WhatsApp. 0% de commission.",
        deliverables: [
          "0% commission plateforme",
          "Paiement COD 58 Wilayas",
          "Dispatch commande instantané",
          "Propriété 100% code et base"
        ],
        proofLabel: "Cas Tawheed & Mo Pizza"
      },
      {
        num: "03",
        title: "Applications Métier, CRM & Dispatch",
        badge: "Opérations & Logistique",
        sla: "Livraison en 3–4 Semaines",
        desc: "Portails de dispatch et pipelines de vente qui remplacent les fichiers Excel et alertent votre équipe avant que les prospects ne refroidissent.",
        deliverables: [
          "Pipeline visuel de vente",
          "Radar de prospects froids",
          "Connexion API transporteurs",
          "Souveraineté des données"
        ],
        proofLabel: "Fleevy Command Center"
      }
    ],
    pillarTwoBadge: "PILIER 02 // DEMANDE & ACQUISITION",
    pillarTwoTitle: "Publicités Meta & Stratégie Réponse Directe",
    pillarTwoDesc: "Campagnes Meta et direction de scripts vidéo pour générer des commandes WhatsApp réelles et prévisibles.",
    pillarTwoItems: [
      {
        num: "01",
        title: "Publicités Meta & Direction Vidéo",
        badge: "Acquisition Payante",
        sla: "Lancement en 1–2 Semaines",
        desc: "Campagnes Meta et scripts vidéo calibrés pour générer de vraies commandes WhatsApp, pas des clics vides.",
        deliverables: [
          "Scripts vidéo percutants",
          "Campagnes Meta Ads ciblées",
          "Tracking Meta CAPI",
          "Optimisation flux WhatsApp"
        ]
      },
      {
        num: "02",
        title: "Audit de Tunnel & Fuites de Revenu",
        badge: "Audit de Croissance",
        sla: "Restitution sous 48 Heures",
        desc: "Un diagnostic vidéo en 48h révélant exactement où votre tunnel perd du chiffre d'affaires et les actions immédiates à mener.",
        deliverables: [
          "Diagnostic vidéo sous 48h",
          "Analyse friction & prix",
          "Plan d'action immédiat",
          "Feuille de route priorisée"
        ]
      },
      {
        num: "03",
        title: "Identité de Marque & Tokens de Design",
        badge: "Inclus dans la Réalisation",
        sla: "Livré Clé en Main",
        desc: "Typographies calibrées, tokens de design et templates créatifs inclus clé en main avec chaque réalisation web.",
        deliverables: [
          "Typographie & hiérarchie",
          "Modèles de créatifs pubs",
          "Branding bot WhatsApp",
          "Exports haute résolution"
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
      },
      {
        title: "Fleevy Command Center CRM",
        category: "Système d'Exploitation & Hub Opérationnel d'Agence",
        filterCategory: "webapp",
        client: "Noyau Opérationnel Fleevy",
        systemType: "Cockpit Opérationnel & CRM Temps Réel",
        statusBadge: "Plateforme en Production",
        summary: "Cerveau opérationnel propriétaire synchronisant les leads entrants multicanaux, la télémétrie des projets clients en direct et les flux automatisés Supabase/Trello avec zéro latence.",
        benefits: [
          {
            direction: "up",
            type: "Résultat Commercial",
            headline: "Triage Instantané & Protection Anti-Perte de Leads",
            detail: "Surveillance automatique de l'inactivité à 7 jours et routage multicanal immédiat évitant toute fuite de prospects."
          },
          {
            direction: "up",
            type: "Problème Résolu",
            headline: "Contrôle Opérationnel Unifié et Souverain",
            detail: "Supprime la fragmentation des abonnements SaaS tiers en centralisant prospects, projets, ressources et métriques dans une console unique."
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
      headlineStart: "Nous concevons des moteurs de revenus. ",
      headlineEnd: "Pas des sites vitrines.",
      subhead: "Plateformes web ultra-rapides, commerce mobile et acquisition ciblée pour les entreprises qui refusent de gaspiller leur trafic.",
      ledger: {
        speedTitle: "Vitesse Edge < 800ms",
        speedSub: "Optimisé pour les réseaux 4G mobiles",
        botTitle: "Qualification en 30s",
        botSub: "Alerte directe sur WhatsApp",
        lockinTitle: "Propriété 100%",
        lockinSub: "Zéro dépendance logicielle"
      }
    },
    standards: {
      badge: "CONVICTIONS DU STUDIO",
      headline: "Trois principes cardinaux pour chaque système.",
      subhead: "Nous concevons des plateformes pensées comme des moteurs commerciaux, pas comme des vitrines passives.",
      items: [
        {
          num: "01",
          badge: "OBJECTIF",
          title: "La Conversion Avant le Superficiel",
          desc: "Un site attrayant qui ne génère pas de clients est une perte. Chaque interaction est conçue pour transformer le trafic en chiffre d'affaires.",
          benchmark: "Revenus Mesurables"
        },
        {
          num: "02",
          badge: "RAPIDITÉ",
          title: "La Vitesse comme Standard",
          desc: "La vitesse n'est pas un détail technique, c'est le socle du taux de conversion. Nos systèmes Next.js s'affichent instantanément en 4G.",
          benchmark: "< 800ms en 4G"
        },
        {
          num: "03",
          badge: "SOUVERAINETÉ",
          title: "Zéro Dépendance Logicielle",
          desc: "Vous possédez l'intégralité du code source, des bases de données et des comptes publicitaires. Zéro abonnement captif.",
          benchmark: "100% Propriété Client"
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
    scopeCard: {
      badge: "CHAMP D'ACTION",
      countBadge: "4 DISCIPLINES",
      headline: "Ce que nous concevons.",
      footerText: "Studio Fleevy · 100% Code Sur Mesure · Zéro Dépendance",
      items: [
        {
          id: "intake",
          num: "01",
          title: "Plateformes d'Acquisition",
          sector: "Cliniques & Services Premium",
          output: "Vitrines mobiles ultra-rapides et qualification WhatsApp en 30s.",
          tag: "Zéro Perte"
        },
        {
          id: "commerce",
          num: "02",
          title: "Commerce Direct",
          sector: "Marques & Restauration",
          output: "Paiement à la livraison 58 wilayas sans commission tiers.",
          tag: "Marges 100%"
        },
        {
          id: "portals",
          num: "03",
          title: "CRM Propriétaires",
          sector: "Logistique & Multi-Agences",
          output: "Pipelines visuels remplaçant les tableurs Excel chaotiques.",
          tag: "Gestion Fluide"
        },
        {
          id: "growth",
          num: "04",
          title: "Publicités Ciblées",
          sector: "Entreprises en Croissance",
          output: "Campagnes Meta coordonnées générant un flux de commandes régulier.",
          tag: "Volume Garanti"
        }
      ]
    },
    founder: {
      badge: "PARTENARIAT DIRECT",
      headline: "Zéro commercial. Zéro intermédiaire. Échangez directement avec les ingénieurs.",
      paragraphs: [
        "Les agences classiques vous séduisent avec leurs directeurs puis confient votre projet à des exécutants juniors. Nous refusons ce modèle.",
        "Chez Fleevy, chaque système est conçu, développé et déployé directement par les ingénieurs. Une collaboration directe sur WhatsApp sans aucune lourdeur."
      ],
      founderName: "Hichem Djouadi",
      founderRole: "Fondateur & Architecte Systèmes"
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
      badge: "BUREAU TECHNIQUE // TRIAGE DIRECT",
      responseBadge: "Accès Technique Direct",
      headline: "Besoin d'un cadrage technique immédiat ou d'un calendrier ?",
      body: "Accédez directement à l'ingénierie. Envoyez l'URL de votre plateforme actuelle ou vos objectifs à Hichem sur WhatsApp pour un retour technique direct et une vérification des disponibilités d'agenda.",
      founderName: "Hichem Djouadi",
      founderRole: "Fondateur & Directeur Technique",
      ctaBtn: "Démarrer le Triage Technique sur WhatsApp"
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
