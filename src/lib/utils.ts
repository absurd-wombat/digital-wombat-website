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
      case 'dark': return 'bg-gray-900';
      case 'indigo': return 'bg-indigo-600';
      default: return 'bg-white';
    }
  }
  
  export function getHeadingClass(backgroundColor: string): string {
    return backgroundColor === 'dark' || backgroundColor === 'indigo'
      ? 'text-white'
      : 'text-gray-900';
  }

  export function getDescriptionClass(backgroundColor: string): string {
    return backgroundColor === 'dark' || backgroundColor === 'indigo'
      ? 'text-gray-300'
      : 'text-gray-600';
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