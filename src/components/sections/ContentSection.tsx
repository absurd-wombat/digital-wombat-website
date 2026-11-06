import { SectionProps } from "@/lib/types";
import { colors } from "@/lib/colors";
import {
  getBackgroundClass,
  getMaxWidthClass,
  getLayoutClass,
  getHeadingClass,
  getDescriptionClass,
} from "@/lib/utils";
import GridItem, { getGridClasses } from "@/components/ui/GridItem";
import ButtonRow from "@/components/ui/ButtonRow";

interface DetailObject {
  category: string;
  items: string[];
}

interface RawCard {
  icon: string;
  title: string;
  subtitle?: string;
  company?: string;
  period?: string;
  location?: string;
  description?: string;
  details: DetailObject[];
}

interface ContentSectionProps extends SectionProps {
  cards?: RawCard[];
}

function CardDetails({ details }: { details: DetailObject[] }) {
  if (details.length === 0) {
    return null;
  }
  return (
    <div className="mt-4 space-y-4">
      {details.map((detail) => (
        <div key={detail.category}>
          <span className={`font-semibold ${colors.text.cardDetail}`}>
            {detail.category}:
          </span>
          {detail.items.length > 0 && (
            <ul className="list-disc list-inside ml-6 mt-2">
              {detail.items.map((item, index) => (
                <li key={index} className={colors.text.cardDetail}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ContentSection({
  title,
  description,
  gridItems,
  buttons,
  cards,
  backgroundColor = "white",
  layout = "centered",
  maxWidth = "6xl",
  className,
}: ContentSectionProps) {
  return (
    <section
      className={`py-20 ${getBackgroundClass(backgroundColor)} ${className || ""}`}
    >
      <div
        className={`${getMaxWidthClass(maxWidth)} mx-auto px-6 ${getLayoutClass(layout)}`}
      >
        <h2
          className={`text-3xl md:text-4xl font-bold tracking-tight mb-8 ${getHeadingClass(backgroundColor)}`}
        >
          {title}
        </h2>

        {description && (
          <p
            className={`text-xl mb-12 leading-relaxed ${getDescriptionClass(backgroundColor)}`}
          >
            {description}
          </p>
        )}

        {cards && cards.length > 0 && (
          <div className="max-w-6xl mx-auto flex flex-col gap-8 mb-12">
            {cards.map((card) => {
              const subtitle =
                card.subtitle ||
                `${card.company || ""}${card.location ? ` · ${card.location}` : ""}`;
              const description = card.description || card.period || "";
              return (
                <div
                  key={card.title}
                  className={`${colors.card.container} p-6 md:p-8 w-full max-w-7xl mx-auto text-left`}
                >
                  <div className="flex items-center mb-2 justify-start">
                    {card.icon && (
                      <span className="text-3xl mr-3">{card.icon}</span>
                    )}
                    <span
                      className={`text-xl font-semibold ${colors.text.cardTitle}`}
                    >
                      {card.title}
                    </span>
                  </div>
                  {subtitle && (
                    <div className={`${colors.text.cardSubtitle} mb-1`}>
                      {subtitle}
                    </div>
                  )}
                  {description && (
                    <div
                      className={`text-sm ${colors.text.cardDescription} mb-1`}
                    >
                      {description}
                    </div>
                  )}
                  <CardDetails details={card.details} />
                </div>
              );
            })}
          </div>
        )}

        {gridItems && gridItems.length > 0 && (
          <div className={`${getGridClasses(gridItems.length)} mb-12`}>
            {gridItems.map((item, index) => (
              <GridItem key={index} item={item} />
            ))}
          </div>
        )}

        {buttons && <ButtonRow buttons={buttons} />}
      </div>
    </section>
  );
}
