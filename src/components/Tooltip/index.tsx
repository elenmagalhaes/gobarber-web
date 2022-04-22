import React, { ReactNode } from 'react';
import { Container } from './styles';

interface TooltipsProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipsProps> = ({
  title,
  className = '',
  children,
}) => (
  <Container className={className}>
    {children}
    <span>{title}</span>
  </Container>
);

export default Tooltip;
