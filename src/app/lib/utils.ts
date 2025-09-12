export function getButtonClasses(variant: string, backgroundColor?: string): string {
    const baseClasses = "px-8 py-3 rounded-lg font-semibold transition-all duration-200 inline-block text-center";
    
    if (backgroundColor === 'indigo') {
      return variant === 'primary' 
        ? `${baseClasses} bg-white text-indigo-600 hover:bg-gray-100 hover:scale-105`
        : `${baseClasses} border-2 border-white text-white hover:bg-white hover:text-indigo-600`;
    }
    
    return variant === 'primary'
      ? `${baseClasses} bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105`
      : `${baseClasses} border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white`;
  }
  
  export function getBackgroundClass(backgroundColor: string): string {
    switch (backgroundColor) {
      case 'gray': return 'bg-gray-50';
      case 'indigo': return 'bg-indigo-600';
      case 'gradient': return 'bg-gradient-to-br from-blue-50 to-indigo-100';
      default: return 'bg-white';
    }
  }
  
  export function getTextColor(backgroundColor: string): string {
    return backgroundColor === 'indigo' ? 'text-white' : 'text-gray-800';
  }
  
  export function getDescriptionColor(backgroundColor: string): string {
    return backgroundColor === 'indigo' ? 'text-indigo-100' : 'text-gray-600';
  }
  
  export function getMaxWidthClass(maxWidth: string): string {
    switch (maxWidth) {
      case '4xl': return 'max-w-4xl';
      case '6xl': return 'max-w-6xl';
      case 'full': return 'max-w-full';
      default: return 'max-w-6xl';
    }
  }
  
  export function getLayoutClass(layout: string): string {
    return layout === 'centered' ? 'text-center' : 'text-left';
  }