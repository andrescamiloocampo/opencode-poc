import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ComplianceBadges } from './ComplianceBadges';

describe('ComplianceBadges', () => {
  it('renders section element', () => {
    const { container } = render(<ComplianceBadges />);
    expect(container.querySelector('section')).toBeInTheDocument();
  });

  it('renders with correct id', () => {
    const { container } = render(<ComplianceBadges />);
    expect(container.querySelector('section')).toHaveAttribute('id', 'compliance');
  });

  it('renders label', () => {
    render(<ComplianceBadges />);
    expect(screen.getByText('Certifications')).toBeInTheDocument();
  });

  it('renders title', () => {
    render(<ComplianceBadges />);
    expect(screen.getByText(/Trusted Across Major Compliance/)).toBeInTheDocument();
  });

  it('renders all 5 certification badges', () => {
    render(<ComplianceBadges />);
    expect(screen.getByText('SOC 2')).toBeInTheDocument();
    expect(screen.getByText('ISO 27001')).toBeInTheDocument();
    expect(screen.getByText('HIPAA')).toBeInTheDocument();
    expect(screen.getByText('PCI DSS')).toBeInTheDocument();
    expect(screen.getByText('GDPR')).toBeInTheDocument();
  });

  it('renders verified text', () => {
    render(<ComplianceBadges />);
    expect(
      screen.getByText(/All certifications verified/)
    ).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<ComplianceBadges className="custom-badges" />);
    expect(container.firstChild).toHaveClass('custom-badges');
  });

  it('renders all badge elements', () => {
    const { container } = render(<ComplianceBadges />);
    const badges = container.querySelectorAll('[class*="badgeName"]');
    expect(badges).toHaveLength(5);
  });
});