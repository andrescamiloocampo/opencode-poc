import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

const hasClass = (element: HTMLElement | null, className: string): boolean => {
  if (!element) return false;
  return element.className.split(' ').some(c => c.includes(className));
};

describe('Input', () => {
  it('renders input element', () => {
    render(<Input />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders with default size', () => {
    const { container } = render(<Input />);
    const input = container.querySelector('input');
    expect(hasClass(input, 'md')).toBe(true);
  });

  it('applies correct size class', () => {
    const { container } = render(<Input size="lg" />);
    const input = container.querySelector('input');
    expect(hasClass(input, 'lg')).toBe(true);
  });

  it('renders label when provided', () => {
    render(<Input label="Email" />);
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('associates label with input', () => {
    render(<Input label="Email" id="email-input" />);
    const label = screen.getByText('Email');
    expect(label).toHaveAttribute('for', 'email-input');
  });

  it('renders error message when error is provided', () => {
    render(<Input error="Invalid email" />);
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
  });

  it('renders helper text when provided without error', () => {
    render(<Input helperText="Enter your email" />);
    expect(screen.getByText('Enter your email')).toBeInTheDocument();
  });

  it('does not render helper text when error is present', () => {
    render(<Input helperText="Helper" error="Error" />);
    expect(screen.queryByText('Helper')).not.toBeInTheDocument();
  });

  it('applies error class to wrapper', () => {
    const { container } = render(<Input error="Error" />);
    expect(hasClass(container.firstChild as HTMLElement, 'error')).toBe(true);
  });

  it('applies fullWidth class when isFullWidth is true', () => {
    const { container } = render(<Input isFullWidth />);
    expect(hasClass(container.firstChild as HTMLElement, 'fullWidth')).toBe(true);
  });

  it('applies custom className to wrapper and input', () => {
    const { container } = render(<Input className="custom-input" />);
    const input = container.querySelector('input');
    expect(hasClass(input, 'custom-input')).toBe(true);
  });

  it('renders leftIcon when provided', () => {
    render(<Input leftIcon={<span data-testid="left-icon" />} />);
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
  });

  it('renders rightIcon when provided', () => {
    render(<Input rightIcon={<span data-testid="right-icon" />} />);
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  it('applies hasLeftIcon class when leftIcon is provided', () => {
    const { container } = render(<Input leftIcon={<span />} />);
    const input = container.querySelector('input');
    expect(hasClass(input, 'hasLeftIcon')).toBe(true);
  });

  it('applies hasRightIcon class when rightIcon is provided', () => {
    const { container } = render(<Input rightIcon={<span />} />);
    const input = container.querySelector('input');
    expect(hasClass(input, 'hasRightIcon')).toBe(true);
  });

  it('accepts standard input props', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<Input onChange={onChange} />);
    const input = screen.getByRole('textbox');
    await user.type(input, 'test');
    expect(onChange).toHaveBeenCalled();
  });

  it('accepts placeholder prop', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('accepts type prop', () => {
    render(<Input type="email" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
  });

  it('accepts all size variants', () => {
    const sizes: Array<'sm' | 'md' | 'lg'> = ['sm', 'md', 'lg'];
    sizes.forEach((size) => {
      const { container } = render(<Input size={size} />);
      const input = container.querySelector('input');
      expect(hasClass(input, size)).toBe(true);
    });
  });
});