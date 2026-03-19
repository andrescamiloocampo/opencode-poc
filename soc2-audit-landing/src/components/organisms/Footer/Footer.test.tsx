import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders footer element', () => {
    const { container } = render(<Footer />);
    expect(container.querySelector('footer')).toBeInTheDocument();
  });

  it('renders logo', () => {
    render(<Footer />);
    expect(screen.getByText('AuditGuard')).toBeInTheDocument();
  });

  it('renders tagline', () => {
    render(<Footer />);
    expect(
      screen.getByText(/Enterprise-grade code security/)
    ).toBeInTheDocument();
  });

  it('renders product column links', () => {
    render(<Footer />);
    expect(screen.getAllByText('Features')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Pricing')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Integrations')[0]).toBeInTheDocument();
  });

  it('renders resources column links', () => {
    render(<Footer />);
    expect(screen.getAllByText('Documentation')[0]).toBeInTheDocument();
    expect(screen.getAllByText('API Reference')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Blog')[0]).toBeInTheDocument();
  });

  it('renders company column links', () => {
    render(<Footer />);
    expect(screen.getAllByText('About')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Careers')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Contact')[0]).toBeInTheDocument();
  });

  it('renders copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/AuditGuard, Inc/)).toBeInTheDocument();
  });

  it('renders legal links', () => {
    render(<Footer />);
    expect(screen.getAllByText('Privacy Policy')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Terms of Service')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Cookie Policy')[0]).toBeInTheDocument();
  });

  it('renders social links', () => {
    render(<Footer />);
    const socialLinks = document.querySelectorAll('[class*="socialLink"]');
    expect(socialLinks).toHaveLength(4);
  });

  it('applies custom className', () => {
    const { container } = render(<Footer className="custom-footer" />);
    expect(container.firstChild).toHaveClass('custom-footer');
  });

  it('renders column titles', () => {
    render(<Footer />);
    expect(screen.getAllByText('Product')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Resources')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Company')[0]).toBeInTheDocument();
  });
});