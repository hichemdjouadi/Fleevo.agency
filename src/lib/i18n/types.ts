export type Locale = "en" | "fr" | "ar";
export type Direction = "ltr" | "rtl";

export type CapabilityId = "ads" | "funnels" | "commerce" | "crm" | "ai";
export type PackageId = "foundational" | "turnkey" | "scale";
export type ServiceKey = "website" | "ecommerce" | "crm" | "aiAgent" | "ads" | "audit";
export type TimelineKey = "rightAway" | "twoToFourWeeks" | "planningAhead";
export type CalcMode = "leads" | "orders";

export interface ProjectCopy {
  id: "mopizza" | "almadina" | "adrena" | "tawheed" | "command-center";
  title: string;
  niche: string;
  shortOutcome: string;
  kindLabel: string;
  systemType: string;
  summary: string;
  bottleneck: string;
  solution: string;
  deliverables: string[];
  flowSteps: string[];
  outcomes: {
    title: string;
    detail: string;
  }[];
}

export interface TranslationDictionary {
  locale: Locale;
  direction: Direction;
  common: {
    brand: string;
    openLiveSite: string;
    viewCaseStudy: string;
    buildSimilar: string;
    backToWork: string;
    bookAudit: string;
    whatsappDirect: string;
    exploreWork: string;
    mobileView: string;
    desktopView: string;
    liveClientBadge: string;
    interactiveDemoBadge: string;
    inHouseBadge: string;
    customScopeLabel: string;
  };
  nav: {
    work: string;
    services: string;
    about: string;
    contact: string;
    auditCta: string;
    homeAria: string;
    openMenu: string;
    closeMenu: string;
    hqNotice: string;
    switchLanguage: string;
  };
  footer: {
    tagline: string;
    hq: string;
    privacy: string;
    whatsappAria: string;
    emailAria: string;
  };
  mobileQuickBar: {
    auditBtn: string;
    whatsappAria: string;
  };
  home: {
    hero: {
      headline: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
      scopeLine: string;
    };
    heroShowcase: {
      tabs: {
        id: "funnel" | "commerce" | "crm";
        label: string;
        shortLabel: string;
        caption: string;
      }[];
      mobileHint: string;
    };
    work: {
      headline: string;
      viewAll: string;
    };
    systemAndCalc: {
      headline: string;
      subhead: string;
      capabilities: {
        id: CapabilityId;
        label: string;
        fuelLabel: string;
        fuelValue: string;
        engineLabel: string;
        engineValue: string;
        bonusLabel: string;
        bonusValue: string;
      }[];
      calculator: {
        modeLeads: string;
        modeOrders: string;
        leadsVolumeLabel: string;
        leadsValueLabel: string;
        leadsResultLabel: string;
        leadsFormulaNote: string;
        leadsCta: string;
        ordersVolumeLabel: string;
        ordersValueLabel: string;
        ordersResultLabel: string;
        ordersFormulaNote: string;
        ordersCta: string;
      };
    };
    packages: {
      headline: string;
      subhead: string;
      guaranteeLine: string;
      cards: {
        id: PackageId;
        num: string;
        tag: string;
        title: string;
        desc: string;
        bullets: string[];
        cta: string;
        serviceParam: string;
        featured?: boolean;
      }[];
    };
    builder: {
      badge: string;
      tag: string;
      quote: string;
      name: string;
      role: string;
      cta: string;
    };
    faq: {
      title: string;
      items: {
        question: string;
        answer: string;
      }[];
    };
    closeBand: {
      headline: string;
      primaryBtn: string;
      whatsappBtn: string;
      note: string;
    };
  };
  services: {
    heroHeadline: string;
    heroSubhead: string;
    disciplineOne: {
      label: string;
      title: string;
      countLabel: string;
      items: {
        num: string;
        title: string;
        timeline: string;
        desc: string;
        serviceParam: string;
      }[];
    };
    disciplineTwo: {
      label: string;
      title: string;
      countLabel: string;
      items: {
        num: string;
        title: string;
        timeline: string;
        desc: string;
        isBonus?: boolean;
        serviceParam: string;
      }[];
    };
    signOffBar: {
      title: string;
      desc: string;
      cta: string;
    };
    process: {
      headline: string;
      subhead: string;
      steps: {
        num: string;
        title: string;
        desc: string;
        deliverable: string;
      }[];
    };
  };
  workPage: {
    headline: string;
    subhead: string;
    clientSectionTitle: string;
    inHouseSectionTitle: string;
    inHouseSubhead: string;
    caseStudyDetail: {
      bottleneckHeading: string;
      solutionHeading: string;
      flowHeading: string;
      deliverablesHeading: string;
      outcomesHeading: string;
      ctaHeadline: string;
      ctaSubhead: string;
    };
  };
  projects: ProjectCopy[];
  about: {
    headline: string;
    subhead: string;
    metrics: {
      title: string;
      desc: string;
    }[];
    standardsTitle: string;
    standards: {
      num: string;
      title: string;
      desc: string;
    }[];
    stackTitle: string;
    stackSubhead: string;
    stack: {
      name: string;
      role: string;
      detail: string;
    }[];
  };
  contact: {
    headline: string;
    subhead: string;
    tabs: {
      audit: string;
      scope: string;
      brief: string;
    };
    whatsappCard: {
      title: string;
      body: string;
      builderName: string;
      builderRole: string;
      cta: string;
      prefillMessage: string;
    };
    reassurance: string[];
    auditForm: {
      title: string;
      subhead: string;
      urlLabel: string;
      urlPlaceholder: string;
      whatsappLabel: string;
      whatsappPlaceholder: string;
      nameLabel: string;
      namePlaceholder: string;
      goalLabel: string;
      goalPlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      errorRequired: string;
      successTitle: string;
      successDesc: string;
      resetBtn: string;
    };
    wizard: {
      stepPrefix: string;
      stepOf: string;
      readyBadge: string;
      step1: {
        title: string;
        subhead: string;
        options: {
          id: "funnel" | "commerce" | "crm" | "ai" | "ads";
          title: string;
          desc: string;
        }[];
      };
      step2: {
        title: string;
        subhead: string;
        backBtn: string;
        options: {
          id: "dm_loss" | "app_fees" | "blind_ads" | "manual_ops";
          title: string;
          desc: string;
        }[];
      };
      step3: {
        title: string;
        subhead: string;
        backBtn: string;
        options: {
          id: "asap" | "standard" | "exploring";
          title: string;
          desc: string;
          window: string;
        }[];
      };
      step4: {
        title: string;
        subhead: string;
        recommendedLabel: string;
        windowLabel: string;
        deliverablesLabel: string;
        nameLabel: string;
        namePlaceholder: string;
        phoneLabel: string;
        phonePlaceholder: string;
        saveAndWhatsappBtn: string;
        savingBtn: string;
        savedHint: string;
        resetBtn: string;
        errorContact: string;
        branches: Record<
          "funnel" | "commerce" | "crm" | "ai" | "ads",
          {
            packageName: string;
            deliverables: string[];
          }
        >;
        waPrefix: string;
      };
    };
    briefForm: {
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
      scopeLabel: string;
      scopePlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      note: string;
      errorRequired: string;
      errorInterests: string;
      successTitle: string;
      successDesc: string;
      services: Record<ServiceKey, string>;
      timelines: Record<TimelineKey, string>;
    };
  };
  privacy: {
    title: string;
    updated: string;
    intro: string;
    sections: {
      heading: string;
      body: string;
    }[];
  };
  error: {
    title: string;
    message: string;
    retry: string;
    home: string;
  };
  notFound: {
    title: string;
    message: string;
    home: string;
    services: string;
  };
}
