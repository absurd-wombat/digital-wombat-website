import Link from 'next/link';
import { ButtonProps } from '@/app/lib/types';
import { colors } from '@/app/lib/colors';

export default function Button({ 
  text, 
  href, 
  variant, 
  className 
}: ButtonProps) {
  const baseClasses = "px-8 py-3 rounded-lg font-semibold transition-all duration-200 inline-block text-center";
  
  const variantClasses = {
    primary: `${colors.background.section.indigo} ${colors.text.white} hover:bg-indigo-700 hover:scale-105`,
    secondary: `border-2 border-indigo-600 ${colors.text.cardTitle} hover:bg-indigo-600 hover:${colors.text.white}`,
    white: `${colors.background.default} ${colors.text.cardTitle} hover:bg-gray-100 hover:scale-105`,
    outline: 'border-2 border-white text-white hover:bg-white hover:text-indigo-600',
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className || ''}`}
    >
      {text}
    </Link>
  );
}