import React from 'react';

export const Link = ({ to, children, ...props }: any) => {
  return React.createElement('a', { href: to, ...props }, children);
}; 