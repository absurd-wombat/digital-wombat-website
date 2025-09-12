import ContentSection from '../components/ContentSection';
import HeroSection from '../components/HeroSection';

const contactData = [
    {
        label: "Email",
        value: "hello@joe.com",
        icon: "📧"
    },
    {
        label: "Phone",
        value: "+1 (555) 123-4567",
        icon: "📞"
    },
    {
        label: "Office",
        value: "Remote & On-site",
        icon: "🏢"
    },
    {
        label: "Response Time",
        value: "Within 24 hours",
        icon: "⚡"
    }
];

export default function Contact() {
    return (
        <HeroSection
            title="Get In Touch"
            subtitle="Let's discuss your next project"
            description="Ready to bring your ideas to life? We're here to help with innovative solutions tailored to your needs."
            primaryButtonText="Send Message"
            primaryButtonHref="#contact-form"
            secondaryButtonText="View Portfolio"
            secondaryButtonHref="/portfolio"
        />
    );
}