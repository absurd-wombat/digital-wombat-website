import HeroSection from "@/components/sections/HeroSection";
import { contactInfo } from "@/lib/data/contact";
import { GridItem } from "@/lib/types";

export default function ContactPage() {
  const contactData: GridItem[] = contactInfo.map((contact) => ({
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={contact.svg}
        />
      </svg>
    ),
    title: contact.title,
    value: contact.value,
    href: contact.value.startsWith("http") ? contact.value : undefined,
  }));

  return (
    <div>
      <HeroSection
        title="Get In Touch"
        subtitle="Let's discuss your next project"
        description="Ready to bring your ideas to life? We're here to help with innovative solutions tailored to your needs."
        gridItems={contactData}
        backgroundColor="gradient"
        maxWidth="6xl"
      />
    </div>
  );
}
