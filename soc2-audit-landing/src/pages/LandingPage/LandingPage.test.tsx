import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { LandingPage } from './LandingPage';

const hasClass = (element: HTMLElement | null, className: string): boolean => {
  if (!element) return false;
  return element.className.split(' ').some(c => c.includes(className));
};

describe('LandingPage', () => {
  it('renders landing page container', () => {
    const { container } = render(<LandingPage />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders with correct CSS class', () => {
    const { container } = render(<LandingPage />);
    expect(hasClass(container.firstChild as HTMLElement, 'landingPage')).toBe(true);
  });

  it('applies custom className', () => {
    const { container } = render(<LandingPage className="custom-landing" />);
    expect(container.firstChild).toHaveClass('custom-landing');
  });

  it('renders Hero component', () => {
    const { container } = render(<LandingPage />);
    expect(container.querySelector('section')).toBeInTheDocument();
  });

  it('renders multiple sections', () => {
    const { container } = render(<LandingPage />);
    const sections = container.querySelectorAll('section');
    expect(sections.length).toBeGreaterThan(1);
  });

  it('renders features section', () => {
    render(<LandingPage />);
    const featuresSection = document.getElementById('features');
    expect(featuresSection).toBeInTheDocument();
  });

  it('renders pricing section', () => {
    render(<LandingPage />);
    const pricingSection = document.getElementById('pricing');
    expect(pricingSection).toBeInTheDocument();
  });

  it('renders contact section', () => {
    render(<LandingPage />);
    const contactSection = document.getElementById('contact');
    expect(contactSection).toBeInTheDocument();
  });
});