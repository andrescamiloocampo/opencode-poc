import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import type { IconName } from './Icon.types';
import { Icon } from './Icon';

const hasClass = (element: HTMLElement | null, className: string): boolean => {
  if (!element) return false;
  return element.className.split(' ').some(c => c.includes(className));
};

describe('Icon', () => {
  it('renders icon element', () => {
    const { container } = render(<Icon name="check" />);
    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('renders svg element', () => {
    const { container } = render(<Icon name="check" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('applies icon class', () => {
    const { container } = render(<Icon name="check" />);
    expect(hasClass(container.firstChild as HTMLElement, 'icon')).toBe(true);
  });

  it('applies custom className', () => {
    const { container } = render(<Icon name="check" className="custom-icon" />);
    expect(container.firstChild).toHaveClass('custom-icon');
  });

  it('applies default size of 24px', () => {
    const { container } = render(<Icon name="check" />);
    expect(container.firstChild).toHaveStyle({ width: '24px', height: '24px' });
  });

  it('applies numeric size', () => {
    const { container } = render(<Icon name="check" size={32} />);
    expect(container.firstChild).toHaveStyle({ width: '32px', height: '32px' });
  });

  it('applies string size', () => {
    const { container } = render(<Icon name="check" size="20px" />);
    expect(container.firstChild).toHaveStyle({ width: '20px', height: '20px' });
  });

  it('renders check icon', () => {
    const { container } = render(<Icon name="check" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders shield icon', () => {
    const { container } = render(<Icon name="shield" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders lock icon', () => {
    const { container } = render(<Icon name="lock" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders search icon', () => {
    const { container } = render(<Icon name="search" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders code icon', () => {
    const { container } = render(<Icon name="code" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders menu icon', () => {
    const { container } = render(<Icon name="menu" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders play icon', () => {
    const { container } = render(<Icon name="play" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders x icon', () => {
    const { container } = render(<Icon name="x" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders multiple icon types', () => {
    const icons: IconName[] = [
      'arrow-right',
      'chevron-down',
      'chevron-right',
      'clock',
      'users',
      'zap',
      'star',
      'mail',
      'phone',
      'info',
    ];
    icons.forEach((name) => {
      const { container } = render(<Icon name={name} />);
      expect(container.querySelector('svg')).toBeInTheDocument();
    });
  });
});