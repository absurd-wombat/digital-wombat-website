import { colors } from "@/lib/colors";

export function getBackgroundClass(backgroundColor: string): string {
  const section = colors.background.section as Record<string, string>;
  return section[backgroundColor] || section.white;
}

export function getHeadingClass(backgroundColor: string): string {
  return backgroundColor === "dark" ? "text-white" : "text-gray-900";
}

export function getDescriptionClass(backgroundColor: string): string {
  return backgroundColor === "dark" ? "text-gray-300" : "text-gray-600";
}

export function getMaxWidthClass(maxWidth: string): string {
  const widths: Record<string, string> = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
    full: "max-w-full",
  };
  return widths[maxWidth] || widths["6xl"];
}

export function getLayoutClass(layout: string): string {
  const layouts: Record<string, string> = {
    centered: "text-center",
    left: "text-left",
    right: "text-left",
  };
  return layouts[layout] || layouts.centered;
}
