import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

const hasClass = (element: HTMLElement | null, className: string): boolean => {
  if (!element) return false;
  return element.className.split(' ').some(c => c.includes(className));
};

describe('Button', () => {
  it('renders button with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('applies primary variant by default', () => {
    const { container } = render(<Button>Test</Button>);
    expect(hasClass(container.firstChild as HTMLElement, 'primary')).toBe(true);
  });

  it('applies correct variant class', () => {
    const { container } = render(<Button variant="secondary">Test</Button>);
    expect(hasClass(container.firstChild as HTMLElement, 'secondary')).toBe(true);
  });

  it('applies correct size class', () => {
    const { container } = render(<Button size="lg">Test</Button>);
    expect(hasClass(container.firstChild as HTMLElement, 'lg')).toBe(true);
  });

  it('applies fullWidth class when isFullWidth is true', () => {
    const { container } = render(<Button isFullWidth>Test</Button>);
    expect(hasClass(container.firstChild as HTMLElement, 'fullWidth')).toBe(true);
  });

  it('does not apply fullWidth class when isFullWidth is false', () => {
    const { container } = render(<Button>Test</Button>);
    expect(hasClass(container.firstChild as HTMLElement, 'fullWidth')).toBe(false);
  });

  it('applies custom className', () => {
    const { container } = render(<Button className="custom-class">Test</Button>);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders leftIcon when provided', () => {
    render(<Button leftIcon={<span>icon</span>}>Test</Button>);
    expect(screen.getByText('icon')).toBeInTheDocument();
  });

  it('renders rightIcon when provided', () => {
    render(<Button rightIcon={<span>icon</span>}>Test</Button>);
    expect(screen.getByText('icon')).toBeInTheDocument();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Test</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('can be clicked', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<Button onClick={onClick}>Click me</Button>);
    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<Button disabled onClick={onClick}>Click me</Button>);
    await user.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('renders all variants correctly', () => {
    const variants: Array<'primary' | 'secondary' | 'outline' | 'ghost'> = [
      'primary',
      'secondary',
      'outline',
      'ghost',
    ];
    variants.forEach((variant) => {
      const { container } = render(<Button variant={variant}>Test</Button>);
      expect(hasClass(container.firstChild as HTMLElement, variant)).toBe(true);
    });
  });

  it('renders all sizes correctly', () => {
    const sizes: Array<'sm' | 'md' | 'lg'> = ['sm', 'md', 'lg'];
    sizes.forEach((size) => {
      const { container } = render(<Button size={size}>Test</Button>);
      expect(hasClass(container.firstChild as HTMLElement, size)).toBe(true);
    });
  });
});