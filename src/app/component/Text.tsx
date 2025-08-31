// src/components/Text/Text.tsx

import React from 'react';
import { TextProps, TextTag } from '@/app/component/text/types';

const Text: React.FC<TextProps> = ({ 
  as: Tag = 'p', 
  children, 
  className = '', 
  size 
}) => {
  const getSizeClass = (tag: TextTag, size?: string) => {
    if (size) {
      switch (size) {
        case 'sm':
          return 'text-sm';
        case 'md':
          return 'text-base';
        case 'lg':
          return 'text-lg';
        case 'xl':
          return 'text-xl';
        default:
          return 'text-base';
      }
    };
    switch (tag) {
      case 'h1':
        return 'text-3xl md:text-4xl font-bold tracking-tight py-5';
      case 'h2':
        return 'text-2xl md:text-3xl font-bold tracking-tight text-white';
      case 'h3':
        return 'text-xl md:text-3xl font-semibold';
      case 'h4':
        return 'text-xl md:text-2xl font-semibold';
      case 'h5':
        return 'text-lg md:text-xl font-medium';
      case 'h6':
        return 'text-base md:text-lg font-medium';
      case 'p':
        return 'text-sm leading-relaxed mt-2';
      case 'span':
        return 'text-xs ';
      case 'small':
        return 'text-xs text-gray-500';
      case 'strong':
        return 'font-bold';
      default:
        return '';
    }
  };

  const combinedClasses = `${getSizeClass(Tag, size)} ${className}`;

  return (
    <Tag className={combinedClasses}>
      {children}
    </Tag>
  );
};

export default Text;