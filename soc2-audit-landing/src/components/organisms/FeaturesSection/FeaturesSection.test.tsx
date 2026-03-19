import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FeaturesSection } from './FeaturesSection';

describe('FeaturesSection', () => {
  it('renders section element', () => {
    const { container } = render(<FeaturesSection />);
    expect(container.querySelector('section')).toBeInTheDocument();
  });

  it('renders with correct id', () => {
    const { container } = render(<FeaturesSection />);
    expect(container.querySelector('section')).toHaveAttribute('id', 'features');
  });

  it('renders label', () => {
    render(<FeaturesSection />);
    expect(screen.getByText('Capabilities')).toBeInTheDocument();
  });

  it('renders title', () => {
    render(<FeaturesSection />);
    expect(screen.getByText(/Everything You Need for/)).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    render(<FeaturesSection />);
    expect(
      screen.getByText(/A comprehensive suite of tools designed to/)
    ).toBeInTheDocument();
  });

  it('renders all feature cards', () => {
    render(<FeaturesSection />);
    expect(screen.getByText('Automated Security Audits')).toBeInTheDocument();
    expect(screen.getByText('SOC2 Compliance Reports')).toBeInTheDocument();
    expect(screen.getByText('CI/CD Integration')).toBeInTheDocument();
    expect(screen.getByText('Deep Code Analysis')).toBeInTheDocument();
    expect(screen.getByText('Risk Scoring')).toBeInTheDocument();
    expect(screen.getByText('Team Collaboration')).toBeInTheDocument();
  });

  it('renders 6 feature cards', () => {
    const { container } = render(<FeaturesSection />);
    const cards = container.querySelectorAll('article');
    expect(cards).toHaveLength(6);
  });

  it('applies custom className', () => {
    const { container } = render(<FeaturesSection className="custom-section" />);
    expect(container.firstChild).toHaveClass('custom-section');
  });

  it('renders section with background', () => {
    const { container } = render(<FeaturesSection />);
    const background = container.querySelector('[class*="background"]');
    expect(background).toBeInTheDocument();
  });
});