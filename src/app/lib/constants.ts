export interface NavigationItem {
    name: string;
    href: string;
  }
  
  export interface ButtonProps {
    text: string;
    href: string;
    variant: 'primary' | 'secondary' | 'white' | 'outline';
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
    backgroundColor?: 'white' | 'gray' | 'indigo' | 'gradient';
    layout?: 'centered' | 'left-aligned';
    maxWidth?: '4xl' | '6xl' | 'full';
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
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

// Company information
export const COMPANY_INFO = {
  name: 'Absurd Wombat',
  tagline: "tmp-tagline",
  description: "tmp-descripton"
};