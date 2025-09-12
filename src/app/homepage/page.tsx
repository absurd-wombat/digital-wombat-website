import HeroSection from '../components/HeroSection';
import ServicesSection from './ServicesSection';
import ContactUsSection from '../components/ContactUsSection';

export default function Homepage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ContactUsSection />
    </div>
  );
}