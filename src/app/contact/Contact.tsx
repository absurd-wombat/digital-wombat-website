import HeroSection from '@/app/components/sections/HeroSection';
import { contactInfo } from '@/app/data/contact';
import { GridItem } from '@/app/lib/types';

export default function Contact() {
  const contactData: GridItem[] = contactInfo.map((contact) => ({
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={contact.svg} />
      </svg>
    ),
    title: contact.title,
    value: contact.value
  }));

  return (
    <div>
      <HeroSection
        title="Get In Touch"
        subtitle="Let's discuss your next project"
        description="Ready to bring your ideas to life? We're here to help with innovative solutions tailored to your needs."
        gridItems={contactData}
        fullHeight={true}
        backgroundColor="gradient"
        maxWidth="6xl"
      />
    </div>
  );
}