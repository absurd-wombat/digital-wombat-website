import HeroSection from '@/app/components/sections/HeroSection';
import { contactInfo } from '@/app/data/contact';
import { ButtonProps, GridItem } from '@/app/lib/types';

export default function Contact() {
  const buttons: ButtonProps[] = [
    { text: "Send Message", href: "#contact-form", variant: "primary" },
    { text: "View Portfolio", href: "/portfolio", variant: "secondary" }
  ];

  const contactData: GridItem[] = [
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      title: "Email",
      description: "Get in touch via email",
      value: contactInfo.email
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
      title: "Phone",
      description: "Call us directly",
      value: contactInfo.phone
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      title: "Location",
      description: "Visit our office",
      value: contactInfo.location
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: "Hours",
      description: "When we're available",
      value: contactInfo.hours
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Get In Touch"
        subtitle="Let's discuss your next project"
        description="Ready to bring your ideas to life? We're here to help with innovative solutions tailored to your needs."
        gridItems={contactData}
        primaryButton={buttons[0]}
        secondaryButton={buttons[1]}
        fullHeight={true}
        backgroundColor="gradient"
        maxWidth="6xl"
      />
    </div>
  );
}