import Link from 'next/link';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function CTASection({
  title = "Ready to Start Your Project?",
  description = "Let's discuss how we can help bring your vision to life with innovative technology solutions.",
  primaryButtonText = "View Our Work",
  primaryButtonHref = "/portfolio",
  secondaryButtonText = "Start a Conversation",
  secondaryButtonHref = "/contact"
}: CTASectionProps) {
  return (
    <section className="py-20 bg-indigo-600">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          {title}
        </h2>
        <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href={primaryButtonHref} 
            className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            {primaryButtonText}
          </Link>
          <Link 
            href={secondaryButtonHref} 
            className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
          >
            {secondaryButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
