import { ReactNode } from "react";

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

export interface GridItem {
  icon: ReactNode;
  title?: string;
  description?: string;
  value?: string;
  label?: string;
  href?: string;
}

export interface ButtonProps {
  text: string;
  href: string;
  variant: "primary" | "secondary" | "white" | "outline";
  className?: string;
}

export interface CardItem {
  icon?: ReactNode;
  title: string;
  subtitle?: string;
  description?: string;
  details?: ReactNode | string[];
  // Add more fields as needed for rich card content
}

export interface SectionProps {
  title: string;
  description?: string;
  backgroundColor?: "white" | "gray" | "dark" | "indigo" | "gradient";
  layout?: "centered" | "left" | "right";
  maxWidth?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl";
  className?: string;
  gridItems?: GridItem[];
  buttons?: ButtonProps[];
  cardItems?: CardItem[];
  variant?: "grid" | "card";
}
