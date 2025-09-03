import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

interface RTLIconProps {
  children: React.ReactNode;
  rtlFlip?: boolean;
}

export function RTLIcon({ children, rtlFlip = true }: RTLIconProps) {
  const { isRTL } = useLanguage();
  
  return (
    <span 
      className={rtlFlip && isRTL ? 'scale-x-[-1]' : ''}
      style={{ display: 'inline-block' }}
    >
      {children}
    </span>
  );
} 