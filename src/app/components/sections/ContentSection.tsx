import { SectionProps } from '@/app/lib/types';
import { colors } from '@/app/lib/colors';
import { getMaxWidthClass, getLayoutClass } from '@/app/lib/utils';
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
    <section className={`py-20 ${colors.background.section[backgroundColor] || colors.background.default} ${className || ''}`}>
      <div className={`${getMaxWidthClass(maxWidth)} mx-auto px-6 ${getLayoutClass(layout)}`}>
        <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${colors.text.heading}`}>
          {title}
        </h2>

        {description && (
          <p className={`text-xl mb-12 leading-relaxed ${colors.text.description}`}>
            {description}
          </p>
        )}

        {variant === 'card' && cardItems && cardItems.length > 0 && (
          <div className="max-w-6xl mx-auto flex flex-col gap-8 mb-12">
            {cardItems.map((card, index) => (
              <div key={index} className={`${colors.background.card} rounded-lg shadow p-6 w-full max-w-7xl mx-auto`}>
                <div className="flex items-center mb-2">
                  {card.icon && <span className="text-3xl mr-3">{card.icon}</span>}
                  <span className={`text-xl font-semibold ${colors.text.cardTitle}`}>{card.title}</span>
                </div>
                {card.subtitle && <div className={`${colors.text.cardSubtitle} mb-1`}>{card.subtitle}</div>}
                {card.description && <div className={`text-sm ${colors.text.cardDescription} mb-1`}>{card.description}</div>}
                {card.details && Array.isArray(card.details) && card.details.length > 0 && (
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    {card.details.map((detail, i) => (
                      <li key={i} className={colors.text.cardDetail}>{detail}</li>
                    ))}
                  </ul>
                )}
                {card.details && !Array.isArray(card.details) && (
                  <div className={`mt-4 ${colors.text.cardDetail}`}>{card.details}</div>
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