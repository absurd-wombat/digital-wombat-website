import { SectionProps } from '@/app/lib/types';
import { getBackgroundClass, getTextColor, getDescriptionColor, getMaxWidthClass, getLayoutClass } from '@/app/lib/utils';
import GridItem from '@/app/components/ui/GridItem';
import Button from '@/app/components/ui/Button';

export default function ContentSection({
  title,
  description,
  gridItems,
  buttons,
  cardItems,
  variant,
  backgroundColor = 'white',
  layout = 'centered',
  maxWidth = '6xl',
  className
}: SectionProps) {
  return (
    <section className={`py-20 ${getBackgroundClass(backgroundColor)} ${className || ''}`}>
      <div className={`${getMaxWidthClass(maxWidth)} mx-auto px-6 ${getLayoutClass(layout)}`}>
        <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${getTextColor(backgroundColor)}`}>
          {title}
        </h2>

        {description && (
          <p className={`text-xl mb-12 leading-relaxed ${getDescriptionColor(backgroundColor)}`}>
            {description}
          </p>
        )}

        {variant === 'card' && cardItems && cardItems.length > 0 && (
          <div className="flex flex-col gap-8 mb-12">
            {cardItems.map((card, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow p-6">
                <div className="flex items-center mb-2">
                  {card.icon && <span className="text-3xl mr-3">{card.icon}</span>}
                  <span className="text-xl font-semibold">{card.title}</span>
                </div>
                {card.subtitle && <div className="text-gray-700 mb-1">{card.subtitle}</div>}
                {card.description && <div className="text-sm text-gray-500 mb-1">{card.description}</div>}
                {card.details && Array.isArray(card.details) && card.details.length > 0 && (
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    {card.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
                {card.details && !Array.isArray(card.details) && (
                  <div className="mt-4">{card.details}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Existing grid and button logic */}
        {(!variant || variant === 'grid') && gridItems && gridItems.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {gridItems.map((item, index) => (
              <GridItem
                key={index}
                item={item}
                textColor={getTextColor(backgroundColor)}
                descriptionColor={getDescriptionColor(backgroundColor)}
              />
            ))}
          </div>
        )}

        {buttons && buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons.map((button, index) => (
              <Button key={index} {...button} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}