import { ReactNode } from "react";

export interface NavigationItem {
  name: string;
  href: string;
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

export interface SectionProps {
  title: string;
  description?: string;
  backgroundColor?: "white" | "gray" | "dark" | "indigo";
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
}
