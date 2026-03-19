import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ContactSection } from './ContactSection';

describe('ContactSection', () => {
  it('renders section element', () => {
    const { container } = render(<ContactSection />);
    expect(container.querySelector('section')).toBeInTheDocument();
  });

  it('renders with correct id', () => {
    const { container } = render(<ContactSection />);
    expect(container.querySelector('section')).toHaveAttribute('id', 'contact');
  });

  it('renders label', () => {
    render(<ContactSection />);
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
  });

  it('renders title', () => {
    render(<ContactSection />);
    expect(screen.getByText(/Let's Discuss Your/)).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    render(<ContactSection />);
    expect(
      screen.getByText(/Have questions about AuditGuard/)
    ).toBeInTheDocument();
  });

  it('renders email contact method', () => {
    render(<ContactSection />);
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('hello@auditguard.io')).toBeInTheDocument();
  });

  it('renders phone contact method', () => {
    render(<ContactSection />);
    expect(screen.getByText('Phone')).toBeInTheDocument();
    expect(screen.getByText('+1 (888) 555-AUDIT')).toBeInTheDocument();
  });

  it('renders office contact method', () => {
    render(<ContactSection />);
    expect(screen.getByText('Office')).toBeInTheDocument();
    expect(screen.getByText(/548 Market St/)).toBeInTheDocument();
  });

  it('renders form title', () => {
    render(<ContactSection />);
    expect(screen.getByText('Send us a message')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<ContactSection className="custom-contact" />);
    expect(container.firstChild).toHaveClass('custom-contact');
  });
});