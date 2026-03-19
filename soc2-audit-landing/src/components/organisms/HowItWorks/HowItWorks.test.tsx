import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HowItWorks } from './HowItWorks';

describe('HowItWorks', () => {
  it('renders section element', () => {
    const { container } = render(<HowItWorks />);
    expect(container.querySelector('section')).toBeInTheDocument();
  });

  it('renders with correct id', () => {
    const { container } = render(<HowItWorks />);
    expect(container.querySelector('section')).toHaveAttribute('id', 'how-it-works');
  });

  it('renders label', () => {
    render(<HowItWorks />);
    expect(screen.getByText('How It Works')).toBeInTheDocument();
  });

  it('renders title', () => {
    render(<HowItWorks />);
    expect(screen.getByText(/From Code to Compliance/)).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    render(<HowItWorks />);
    expect(screen.getByText(/Get started in minutes/)).toBeInTheDocument();
  });

  it('renders all 4 steps', () => {
    render(<HowItWorks />);
    expect(screen.getByText('Connect Your Repository')).toBeInTheDocument();
    expect(screen.getByText('Configure Compliance Rules')).toBeInTheDocument();
    expect(screen.getByText('Run Automated Audits')).toBeInTheDocument();
    expect(screen.getByText('Review & Remediate')).toBeInTheDocument();
  });

  it('renders step numbers', () => {
    render(<HowItWorks />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<HowItWorks className="custom-how" />);
    expect(container.firstChild).toHaveClass('custom-how');
  });

  it('renders step descriptions', () => {
    render(<HowItWorks />);
    expect(
      screen.getByText(/Link your GitHub, GitLab/)
    ).toBeInTheDocument();
  });
});