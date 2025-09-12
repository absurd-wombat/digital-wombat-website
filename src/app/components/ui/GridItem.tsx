import { GridItem as GridItemType } from '@/app/lib/types';

interface GridItemProps {
  item: GridItemType;
  textColor: string;
  descriptionColor: string;
}

export default function GridItem({ item, textColor, descriptionColor }: GridItemProps) {
  return (
    <div className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
      {item.icon && (
        <div className="mb-6">
          {typeof item.icon === 'string' ? (
            <div className="text-4xl">{item.icon}</div>
          ) : (
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
              {item.icon}
            </div>
          )}
        </div>
      )}
      
      {(item.title || item.value) && (
        <div className={`text-2xl font-bold mb-4 ${textColor}`}>
          {item.title || item.value}
        </div>
      )}
      
      {(item.description || item.label) && (
        <div className={descriptionColor}>
          {item.description || item.label}
        </div>
      )}
    </div>
  );
}