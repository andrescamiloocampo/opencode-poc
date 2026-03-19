import React from 'react';
import styles from './ComplianceBadges.module.css';
import { Icon } from '../../atoms/Icon';
import type { ComplianceBadgesProps } from './ComplianceBadges.types';

const certifications = [
  { name: 'SOC 2', icon: <Icon name="shield" /> },
  { name: 'ISO 27001', icon: <Icon name="lock" /> },
  { name: 'HIPAA', icon: <Icon name="file-text" /> },
  { name: 'PCI DSS', icon: <Icon name="check" /> },
  { name: 'GDPR', icon: <Icon name="alert-triangle" /> },
];

export const ComplianceBadges: React.FC<ComplianceBadgesProps> = ({ className = '' }) => {
  return (
    <section id="compliance" className={`${styles.section} ${className}`}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.label}>Certifications</span>
          <h2 className={styles.title}>
            Trusted Across Major Compliance Frameworks
          </h2>
        </header>

        <div className={styles.badges}>
          {certifications.map((cert) => (
            <div key={cert.name} className={styles.badge}>
              <div className={styles.badgeIcon}>{cert.icon}</div>
              <span className={styles.badgeName}>{cert.name}</span>
            </div>
          ))}
        </div>

        <div className={styles.verified}>
          <span className={styles.verifiedText}>
            All certifications verified and audited annually by independent third parties
          </span>
          <span className={styles.verifiedIcon}>
            <Icon name="check" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default ComplianceBadges;
