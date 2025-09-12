import HeroSection from '../components/HeroSection';
import ServicesSection from './ServicesSection';
import AboutSection from './AboutSection';
import ContactUsSection from '../components/ContactUsSection';

export default function Homepage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactUsSection />
    </div>
  );
}