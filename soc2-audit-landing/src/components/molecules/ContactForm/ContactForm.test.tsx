import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactForm } from './ContactForm';

const hasClass = (element: HTMLElement | null, className: string): boolean => {
  if (!element) return false;
  return element.className.split(' ').some(c => c.includes(className));
};

describe('ContactForm', () => {
  it('renders form elements', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Work Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Company')).toBeInTheDocument();
  });

  it('renders submit button', () => {
    render(<ContactForm />);
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('renders textarea', () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText(/tell us about your compliance needs/i)).toBeInTheDocument();
  });

  it('calls onSubmit with form data when valid', async () => {
    const onSubmit = vi.fn();
    const user = userEvent.setup();
    render(<ContactForm onSubmit={onSubmit} />);
    
    await user.type(screen.getByLabelText('Full Name'), 'John Doe');
    await user.type(screen.getByLabelText('Work Email'), 'john@example.com');
    await user.type(screen.getByPlaceholderText(/tell us about your compliance needs/i), 'Hello');
    
    await user.click(screen.getByRole('button', { name: /send message/i }));
    
    expect(onSubmit).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john@example.com',
      company: '',
      message: 'Hello',
    });
  });

  it('shows error when name is empty', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    
    await user.click(screen.getByRole('button', { name: /send message/i }));
    
    expect(screen.getByText('Name is required')).toBeInTheDocument();
  });

  it('shows error when email is empty', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    
    await user.type(screen.getByLabelText('Full Name'), 'John');
    await user.click(screen.getByRole('button', { name: /send message/i }));
    
    expect(screen.getByText('Email is required')).toBeInTheDocument();
  });

  it('shows error for invalid email', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    
    await user.type(screen.getByLabelText('Full Name'), 'John');
    await user.type(screen.getByLabelText('Work Email'), 'invalid-email');
    await user.click(screen.getByRole('button', { name: /send message/i }));
    
    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument();
  });

  it('shows error when message is empty', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    
    await user.type(screen.getByLabelText('Full Name'), 'John');
    await user.type(screen.getByLabelText('Work Email'), 'john@example.com');
    await user.click(screen.getByRole('button', { name: /send message/i }));
    
    expect(screen.getByText('Message is required')).toBeInTheDocument();
  });

  it('clears error when user types in field', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    
    await user.click(screen.getByRole('button', { name: /send message/i }));
    expect(screen.getByText('Name is required')).toBeInTheDocument();
    
    await user.type(screen.getByLabelText('Full Name'), 'J');
    expect(screen.queryByText('Name is required')).not.toBeInTheDocument();
  });

  it('shows success message after submission', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    
    await user.type(screen.getByLabelText('Full Name'), 'John Doe');
    await user.type(screen.getByLabelText('Work Email'), 'john@example.com');
    await user.type(screen.getByPlaceholderText(/tell us about your compliance needs/i), 'Hello');
    
    await user.click(screen.getByRole('button', { name: /send message/i }));
    
    expect(screen.getByText(/thank you/i)).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<ContactForm className="custom-form" />);
    expect(hasClass(container.firstChild as HTMLElement, 'custom-form')).toBe(true);
  });

  it('updates state on input change', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    
    await user.type(screen.getByLabelText('Company'), 'Acme Inc');
    expect(screen.getByLabelText('Company')).toHaveValue('Acme Inc');
  });
});