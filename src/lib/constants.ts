import { NavigationItem } from "@/lib/types";

// Navigation items for the header
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact", href: "/contact" },
];

// Layout constants
export const LAYOUT = {
  headerHeight: "min-h-16", // Slim header height (64px)
  headerPadding: "pt-16", // Must match headerHeight
};

// Company information
export const COMPANY_INFO = {
  name: "Digital Wombat",
  tagline: "Innovative tech solutions that transform ideas into reality",
  description:
    "Fast, effective, and reliable development services for modern businesses",
};
