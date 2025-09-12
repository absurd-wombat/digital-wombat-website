import React from 'react';
import Link from 'next/link';

interface GridItem {
  icon?: React.ReactNode | string;
  title?: string;
  value?: string;
  description?: string;
  label?: string;
}

interface Button {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
}

interface ContentSectionProps {
  title: string;
  description?: string;
  gridItems?: GridItem[];
  buttons?: Button[];
  backgroundColor?: 'white' | 'gray' | 'indigo';
  layout?: 'centered' | 'left-aligned';
  maxWidth?: '4xl' | '6xl' | 'full';
}

export default function ContentSection({
  title,
  description,
  gridItems,
  buttons,
  backgroundColor = 'white',
  layout = 'centered',
  maxWidth = '6xl'
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

  const getMaxWidthClass = () => {
    switch (maxWidth) {
      case '4xl': return 'max-w-4xl';
      case '6xl': return 'max-w-6xl';
      case 'full': return 'max-w-full';
      default: return 'max-w-6xl';
    }
  };

  const getLayoutClass = () => {
    return layout === 'centered' ? 'text-center' : 'text-left';
  };

  const getButtonClasses = (variant: 'primary' | 'secondary') => {
    const baseClasses = "px-8 py-3 rounded-lg font-semibold transition-all duration-200 inline-block text-center";
    
    if (backgroundColor === 'indigo') {
      return variant === 'primary' 
        ? `${baseClasses} bg-white text-indigo-600 hover:bg-gray-100 hover:scale-105`
        : `${baseClasses} border-2 border-white text-white hover:bg-white hover:text-indigo-600`;
    }
    
    return variant === 'primary'
      ? `${baseClasses} bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105`
      : `${baseClasses} border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white`;
  };

  return (
    <section className={`py-20 ${getBackgroundClass()}`}>
      <div className={`${getMaxWidthClass()} mx-auto px-6 ${getLayoutClass()}`}>
        {/* Title */}
        <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${getTextColor()}`}>
          {title}
        </h2>

        {/* Description */}
        {description && (
          <p className={`text-xl mb-12 leading-relaxed ${getDescriptionColor()}`}>
            {description}
          </p>
        )}

        {/* Optional Grid */}
        {gridItems && gridItems.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {gridItems.map((item, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                {/* Icon */}
                {item.icon && (
                  <div className="mb-6">
                    {typeof item.icon === 'string' ? (
                      <div className="text-4xl">{item.icon}</div>
                    ) : (
                      <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
                        {item.icon}
                      </div>
                    )}
                  </div>
                )}
                
                {/* Title or Value */}
                {(item.title || item.value) && (
                  <div className={`text-2xl font-bold mb-4 ${getTextColor()}`}>
                    {item.title || item.value}
                  </div>
                )}
                
                {/* Description or Label */}
                {(item.description || item.label) && (
                  <div className={getDescriptionColor()}>
                    {item.description || item.label}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}


        {/* Buttons */}
        {buttons && buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={getButtonClasses(button.variant)}
              >
                {button.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
