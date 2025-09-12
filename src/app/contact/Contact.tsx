import HeroSection from '@/app/components/sections/HeroSection';
import { contactInfo } from '@/app/data/contact';
import { GridItem } from '@/app/lib/types';

const contactMetadata = {
    email: {
      title: "Email",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    },
    hours: {
      title: "Hours",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    }
  };

export default function Contact() {
  const contactData: GridItem[] = Object.entries(contactInfo).map(([key, value]) => ({
    icon: contactMetadata[key as keyof typeof contactMetadata].icon,
    title: contactMetadata[key as keyof typeof contactMetadata].title,
    value: value
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