import { SectionProps, ButtonProps } from '@/app/lib/types';

import { getBackgroundClass, getTextColor, getDescriptionColor, getMaxWidthClass, getLayoutClass } from '@/app/lib/utils';
import Button from '@/app/components/ui/Button';

interface HeroSectionProps extends SectionProps {
  subtitle?: string;
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
  fullHeight?: boolean;
}

export default function HeroSection({
  title = "Digital Wombat",
  subtitle = "Innovative tech solutions that transform ideas into reality",
  description = "Fast, effective, and reliable development services for modern businesses",
  primaryButton,
  secondaryButton,
  fullHeight = false,
  backgroundColor = 'gradient',
  layout = 'centered',
  maxWidth = '4xl'
}: HeroSectionProps) {
  const heightClass = fullHeight ? 'min-h-[calc(100vh-8rem)]' : 'min-h-[80vh]';
  
  return (
    <section className={`flex flex-col items-center justify-center ${getBackgroundClass(backgroundColor)} ${heightClass}`}>
      <div className={`${getMaxWidthClass(maxWidth)} mx-auto px-6 ${getLayoutClass(layout)}`}>
        <h1 className={`text-5xl md:text-7xl font-bold mb-8 ${getTextColor(backgroundColor)}`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`text-xl md:text-2xl mb-6 ${getDescriptionColor(backgroundColor)} max-w-3xl mx-auto`}>
            {subtitle}
          </p>
        )}
        {description && (
          <p className={`text-lg md:text-xl mb-12 ${getDescriptionColor(backgroundColor)} max-w-2xl mx-auto`}>
            {description}
          </p>
        )}
        {(primaryButton || secondaryButton) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryButton && <Button {...primaryButton} />}
            {secondaryButton && <Button {...secondaryButton} />}
          </div>
        )}
      </div>
    </section>
  );
}
