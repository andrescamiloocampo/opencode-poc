import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Text } from './Text';

const hasClass = (element: HTMLElement | null, className: string): boolean => {
  if (!element) return false;
  return element.className.split(' ').some(c => c.includes(className));
};

describe('Text', () => {
  it('renders text with children', () => {
    render(<Text>Hello World</Text>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('renders as p element by default', () => {
    const { container } = render(<Text>Test</Text>);
    expect(container.querySelector('p')).toBeInTheDocument();
  });

  it('applies correct variant class', () => {
    const { container } = render(<Text variant="h1">Test</Text>);
    expect(container.querySelector('h1')).toBeInTheDocument();
  });

  it('applies correct color class', () => {
    const { container } = render(<Text color="secondary">Test</Text>);
    expect(hasClass(container.firstChild as HTMLElement, 'secondary')).toBe(true);
  });

  it('applies align class', () => {
    const { container } = render(<Text align="center">Test</Text>);
    expect(hasClass(container.firstChild as HTMLElement, 'center')).toBe(true);
  });

  it('applies weight class', () => {
    const { container } = render(<Text weight="bold">Test</Text>);
    expect(hasClass(container.firstChild as HTMLElement, 'bold')).toBe(true);
  });

  it('applies custom className', () => {
    const { container } = render(<Text className="custom-text">Test</Text>);
    expect(container.firstChild).toHaveClass('custom-text');
  });

  it('renders all heading variants', () => {
    const variants: Array<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> = [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
    ];
    variants.forEach((variant) => {
      const { container } = render(<Text variant={variant}>Test</Text>);
      expect(container.querySelector(variant)).toBeInTheDocument();
    });
  });

  it('renders p variant', () => {
    const { container } = render(<Text variant="p">Test</Text>);
    expect(container.querySelector('p')).toBeInTheDocument();
  });

  it('renders span variant', () => {
    const { container } = render(<Text variant="span">Test</Text>);
    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('renders small variant', () => {
    const { container } = render(<Text variant="small">Test</Text>);
    expect(container.querySelector('small')).toBeInTheDocument();
  });

  it('respects as prop to change element', () => {
    const { container } = render(<Text as="h3">Test</Text>);
    expect(container.querySelector('h3')).toBeInTheDocument();
  });

  it('renders all color variants', () => {
    const colors: Array<'primary' | 'secondary' | 'tertiary' | 'muted' | 'accent'> = [
      'primary',
      'secondary',
      'tertiary',
      'muted',
      'accent',
    ];
    colors.forEach((color) => {
      const { container } = render(<Text color={color}>Test</Text>);
      expect(hasClass(container.firstChild as HTMLElement, color)).toBe(true);
    });
  });

  it('renders all align variants', () => {
    const aligns: Array<'left' | 'center' | 'right'> = ['left', 'center', 'right'];
    aligns.forEach((align) => {
      const { container } = render(<Text align={align}>Test</Text>);
      expect(hasClass(container.firstChild as HTMLElement, align)).toBe(true);
    });
  });

  it('renders all weight variants', () => {
    const weights: Array<'normal' | 'medium' | 'semibold' | 'bold'> = [
      'normal',
      'medium',
      'semibold',
      'bold',
    ];
    weights.forEach((weight) => {
      const { container } = render(<Text weight={weight}>Test</Text>);
      expect(hasClass(container.firstChild as HTMLElement, weight)).toBe(true);
    });
  });
});