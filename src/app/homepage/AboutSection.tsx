import ContentSection from '../components/ContentSection';

const statsData = [
  { value: "50+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" }
];

export default function AboutSection() {
  return (
    <ContentSection 
      title="About Digital Wombat"
      description="We're passionate about creating digital solutions that make a difference. With expertise in modern web technologies and a focus on user experience, we help businesses and individuals bring their ideas to life."
      gridItems={statsData}
      backgroundColor="gray"
      maxWidth="4xl"
    />
  );
}
