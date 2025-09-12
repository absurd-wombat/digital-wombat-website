import ContentSection from './ContentSection';

interface ContactUsSectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function ContactUsSection({
  title = "Ready to Start Your Project?",
  description = "Let's discuss how we can help bring your vision to life with innovative technology solutions.",
  primaryButtonText = "View Our Work",
  primaryButtonHref = "/portfolio",
  secondaryButtonText = "Contact Us",
  secondaryButtonHref = "/contact"
}: ContactUsSectionProps) {
  const buttons = [
    { text: primaryButtonText, href: primaryButtonHref, variant: 'primary' as const },
    { text: secondaryButtonText, href: secondaryButtonHref, variant: 'secondary' as const }
  ];

  return (
    <ContentSection 
      type="cta"
      title={title}
      description={description}
      buttons={buttons}
      backgroundColor="indigo"
    />
  );
}
