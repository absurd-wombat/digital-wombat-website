import { SectionProps } from "@/lib/types";
import { colors } from "@/lib/colors";
import {
  getMaxWidthClass,
  getLayoutClass,
  getHeadingClass,
  getDescriptionClass,
} from "@/lib/utils";
import GridItem from "@/components/ui/GridItem";
import Button from "@/components/ui/Button";

type DetailObject = { category: string; items: string[] };

function isDetailObject(detail: unknown): detail is DetailObject {
  return (
    typeof detail === "object" &&
    detail !== null &&
    "category" in detail &&
    "items" in detail &&
    Array.isArray((detail as DetailObject).items)
  );
}

export function buildCardItems(
  raw: Array<{
    icon: string;
    title: string;
    subtitle?: string;
    company?: string;
    period?: string;
    location?: string;
    description?: string;
    details: Array<{ category: string; items: string[] }>;
  }>,
) {
  return raw.map((item) => ({
    icon: item.icon,
    title: item.title,
    subtitle:
      item.subtitle ||
      `${item.company || ""}${item.location ? ` · ${item.location}` : ""}`,
    description: item.description || item.period || "",
    details:
      item.details.length > 0
        ? item.details.map((detail) => (
            <div key={detail.category}>
              <span className={`font-semibold ${colors.text.cardDetail}`}>
                {detail.category}:
              </span>
              <ul className="list-disc ml-6">
                {detail.items.map((entry, idx) => (
                  <li key={idx} className={colors.text.cardDetail}>
                    {entry}
                  </li>
                ))}
              </ul>
            </div>
          ))
        : undefined,
  }));
}

interface RawCard {
  icon: string;
  title: string;
  subtitle?: string;
  company?: string;
  period?: string;
  location?: string;
  description?: string;
  details: Array<{ category: string; items: string[] }>;
}

interface ContentSectionProps extends Omit<SectionProps, "cardItems"> {
  cards?: RawCard[];
}

export default function ContentSection({
  title,
  description,
  gridItems,
  buttons,
  cards,
  variant,
  backgroundColor = "white",
  layout = "centered",
  maxWidth = "6xl",
  className,
}: ContentSectionProps) {
  const displayCardItems = cards ? buildCardItems(cards) : undefined;

  return (
    <section
      className={`py-20 ${colors.background.section[backgroundColor] || colors.background.default} ${className || ""}`}
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

        {variant === "card" &&
          displayCardItems &&
          displayCardItems.length > 0 && (
            <div className="max-w-6xl mx-auto flex flex-col gap-8 mb-12">
              {displayCardItems.map((card, index) => (
                <div
                  key={index}
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
                  {card.subtitle && (
                    <div className={`${colors.text.cardSubtitle} mb-1`}>
                      {card.subtitle}
                    </div>
                  )}
                  {card.description && (
                    <div
                      className={`text-sm ${colors.text.cardDescription} mb-1`}
                    >
                      {card.description}
                    </div>
                  )}
                  {card.details &&
                    Array.isArray(card.details) &&
                    card.details.length > 0 && (
                      <div className="mt-4 space-y-4">
                        {card.details.map(
                          (
                            detail: DetailObject | string | React.ReactNode,
                            i: number,
                          ) => {
                            if (isDetailObject(detail)) {
                              return (
                                <div key={i}>
                                  <span
                                    className={`font-semibold ${colors.text.cardDetail}`}
                                  >
                                    {detail.category}:
                                  </span>
                                  {detail.items.length > 0 && (
                                    <ul className="list-disc list-inside ml-6 mt-2">
                                      {detail.items.map(
                                        (item: string, j: number) => (
                                          <li
                                            key={j}
                                            className={colors.text.cardDetail}
                                          >
                                            {item}
                                          </li>
                                        ),
                                      )}
                                    </ul>
                                  )}
                                </div>
                              );
                            } else {
                              return (
                                <div key={i} className={colors.text.cardDetail}>
                                  {detail}
                                </div>
                              );
                            }
                          },
                        )}
                      </div>
                    )}
                  {card.details && !Array.isArray(card.details) && (
                    <div className={`mt-4 ${colors.text.cardDetail}`}>
                      {card.details}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

        {/* Existing grid and button logic */}
        {(!variant || variant === "grid") &&
          gridItems &&
          gridItems.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {gridItems.map((item, index) => (
                <GridItem key={index} item={item} />
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
