import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CTASection } from './CTASection';

describe('CTASection', () => {
  it('renders section element', () => {
    const { container } = render(<CTASection />);
    expect(container.querySelector('section')).toBeInTheDocument();
  });

  it('renders title', () => {
    render(<CTASection />);
    expect(screen.getByText(/Ready to Secure Your Codebase/)).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    render(<CTASection />);
    expect(
      screen.getByText(/Join 500\+ enterprises that trust/)
    ).toBeInTheDocument();
  });

  it('renders two buttons', () => {
    render(<CTASection />);
    expect(screen.getByRole('button', { name: /start free trial/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /schedule demo/i })).toBeInTheDocument();
  });

  it('renders background elements', () => {
    const { container } = render(<CTASection />);
    const background = container.querySelector('[class*="background"]');
    expect(background).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<CTASection className="custom-cta" />);
    expect(container.firstChild).toHaveClass('custom-cta');
  });

  it('renders button with icon', () => {
    render(<CTASection />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
  });
});