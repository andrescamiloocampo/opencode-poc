import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StepCard } from './StepCard';

const hasClass = (element: HTMLElement | null, className: string): boolean => {
  if (!element) return false;
  return element.className.split(' ').some(c => c.includes(className));
};

describe('StepCard', () => {
  const defaultProps = {
    stepNumber: 1,
    title: 'Step Title',
    description: 'Step description',
    icon: <span>Icon</span>,
  };

  it('renders step number', () => {
    render(<StepCard {...defaultProps} />);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('renders title', () => {
    render(<StepCard {...defaultProps} />);
    expect(screen.getByText('Step Title')).toBeInTheDocument();
  });

  it('renders description', () => {
    render(<StepCard {...defaultProps} />);
    expect(screen.getByText('Step description')).toBeInTheDocument();
  });

  it('renders icon', () => {
    render(<StepCard {...defaultProps} icon={<span data-testid="step-icon" />} />);
    expect(screen.getByTestId('step-icon')).toBeInTheDocument();
  });

  it('shows connector when isLast is false', () => {
    const { container } = render(<StepCard {...defaultProps} isLast={false} />);
    const connector = container.querySelector('[class*="connector"]');
    expect(connector).toBeInTheDocument();
  });

  it('hides connector when isLast is true', () => {
    const { container } = render(<StepCard {...defaultProps} isLast />);
    const connector = container.querySelector('[class*="connector"]');
    expect(connector).not.toBeInTheDocument();
  });

  it('applies isLast class when isLast is true', () => {
    const { container } = render(<StepCard {...defaultProps} isLast />);
    expect(hasClass(container.firstChild as HTMLElement, 'isLast')).toBe(true);
  });

  it('applies custom className', () => {
    const { container } = render(
      <StepCard {...defaultProps} className="custom-step" />
    );
    expect(container.firstChild).toHaveClass('custom-step');
  });

  it('renders all step numbers correctly', () => {
    [1, 2, 3, 4].forEach((num) => {
      render(<StepCard {...defaultProps} stepNumber={num} />);
      expect(screen.getByText(num.toString())).toBeInTheDocument();
    });
  });

  it('renders title and description correctly', () => {
    render(
      <StepCard
        stepNumber={1}
        title="Connect Repository"
        description="Link your GitHub or GitLab repository"
        icon={<span>Icon</span>}
      />
    );
    expect(screen.getByText('Connect Repository')).toBeInTheDocument();
    expect(screen.getByText('Link your GitHub or GitLab repository')).toBeInTheDocument();
  });
});