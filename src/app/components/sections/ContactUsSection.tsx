// src/app/components/ContactUsSection.tsx
import ContentSection from './ContentSection';
import { ButtonProps } from '@/app/lib/types';

interface ContactUsSectionProps {
  title?: string;
  description?: string;
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
}

export default function ContactUsSection({
  title = "Ready to Start Your Project?",
  description = "Let's discuss how we can help bring your vision to life with innovative technology solutions.",
  primaryButton = { text: "View Our Work", href: "/portfolio", variant: "primary" },
  secondaryButton = { text: "Contact Us", href: "/contact", variant: "secondary" }
}: ContactUsSectionProps) {
  const buttons = [primaryButton, secondaryButton];

  return (
    <ContentSection 
      title={title}
      description={description}
      buttons={buttons}
      backgroundColor="indigo"
      maxWidth="4xl"
    />
  );
}