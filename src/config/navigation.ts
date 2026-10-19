import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Gamepad2,
  KeyRound,
  Monitor,
  Scale,
  Users,
  Wrench,
} from "lucide-react";

export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "platforms", path: "/platforms", icon: Monitor, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Wrench, isContentType: true },
  { key: "modes", path: "/modes", icon: Gamepad2, isContentType: true },
  { key: "comparison", path: "/comparison", icon: Scale, isContentType: true },
  { key: "access", path: "/access", icon: KeyRound, isContentType: true },
  { key: "community", path: "/community", icon: Users, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
