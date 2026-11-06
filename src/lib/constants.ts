export interface NavigationItem {
  name: string;
  href: string;
}

export interface ButtonProps {
  text: string;
  href: string;
  variant: "primary" | "secondary" | "white" | "outline";
  className?: string;
}

export interface GridItem {
  icon?: React.ReactNode | string;
  title?: string;
  value?: string;
  description?: string;
  label?: string;
}

export interface SectionProps {
  title: string;
  description?: string;
  backgroundColor?: "white" | "gray" | "indigo" | "gradient";
  layout?: "centered" | "left-aligned";
  maxWidth?: "4xl" | "6xl" | "full";
  className?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  technologies: string[];
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

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
