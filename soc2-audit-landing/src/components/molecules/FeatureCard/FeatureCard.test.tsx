import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FeatureCard } from './FeatureCard';

describe('FeatureCard', () => {
  it('renders feature card with title', () => {
    render(
      <FeatureCard
        icon={<span>Icon</span>}
        title="Feature Title"
        description="Feature description"
      />
    );
    expect(screen.getByText('Feature Title')).toBeInTheDocument();
  });

  it('renders feature card with description', () => {
    render(
      <FeatureCard
        icon={<span>Icon</span>}
        title="Feature"
        description="This is a feature description"
      />
    );
    expect(screen.getByText('This is a feature description')).toBeInTheDocument();
  });

  it('renders icon', () => {
    render(
      <FeatureCard
        icon={<span data-testid="feature-icon">Icon</span>}
        title="Feature"
        description="Description"
      />
    );
    expect(screen.getByTestId('feature-icon')).toBeInTheDocument();
  });

  it('renders as article element', () => {
    const { container } = render(
      <FeatureCard
        icon={<span>Icon</span>}
        title="Feature"
        description="Description"
      />
    );
    expect(container.querySelector('article')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <FeatureCard
        icon={<span>Icon</span>}
        title="Feature"
        description="Description"
        className="custom-feature"
      />
    );
    expect(container.firstChild).toHaveClass('custom-feature');
  });

  it('renders all required props', () => {
    render(
      <FeatureCard
        icon={<span>Icon</span>}
        title="Security Scanning"
        description="Automated vulnerability detection"
      />
    );
    expect(screen.getByText('Security Scanning')).toBeInTheDocument();
    expect(screen.getByText('Automated vulnerability detection')).toBeInTheDocument();
  });
});