import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';
import type { NavbarProps } from './Navbar.types';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Compliance', href: '#compliance' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.navbar} ${className}`}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoIcon}>
            <Icon name="shield" />
          </span>
          AuditGuard
        </a>

        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button variant="ghost" size="sm" className={styles.desktopLogin}>
            Log In
          </Button>
          <Button variant="primary" size="sm">
            Request Demo
          </Button>
          <button
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <Icon name={isMenuOpen ? 'x' : 'menu'} />
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.mobileNavLink}
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
