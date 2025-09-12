


// src/lib/types.ts
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
  
  export interface HeroSectionProps extends SectionProps {
    subtitle?: string;
    primaryButton?: ButtonProps;
    secondaryButton?: ButtonProps;
    fullHeight?: boolean;
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