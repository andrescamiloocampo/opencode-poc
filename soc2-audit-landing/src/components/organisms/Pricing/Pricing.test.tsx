import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pricing } from './Pricing';

describe('Pricing', () => {
  it('renders section element', () => {
    const { container } = render(<Pricing />);
    expect(container.querySelector('section')).toBeInTheDocument();
  });

  it('renders with correct id', () => {
    const { container } = render(<Pricing />);
    expect(container.querySelector('section')).toHaveAttribute('id', 'pricing');
  });

  it('renders pricing label', () => {
    render(<Pricing />);
    expect(screen.getAllByText('Pricing')[0]).toBeInTheDocument();
  });

  it('renders title', () => {
    render(<Pricing />);
    expect(screen.getByText(/Simple, Transparent/)).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    render(<Pricing />);
    expect(screen.getByText(/Choose the plan that fits your/)).toBeInTheDocument();
  });

  it('renders all three pricing cards', () => {
    render(<Pricing />);
    expect(screen.getAllByText('Starter')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Professional')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Enterprise')[0]).toBeInTheDocument();
  });

  it('renders correct prices', () => {
    render(<Pricing />);
    expect(screen.getAllByText('$299')[0]).toBeInTheDocument();
    expect(screen.getAllByText('$799')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Custom')[0]).toBeInTheDocument();
  });

  it('renders guarantee section', () => {
    render(<Pricing />);
    expect(screen.getAllByText('30-Day Money-Back Guarantee')[0]).toBeInTheDocument();
  });

  it('renders guarantee description', () => {
    render(<Pricing />);
    expect(
      screen.getByText(/Not satisfied\? Get a full refund/)
    ).toBeInTheDocument();
  });

  it('can interact with CTA button', async () => {
    const user = userEvent.setup();
    render(<Pricing />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
    await user.click(buttons[0]);
  });

  it('applies custom className', () => {
    const { container } = render(<Pricing className="custom-pricing" />);
    expect(container.firstChild).toHaveClass('custom-pricing');
  });

  it('renders all pricing cards with correct features', () => {
    render(<Pricing />);
    expect(screen.getAllByText('Up to 5 repositories')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Up to 25 repositories')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Unlimited repositories')[0]).toBeInTheDocument();
  });

  it('renders popular badge for professional plan', () => {
    render(<Pricing />);
    expect(screen.getByText('Most Popular')).toBeInTheDocument();
  });
});