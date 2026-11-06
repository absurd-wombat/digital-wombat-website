import { GridItem as GridItemType } from "@/lib/types";
import { colors } from "@/lib/colors";

interface GridItemProps {
  item: GridItemType;
}

export const getGridClasses = (itemCount: number) => {
  if (itemCount === 1) {
    return "grid grid-cols-1 justify-items-center";
  } else if (itemCount === 2) {
    return "grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-8";
  } else if (itemCount === 3) {
    return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8";
  } else {
    return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-8";
  }
};

export default function GridItem({ item }: GridItemProps) {
  return (
    <div
      className={`text-center p-6 ${colors.card.container} hover:shadow-md transition-shadow duration-300 w-full min-h-[200px] flex flex-col justify-center overflow-hidden`}
    >
      {item.icon && (
        <div className="mb-6">
          {typeof item.icon === "string" ? (
            <div className={`text-4xl ${colors.text.cardTitle}`}>
              {item.icon}
            </div>
          ) : (
            <div
              className={`w-16 h-16 ${colors.background.accentSoft} rounded-full flex items-center justify-center mx-auto ${colors.text.heading}`}
            >
              {item.icon}
            </div>
          )}
        </div>
      )}

      {item.title && (
        <div className={`text-xl font-semibold tracking-tight mb-2 ${colors.text.cardTitle}`}>
          {item.title}
        </div>
      )}

      {item.value && (
        <div
          className={`text-lg font-semibold mb-4 break-words ${colors.text.cardTitle}`}
        >
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-600 transition-colors"
            >
              {item.value}
            </a>
          ) : (
            item.value
          )}
        </div>
      )}
    </div>
  );
}
