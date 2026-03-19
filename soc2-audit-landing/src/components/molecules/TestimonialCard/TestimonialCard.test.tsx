import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TestimonialCard } from './TestimonialCard';

describe('TestimonialCard', () => {
  const defaultProps = {
    quote: 'Great service!',
    author: 'John Doe',
    role: 'CTO',
    company: 'TechCorp',
  };

  it('renders quote', () => {
    render(<TestimonialCard {...defaultProps} />);
    expect(screen.getByText(/great service/i)).toBeInTheDocument();
  });

  it('renders author name', () => {
    render(<TestimonialCard {...defaultProps} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('renders role and company', () => {
    render(<TestimonialCard {...defaultProps} />);
    expect(screen.getByText('CTO, TechCorp')).toBeInTheDocument();
  });

  it('renders 5 stars by default', () => {
    render(<TestimonialCard {...defaultProps} />);
    const stars = document.querySelectorAll('[class*="filled"]');
    expect(stars).toHaveLength(5);
  });

  it('renders correct number of filled stars based on rating', () => {
    render(<TestimonialCard {...defaultProps} rating={3} />);
    const stars = document.querySelectorAll('[class*="filled"]');
    expect(stars).toHaveLength(3);
  });

  it('renders avatar when provided', () => {
    render(<TestimonialCard {...defaultProps} avatar="avatar.jpg" />);
    const img = document.querySelector('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'avatar.jpg');
  });

  it('renders initials when avatar is not provided', () => {
    render(<TestimonialCard {...defaultProps} />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders quote icon', () => {
    render(<TestimonialCard {...defaultProps} />);
    const svg = document.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('renders as article element', () => {
    const { container } = render(<TestimonialCard {...defaultProps} />);
    expect(container.querySelector('article')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <TestimonialCard {...defaultProps} className="custom-testimonial" />
    );
    expect(container.firstChild).toHaveClass('custom-testimonial');
  });

  it('renders blockquote', () => {
    render(<TestimonialCard {...defaultProps} />);
    expect(document.querySelector('blockquote')).toBeInTheDocument();
  });

  it('renders rating with correct stars for different ratings', () => {
    const { container: container1 } = render(
      <TestimonialCard {...defaultProps} rating={1} />
    );
    expect(container1.querySelectorAll('[class*="filled"]')).toHaveLength(1);

    const { container: container2 } = render(
      <TestimonialCard {...defaultProps} rating={5} />
    );
    expect(container2.querySelectorAll('[class*="filled"]')).toHaveLength(5);
  });

  it('handles author with multiple names for initials', () => {
    render(
      <TestimonialCard
        {...defaultProps}
        author="John Michael Doe"
      />
    );
    expect(screen.getByText('JMD')).toBeInTheDocument();
  });
});