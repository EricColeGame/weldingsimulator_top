export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Welding Simulator Wiki",
  shortName: "Welding Simulator",
  logoText: "W",
  tagline: "Guides, Welding Techniques & Workshop Upgrades",
  description: "Your ultimate guide to Welding Simulator on Roblox! Master MIG, Stick, and TIG welding, complete jobs, upgrade your workshop, and collect helmets.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://weldingsimulator.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://weldingsimulator.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/112817436495652/Welding-Simulator",
  heroVideoId: "GpSHr59Pi6w", // Real welder gameplay of Roblox Welding Simulator
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
