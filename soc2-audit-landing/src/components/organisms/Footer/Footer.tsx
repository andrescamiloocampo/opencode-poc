import React from 'react';
import styles from './Footer.module.css';
import { Icon } from '../../atoms/Icon';
import type { FooterProps } from './Footer.types';

const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Integrations', href: '#' },
    { label: 'Changelog', href: '#' },
  ],
  resources: [
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Case Studies', href: '#' },
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#contact' },
    { label: 'Partners', href: '#' },
  ],
};

const socialLinks = [
  { name: 'linkedin', href: '#', label: 'LinkedIn' },
  { name: 'twitter', href: '#', label: 'Twitter' },
  { name: 'github', href: '#', label: 'GitHub' },
  { name: 'youtube', href: '#', label: 'YouTube' },
];

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} ${className}`}>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.brand}>
              <a href="#" className={styles.logo}>
                <span className={styles.logoIcon}>
                  <Icon name="shield" />
                </span>
                AuditGuard
              </a>
              <p className={styles.tagline}>
                Enterprise-grade code security and compliance automation for modern engineering teams.
              </p>
              <div className={styles.social}>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={styles.socialLink}
                    aria-label={social.label}
                  >
                    <Icon name={social.name as 'linkedin' | 'twitter' | 'github' | 'youtube'} />
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Product</h4>
              {footerLinks.product.map((link) => (
                <a key={link.label} href={link.href} className={styles.columnLink}>
                  {link.label}
                </a>
              ))}
            </div>

            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Resources</h4>
              {footerLinks.resources.map((link) => (
                <a key={link.label} href={link.href} className={styles.columnLink}>
                  {link.label}
                </a>
              ))}
            </div>

            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Company</h4>
              {footerLinks.company.map((link) => (
                <a key={link.label} href={link.href} className={styles.columnLink}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomContainer}>
          <span className={styles.copyright}>
            © {currentYear} AuditGuard, Inc. All rights reserved.
          </span>
          <div className={styles.legal}>
            <a href="#" className={styles.legalLink}>
              Privacy Policy
            </a>
            <a href="#" className={styles.legalLink}>
              Terms of Service
            </a>
            <a href="#" className={styles.legalLink}>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
