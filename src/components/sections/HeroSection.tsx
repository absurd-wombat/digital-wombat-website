import { SectionProps, ButtonProps } from "@/lib/types";
import { colors } from "@/lib/colors";

import {
  getBackgroundClass,
  getMaxWidthClass,
  getLayoutClass,
} from "@/lib/utils";
import Button from "@/components/ui/Button";
import GridItem, { getGridClasses } from "@/components/ui/GridItem";

interface HeroSectionProps extends SectionProps {
  subtitle?: string;
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
}

export default function HeroSection({
  title = "Digital Wombat",
  subtitle = "Innovative tech solutions that transform ideas into reality",
  description = "Fast, effective, and reliable development services for modern businesses",
  primaryButton,
  secondaryButton,
  gridItems,
  backgroundColor = "gradient",
  layout = "centered",
  maxWidth = "4xl",
}: HeroSectionProps) {
  return (
    <section
      className={`flex flex-col items-center justify-center ${getBackgroundClass(backgroundColor)} min-h-[60vh]`}
    >
      <div
        className={`${getMaxWidthClass(maxWidth)} mx-auto px-6 ${getLayoutClass(layout)}`}
      >
        <h1
          className={`text-5xl md:text-7xl font-bold mb-8 ${colors.text.heading}`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`text-xl md:text-2xl mb-6 ${colors.text.description} max-w-3xl mx-auto`}
          >
            {subtitle}
          </p>
        )}
        {description && (
          <p
            className={`text-lg md:text-xl mb-12 ${colors.text.description} max-w-2xl mx-auto`}
          >
            {description}
          </p>
        )}

        {gridItems && gridItems.length > 0 && (
          <div className={`${getGridClasses(gridItems.length)} mb-12`}>
            {gridItems.map((item, index) => (
              <GridItem key={index} item={item} />
            ))}
          </div>
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
