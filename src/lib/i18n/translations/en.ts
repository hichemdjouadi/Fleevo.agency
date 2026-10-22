import { TranslationDictionary } from "../types";

export const en: TranslationDictionary = {
  locale: "en",
  direction: "ltr",
  nav: {
    services: "Services",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    homeAria: "Fleevy Home",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    hqNotice: "Algiers HQ · Worldwide Remote Infrastructure",
    switchLanguage: "Language"
  },
  footer: {
    mainStudio: "Main Studio",
    algiersHq: "Algiers HQ",
    algiersLocation: "Algiers, Algeria",
    globalDelivery: "Global Delivery",
    worldwide: "Worldwide",
    remoteInfra: "Remote Engineering & Infrastructure",
    tagline: "Customer Acquisition Systems & Digital Infrastructure",
    whatsappAria: "WhatsApp Direct Line",
    emailAria: "Email Fleevy",
    contactAria: "Contact Fleevy"
  },
  contactForm: {
    successTitle: "Request Received.",
    successDesc: "Thank you. We received your project details and will reply within 24 hours.",
    needLabel: "01 // What do you need?",
    timelineLabel: "02 // Target Timeline",
    detailsLabel: "03 // Contact Details",
    nameLabel: "Your Name",
    namePlaceholder: "Full name",
    companyLabel: "Company",
    companyPlaceholder: "Company or brand name",
    emailLabel: "Email Address",
    emailPlaceholder: "name@company.com",
    phoneLabel: "Phone / WhatsApp Number",
    phonePlaceholder: "+213 ... or international format",
    projectScopeLabel: "Project Scope & Goals",
    projectScopePlaceholder: "Briefly describe your offer, bottleneck, or what you want built...",
    submitBtn: "Submit Request",
    submittingBtn: "Submitting...",
    securityBadge: "Confidential Review · Direct Engineer Access · Response in < 24h",
    errorRequired: "Please fill in your name, company, email, and phone number.",
    errorInterests: "Please select at least one option.",
    services: {
      website: "Website / Landing Page",
      ecommerce: "E-Commerce Store",
      crm: "Custom CRM / Web App",
      ads: "Meta Ads & Video Scripts",
      audit: "Conversion & Content Audit",
      aiAgent: "Domain-Specific AI Agent"
    },
    timelines: {
      rightAway: "Right away",
      twoToFourWeeks: "Within 2–4 weeks",
      planningAhead: "Planning ahead"
    }
  },
  onboardingWizard: {
    badge: "System Intake Wizard",
    stepPrefix: "Step",
    stepOf: "of 3",
    blueprintReady: "Blueprint Ready",
    step1: {
      title: "What digital system does your business need?",
      subhead: "Select the primary build required for your operations.",
      options: [
        {
          id: "ecom",
          title: "01. E-Commerce Engine",
          desc: "Headless store with Yalidine/ZR sync & instant 1-tap checkout."
        },
        {
          id: "lead",
          title: "02. Lead Gen Funnel",
          desc: "High-ticket landing pages that filter tire-kickers into confirmed appointments."
        },
        {
          id: "crm",
          title: "03. Custom Ops & CRM",
          desc: "Private web portals replacing messy spreadsheets & manual WhatsApp chats."
        },
        {
          id: "ads",
          title: "04. Growth Strategy & Meta Ads",
          desc: "High-converting creative frameworks backed by verified pixel tracking."
        }
      ]
    },
    step2: {
      title: "What is stopping your revenue growth today?",
      subhead: "Select the single biggest operational bottleneck.",
      backBtn: "Back to system selection",
      options: [
        {
          id: "dm_chaos",
          title: "Losing sales in DMs",
          desc: "Customers abandon while waiting hours for human WhatsApp/Instagram confirmation."
        },
        {
          id: "marketplace_fees",
          title: "Marketplaces eating margins",
          desc: "Zero direct customer data, zero repeat purchases, and heavy platform cuts."
        },
        {
          id: "blind_ads",
          title: "Blind ad spend",
          desc: "Budget goes out without knowing which creative campaign actually brings revenue."
        },
        {
          id: "sheet_chaos",
          title: "Operational chaos & messy sheets",
          desc: "Disorganized client handoffs, missed follow-ups, and manual re-typing."
        }
      ]
    },
    step3: {
      title: "When do you need this operational?",
      subhead: "Helps us allocate immediate engineering bandwidth.",
      backBtn: "Back to bottleneck",
      options: [
        {
          id: "asap",
          title: "ASAP (Next 14 Days)",
          desc: "Priority sprint deployment to solve immediate bottlenecks.",
          badge: "Sprint",
          window: "10 - 14 Business Days"
        },
        {
          id: "standard",
          title: "Standard Roadmap (3–5 Weeks)",
          desc: "Phased rollout with team training and test staging.",
          badge: "Planned",
          window: "3 - 5 Weeks"
        },
        {
          id: "exploring",
          title: "Exploring feasibility for Q3/Q4",
          desc: "Auditing requirements and comparing build options.",
          badge: "Audit",
          window: "Flexible"
        }
      ]
    },
    step4: {
      title: "Tailored Architecture Blueprint Ready",
      subhead: "Calculated based on your selected stack and operations.",
      cardSystemLabel: "Recommended Build",
      cardWindowLabel: "Deployment Window",
      cardChallengeLabel: "Target Solution",
      cardDeliverablesLabel: "What Gets Delivered",
      deliverables: [
        "Sub-second custom web system (Next.js & Supabase)",
        "Integrated Algerian courier API (Yalidine/ZR Express)",
        "100% owned source code, database, and infrastructure"
      ],
      whatsappBtn: "Send Blueprint to Hichem on WhatsApp",
      resetBtn: "↺ Reset & try another configuration",
      waPrefix: "Salam Hichem, I went through the Fleevy onboarding wizard:",
      waSystemLabel: "System",
      waChallengeLabel: "Core Challenge",
      waTimelineLabel: "Target Timeline",
      waClosing: "I would like to review the technical blueprint and confirm availability."
    }
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Quick answers on how we build and launch.",
    items: [
      {
        question: "What makes Fleevy different from a traditional agency?",
        answer: "Most agencies build static websites. We build complete acquisition systems with automated bot intake and targeted Meta ads."
      },
      {
        question: "How does automated bot intake work?",
        answer: "When a visitor submits an inquiry or order, our WhatsApp or Telegram bot qualifies their details and sends the lead to your phone in 30 seconds."
      },
      {
        question: "Do we own all codebase assets and customer data?",
        answer: "Yes. You have full ownership of the codebase and customer data with zero monthly platform lock-in."
      },
      {
        question: "What is the typical delivery timeline?",
        answer: "Most platforms launch in two to four weeks, including bot setup and testing."
      },
      {
        question: "What happens on the strategy call?",
        answer: "We review your current setup, spot where leads drop off, and outline a clear build plan."
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
        category: "Direct Intake & Mobile Commerce Engine",
        statusBadge: "Live Production Platform",
        ctaText: "Visit Live Deployment",
        ctaTextDesktop: "Visit Live Deployment (Mo Pizza Direct Ordering)",
        benefits: [
          { direction: "up", label: "0% Commission Direct Orders" },
          { direction: "up", label: "Sub-800ms Mobile Velocity" }
        ]
      },
      {
        id: "adrena",
        tabLabel: "Adréna Club",
        shortLabel: "Adréna",
        client: "Adréna Club (Bab Ezzouar)",
        category: "Athletic Club & Intake System",
        statusBadge: "Private Preview · Staging Deployment",
        ctaText: "Explore Staging Platform",
        ctaTextDesktop: "Explore Staging Platform (Adréna Club)",
        benefits: [
          { direction: "up", label: "Direct WhatsApp Enrollment (dès 3 000 DA)" },
          { direction: "down", label: "Front-Desk Inquiry Overload" }
        ]
      },
      {
        id: "almadina",
        tabLabel: "Almadina Bookstore",
        shortLabel: "Almadina",
        client: "Almadina Publishing",
        category: "Headless Catalog Architecture",
        statusBadge: "Live Production Platform",
        ctaText: "Visit Live Deployment",
        ctaTextDesktop: "Visit Live Deployment (Almadina Bookstore)",
        benefits: [
          { direction: "up", label: "Instant Title & ISBN Search" },
          { direction: "down", label: "58-Wilayas Cart Drop-Off" }
        ]
      }
    ]
  },
  featuredWork: {
    projects: [
      {
        id: "mopizza",
        title: "Mo Pizza Direct Ordering",
        niche: "Restaurant & Hospitality · Direct Mobile Commerce",
        deployment: "Direct Mobile Commerce & Multilingual Intake",
        summary: "Direct ordering engine for Morad Oudia's 5-branch restaurant network that cuts aggregator commission fees via instant call and WhatsApp dispatch.",
        statusBadge: "Live Production Platform",
        benefits: [
          { direction: "up", label: "0% Commission Direct Orders" },
          { direction: "up", label: "Instant Multilingual Ordering" }
        ]
      },
      {
        id: "almadina",
        title: "Almadina Bookstore",
        niche: "Headless Commerce · Scholarly Publishing",
        deployment: "Headless Catalog & Delivery Pipeline",
        summary: "Fast online bookstore with instant search and 58-Wilayas cash-on-delivery checkout.",
        statusBadge: "Live Production Platform",
        benefits: [
          { direction: "up", label: "Search & Discovery Speed" },
          { direction: "down", label: "Mobile Catalog Drop-off" }
        ]
      },
      {
        id: "adrena",
        title: "Adréna Club",
        niche: "Athletics & Combat · Membership Booking",
        deployment: "2-Floor Facility Platform & WhatsApp Intake",
        summary: "Two-floor athletic performance platform in Bab Ezzouar with real-time floor schedules, dedicated women-only hours, and direct WhatsApp membership onboarding from 3,000 DA/month.",
        statusBadge: "Private Preview · Staging Deployment",
        benefits: [
          { direction: "up", label: "Direct WhatsApp Enrollment (dès 3 000 DA)" },
          { direction: "down", label: "Front-Desk Inquiry Overload" }
        ]
      },
      {
        id: "tawheed",
        title: "Tawheed & Sunnah Bookstore",
        niche: "Publishing & Distribution · Digital Commerce",
        deployment: "Zero-Latency Mobile Commerce Pipeline",
        summary: "High-performance Arabic catalog architecture with 69-wilayas courier sync, dual branch pickup, and instant WhatsApp verification.",
        statusBadge: "Live Production Platform",
        benefits: [
          { direction: "up", label: "Nationwide Courier Integration" },
          { direction: "down", label: "Manual Intake Friction" }
        ]
      }
    ]
  },
  home: {
    hero: {
      headlineStart: "We engineer customer acquisition systems ",
      headlineEnd: "& digital infrastructure.",
      subtitle: "Fast websites, online stores, and web apps wired with instant WhatsApp bots and targeted Meta ads.",
      ctaPrimary: "Start Your Project",
      ctaSecondary: "Explore Client Work",
      badges: {
        speed: "Sub-800ms Edge Speed",
        bot: "30s Bot Qualification",
        commission: "0% Commission Retained"
      }
    },
    pillars: {
      badge: "THE TWO PILLARS",
      headline: "Engineering meets customer acquisition.",
      subhead: "Code alone does not grow a business. We combine custom digital infrastructure with targeted demand generation.",
      pillarOneTitle: "Digital Infrastructure & Systems",
      pillarOneDesc: "High-speed web platforms, mobile storefronts, and internal tools built from scratch.",
      pillarTwoTitle: "Targeted Demand & Direct-Response Growth",
      pillarTwoDesc: "Meta ad campaigns, video hook direction, and funnel teardowns that convert.",
      pillarOneServices: [
        {
          num: "01",
          title: "Client Acquisition Funnels & Brand Vitrines",
          desc: "Service websites that capture leads and qualify buyers automatically on WhatsApp.",
          tags: ["Instant Bot Intake", "Zero-Friction Booking"]
        },
        {
          num: "02",
          title: "Direct Customer Ordering & E-Commerce Engines",
          desc: "Mobile online stores with zero commission fees and instant kitchen or warehouse alerts.",
          tags: ["0% Commission", "58-Wilayas COD"]
        },
        {
          num: "03",
          title: "Custom Web Apps, Proprietary CRMs & Automation",
          desc: "Lightweight deal tracking pipelines, client portals, and back-office automations that eliminate manual data entry.",
          tags: ["Custom CRM Pipelines", "Workflow Automation"]
        }
      ],
      pillarTwoServices: [
        {
          num: "01",
          title: "Full-Funnel Marketing Strategy & Meta Ads",
          desc: "Targeted Facebook and Instagram ad campaigns paired with full acquisition strategy and video scripts.",
          tags: ["Marketing Strategy", "Video Scripts", "Meta Ads"]
        },
        {
          num: "02",
          title: "Pipeline Leak & Growth Audits",
          desc: "A clear breakdown of where leads drop off plus an actionable growth roadmap.",
          tags: ["Funnel Audit", "Growth Roadmap"]
        },
        {
          num: "03",
          title: "Brand Credibility Polish",
          desc: "Clean visual identity and branded ad templates included free with core builds.",
          tags: ["Free Build Bonus", "Ad Templates"]
        }
      ]
    },
    flow: {
      badge: "THE ACQUISITION LOOP",
      headline: "The 3-step acquisition loop.",
      subhead: "How we move cold traffic to paid clients without manual friction.",
      steps: [
        {
          num: "01",
          phase: "Attract",
          title: "Ads & Video Scripts",
          desc: "Targeted Meta ads and clear video hooks pull in ready-to-buy prospects."
        },
        {
          num: "02",
          phase: "Convert",
          title: "Acquisition Platforms & CRMs",
          desc: "High-converting web platforms and lightweight CRMs that turn visitors into confirmed orders or bookings."
        },
        {
          num: "03",
          phase: "Close",
          title: "30s Bot Dispatch",
          desc: "Automated WhatsApp or Telegram bots qualify details and alert your team immediately."
        }
      ]
    },
    showcase: {
      headline: "Selected Client Deployments",
      subhead: "Real systems built for growing businesses in Algeria and worldwide.",
      viewAll: "View All Projects"
    },
    founder: {
      badge: "DIRECT TECHNICAL PARTNERSHIP",
      quote: "When you hire Fleevy, you don't talk to junior account managers. You work directly with senior engineers and acquisition strategists who build and test your system from day one.",
      founderName: "Hichem Djouadi",
      founderRole: "Founder & Lead Systems Architect"
    },
    ctaBanner: {
      headline: "Ready to engineer predictable acquisition?",
      subhead: "Book a 20-minute architecture review or message us on WhatsApp for an immediate audit.",
      primaryBtn: "Submit Project Brief",
      whatsappBtn: "WhatsApp Fast-Lane"
    }
  },
  services: {
    hero: {
      badge: "SOLUTIONS & ARCHITECTURE",
      headline: "Digital infrastructure engineered to convert visitors into paying clients.",
      subhead: "We build bespoke acquisition platforms, mobile e-commerce engines, and internal systems—paired with targeted Meta ads and direct-response strategy."
    },
    pillarOneBadge: "PILLAR 01 // DIGITAL INFRASTRUCTURE",
    pillarOneTitle: "Custom Web Platforms & Automated Systems",
    pillarOneDesc: "Tailored codebases built with Next.js, PostgreSQL, and instant messaging webhooks. Zero templates. Zero lock-in.",
    pillarOneItems: [
      {
        num: "01",
        title: "Client Acquisition Funnels & Brand Vitrines",
        badge: "Clinics & High-Ticket Services",
        sla: "2–3 Weeks Delivery",
        desc: "High-conversion platforms built for clinics, legal firms, and specialized consultancies to capture qualified inquiries and eliminate phone tag.",
        deliverables: [
          "High-conversion Next.js mobile vitrine (loads in < 1s)",
          "WhatsApp pre-qualification triage bot",
          "Instant lead notification alerts (< 30s)",
          "Direct Google Calendar & CRM database sync"
        ],
        proofLabel: "Adréna Club Private Intake"
      },
      {
        num: "02",
        title: "Direct Customer Ordering & E-Commerce Engines",
        badge: "D2C Brands, Retail & Food",
        sla: "2–3 Weeks Delivery",
        desc: "Dedicated digital storefronts that eliminate 15–30% marketplace commissions, calculate 58-Wilayas shipping, and route orders to WhatsApp.",
        deliverables: [
          "Custom Next.js mobile store (fast on 4G networks)",
          "58-Wilayas Cash on Delivery (COD) checkout",
          "Instant WhatsApp order dispatch bot (< 30s)",
          "0% commission fees · 100% database & code ownership"
        ],
        proofLabel: "Tawheed Bookstore & Mo Pizza"
      },
      {
        num: "03",
        title: "Custom Web Apps, Proprietary CRMs & Automation",
        badge: "Multi-Branch Operations & Logistics",
        sla: "3–4 Weeks Delivery",
        desc: "Tailored lead tracking pipelines, branch dispatch portals, and back-office automations that replace chaotic Excel spreadsheets and prevent leads from going cold.",
        deliverables: [
          "Lightweight visual deal pipeline CRM",
          "Inactivity alerts (preventing leads going cold)",
          "Automated courier & dispatch sync webhooks",
          "Role-based staff logins with 100% data ownership"
        ],
        proofLabel: "Fleevy Command Center"
      }
    ],
    pillarTwoBadge: "PILLAR 02 // DEMAND GENERATION",
    pillarTwoTitle: "Targeted Meta Ads & Direct-Response Strategy",
    pillarTwoDesc: "We pair your infrastructure with profitable paid campaigns and video creative directions that bring predictable customer volume.",
    pillarTwoItems: [
      {
        num: "01",
        title: "Full-Funnel Marketing Strategy & Meta Ads",
        badge: "Strategy & Paid Demand",
        sla: "1–2 Weeks Setup",
        desc: "We build your end-to-end customer acquisition strategy, write high-converting video scripts, and run targeted Facebook & Instagram ads optimized for WhatsApp orders—not vanity likes.",
        deliverables: [
          "Customer acquisition strategy & positioning",
          "Direct-response video scripts & hook formulas",
          "Targeted Facebook & Instagram ad campaigns",
          "Pixel, Conversions API & WhatsApp tracking"
        ]
      },
      {
        num: "02",
        title: "Pipeline Leak & Growth Audits",
        badge: "Growth Audit",
        sla: "48-Hour Delivery",
        desc: "A fast, 48-hour diagnostic of your existing marketing, social media, and website showing exactly where you are losing sales and which content angles will attract ready buyers.",
        deliverables: [
          "48-hour video & PDF customer journey teardown",
          "Offer positioning & pricing friction review",
          "Organic content marketing roadmap",
          "Prioritized quick-win revenue checklist"
        ]
      },
      {
        num: "03",
        title: "Brand Credibility Polish",
        badge: "Included Free Bonus",
        sla: "Included With Build",
        desc: "High-end visual polish that makes your business look established and trustworthy from day one. Included at no extra cost with every core web build.",
        deliverables: [
          "Brand typography & cohesive color hierarchy",
          "Social media ad creative & profile templates",
          "Custom WhatsApp bot avatar & greeting copy",
          "Vector logo polish & high-res asset exports"
        ]
      }
    ],
    comparison: {
      badge: "THE DIFFERENCE",
      headline: "Traditional Agencies vs Fleevy",
      subhead: "Why business owners switch to an engineering and acquisition partner.",
      colAgency: "Traditional Agency",
      colFleevy: "Fleevy Systems",
      rows: [
        {
          metric: "Primary Focus",
          agency: "Aesthetic brochures & vanity design",
          fleevy: "Revenue generation & automated bot intake"
        },
        {
          metric: "Technology Stack",
          agency: "Bloated WordPress or locked site builders",
          fleevy: "Custom Next.js, TypeScript & PostgreSQL"
        },
        {
          metric: "Mobile Performance",
          agency: "3–6 second load times on 4G networks",
          fleevy: "Sub-800ms edge loading with zero bloat"
        },
        {
          metric: "Lead Intake",
          agency: "Static contact forms that sit in spam",
          fleevy: "Instant 30s WhatsApp bot triage"
        },
        {
          metric: "Code & Data Ownership",
          agency: "Recurring host locks or platform fees",
          fleevy: "100% full client ownership of all assets"
        }
      ]
    },
    guarantees: {
      badge: "OUR COMMITMENT",
      headline: "Architectural Guarantees",
      items: [
        {
          title: "Fixed Timelines & Deliverables",
          desc: "Every milestone is agreed in advance with exact delivery windows. No scope creep, no endless revisions."
        },
        {
          title: "Zero Platform Lock-In",
          desc: "All source code, database credentials, and ad account setups remain 100% under your ownership forever."
        },
        {
          title: "Direct Builder Communication",
          desc: "You collaborate directly with engineers on WhatsApp. Zero account managers, zero telephone games."
        }
      ]
    },
    bottomCta: {
      headline: "Ready to scale your infrastructure?",
      subhead: "Let's review your current customer funnel and pinpoint where you can recapture lost revenue.",
      ctaBtn: "Start Your Project",
      whatsappBtn: "WhatsApp Fast-Lane"
    }
  },
  work: {
    hero: {
      badge: "CASE STUDIES & ARCHITECTURE",
      headline: "Systems built for speed, conversion, and zero-leak operations.",
      subhead: "Browse live client deployments and staging platforms engineered by Fleevy."
    },
    filters: {
      all: "All Projects",
      commerce: "Direct Commerce",
      webapp: "Web Apps & Systems"
    },
    projects: [
      {
        title: "Mo Pizza Direct Ordering",
        category: "Direct Commerce & Multilingual Intake Architecture",
        filterCategory: "commerce",
        client: "Mo Pizza Restaurants (Morad Oudia)",
        systemType: "Direct Intake & Mobile Commerce Engine",
        statusBadge: "Live Production Platform",
        summary: "Direct ordering engine for Morad Oudia's 5-branch restaurant network that cuts aggregator commission fees via instant call and WhatsApp dispatch.",
        benefits: [
          {
            direction: "up",
            type: "Commercial Result",
            headline: "0% Commission Direct Margin Retained",
            detail: "Bypasses 15–30% food aggregator fees with direct WhatsApp and phone dispatch straight to branch kitchens."
          },
          {
            direction: "up",
            type: "Problem Solved",
            headline: "Instant Multilingual Ordering Without App Friction",
            detail: "Interactive 6-item order tray supporting English, Arabic, and French across 5 locations with zero app downloads."
          }
        ]
      },
      {
        title: "Almadina Bookstore",
        category: "Headless E-Commerce & Distribution Infrastructure",
        filterCategory: "commerce",
        client: "Almadina Publishing",
        systemType: "Headless Catalog & Inventory Engine",
        statusBadge: "Live Production Platform",
        summary: "Fast online bookstore with instant search and 58-Wilayas cash-on-delivery checkout.",
        benefits: [
          {
            direction: "up",
            type: "Commercial Result",
            headline: "Search & Discovery Speed",
            detail: "Fast catalog search across thousands of titles."
          },
          {
            direction: "down",
            type: "Problem Solved",
            headline: "Mobile Catalog Drop-off",
            detail: "Fast 58-Wilayas cash on delivery mobile checkout."
          }
        ]
      },
      {
        title: "Adréna Club",
        category: "High-Ticket Membership & Athlete Intake Architecture",
        filterCategory: "webapp",
        client: "Adréna Club (Bab Ezzouar)",
        systemType: "2-Floor Athletic Facility & WhatsApp Intake",
        statusBadge: "Private Preview · Staging Deployment",
        summary: "Two-floor athletic performance platform in Bab Ezzouar with real-time floor schedules, dedicated women-only hours, and direct WhatsApp membership onboarding from 3,000 DA/month.",
        benefits: [
          {
            direction: "up",
            type: "Commercial Result",
            headline: "Direct WhatsApp Membership Enrollment",
            detail: "Qualified membership signups direct to WhatsApp with pre-selected tiers starting from 3,000 DA/month."
          },
          {
            direction: "down",
            type: "Problem Solved",
            headline: "Front-Desk Inquiry Overload",
            detail: "Real-time schedules and automated tier answers cut repetitive phone inquiries."
          }
        ]
      },
      {
        title: "Tawheed & Sunnah Bookstore",
        category: "Publishing & Distribution · Digital Commerce",
        filterCategory: "commerce",
        client: "Tawheed Publishing",
        systemType: "Zero-Latency Mobile Commerce Pipeline",
        statusBadge: "Live Production Platform",
        summary: "High-performance Arabic catalog architecture with 69-wilayas courier sync, dual branch pickup, and instant WhatsApp verification.",
        benefits: [
          {
            direction: "up",
            type: "Commercial Result",
            headline: "Nationwide Courier Integration",
            detail: "Automated postal and courier dispatch with direct cash-on-delivery reconciliation."
          },
          {
            direction: "down",
            type: "Problem Solved",
            headline: "Manual Intake Friction",
            detail: "Replaced slow manual order entry with direct automated dispatch."
          }
        ]
      }
    ],
    bottomCta: {
      headline: "Have a project in mind?",
      subhead: "Let's discuss how custom architecture can accelerate your customer acquisition.",
      ctaBtn: "Start Your Project",
      whatsappBtn: "WhatsApp Fast-Lane"
    }
  },
  about: {
    hero: {
      headlineStart: "We exist because most agencies build ",
      headlineEnd: "ornaments without acquisition plumbing.",
      subhead: "We replace slow brochure websites with fast acquisition platforms, automated bot intake, and targeted Meta ads.",
      ledger: {
        speedTitle: "Sub-800ms Edge Loading",
        speedSub: "Engineered for mobile 4G networks",
        botTitle: "30-Second Bot Triage",
        botSub: "Instant WhatsApp lead qualification",
        lockinTitle: "Zero Platform Lock-in",
        lockinSub: "100% code & database ownership"
      }
    },
    standards: {
      badge: "ENGINEERING STANDARDS",
      headline: "How we build digital assets.",
      subhead: "We hold every line of code and every ad hook to strict engineering benchmarks.",
      items: [
        {
          num: "01",
          badge: "Custom Architecture",
          title: "Craft Over Templates",
          desc: "Every layout and conversion flow is built from scratch for your business model.",
          benchmark: "100% Bespoke Codebase"
        },
        {
          num: "02",
          badge: "Mobile Velocity",
          title: "Performance as Luxury",
          desc: "Edge-compiled pages load in under 800ms on mobile 4G networks with zero lag.",
          benchmark: "< 800ms Mobile Load"
        },
        {
          num: "03",
          badge: "Production Longevity",
          title: "Enduring Codebases",
          desc: "Built on strict TypeScript, Next.js, and PostgreSQL so nothing breaks during updates.",
          benchmark: "Strict TypeScript & RLS"
        }
      ]
    },
    techStack: {
      badge: "THE FOUNDATION",
      headline: "Modern Architecture Stack",
      subhead: "Enterprise-grade tooling that powers world-class speed, reliability, and security.",
      items: [
        {
          num: "01",
          name: "Next.js App Router",
          category: "Frontend & Edge Runtime",
          detail: "Fast server rendering for mobile speed."
        },
        {
          num: "02",
          name: "TypeScript",
          category: "Language & Type Safety",
          detail: "Strict type safety across every module."
        },
        {
          num: "03",
          name: "PostgreSQL & Supabase",
          category: "Database & Authentication",
          detail: "Secure cloud databases with live sync."
        },
        {
          num: "04",
          name: "Tailwind CSS",
          category: "Design System Tokens",
          detail: "Clean styling with zero CSS bloat."
        },
        {
          num: "05",
          name: "Framer Motion",
          category: "Kinetic Choreography",
          detail: "Smooth physics for responsive interface motion."
        },
        {
          num: "06",
          name: "Automated Bot Webhooks",
          category: "Intake & Logistics Sync",
          detail: "Instant WhatsApp or Telegram lead alerts."
        }
      ]
    },
    scopeCard: {
      badge: "STUDIO CAPABILITIES",
      countBadge: "4 CORE DISCIPLINES",
      headline: "The systems we engineer.",
      footerText: "Fleevy Studio · 100% Bespoke Code · Zero Lock-In",
      items: [
        {
          id: "intake",
          num: "01",
          title: "Acquisition Platforms & Booking",
          sector: "Clinics, consultancies & specialized services",
          output: "Sub-second mobile vitrines paired with instant WhatsApp inquiry qualification.",
          tag: "Zero Lost Inquiries"
        },
        {
          id: "commerce",
          num: "02",
          title: "Direct E-Commerce & Ordering",
          sector: "Consumer brands, retail & food",
          output: "Dedicated storefronts with 58-Wilayas shipping calculation and 0% platform commission.",
          tag: "100% Margin Ownership"
        },
        {
          id: "portals",
          num: "03",
          title: "Custom Web Apps & Operations CRMs",
          sector: "Multi-branch operations & logistics",
          output: "Visual deal pipelines and dispatcher portals replacing chaotic spreadsheets.",
          tag: "Airtight Operations"
        },
        {
          id: "growth",
          num: "04",
          title: "Targeted Paid Advertising",
          sector: "Scalable commercial operators",
          output: "Data-driven Meta ad campaigns and creative direction engineered for predictable volume.",
          tag: "Predictable Volume"
        }
      ]
    },
    founder: {
      badge: "DIRECT BUILDER ENGAGEMENT",
      headline: "Why Fleevy was founded.",
      paragraphs: [
        "In 2024, most agencies still treat websites as decorative brochures. They charge hefty monthly retainer fees for page builders that take five seconds to load on mobile and bury customer inquiries in forgotten email inboxes.",
        "We built Fleevy around a single realization: modern businesses in fast-growing markets do not need more static pages. They need acquisition infrastructure—systems that load instantly on 4G, qualify buyers in 30 seconds via WhatsApp, and generate predictable sales with targeted ads.",
        "Every client at Fleevy works directly with senior builders. No intermediate account executives, no bureaucratic delays—just high-velocity engineering focused on your commercial growth."
      ],
      founderName: "Hichem Djouadi",
      founderRole: "Founder & Technical Lead"
    },
    bottomCta: {
      headline: "Let's engineer your advantage.",
      subhead: "Ready to launch custom acquisition infrastructure built specifically for your revenue model?",
      ctaBtn: "Start Your Project",
      whatsappBtn: "WhatsApp Fast-Lane"
    }
  },
  contact: {
    hero: {
      badge: "DIRECT INTAKE PIPELINE",
      headline: "Let's build an acquisition engine that scales.",
      subhead: "Choose your channel. Message directly on WhatsApp for an immediate teardown, or submit your project requirements below for a detailed blueprint within 24 hours."
    },
    modeToggle: {
      wizard: "⚡ Quick 3-Tap Intake",
      form: "📝 Detailed Message"
    },
    fastLane: {
      badge: "FAST-LANE WHATSAPP",
      responseBadge: "< 15m Response",
      headline: "Prefer real-time chat over filling out forms?",
      body: "Skip the form entirely. Send your website link or project brief directly to Hichem on WhatsApp. You will receive a direct voice note or text teardown with exact technical recommendations.",
      founderName: "Hichem Djouadi",
      founderRole: "Founder & Technical Lead",
      ctaBtn: "Start WhatsApp Chat"
    },
    reassurance: {
      noSalesReps: "Zero sales reps · Direct talk with the builder",
      fixedProposal: "Fixed proposal & pricing within 24 hours",
      confidential: "100% confidential project review"
    }
  },
  preloader: {
    words: ["Architecture", "Automation", "Performance", "Fleevy."]
  },
  error: {
    title: "Systems ",
    titleItalic: "offline.",
    message: "We encountered an anomaly in the deployment architecture.",
    reboot: "Reboot Engine",
    returnBase: "Return Base"
  },
  notFound: {
    badge: "404 // ROUTE NOT FOUND",
    title: "Page ",
    titleItalic: "not found.",
    message: "The requested route does not exist or has been relocated within our architecture.",
    returnHome: "Return to Base",
    exploreServices: "Explore Services"
  }
};
