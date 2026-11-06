// Centralized color scheme for universal use across the app
export const colors = {
  // Base theme colors (hex values)
  hex: {
    background: "#ffffff", // white
    foreground: "#171717", // near-black text
  },
  background: {
    default: "bg-white",
    card: "bg-gray-50",
    section: {
      white: "bg-white",
      gray: "bg-gray-50",
      dark: "bg-gray-900",
      indigo: "bg-indigo-600",
    },
    accentSoft: "bg-indigo-50",
    accent: "bg-indigo-600",
  },
  card: {
    container: "rounded-2xl border border-gray-200 bg-white shadow-sm",
  },
  text: {
    default: "text-gray-900",
    heading: "text-gray-900",
    subtitle: "text-gray-800",
    description: "text-gray-600",
    cardTitle: "text-gray-900",
    cardSubtitle: "text-gray-800",
    cardDescription: "text-gray-600",
    cardDetail: "text-gray-700",
    link: "text-indigo-600",
    white: "text-white",
  },
  border: {
    card: "border-gray-200",
  },
};
