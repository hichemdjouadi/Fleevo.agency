export type Locale = "en" | "fr" | "ar";
export type Direction = "ltr" | "rtl";

export interface NavTranslations {
  services: string;
  projects: string;
  about: string;
  contact: string;
  homeAria: string;
  openMenu: string;
  closeMenu: string;
  hqNotice: string;
  switchLanguage: string;
}

export interface FooterTranslations {
  mainStudio: string;
  algiersHq: string;
  algiersLocation: string;
  globalDelivery: string;
  worldwide: string;
  remoteInfra: string;
  tagline: string;
  whatsappAria: string;
  emailAria: string;
  contactAria: string;
}

export interface ContactFormTranslations {
  successTitle: string;
  successDesc: string;
  needLabel: string;
  timelineLabel: string;
  detailsLabel: string;
  nameLabel: string;
  namePlaceholder: string;
  companyLabel: string;
  companyPlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  projectScopeLabel: string;
  projectScopePlaceholder: string;
  submitBtn: string;
  submittingBtn: string;
  securityBadge: string;
  errorRequired: string;
  errorInterests: string;
  services: {
    website: string;
    ecommerce: string;
    crm: string;
    ads: string;
    audit: string;
    aiAgent: string;
  };
  timelines: {
    rightAway: string;
    twoToFourWeeks: string;
    planningAhead: string;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQTranslations {
  title: string;
  subtitle: string;
  items: FAQItem[];
}

export interface ProjectBenefit {
  direction: "up" | "down";
  type?: string;
  label?: string;
  headline?: string;
  detail?: string;
}

export interface FeaturedProjectTranslation {
  id: string;
  title: string;
  niche: string;
  deployment: string;
  summary: string;
  statusBadge: string;
  benefits: {
    direction: "up" | "down";
    label: string;
  }[];
}

export interface HeroVisualProjectTranslation {
  id: "mopizza" | "adrena" | "almadina";
  tabLabel: string;
  shortLabel: string;
  client: string;
  category: string;
  statusBadge: string;
  ctaText: string;
  ctaTextDesktop: string;
  benefits: {
    direction: "up" | "down";
    label: string;
  }[];
}

export interface ServiceItemTranslation {
  num: string;
  title: string;
  badge?: string;
  sla?: string;
  desc: string;
  tags?: string[];
  deliverables?: string[];
  proofLabel?: string;
}

export interface HomeTranslations {
  hero: {
    headlineStart: string;
    headlineEnd: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badges: {
      speed: string;
      bot: string;
      commission: string;
    };
  };
  pillars: {
    badge: string;
    headline: string;
    subhead: string;
    pillarOneTitle: string;
    pillarOneDesc: string;
    pillarTwoTitle: string;
    pillarTwoDesc: string;
    pillarOneServices: ServiceItemTranslation[];
    pillarTwoServices: ServiceItemTranslation[];
  };
  flow: {
    badge: string;
    headline: string;
    subhead: string;
    steps: {
      num: string;
      phase: string;
      title: string;
      desc: string;
    }[];
  };
  showcase: {
    headline: string;
    subhead: string;
    viewAll: string;
  };
  founder: {
    badge: string;
    quote: string;
    founderName: string;
    founderRole: string;
  };
  ctaBanner: {
    headline: string;
    subhead: string;
    primaryBtn: string;
    whatsappBtn: string;
  };
}

export interface ServicesPageTranslations {
  hero: {
    badge: string;
    headline: string;
    subhead: string;
  };
  pillarOneBadge: string;
  pillarOneTitle: string;
  pillarOneDesc: string;
  pillarOneItems: ServiceItemTranslation[];
  pillarTwoBadge: string;
  pillarTwoTitle: string;
  pillarTwoDesc: string;
  pillarTwoItems: ServiceItemTranslation[];
  comparison: {
    badge: string;
    headline: string;
    subhead: string;
    colAgency: string;
    colFleevy: string;
    rows: {
      metric: string;
      agency: string;
      fleevy: string;
    }[];
  };
  guarantees: {
    badge: string;
    headline: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  bottomCta: {
    headline: string;
    subhead: string;
    ctaBtn: string;
    whatsappBtn: string;
  };
}

export interface WorkPageProjectTranslation {
  title: string;
  category: string;
  filterCategory: "commerce" | "webapp";
  client: string;
  systemType: string;
  statusBadge: string;
  summary?: string;
  benefits: {
    direction: "up" | "down";
    type: string;
    headline: string;
    detail: string;
  }[];
}

export interface WorkPageTranslations {
  hero: {
    badge: string;
    headline: string;
    subhead: string;
  };
  filters: {
    all: string;
    commerce: string;
    webapp: string;
  };
  projects: WorkPageProjectTranslation[];
  bottomCta: {
    headline: string;
    subhead: string;
    ctaBtn: string;
    whatsappBtn: string;
  };
}

export interface AboutPageTranslations {
  hero: {
    headlineStart: string;
    headlineEnd: string;
    subhead: string;
    ledger: {
      speedTitle: string;
      speedSub: string;
      botTitle: string;
      botSub: string;
      lockinTitle: string;
      lockinSub: string;
    };
  };
  standards: {
    badge: string;
    headline: string;
    subhead: string;
    items: {
      num: string;
      badge: string;
      title: string;
      desc: string;
      benchmark: string;
    }[];
  };
  techStack: {
    badge: string;
    headline: string;
    subhead: string;
    items: {
      num: string;
      name: string;
      category: string;
      detail: string;
    }[];
  };
  scopeCard: {
    badge: string;
    countBadge: string;
    headline: string;
    footerText: string;
    items: {
      id: string;
      num: string;
      title: string;
      sector: string;
      output: string;
      tag: string;
    }[];
  };
  founder: {
    badge: string;
    headline: string;
    paragraphs: string[];
    founderName: string;
    founderRole: string;
  };
  bottomCta: {
    headline: string;
    subhead: string;
    ctaBtn: string;
    whatsappBtn: string;
  };
}

export interface OnboardingWizardTranslations {
  badge: string;
  stepPrefix: string;
  stepOf: string;
  blueprintReady: string;
  step1: {
    title: string;
    subhead: string;
    options: {
      id: string;
      title: string;
      desc: string;
    }[];
  };
  step2: {
    title: string;
    subhead: string;
    backBtn: string;
    options: {
      id: string;
      title: string;
      desc: string;
    }[];
  };
  step3: {
    title: string;
    subhead: string;
    backBtn: string;
    options: {
      id: string;
      title: string;
      desc: string;
      badge: string;
      window: string;
    }[];
  };
  step4: {
    title: string;
    subhead: string;
    cardSystemLabel: string;
    cardWindowLabel: string;
    cardChallengeLabel: string;
    cardDeliverablesLabel: string;
    deliverables: string[];
    whatsappBtn: string;
    resetBtn: string;
    waPrefix: string;
    waSystemLabel: string;
    waChallengeLabel: string;
    waTimelineLabel: string;
    waClosing: string;
  };
}

export interface ContactPageTranslations {
  hero: {
    badge: string;
    headline: string;
    subhead: string;
  };
  modeToggle: {
    wizard: string;
    form: string;
  };
  fastLane: {
    badge: string;
    responseBadge: string;
    headline: string;
    body: string;
    founderName: string;
    founderRole: string;
    ctaBtn: string;
  };
  reassurance: {
    noSalesReps: string;
    fixedProposal: string;
    confidential: string;
  };
}

export interface TranslationDictionary {
  locale: Locale;
  direction: Direction;
  nav: NavTranslations;
  footer: FooterTranslations;
  contactForm: ContactFormTranslations;
  onboardingWizard: OnboardingWizardTranslations;
  faq: FAQTranslations;
  heroVisual: {
    projects: HeroVisualProjectTranslation[];
  };
  featuredWork: {
    projects: FeaturedProjectTranslation[];
  };
  home: HomeTranslations;
  services: ServicesPageTranslations;
  work: WorkPageTranslations;
  about: AboutPageTranslations;
  contact: ContactPageTranslations;
  preloader: {
    words: string[];
  };
  error: {
    title: string;
    titleItalic: string;
    message: string;
    reboot: string;
    returnBase: string;
  };
  notFound: {
    badge: string;
    title: string;
    titleItalic: string;
    message: string;
    returnHome: string;
    exploreServices: string;
  };
}
