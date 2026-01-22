import AboutUs from "@/app/about-us/AboutUs";
import ContactUsSection from "@/components/sections/ContactUsSection";
import HeroSection from "@/components/sections/HeroSection";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="About Us"
        subtitle="Digital Wombat is led by Ben Middleton, a software consultant at TNG Technology Consulting. This page outlines Ben's academic and professional career and experience."
        description=""
        backgroundColor="gradient"
        layout="centered"
        maxWidth="4xl"
        primaryButton={{
          text: "GitHub",
          href: "https://github.com/absurd-wombat",
          variant: "primary",
        }}
        secondaryButton={{
          text: "LinkedIn",
          href: "https://www.linkedin.com/in/benjamin-middleton-a8370b14a/",
          variant: "secondary",
        }}
      />
      <AboutUs />
      <ContactUsSection />
    </div>
  );
}
