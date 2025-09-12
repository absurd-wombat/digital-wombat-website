import React from 'react';
import Link from 'next/link';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

interface Button {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
}

interface ContentSectionProps {
  type: 'services' | 'about' | 'cta';
  title: string;
  description?: string;
  services?: Service[];
  stats?: Stat[];
  buttons?: Button[];
  backgroundColor?: 'white' | 'gray' | 'indigo';
}

const defaultServices: Service[] = [
  {
    icon: (
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with cutting-edge technologies"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Mobile Apps",
    description: "Cross-platform mobile applications that deliver exceptional user experiences"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Tech Consulting",
    description: "Strategic technology guidance to help your business grow and scale efficiently"
  }
];

const defaultStats: Stat[] = [
  { value: "50+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" }
];

const defaultButtons: Button[] = [
  { text: "View Our Work", href: "/portfolio", variant: "primary" },
  { text: "Contact Us", href: "/contact", variant: "secondary" }
];

export default function ContentSection({
  type,
  title,
  description,
  services = defaultServices,
  stats = defaultStats,
  buttons = defaultButtons,
  backgroundColor = 'white'
}: ContentSectionProps) {
  const getBackgroundClass = () => {
    switch (backgroundColor) {
      case 'gray': return 'bg-gray-50';
      case 'indigo': return 'bg-indigo-600';
      default: return 'bg-white';
    }
  };

  const getTextColor = () => {
    return backgroundColor === 'indigo' ? 'text-white' : 'text-gray-800';
  };

  const getDescriptionColor = () => {
    return backgroundColor === 'indigo' ? 'text-indigo-100' : 'text-gray-600';
  };

  if (type === 'services') {
    return (
      <section className={`py-20 ${getBackgroundClass()}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${getTextColor()}`}>
            {title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {service.icon}
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${getTextColor()}`}>{service.title}</h3>
                <p className={getDescriptionColor()}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (type === 'about') {
    return (
      <section className={`py-20 ${getBackgroundClass()}`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${getTextColor()}`}>
            {title}
          </h2>
          {description && (
            <p className={`text-xl mb-8 leading-relaxed ${getDescriptionColor()}`}>
              {description}
            </p>
          )}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                <div className={getDescriptionColor()}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (type === 'cta') {
    return (
      <section className={`py-20 ${getBackgroundClass()}`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${getTextColor()}`}>
            {title}
          </h2>
          {description && (
            <p className={`text-xl mb-12 max-w-2xl mx-auto ${getDescriptionColor()}`}>
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons.map((button, index) => (
              <Link 
                key={index}
                href={button.href} 
                className={
                  button.variant === 'primary' 
                    ? "bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                    : "border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                }
              >
                {button.text}
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return null;
}
