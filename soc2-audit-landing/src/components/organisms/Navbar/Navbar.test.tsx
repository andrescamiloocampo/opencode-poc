import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Navbar } from './Navbar';

describe('Navbar', () => {
  it('renders header element', () => {
    const { container } = render(<Navbar />);
    expect(container.querySelector('header')).toBeInTheDocument();
  });

  it('renders logo', () => {
    render(<Navbar />);
    expect(screen.getByText('AuditGuard')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Navbar />);
    expect(screen.getAllByText('Features')).toHaveLength(2);
    expect(screen.getAllByText('How It Works')).toHaveLength(2);
    expect(screen.getAllByText('Compliance')).toHaveLength(2);
    expect(screen.getAllByText('Pricing')).toHaveLength(2);
    expect(screen.getAllByText('Contact')).toHaveLength(2);
  });

  it('renders login button', () => {
    render(<Navbar />);
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument();
  });

  it('renders request demo button', () => {
    render(<Navbar />);
    expect(screen.getByRole('button', { name: /request demo/i })).toBeInTheDocument();
  });

  it('renders menu button', () => {
    render(<Navbar />);
    const menuButton = screen.getByRole('button', { name: /open menu/i });
    expect(menuButton).toBeInTheDocument();
  });

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    
    const menuButton = screen.getByRole('button', { name: /open menu/i });
    await user.click(menuButton);
    
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument();
  });

  it('closes mobile menu when link is clicked', async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    
    const menuButton = screen.getByRole('button', { name: /open menu/i });
    await user.click(menuButton);
    
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument();
    
    const featuresLink = screen.getAllByText('Features')[1];
    await user.click(featuresLink);
    
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Navbar className="custom-navbar" />);
    expect(container.firstChild).toHaveClass('custom-navbar');
  });

  it('renders correct href for nav links', () => {
    render(<Navbar />);
    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', '#');
    expect(links[1]).toHaveAttribute('href', '#features');
  });
});