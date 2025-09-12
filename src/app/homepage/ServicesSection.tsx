// src/app/homepage/ServicesSection.tsx
import ContentSection from '@/app/components/sections/ContentSection';
import { servicesInfo } from '@/app/data/services';
import { GridItem } from '@/app/lib/types';

export default function ServicesSection() {
  const servicesData: GridItem[] = servicesInfo.map(service => ({
    icon: (
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: service.title,
    description: service.description
  }));

  return (
    <ContentSection 
      title="What We Do"
      gridItems={servicesData}
      maxWidth="6xl"
    />
  );
}