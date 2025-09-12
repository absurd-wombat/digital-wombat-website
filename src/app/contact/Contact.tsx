import ContentSection from '../components/ContentSection';

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
        <ContentSection 
          title="Get In Touch"
          description="Ready to bring your ideas to life? We'd love to hear about your project and discuss how we can help you achieve your goals. Reach out to us through any of the channels below."
          gridItems={contactData}
          backgroundColor="indigo"
          maxWidth="4xl"
        />
    );
}