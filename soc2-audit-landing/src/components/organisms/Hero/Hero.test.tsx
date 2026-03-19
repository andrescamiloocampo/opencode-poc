import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renders section element', () => {
    const { container } = render(<Hero />);
    expect(container.querySelector('section')).toBeInTheDocument();
  });

  it('renders badge', () => {
    render(<Hero />);
    expect(screen.getByText('SOC2 Certified')).toBeInTheDocument();
  });

  it('renders title', () => {
    render(<Hero />);
    expect(screen.getByText(/Enterprise Code Audits/)).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    render(<Hero />);
    expect(screen.getByText(/Automate security compliance/)).toBeInTheDocument();
  });

  it('renders two buttons', () => {
    render(<Hero />);
    expect(screen.getByRole('button', { name: /request demo/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /watch video/i })).toBeInTheDocument();
  });

  it('renders stat values', () => {
    render(<Hero />);
    expect(screen.getByText('99.9%')).toBeInTheDocument();
    expect(screen.getByText('10K+')).toBeInTheDocument();
    expect(screen.getByText('50ms')).toBeInTheDocument();
    expect(screen.getByText('500+')).toBeInTheDocument();
  });

  it('renders stat labels', () => {
    render(<Hero />);
    expect(screen.getByText('Uptime SLA')).toBeInTheDocument();
    expect(screen.getByText('Repositories')).toBeInTheDocument();
    expect(screen.getByText('Scan Time')).toBeInTheDocument();
    expect(screen.getByText('Enterprise Clients')).toBeInTheDocument();
  });

  it('renders code window', () => {
    render(<Hero />);
    expect(screen.getByText(/Running security audit/)).toBeInTheDocument();
  });

  it('renders code header dots', () => {
    const { container } = render(<Hero />);
    const dots = container.querySelectorAll('[class*="codeDot"]');
    expect(dots.length).toBe(3);
  });

  it('applies custom className', () => {
    const { container } = render(<Hero className="custom-hero" />);
    expect(container.firstChild).toHaveClass('custom-hero');
  });
});