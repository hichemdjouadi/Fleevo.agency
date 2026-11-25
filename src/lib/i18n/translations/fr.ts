import { TranslationDictionary } from "../types";

export const fr: TranslationDictionary = {
  locale: "fr",
  direction: "ltr",
  common: {
    brand: "Fleevy",
    openLiveSite: "Voir le Site en Ligne",
    viewCaseStudy: "Lire l'Étude de Cas",
    buildSimilar: "Créer un Système Similaire",
    backToWork: "Retour aux Projets",
    bookAudit: "Obtenir un Audit Vidéo 48h Gratuit",
    whatsappDirect: "WhatsApp Hichem",
    exploreWork: "Voir Nos Réalisations",
    mobileView: "Mobile",
    desktopView: "Ordinateur",
    liveClientBadge: "Projet Client Actif",
    interactiveDemoBadge: "Démo Sectorielle",
    inHouseBadge: "Développé en Interne",
    customScopeLabel: "Devis Fixe sous 24h",
  },
  nav: {
    work: "Projets",
    services: "Services",
    about: "À Propos",
    contact: "Contact",
    auditCta: "Audit 48h Gratuit",
    homeAria: "Accueil Fleevy",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    hqNotice: "Alger · Livraison Internationale",
    switchLanguage: "Langue",
  },
  footer: {
    tagline: "Systèmes d'Acquisition Client & Infrastructure Numérique",
    hq: "QG Alger · Déploiement International",
    privacy: "Confidentialité",
    whatsappAria: "Contacter Hichem sur WhatsApp",
    emailAria: "Envoyer un e-mail à Fleevy",
  },
  mobileQuickBar: {
    auditBtn: "Audit 48h Gratuit",
    whatsappAria: "Écrire sur WhatsApp",
  },
  home: {
    hero: {
      headline: "Systèmes d'acquisition client & plateformes sur mesure.",
      subtitle:
        "Nous concevons des sites rapides, boutiques e-commerce, CRM internes et agents IA métier — alimentés par Meta Ads et des scripts vidéo qui convertissent.",
      ctaPrimary: "Audit Vidéo 48h Gratuit",
      ctaSecondary: "Voir Nos Réalisations",
      scopeLine:
        "Tunnels & Vitrines · E-Commerce Direct · CRM Sur Mesure · Agents IA · Meta Ads",
    },
    heroShowcase: {
      tabs: [
        {
          id: "funnel",
          label: "01 Tunnel & Triage",
          shortLabel: "01 Tunnel",
          caption: "Adréna Club — Inscription guidée directement sur WhatsApp",
        },
        {
          id: "commerce",
          label: "02 E-Commerce Direct",
          shortLabel: "02 Boutique",
          caption: "Librairie Almadina — Recherche instantanée & 58 wilayas",
        },
        {
          id: "crm",
          label: "03 CRM Sur Mesure",
          shortLabel: "03 CRM",
          caption: "Command Center — Pipeline & alertes prospects froids (7j)",
        },
      ],
      mobileHint: "Touchez un onglet pour inspecter chaque système",
    },
    work: {
      headline: "Projets Sélectionnés",
      viewAll: "Tous les Systèmes Livrés",
    },
    systemAndCalc: {
      headline: "La plateforme capte l'acheteur. Nos campagnes la remplissent.",
      subhead:
        "Découvrez comment nos deux pôles fonctionnent ensemble et mesurez le coût des réponses lentes ou des commissions intermédiaires.",
      capabilities: [
        {
          id: "ads",
          label: "Meta Ads & Scripts Vidéo",
          fuelLabel: "Carburant Croissance",
          fuelValue:
            "Angles d'offre, scripts vidéo direct-response & campagnes Meta CAPI",
          engineLabel: "Destination Ciblée",
          engineValue:
            "Page rapide dédiée à la conversion ou triage WhatsApp instantané",
          bonusLabel: "Bonus Inclus",
          bonusValue: "Audit tunnel en 10 points & Polissage Crédibilité Marque",
        },
        {
          id: "funnels",
          label: "Tunnels & Sites Vitrines",
          fuelLabel: "Idéal Pour",
          fuelValue:
            "Cliniques médicales, promoteurs immobiliers, cabinets & clubs",
          engineLabel: "Ce Que Nous Bâtissons",
          engineValue:
            "Pages mobiles ultra-rapides avec alerte WhatsApp/Telegram en 30s",
          bonusLabel: "Visibilité Locale",
          bonusValue: "Configuration Google Maps & suivi Pixel Meta",
        },
        {
          id: "commerce",
          label: "E-Commerce Direct",
          fuelLabel: "Idéal Pour",
          fuelValue: "Marques D2C, librairies, restaurants & commerces",
          engineLabel: "Ce Que Nous Bâtissons",
          engineValue:
            "Catalogue instantané, paiement à la livraison 58 wilayas & suivi livreurs",
          bonusLabel: "Impact Marge",
          bonusValue: "100% de vos ventes directes sans commissions tierces",
        },
        {
          id: "crm",
          label: "Apps Web & CRM Internes",
          fuelLabel: "Idéal Pour",
          fuelValue:
            "Équipes dépassées par les fichiers Excel et discussions WhatsApp",
          engineLabel: "Ce Que Nous Bâtissons",
          engineValue:
            "Pipeline Kanban visuel, accès équipe & alertes d'inactivité 7 jours",
          bonusLabel: "Automatisation",
          bonusValue:
            "Routage immédiat des formulaires vers vos commerciaux",
        },
        {
          id: "ai",
          label: "Agents IA Métier",
          fuelLabel: "Idéal Pour",
          fuelValue:
            "Polycliniques, agences immobilières, showrooms & écoles privées",
          engineLabel: "Ce Que Nous Bâtissons",
          engineValue:
            "Agent IA 24/7 entraîné sur vos tarifs, plannings et critères",
          bonusLabel: "Prise de RDV",
          bonusValue:
            "Filtre les curieux et transfère les vrais acheteurs à l'équipe",
        },
      ],
      calculator: {
        modeLeads: "Réponses Lentes & Pubs",
        modeOrders: "Commissions Plateformes",
        leadsVolumeLabel: "Demandes Mensuelles (Pubs / DMs)",
        leadsValueLabel: "Valeur Moyenne d'un Client",
        leadsResultLabel:
          "Volume mensuel exposé quand les réponses prennent des heures",
        leadsFormulaNote:
          "Calculé selon vos demandes mensuelles × valeur moyenne d'un client.",
        leadsCta: "Corriger ce Goulot",
        ordersVolumeLabel: "Commandes Mensuelles",
        ordersValueLabel: "Panier Moyen",
        ordersResultLabel:
          "Frais économisés par an face à une commission de 20%",
        ordersFormulaNote:
          "Calculé sur la base commandes × panier × 20% × 12 mois.",
        ordersCta: "Garder 100% de Marge",
      },
    },
    packages: {
      headline: "Trois formules claires.",
      subhead:
        "Livraison cadrée en 2 à 4 semaines. Devis fixe établi après un bref échange sur votre besoin exact.",
      guaranteeLine:
        "Engagement de mise en production : nous ne clôturons la livraison qu'après validation en direct sur réseau 4G et alerte bot sous 30 secondes.",
      cards: [
        {
          id: "foundational",
          num: "01 · Moteur",
          tag: "2–3 Semaines",
          title: "Moteur Fondamental",
          desc: "Site d'acquisition ou boutique directe 58 wilayas reliée immédiatement à votre équipe sur WhatsApp ou Telegram.",
          bullets: [
            "Plateforme mobile Next.js pensée pour la conversion",
            "Alertes demandes/commandes WhatsApp ou Telegram en 30s",
            "Mise en ligne et cession complète du code source",
          ],
          cta: "Cadrer le Moteur",
          serviceParam: "Acquisition Funnel & Vitrine",
        },
        {
          id: "turnkey",
          num: "02 · Système Complet",
          tag: "Le Plus Demandé",
          title: "Machine de Croissance Clé en Main",
          desc: "Votre plateforme complète + configuration Meta Ads + scripts vidéo + audit du tunnel + polissage de marque offert.",
          bullets: [
            "Plateforme web ou boutique 58 wilayas avec bots intégrés",
            "Campagnes Meta Ads, suivi CAPI & scripts vidéo orientés vente",
            "Bonus Offert : Audit Tunnel & Polissage Crédibilité Marque",
          ],
          cta: "Réserver l'Offre Complète",
          serviceParam: "Meta Ads & Video Scripts",
          featured: true,
        },
        {
          id: "scale",
          num: "03 · Partenaire Scale",
          tag: "Sur Mesure",
          title: "Scale & Automatisation IA",
          desc: "Tout le système clé en main plus un CRM propriétaire, un agent IA métier et l'optimisation mensuelle des pubs.",
          bullets: [
            "Tableau CRM propriétaire avec alertes prospects froids (7j)",
            "Agent IA spécialisé formé sur vos offres et disponibilités",
            "Optimisation continue Meta Ads et contenu organique",
          ],
          cta: "Discuter d'un Système Dédié",
          serviceParam: "Custom CRM / Web App",
        },
      ],
    },
    builder: {
      badge: "Accès Direct Ingénieurs",
      tag: "Zéro Intermédiaire Commercial",
      quote:
        "Vous collaborez directement avec les ingénieurs qui codent votre plateforme, déploient vos bots WhatsApp/IA et structurent vos campagnes Meta de l'audit au lancement.",
      name: "Hichem Djouadi",
      role: "Fondateur & Architecte Systèmes · QG Alger",
      cta: "Écrire sur WhatsApp",
    },
    faq: {
      title: "Questions Fréquentes",
      items: [
        {
          question:
            "Faites-vous uniquement des sites web ou aussi la pub Meta et les agents IA ?",
          answer:
            "Les deux. Nous développons la plateforme (vitrine, e-commerce ou CRM) et l'alimentons avec des campagnes Meta Ads, des scripts vidéo et des agents IA métier lorsque votre volume de messages le justifie.",
        },
        {
          question: "Quel est le délai moyen de livraison ?",
          answer:
            "La majorité des tunnels, boutiques et systèmes sur mesure sont livrés et testés sous 2 à 4 semaines.",
        },
        {
          question:
            "Sommes-nous propriétaires à 100% du code et de nos données clients ?",
          answer:
            "Oui. Code source, base de données, nom de domaine et comptes publicitaires vous appartiennent intégralement sans aucun abonnement captif.",
        },
        {
          question: "Comment fonctionne l'Audit Vidéo Gratuit sous 48h ?",
          answer:
            "Envoyez l'URL de votre site ou compte Instagram et votre numéro WhatsApp. Sous 48h, vous recevez une courte vidéo montrant exactement où vos prospects décrochent.",
        },
        {
          question:
            "Travaillez-vous en Algérie et à l'international ?",
          answer:
            "Oui. Nous intégrons nativement les besoins algériens (FR/AR RTL, livraison 58 wilayas, Yalidine/ZR Express) ainsi que des systèmes internationaux en anglais.",
        },
      ],
    },
    closeBand: {
      headline: "Prêt à installer votre système d'acquisition client ?",
      primaryBtn: "Audit Vidéo 48h Gratuit",
      whatsappBtn: "WhatsApp Hichem",
      note: "Partagez votre site ou page Instagram pour recevoir votre diagnostic sous 48 heures.",
    },
  },
  services: {
    heroHeadline: "Deux disciplines. Une seule machine d'acquisition.",
    heroSubhead:
      "Nous bâtissons l'infrastructure technique qui capte et qualifie vos clients, puis nous l'alimentons par des publicités Meta ciblées et des audits de tunnel.",
    disciplineOne: {
      label: "Discipline 01 · Le Moteur",
      title: "Plateformes, CRM & Agents IA",
      countLabel: "4 Systèmes Clés",
      items: [
        {
          num: "01",
          title: "Tunnels d'Acquisition & Sites Vitrines",
          timeline: "2–3 Semaines",
          desc: "Sites rapides pour cliniques, promoteurs immobiliers et services avec qualification WhatsApp/Telegram et alerte équipe en moins de 30 secondes.",
          serviceParam: "Acquisition Funnel & Vitrine",
        },
        {
          num: "02",
          title: "Boutiques Directes & E-Commerce 58 Wilayas",
          timeline: "2–4 Semaines",
          desc: "Boutiques sans commission avec recherche instantanée, paiement à la livraison 58 wilayas, paiement carte optionnel et tickets livreurs automatisés.",
          serviceParam: "Direct E-Commerce Engine",
        },
        {
          num: "03",
          title: "Applications Web, CRM Internes & Automatisations",
          timeline: "3–4 Semaines",
          desc: "Pipelines Kanban, portails multi-utilisateurs et alertes d'inactivité 7 jours pour remplacer les tableurs et messages éparpillés.",
          serviceParam: "Custom CRM / Web App",
        },
        {
          num: "04",
          title: "Agents IA Conversationnels Spécialisés",
          timeline: "Couche Sectorielle",
          desc: "Assistants IA dédiés aux cliniques, agences immobilières, showrooms et écoles : formés sur vos plannings et tarifs pour qualifier et réserver 24/7.",
          serviceParam: "Domain-Specific AI Agent",
        },
      ],
    },
    disciplineTwo: {
      label: "Discipline 02 · Le Carburant",
      title: "Croissance & Acquisition Client",
      countLabel: "3 Leviers Growth",
      items: [
        {
          num: "01",
          title: "Stratégie Tunnel & Publicités Meta Ads",
          timeline: "1–2 Semaines",
          desc: "Positionnement de l'offre, scripts vidéo orientés vente, suivi serveur Meta CAPI et campagnes Facebook/Instagram reliées directement à votre tunnel ou WhatsApp.",
          serviceParam: "Meta Ads & Video Scripts",
        },
        {
          num: "02",
          title: "Audits Tunnel de Vente & Contenu Organique",
          timeline: "Livraison 48h",
          desc: "Analyse en 10 points de votre parcours client (pub, page, prix, suivi DMs) accompagnée d'un plan concret de contenus organiques.",
          serviceParam: "Pipeline & Content Audit",
        },
        {
          num: "03",
          title: "Polissage Crédibilité Marque (Bonus Offert)",
          timeline: "Inclus avec Build",
          desc: "Nettoyage vectoriel du logo, typographie, palette claire et modèles créatifs Meta — offert avec nos systèmes, jamais facturé à part.",
          isBonus: true,
          serviceParam: "Acquisition Funnel & Vitrine",
        },
      ],
    },
    signOffBar: {
      title: "Standard de Validation Live",
      desc: "Si une demande met plus de 30 secondes à notifier votre équipe ou si le tunnel mobile accroche sur 4G, nous optimisons avant signature finale.",
      cta: "Demander un Audit 48h",
    },
    process: {
      headline: "Quatre étapes de l'audit à la mise en ligne.",
      subhead: "Jalons clairs et échanges directs avec l'équipe technique sur WhatsApp.",
      steps: [
        {
          num: "01",
          title: "Audit du Parcours",
          desc: "Repérage des abandons mobiles, délais de réponse DMs et blocages opérationnels.",
          deliverable: "Vidéo Diagnostic 48h",
        },
        {
          num: "02",
          title: "Cahier des Charges Fixe",
          desc: "Périmètre clair, choix de formule et planning précis remis sous 24 heures.",
          deliverable: "Feuille de Route",
        },
        {
          num: "03",
          title: "Développement & Bots",
          desc: "Codage de la plateforme, connexion bots WhatsApp/IA, transporteurs et Meta CAPI.",
          deliverable: "Lien Test Staging",
        },
        {
          num: "04",
          title: "Tests 4G & Transfert",
          desc: "Vérification en conditions réelles puis cession complète du code et du domaine.",
          deliverable: "Mise en Production",
        },
      ],
    },
  },
  workPage: {
    headline: "Plateformes conçues pour la vitesse et la prise de commande.",
    subhead:
      "Explorez nos déploiements clients en ligne, démos sectorielles et notre propre cockpit interne.",
    clientSectionTitle: "Déploiements Clients & Démos",
    inHouseSectionTitle: "Développé en Interne",
    inHouseSubhead:
      "L'outil de gestion que nous avons construit pour piloter nos propres prospects, projets et tâches Fleevy.",
    caseStudyDetail: {
      bottleneckHeading: "Le Problème Initial",
      solutionHeading: "Architecture Déployée",
      flowHeading: "Parcours Client & Équipe",
      deliverablesHeading: "Livrables Inclus",
      outcomesHeading: "Impact Opérationnel",
      ctaHeadline: "Vous voulez une architecture similaire pour votre activité ?",
      ctaSubhead:
        "Décrivez votre secteur et vos objectifs : nous vous proposons un plan concret sous 24 heures.",
    },
  },
  projects: [
    {
      id: "almadina",
      title: "Librairie Almadina",
      niche: "Édition & E-Commerce",
      shortOutcome: "Recherche instantanée & paiement 58 wilayas",
      kindLabel: "Projet Client Actif",
      systemType: "Moteur E-Commerce Direct",
      summary:
        "Librairie en ligne ultra-rapide dotée d'une recherche instantanée et d'un tunnel de commande 58 wilayas à la livraison.",
      bottleneck:
        "Les lecteurs sur mobile 4G abandonnaient des pages lentes et la prise de commande manuelle en messages créait des erreurs d'adresses.",
      solution:
        "Développement d'un catalogue Next.js avec recherche instantanée par titre et validation structurée des 58 wilayas à la livraison.",
      deliverables: [
        "Recherche instantanée arabe et français sur des milliers de livres",
        "Sélecteur natif 58 wilayas et communes (COD)",
        "Transmission structurée des commandes à l'équipe logistique",
        "Navigation mobile fluide optimisée 4G",
      ],
      flowSteps: [
        "Le lecteur trouve un ouvrage instantanément par titre ou thème",
        "Renseigne sa wilaya et valide sa commande en deux gestes",
        "La fiche commande complète arrive prête pour expédition",
      ],
      outcomes: [
        {
          title: "Découverte produit sans attente",
          detail:
            "Accès direct aux ouvrages en quelques secondes sans scroller des publications sociales.",
        },
        {
          title: "Expédition 58 wilayas fiabilisée",
          detail:
            "Coordonnées téléphone, wilaya et commune validées avant chaque préparation de colis.",
        },
      ],
    },
    {
      id: "adrena",
      title: "Adréna Club",
      niche: "Complexe Sportif & Combat · Bab Ezzouar",
      shortOutcome: "Tunnel d'inscription & triage WhatsApp",
      kindLabel: "Démo Sectorielle",
      systemType: "Tunnel d'Acquisition Client",
      summary:
        "Plateforme bilingue pour complexe sportif sur deux niveaux avec plannings en direct, créneaux femmes et pré-inscription directe sur WhatsApp.",
      bottleneck:
        "L'accueil recevait sans cesse les mêmes appels et DMs sur les horaires, les tarifs et les créneaux réservés aux femmes.",
      solution:
        "Création d'une vitrine structurée exposant les créneaux, formules d'abonnement et envoi WhatsApp pré-rempli selon l'offre choisie.",
      deliverables: [
        "Plateforme mobile bilingue français et arabe",
        "Plannings clairs par étage et horaires dédiés aux femmes",
        "Choix d'abonnement relié directement à WhatsApp",
        "Accès immédiat sur navigateur sans application à installer",
      ],
      flowSteps: [
        "Le visiteur consulte les espaces et plannings en ligne",
        "Choisit sa formule d'abonnement",
        "WhatsApp s'ouvre avec la demande déjà structurée",
      ],
      outcomes: [
        {
          title: "Prospects mieux informés dès le premier message",
          detail:
            "Les adhérents écrivent à l'accueil après avoir déjà consulté horaires et conditions.",
        },
        {
          title: "Valorisation immédiate du complexe",
          detail:
            "Met en avant les deux niveaux, disciplines et créneaux féminins sans confusion.",
        },
      ],
    },
    {
      id: "mopizza",
      title: "Mo Pizza Commande Directe",
      niche: "Restauration Multi-Adresses",
      shortOutcome: "0% de commission sur 5 succursales",
      kindLabel: "Projet Client Actif",
      systemType: "Moteur de Commande Directe",
      summary:
        "Plateforme de commande directe pour un réseau de 5 restaurants éliminant les commissions des applications tierces via WhatsApp et appel direct.",
      bottleneck:
        "Les plateformes tierces prélevaient une lourde commission sur chaque commande pendant que les menus PDF lents faisaient fuir les clients mobiles.",
      solution:
        "Mise en place d'un menu interactif trilingue relié aux 5 points de vente avec envoi de commande formaté sur WhatsApp.",
      deliverables: [
        "Menu interactif mobile en français, arabe et anglais",
        "Routage direct WhatsApp et appel vers la bonne succursale",
        "Sélecteur des 5 adresses et panier rapide sans inscription",
        "Canal de vente direct à 0% de commission intermédiaire",
      ],
      flowSteps: [
        "Le client sélectionne sa succursale et compose son panier",
        "Confirme ses coordonnées en quelques secondes",
        "Le ticket de commande arrive directement en cuisine",
      ],
      outcomes: [
        {
          title: "Marge intégralement conservée",
          detail:
            "Les commandes passées en direct ne subissent aucun prélèvement d'application tierce.",
        },
        {
          title: "Commande trilingue fluide",
          detail:
            "Parcours rapide sur mobile sans téléchargement d'application.",
        },
      ],
    },
    {
      id: "command-center",
      title: "Fleevy Command Center CRM",
      niche: "Logiciel Opérationnel Interne",
      shortOutcome: "CRM Supabase & alertes prospects froids (7j)",
      kindLabel: "Développé en Interne",
      systemType: "App Web & CRM Sur Mesure",
      summary:
        "Cockpit interne centralisant les demandes entrantes du site, le suivi projets Kanban, la synchro Trello et le radar d'inactivité 7 jours.",
      bottleneck:
        "Jongler entre tableurs, e-mails de contact et tableaux Trello ralentissait le suivi commercial et la visibilité sur les livrables.",
      solution:
        "Développement de notre propre CRM sous Next.js et Supabase avec alertes Telegram immédiates, cartes Trello automatiques et suivi d'inactivité 7 jours.",
      deliverables: [
        "Boîte de réception unifiée, CRM Leads, Projets et Planning Contenu",
        "Alertes Telegram et e-mail dès soumission d'un formulaire",
        "Création automatique de carte Trello à l'ouverture d'un projet",
        "Alerte visuelle après 7 jours sans prise de contact",
      ],
      flowSteps: [
        "Une demande d'audit ou devis arrive dans Supabase",
        "Telegram et Trello avertissent l'équipe immédiatement",
        "Les projets validés passent automatiquement au tableau de production",
      ],
      outcomes: [
        {
          title: "Zéro demande entrante oubliée",
          detail:
            "Chaque nouveau prospect déclenche une alerte téléphone immédiate.",
        },
        {
          title: "Relance commerciale maîtrisée",
          detail:
            "Le compteur 7 jours signale visuellement tout dossier resté sans suivi.",
        },
      ],
    },
    {
      id: "tawheed",
      title: "Librairie Tawheed & Sunnah",
      niche: "Édition & Distribution Nationale",
      shortOutcome: "Logistique 58 wilayas & confirmation WhatsApp",
      kindLabel: "Projet Client Actif",
      systemType: "Moteur E-Commerce Direct",
      summary:
        "Boutique arabe haute vélocité avec choix de retrait dans deux librairies, expédition 58 wilayas et confirmation instantanée via WhatsApp.",
      bottleneck:
        "Gérer deux points de vente et des envois nationaux à la livraison via de simples messages audios ralentissait le traitement quotidien.",
      solution:
        "Conception d'un catalogue arabe RTL rapide intégrant retrait en magasin ou livraison 58 wilayas avec ticket WhatsApp structuré.",
      deliverables: [
        "Catalogue natif arabe RTL pensé pour le mobile",
        "Option retrait deux succursales ou livraison 58 wilayas",
        "Ticket de confirmation WhatsApp prêt à vérifier",
        "Classement clair des ouvrages et éditions",
      ],
      flowSteps: [
        "Le lecteur sélectionne ses ouvrages dans le catalogue RTL",
        "Choisit le retrait en librairie ou la livraison wilaya",
        "Le bon de commande formaté part sur WhatsApp pour validation",
      ],
      outcomes: [
        {
          title: "Prise de commande nationale ordonnée",
          detail:
            "Remplace les échanges manuels décousus par des bons prêts pour expédition.",
        },
        {
          title: "Expérience arabe soignée",
          detail:
            "Typographie lisible, recherche fluide et validation mobile immédiate.",
        },
      ],
    },
  ],
  about: {
    headline: "Nous bâtissons des systèmes de vente. Pas de simples vitrines.",
    subhead:
      "Fleevy réunit ingénierie logicielle et marketing d'acquisition pour permettre aux entreprises locales et internationales de capter plus de clients sans surcharge manuelle.",
    metrics: [
      {
        title: "Rapide sur Mobile 4G",
        desc: "Chaque plateforme est codée en Next.js sans constructeurs lourds pour limiter les abandons mobiles.",
      },
      {
        title: "Alertes en 30 Secondes",
        desc: "Demandes, commandes et prospects qualifiés arrivent automatiquement sur WhatsApp, Telegram ou votre CRM.",
      },
      {
        title: "Propriété Intégrale",
        desc: "Vous conservez votre domaine, base de données, comptes publicitaires et code source sans dépendance mensuelle.",
      },
    ],
    standardsTitle: "Trois règles d'ingénierie derrière chaque projet.",
    standards: [
      {
        num: "01",
        title: "La Conversion Avant Tout",
        desc: "Le design sert à transformer l'attention en rendez-vous et commandes confirmées. Chaque bloc supprime un doute client.",
      },
      {
        num: "02",
        title: "Moteur Plus Carburant",
        desc: "Un beau site sans trafic reste invisible, et des publicités envoyées vers des DMs lents gaspillent du budget. Nous lions les deux.",
      },
      {
        num: "03",
        title: "Responsabilité Directe",
        desc: "Pas de commerciaux intermédiaires. L'équipe qui audite votre tunnel conçoit, teste et livre directement votre plateforme.",
      },
    ],
    stackTitle: "Socle Technique",
    stackSubhead:
      "Des technologies fiables sélectionnées pour la vitesse d'exécution et la maîtrise des coûts.",
    stack: [
      {
        name: "Next.js & TypeScript",
        role: "Interface & Serveur",
        detail: "Rendu serveur rapide et routes API robustes.",
      },
      {
        name: "PostgreSQL & Supabase",
        role: "Base & Auth",
        detail: "Stockage sécurisé des commandes, prospects et CRM internes.",
      },
      {
        name: "Webhooks WhatsApp & Telegram",
        role: "Capture Automatisée",
        detail: "Qualification immédiate et alerte équipe en 30 secondes.",
      },
      {
        name: "Agents IA Métier",
        role: "Triage Spécialisé",
        detail: "Assistants formés sur vos documents et plannings internes.",
      },
      {
        name: "Meta Pixel & CAPI",
        role: "Attribution Pubs",
        detail: "Suivi serveur fiable pour vos campagnes Facebook et Instagram.",
      },
      {
        name: "OVH, Coolify & Cloudflare",
        role: "Hébergement & Edge",
        detail: "Faible latence en Algérie/Europe, SSL et sauvegardes auto.",
      },
    ],
  },
  contact: {
    headline: "Démarrez par un audit vidéo 48h ou cadrez votre projet.",
    subhead:
      "Choisissez le format qui vous convient : envoyez votre lien pour un audit gratuit, répondez à 3 choix rapides ou détaillez votre projet.",
    tabs: {
      audit: "Audit Vidéo 48h",
      scope: "Cadrage en 3 Clics",
      brief: "Brief Complet",
    },
    whatsappCard: {
      title: "Vous préférez échanger sur WhatsApp ?",
      body: "Envoyez l'adresse de votre site, votre compte Instagram ou votre besoin directement à Hichem pour un retour rapide.",
      builderName: "Hichem Djouadi",
      builderRole: "Fondateur & Architecte Systèmes",
      cta: "Ouvrir WhatsApp",
      prefillMessage:
        "Salam Hichem, je souhaite échanger sur un système d'acquisition ou un audit pour mon entreprise.",
    },
    reassurance: [
      "Échange direct avec l'ingénieur — zéro commercial",
      "Proposition claire et chiffrage fixe sous 24 heures",
      "Revue 100% confidentielle de vos liens et chiffres",
    ],
    auditForm: {
      title: "Recevoir un Audit Vidéo Gratuit sous 48h",
      subhead:
        "Indiquez votre site ou lien Instagram et votre numéro WhatsApp. Nous enregistrons une courte analyse montrant où vos prospects décrochent.",
      urlLabel: "Site Web ou Lien Instagram / Facebook",
      urlPlaceholder: "https://votreentreprise.com ou @votrepage",
      whatsappLabel: "Numéro WhatsApp",
      whatsappPlaceholder: "+213 555 ... ou format international",
      nameLabel: "Votre Nom & Activité (Optionnel)",
      namePlaceholder: "Amine — Clinique Dentaire Alger",
      goalLabel: "Objectif ou Blocage Principal (Optionnel)",
      goalPlaceholder: "Ex : pubs Meta actives mais commandes perdues en messages...",
      submitBtn: "Demander Mon Audit 48h Gratuit",
      submittingBtn: "Envoi en cours...",
      errorRequired:
        "Veuillez indiquer votre lien (site ou réseau social) et votre numéro WhatsApp.",
      successTitle: "Demande d'Audit Reçue.",
      successDesc:
        "Nous avons bien enregistré votre lien et vous enverrons votre vidéo sur WhatsApp sous 48 heures.",
      resetBtn: "Envoyer un autre lien",
    },
    wizard: {
      stepPrefix: "Étape",
      stepOf: "sur 3",
      readyBadge: "Plan Ciblé Prêt",
      step1: {
        title: "Quel système souhaitez-vous installer ?",
        subhead: "Sélectionnez la priorité actuelle de votre entreprise.",
        options: [
          {
            id: "funnel",
            title: "01. Tunnel d'Acquisition & Vitrine",
            desc: "Site rapide pour cliniques, immobilier, clubs ou services B2B avec triage WhatsApp immédiat.",
          },
          {
            id: "commerce",
            title: "02. Boutique E-Commerce Directe",
            desc: "Vente sans commission avec paiement à la livraison 58 wilayas et suivi livreurs.",
          },
          {
            id: "crm",
            title: "03. CRM & Application Métier",
            desc: "Tableau de bord privé remplaçant Excel avec suivi Kanban et alertes prospects froids.",
          },
          {
            id: "ai",
            title: "04. Agent IA Conversationnel",
            desc: "Assistant 24/7 formé sur vos tarifs et horaires pour filtrer les curieux et fixer les RDV.",
          },
          {
            id: "ads",
            title: "05. Meta Ads, Scripts & Audit",
            desc: "Campagnes ciblées Facebook/Instagram avec scripts vidéo et configuration CAPI.",
          },
        ],
      },
      step2: {
        title: "Quel est le principal frein aujourd'hui ?",
        subhead: "Identifiez ce qui vous fait perdre le plus de clients.",
        backBtn: "Revenir au choix du système",
        options: [
          {
            id: "dm_loss",
            title: "Commandes perdues dans les messages",
            desc: "Les prospects écrivent sur Instagram ou WhatsApp puis partent faute de réponse rapide.",
          },
          {
            id: "app_fees",
            title: "Commissions ou abandons sur mobile",
            desc: "Les plateformes prennent une part importante ou la lenteur décourage l'acheteur.",
          },
          {
            id: "blind_ads",
            title: "Budget publicitaire sans retours clairs",
            desc: "Les annonces génèrent des clics sans convertir en rendez-vous ou commandes.",
          },
          {
            id: "manual_ops",
            title: "Gestion manuelle & relances oubliées",
            desc: "Les contacts restent dispersés entre discussions et fichiers sans suivi structuré.",
          },
        ],
      },
      step3: {
        title: "Quel est votre horizon de lancement ?",
        subhead: "Pour vérifier la disponibilité technique immédiate.",
        backBtn: "Revenir au frein principal",
        options: [
          {
            id: "asap",
            title: "Immédiatement",
            desc: "Démarrage rapide pour corriger les pertes sans attendre.",
            window: "2–3 Semaines",
          },
          {
            id: "standard",
            title: "Sous 2 à 4 semaines",
            desc: "Déploiement complet avec phase de test et prise en main.",
            window: "2–4 Semaines",
          },
          {
            id: "exploring",
            title: "Planification à venir",
            desc: "Analyse des options avant de fixer une date de lancement.",
            window: "Flexible",
          },
        ],
      },
      step4: {
        title: "Votre Plan Technique Personnalisé",
        subhead:
          "Enregistrez vos coordonnées pour archiver ce cadrage et ouvrir WhatsApp directement avec Hichem.",
        recommendedLabel: "Formule Recommandée",
        windowLabel: "Délai Estimé",
        deliverablesLabel: "Inclus dans le Périmètre",
        nameLabel: "Nom & Entreprise",
        namePlaceholder: "Nom complet ou entreprise",
        phoneLabel: "WhatsApp / E-mail",
        phonePlaceholder: "+213 ... ou nom@entreprise.com",
        saveAndWhatsappBtn: "Enregistrer & Ouvrir WhatsApp",
        savingBtn: "Enregistrement...",
        savedHint:
          "Cadrage enregistré. Si WhatsApp ne s'est pas ouvert, utilisez le lien ci-dessous.",
        resetBtn: "Recommencer avec un autre choix",
        errorContact:
          "Veuillez renseigner votre nom et un contact (WhatsApp ou e-mail).",
        branches: {
          funnel: {
            packageName: "Moteur Fondamental ou Machine Clé en Main",
            deliverables: [
              "Page ou vitrine mobile rapide pensée pour la conversion",
              "Bot d'alerte WhatsApp ou Telegram en moins de 30 secondes",
              "Google Maps local et configuration Pixel Meta CAPI optionnelle",
            ],
          },
          commerce: {
            packageName: "Moteur E-Commerce Direct",
            deliverables: [
              "Catalogue mobile avec recherche instantanée",
              "Paiement à la livraison 58 wilayas et carte optionnelle",
              "Tickets WhatsApp automatisés et synchronisation livreurs",
            ],
          },
          crm: {
            packageName: "CRM Sur Mesure & Automatisation",
            deliverables: [
              "Pipeline commercial visuel par étapes (Kanban)",
              "Alertes d'inactivité après 7 jours sans suivi",
              "Accès équipe sécurisé et synchronisation des formulaires",
            ],
          },
          ai: {
            packageName: "Scale & Agent IA Spécialisé",
            deliverables: [
              "IA formée strictement sur vos tarifs, procédures et offres",
              "Pré-qualification des prospects et prise de RDV 24/7",
              "Escalade immédiate vers un humain sur demande",
            ],
          },
          ads: {
            packageName: "Machine de Croissance (Pôle Growth)",
            deliverables: [
              "Positionnement d'offre et scripts vidéo direct-response",
              "Configuration campagnes Meta Ads avec Pixel et CAPI",
              "Audit tunnel complet et feuille de route contenu organique",
            ],
          },
        },
        waPrefix: "Salam Hichem, voici mon cadrage réalisé sur Fleevy :",
      },
    },
    briefForm: {
      needLabel: "01 · De quoi avez-vous besoin ?",
      timelineLabel: "02 · Délai souhaité",
      detailsLabel: "03 · Vos coordonnées",
      nameLabel: "Nom Complet",
      namePlaceholder: "Nom complet",
      companyLabel: "Entreprise",
      companyPlaceholder: "Nom de l'entreprise",
      emailLabel: "Adresse E-mail",
      emailPlaceholder: "nom@entreprise.com",
      phoneLabel: "Téléphone / WhatsApp",
      phonePlaceholder: "+213 ... ou format international",
      scopeLabel: "Périmètre & Objectifs",
      scopePlaceholder:
        "Décrivez brièvement votre activité, votre frein principal ou ce que vous souhaitez bâtir...",
      submitBtn: "Envoyer le Brief",
      submittingBtn: "Envoi...",
      note: "Revue confidentielle · Réponse directe d'un ingénieur sous 24h",
      errorRequired:
        "Veuillez remplir votre nom, entreprise, e-mail et téléphone.",
      errorInterests: "Veuillez sélectionner au moins un service.",
      successTitle: "Brief Reçu.",
      successDesc:
        "Merci. Vos informations ont été enregistrées et nous vous répondrons sous 24 heures.",
      services: {
        website: "Tunnel d'Acquisition & Vitrine",
        ecommerce: "E-Commerce Direct",
        crm: "CRM Sur Mesure / App Web",
        aiAgent: "Agent IA Spécialisé",
        ads: "Meta Ads & Scripts Vidéo",
        audit: "Audit Tunnel & Contenu",
      },
      timelines: {
        rightAway: "Immédiatement",
        twoToFourWeeks: "Sous 2 à 4 semaines",
        planningAhead: "Planification à venir",
      },
    },
  },
  privacy: {
    title: "Politique de Confidentialité",
    updated: "Mise à jour Novembre 2026",
    intro:
      "Fleevy collecte uniquement les coordonnées et liens que vous saisissez volontairement pour demander un audit vidéo 48h, cadrer un projet ou envoyer un brief.",
    sections: [
      {
        heading: "1. Données Collectées",
        body: "Lorsque vous remplissez un formulaire d'audit, le configurateur ou le brief complet, nous enregistrons votre nom, entreprise, e-mail, téléphone WhatsApp, liens fournis et notes de projet.",
      },
      {
        heading: "2. Utilisation des Données",
        body: "Ces éléments servent uniquement à préparer votre diagnostic vidéo ou proposition chiffrée et à vous répondre directement. Aucune donnée n'est vendue ou partagée à des tiers commerciaux.",
      },
      {
        heading: "3. Accès & Suppression",
        body: "Vous pouvez demander la consultation ou la suppression de vos informations à tout moment par e-mail à contact@fleevy.net.",
      },
    ],
  },
  error: {
    title: "Une erreur s'est produite.",
    message: "Cette page n'a pas pu se charger correctement. Réessayez ou revenez à l'accueil.",
    retry: "Réessayer",
    home: "Retour Accueil",
  },
  notFound: {
    title: "Page introuvable.",
    message: "Cette adresse n'existe pas ou a été déplacée lors de la refonte.",
    home: "Retour Accueil",
    services: "Voir les Services",
  },
};
