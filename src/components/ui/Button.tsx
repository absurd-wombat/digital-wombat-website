import Link from "next/link";
import { ButtonProps } from "@/lib/types";

export default function Button({
  text,
  href,
  variant,
  className,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 text-center";

  const variantClasses = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-500",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    white: "bg-white text-gray-900 hover:bg-gray-100",
    outline:
      "border border-white/40 text-white hover:border-white hover:bg-white/10",
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
