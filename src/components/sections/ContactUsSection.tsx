import ContentSection from "@/components/sections/ContentSection";
import { ButtonProps } from "@/lib/types";

interface ContactUsSectionProps {
  title?: string;
  description?: string;
  button?: ButtonProps;
}

export default function ContactUsSection({
  title = "Ready to Start Your Project?",
  description = "Let's discuss how we can help bring your vision to life with innovative technology solutions.",
  button = { text: "Contact Us", href: "/contact", variant: "primary" },
}: ContactUsSectionProps) {
  const buttons = [button];

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
