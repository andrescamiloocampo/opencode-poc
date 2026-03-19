import React, { useEffect, useRef } from 'react';
import styles from './FeaturesSection.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FeatureCard } from '../../molecules/FeatureCard';
import { Icon } from '../../atoms/Icon';
import type { FeaturesSectionProps } from './FeaturesSection.types';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <Icon name="shield" />,
    title: 'Automated Security Audits',
    description:
      'Continuous scanning of your codebase for vulnerabilities, misconfigurations, and security risks — before they become headlines.',
  },
  {
    icon: <Icon name="clipboard" />,
    title: 'SOC2 Compliance Reports',
    description:
      'Generate audit-ready compliance documentation that satisfies auditors and demonstrates your security posture.',
  },
  {
    icon: <Icon name="zap" />,
    title: 'CI/CD Integration',
    description:
      'Plug into your existing pipeline in minutes. GitHub Actions, GitLab CI, Jenkins — we fit where you work.',
  },
  {
    icon: <Icon name="code" />,
    title: 'Deep Code Analysis',
    description:
      'Parse and analyze code at the AST level. Detect injection points, weak cryptography, and data exposure risks.',
  },
  {
    icon: <Icon name="trending-up" />,
    title: 'Risk Scoring',
    description:
      'Prioritize remediation with our intelligent risk engine. Know exactly what to fix first based on impact and exploitability.',
  },
  {
    icon: <Icon name="users" />,
    title: 'Team Collaboration',
    description:
      'Assign issues, track remediation progress, and maintain a complete audit trail across your entire engineering organization.',
  },
];

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ className = '' }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (prefersReducedMotion) return;

      gsap.fromTo(
        '.feature-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className={`${styles.section} ${className}`}>
      <div className={styles.background}>
        <div className={styles.bgGradient} />
      </div>

      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.label}>Capabilities</span>
          <h2 className={styles.title}>
            Everything You Need for{' '}
            <span style={{ color: 'var(--color-accent-primary)' }}>SOC2 Compliance</span>
          </h2>
          <p className={styles.subtitle}>
            A comprehensive suite of tools designed to secure your code, streamline audits,
            and keep your compliance journey on track.
          </p>
        </header>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="feature-card"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
