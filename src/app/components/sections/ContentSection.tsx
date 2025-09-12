import { SectionProps, GridItem as GridItemType, ButtonProps } from '@/app/lib/types';
import { getBackgroundClass, getTextColor, getDescriptionColor, getMaxWidthClass, getLayoutClass } from '@/app/lib/utils';
import GridItem from '@/app/components/ui/GridItem';
import Button from '@/app/components/ui/Button';

export default function ContentSection({
  title,
  description,
  gridItems,
  buttons,
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

        {gridItems && gridItems.length > 0 && (
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