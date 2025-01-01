import React from 'react';
import { navigateToHome } from '../../utils/navigation';

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const MobileNavLink = ({ href, children }: MobileNavLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (href === '#home') {
      navigateToHome();
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
    >
      {children}
    </a>
  );
};