import AboutUs from "@/app/about-us/AboutUs";
import ContactUsSection from "@/app/components/sections/ContactUsSection";
import HeroSection from "@/app/components/sections/HeroSection";

export default function PortfolioPage() {
    return (
        <div className="min-h-screen">
            <HeroSection
                title="About Us"
                subtitle="absurd wombat is run by Ben Middleton, a software consultant at TNG Technology Consulting."
                backgroundColor="gradient"
                layout="centered"
                maxWidth="4xl"
            />
            <AboutUs />
            <ContactUsSection />
        </div>
    );
}
