import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Testimonials } from './Testimonials';

describe('Testimonials', () => {
  it('renders section element', () => {
    const { container } = render(<Testimonials />);
    expect(container.querySelector('section')).toBeInTheDocument();
  });

  it('renders label', () => {
    render(<Testimonials />);
    expect(screen.getByText('Testimonials')).toBeInTheDocument();
  });

  it('renders title', () => {
    render(<Testimonials />);
    expect(screen.getByText(/Trusted by Security Leaders/)).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    render(<Testimonials />);
    expect(screen.getByText(/See what enterprise security teams/)).toBeInTheDocument();
  });

  it('renders all 3 testimonials', () => {
    render(<Testimonials />);
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument();
    expect(screen.getByText('Marcus Rodriguez')).toBeInTheDocument();
    expect(screen.getByText('Emily Tanaka')).toBeInTheDocument();
  });

  it('renders all testimonials with correct roles', () => {
    render(<Testimonials />);
    expect(screen.getByText('CISO, TechFlow Inc.')).toBeInTheDocument();
    expect(screen.getByText('VP of Engineering, CloudScale Systems')).toBeInTheDocument();
    expect(screen.getByText('Director of Security, FinServe Global')).toBeInTheDocument();
  });

  it('renders all quotes', () => {
    render(<Testimonials />);
    expect(
      screen.getByText(/AuditGuard reduced our SOC2 audit/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/We caught a critical data exposure/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Finally, a security tool that developers/)
    ).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Testimonials className="custom-testimonials" />);
    expect(container.firstChild).toHaveClass('custom-testimonials');
  });

  it('renders background', () => {
    const { container } = render(<Testimonials />);
    const background = container.querySelector('[class*="background"]');
    expect(background).toBeInTheDocument();
  });
});