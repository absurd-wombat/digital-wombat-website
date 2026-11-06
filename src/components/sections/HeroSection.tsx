import { SectionProps, ButtonProps } from "@/lib/types";
import { colors } from "@/lib/colors";

import {
  getBackgroundClass,
  getMaxWidthClass,
  getLayoutClass,
  getHeadingClass,
} from "@/lib/utils";
import ButtonRow from "@/components/ui/ButtonRow";
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
  backgroundColor = "white",
  layout = "centered",
  maxWidth = "4xl",
}: HeroSectionProps) {
  return (
    <section
      className={`relative isolate overflow-hidden flex flex-col items-center ${getBackgroundClass(backgroundColor)} py-20 md:py-28`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(420px_280px_at_5%_0%,rgba(199,210,254,0.55),transparent_65%),radial-gradient(420px_280px_at_95%_0%,rgba(251,207,232,0.45),transparent_65%)]"
      />
      <div
        className={`${getMaxWidthClass(maxWidth)} mx-auto px-6 ${getLayoutClass(layout)}`}
      >
        <h1
          className={`text-4xl md:text-6xl font-bold tracking-tight mb-6 ${getHeadingClass(backgroundColor)}`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`text-lg md:text-xl mb-4 ${colors.text.description} max-w-3xl mx-auto`}
          >
            {subtitle}
          </p>
        )}
        {description && (
          <p
            className={`text-base md:text-lg mb-10 ${colors.text.description} max-w-2xl mx-auto`}
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
          <ButtonRow
            buttons={[primaryButton, secondaryButton].filter(
              (button): button is ButtonProps => button !== undefined,
            )}
          />
        )}
      </div>
    </section>
  );
}
