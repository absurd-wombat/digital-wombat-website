import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "./ServicesSection";
import ContactUsSection from "@/components/sections/ContactUsSection";
import { COMPANY_INFO } from "@/lib/constants";

export default function Homepage() {
  const heroButtons = [
    { text: "About Us", href: "/about-us", variant: "primary" as const },
    { text: "Get In Touch", href: "/contact", variant: "secondary" as const },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title={COMPANY_INFO.name}
        subtitle={COMPANY_INFO.tagline}
        description={COMPANY_INFO.description}
        primaryButton={heroButtons[0]}
        secondaryButton={heroButtons[1]}
      />
      <ServicesSection />
      <ContactUsSection />
    </div>
  );
}
