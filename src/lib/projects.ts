export type ProjectKind = "client" | "demo" | "internal";

export type HeroSpecimenId = "funnel" | "commerce" | "crm";

export interface ProjectEntry {
  slug: string;
  id: "mopizza" | "almadina" | "adrena" | "tawheed" | "command-center";
  kind: ProjectKind;
  heroSlot?: HeroSpecimenId;
  featuredOnHome: boolean;
  displayUrl: string;
  liveUrl?: string;
  desktopImage: string;
  secondaryImage?: string;
  mobileImage?: string;
  fit?: "cover" | "contain";
  /** Optional silent looping MP4 clip path under /public/demos/ (falls back cleanly to screenshot when omitted) */
  videoSrc?: string;
  mobileVideoSrc?: string;
  serviceParam: string;
}

export const PROJECTS: ProjectEntry[] = [
  {
    slug: "almadina-bookstore",
    id: "almadina",
    kind: "client",
    heroSlot: "commerce",
    featuredOnHome: true,
    displayUrl: "almadinabookstore.com",
    liveUrl: "https://almadinabookstore.com/",
    desktopImage: "/project-almadina.png",
    secondaryImage: "/project-dashboard.png",
    mobileImage: "/almadina-mobile.png",
    serviceParam: "Direct E-Commerce Engine",
  },
  {
    slug: "adrena-club",
    id: "adrena",
    kind: "demo",
    heroSlot: "funnel",
    featuredOnHome: true,
    displayUrl: "adrenaclub.vercel.app",
    liveUrl: "https://adrenaclub.vercel.app/",
    desktopImage: "/project-adrena.png",
    mobileImage: "/adrena-mobile.png",
    serviceParam: "Acquisition Funnel & Vitrine",
  },
  {
    slug: "mo-pizza",
    id: "mopizza",
    kind: "client",
    featuredOnHome: true,
    displayUrl: "mopizzarestaurants.vercel.app",
    liveUrl: "https://mopizzarestaurants.vercel.app/",
    desktopImage: "/project-mopizza.png",
    mobileImage: "/mopizza-mobile.png",
    serviceParam: "Direct E-Commerce Engine",
  },
  {
    slug: "command-center-crm",
    id: "command-center",
    kind: "internal",
    heroSlot: "crm",
    featuredOnHome: true,
    displayUrl: "diwan / client-ops",
    desktopImage: "/tawheed-admin-dashboard.jpg",
    secondaryImage: "/project-dashboard.png",
    fit: "contain",
    serviceParam: "Custom CRM / Web App",
  },
  {
    slug: "tawheed-bookstore",
    id: "tawheed",
    kind: "client",
    featuredOnHome: false,
    displayUrl: "tawheed-publishing.com",
    desktopImage: "/project-tawheed.png",
    secondaryImage: "/tawheed-admin-dashboard.jpg",
    mobileImage: "/tawheed-mobile.png",
    serviceParam: "Direct E-Commerce Engine",
  },
];

export const HERO_SPECIMENS: Record<HeroSpecimenId, ProjectEntry> = {
  funnel: PROJECTS.find((p) => p.heroSlot === "funnel")!,
  commerce: PROJECTS.find((p) => p.heroSlot === "commerce")!,
  crm: PROJECTS.find((p) => p.heroSlot === "crm")!,
};

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
