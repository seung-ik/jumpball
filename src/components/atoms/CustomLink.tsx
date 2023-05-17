import React from 'react';
import Link from 'next/link';

interface Props {
  href: string;
  children: React.ReactNode;
}
const CustomLink: React.FC<Props> = ({ href, children }) => {
  return (
    <Link
      href={href}
      style={{ textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center' }}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
