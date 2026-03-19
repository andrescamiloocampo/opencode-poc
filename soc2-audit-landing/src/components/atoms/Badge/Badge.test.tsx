import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

const hasClass = (element: HTMLElement | null, className: string): boolean => {
  if (!element) return false;
  return element.className.split(' ').some(c => c.includes(className));
};

describe('Badge', () => {
  it('renders badge with children', () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  it('renders with default variant', () => {
    const { container } = render(<Badge>Test</Badge>);
    expect(hasClass(container.firstChild as HTMLElement, 'default')).toBe(true);
  });

  it('applies correct variant class', () => {
    const { container } = render(<Badge variant="success">Test</Badge>);
    expect(hasClass(container.firstChild as HTMLElement, 'success')).toBe(true);
  });

  it('applies correct size class', () => {
    const { container } = render(<Badge size="sm">Test</Badge>);
    expect(hasClass(container.firstChild as HTMLElement, 'sm')).toBe(true);
  });

  it('renders with md size by default', () => {
    const { container } = render(<Badge>Test</Badge>);
    expect(hasClass(container.firstChild as HTMLElement, 'md')).toBe(true);
  });

  it('applies custom className', () => {
    const { container } = render(<Badge className="custom-badge">Test</Badge>);
    expect(container.firstChild).toHaveClass('custom-badge');
  });

  it('renders all variants correctly', () => {
    const variants: Array<'default' | 'success' | 'warning' | 'error' | 'info'> = [
      'default',
      'success',
      'warning',
      'error',
      'info',
    ];
    variants.forEach((variant) => {
      const { container } = render(<Badge variant={variant}>Test</Badge>);
      expect(hasClass(container.firstChild as HTMLElement, variant)).toBe(true);
    });
  });

  it('renders both sizes correctly', () => {
    const { container: smContainer } = render(<Badge size="sm">Test</Badge>);
    expect(hasClass(smContainer.firstChild as HTMLElement, 'sm')).toBe(true);

    const { container: mdContainer } = render(<Badge size="md">Test</Badge>);
    expect(hasClass(mdContainer.firstChild as HTMLElement, 'md')).toBe(true);
  });

  it('renders the dot element', () => {
    render(<Badge>Test</Badge>);
    const dot = document.querySelector('[class*="dot"]');
    expect(dot).toBeInTheDocument();
  });
});