import Link from "next/link";
import { ButtonProps } from "@/lib/types";
import { colors } from "@/lib/colors";

export default function Button({
  text,
  href,
  variant,
  className,
}: ButtonProps) {
  const baseClasses =
    "px-8 py-3 rounded-lg font-semibold transition-all duration-200 inline-block text-center";

  const variantClasses = {
    primary: `${colors.background.section.dark} ${colors.text.white} hover:bg-indigo-700 hover:scale-105`,
    secondary: `border-2 border-indigo-600 ${colors.text.cardTitle} hover:bg-indigo-600 hover:${colors.text.white}`,
    white: `${colors.background.default} ${colors.text.cardTitle} hover:bg-gray-100 hover:scale-105`,
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-indigo-600",
  };

  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${variantClasses[variant]} ${className || ""}`}
      >
        {text}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className || ""}`}
    >
      {text}
    </Link>
  );
}
