import { GridItem as GridItemType } from '@/app/lib/types';

interface GridItemProps {
  item: GridItemType;
  textColor: string;
  descriptionColor: string;
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


export default function GridItem({ item, textColor, descriptionColor }: GridItemProps) {
  return (
    <div className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
      {item.icon && (
        <div className="mb-6">
          {typeof item.icon === 'string' ? (
            <div className="text-4xl">{item.icon}</div>
          ) : (
            <div className="w-16 h-16 bg-indigo-200 rounded-full flex items-center justify-center mx-auto text-indigo-600">
              {item.icon}
            </div>
          )}
        </div>
      )}
      
      {item.title && (
        <div className={`text-2xl font-bold mb-2 ${textColor}`}>
          {item.title}
        </div>
      )}
      
      {item.value && (
        <div className={`text-lg font-semibold mb-4 ${textColor}`}>
          {item.value}
        </div>
      )}
    </div>
  );
}