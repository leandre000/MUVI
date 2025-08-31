import React from 'react';

export type TextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'small' | 'strong';

export interface TextProps {
  as?: TextTag;
  children: React.ReactNode;
  className?: string;
  size?:  'sm' | 'md' | 'lg' | 'xl';
}