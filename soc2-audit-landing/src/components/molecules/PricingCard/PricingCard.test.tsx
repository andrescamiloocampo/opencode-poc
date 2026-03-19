import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PricingCard } from './PricingCard';

const hasClass = (element: HTMLElement | null, className: string): boolean => {
  if (!element) return false;
  return element.className.split(' ').some(c => c.includes(className));
};

describe('PricingCard', () => {
  const defaultProps = {
    name: 'Starter',
    price: '$49',
    description: 'Perfect for small teams',
    features: ['5 users', 'Basic scanning', 'Email support'],
    ctaText: 'Get Started',
  };

  it('renders pricing card with name', () => {
    render(<PricingCard {...defaultProps} />);
    expect(screen.getByText('Starter')).toBeInTheDocument();
  });

  it('renders price', () => {
    render(<PricingCard {...defaultProps} />);
    expect(screen.getByText('$49')).toBeInTheDocument();
  });

  it('renders description', () => {
    render(<PricingCard {...defaultProps} />);
    expect(screen.getByText('Perfect for small teams')).toBeInTheDocument();
  });

  it('renders features list', () => {
    render(<PricingCard {...defaultProps} />);
    expect(screen.getByText('5 users')).toBeInTheDocument();
    expect(screen.getByText('Basic scanning')).toBeInTheDocument();
    expect(screen.getByText('Email support')).toBeInTheDocument();
  });

  it('renders CTA button', () => {
    render(<PricingCard {...defaultProps} />);
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument();
  });

  it('shows popular badge when isPopular is true', () => {
    render(<PricingCard {...defaultProps} isPopular />);
    expect(screen.getByText('Most Popular')).toBeInTheDocument();
  });

  it('does not show popular badge when isPopular is false', () => {
    render(<PricingCard {...defaultProps} isPopular={false} />);
    expect(screen.queryByText('Most Popular')).not.toBeInTheDocument();
  });

  it('applies popular class when isPopular is true', () => {
    const { container } = render(<PricingCard {...defaultProps} isPopular />);
    expect(hasClass(container.firstChild as HTMLElement, 'popular')).toBe(true);
  });

  it('calls onCtaClick when button is clicked', async () => {
    const onCtaClick = vi.fn();
    const user = userEvent.setup();
    render(<PricingCard {...defaultProps} onCtaClick={onCtaClick} />);
    await user.click(screen.getByRole('button'));
    expect(onCtaClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom className', () => {
    const { container } = render(
      <PricingCard {...defaultProps} className="custom-card" />
    );
    expect(container.firstChild).toHaveClass('custom-card');
  });

  it('renders period text', () => {
    render(<PricingCard {...defaultProps} />);
    expect(screen.getByText('/month')).toBeInTheDocument();
  });

  it('renders all features correctly', () => {
    const features = ['Feature 1', 'Feature 2', 'Feature 3'];
    render(<PricingCard {...defaultProps} features={features} />);
    features.forEach((feature) => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  it('uses primary button variant when popular', () => {
    render(<PricingCard {...defaultProps} isPopular />);
    const button = screen.getByRole('button');
    expect(hasClass(button, 'primary')).toBe(true);
  });

  it('uses secondary button variant when not popular', () => {
    render(<PricingCard {...defaultProps} />);
    const button = screen.getByRole('button');
    expect(hasClass(button, 'secondary')).toBe(true);
  });
});