// src/app/homepage/ServicesSection.tsx
import ContentSection from "@/components/sections/ContentSection";
import { GridItem } from "@/lib/types";

const servicesInfo = [
  {
    title: "AI & Machine Learning",
    description:
      "Cutting-edge AI solutions and machine learning models tailored to your business needs",
  },
  {
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built with cutting-edge technologies",
  },
  {
    title: "Backend Development",
    description:
      "Robust server-side applications, APIs, and database solutions that power your business",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Scalable cloud solutions and DevOps practices to ensure reliable, secure, and efficient operations",
  },
];

export default function ServicesSection() {
  const servicesData: GridItem[] = servicesInfo.map((service) => ({
    icon: (
      <svg
        className="w-8 h-8 text-indigo-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    title: service.title,
    description: service.description,
  }));

  return (
    <ContentSection
      title="What We Do"
      gridItems={servicesData}
      maxWidth="6xl"
    />
  );
}
