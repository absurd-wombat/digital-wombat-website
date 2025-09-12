import Link from 'next/link';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function HeroSection({
  title = "Digital Wombat",
  subtitle = "Innovative tech solutions that transform ideas into reality",
  description = "Fast, effective, and reliable development services for modern businesses",
  primaryButtonText = "View Portfolio",
  primaryButtonHref = "/portfolio",
  secondaryButtonText = "Get In Touch",
  secondaryButtonHref = "/contact"
}: HeroSectionProps) {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-800">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
        <p className="text-lg md:text-xl mb-12 text-gray-500 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href={primaryButtonHref} 
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg"
          >
            {primaryButtonText}
          </Link>
          <Link 
            href={secondaryButtonHref} 
            className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors"
          >
            {secondaryButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
