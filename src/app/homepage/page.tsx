import HeroSection from '../components/sections/HeroSection';
import ServicesSection from './ServicesSection';
import ContactUsSection from '../components/sections/ContactUsSection';

export default function Homepage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ContactUsSection />
    </div>
  );
}