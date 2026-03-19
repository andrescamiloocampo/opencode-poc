import React, { useEffect, useRef } from 'react';
import styles from './HowItWorks.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StepCard } from '../../molecules/StepCard';
import { Icon } from '../../atoms/Icon';
import type { HowItWorksProps } from './HowItWorks.types';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: 1,
    title: 'Connect Your Repository',
    description:
      'Link your GitHub, GitLab, or Bitbucket repositories in seconds. Our OAuth integration ensures secure, read-only access to your codebase.',
    icon: <Icon name="git-branch" />,
  },
  {
    number: 2,
    title: 'Configure Compliance Rules',
    description:
      'Select your compliance framework (SOC2, ISO 27001, HIPAA) and customize rules to match your organization\'s policies.',
    icon: <Icon name="clipboard" />,
  },
  {
    number: 3,
    title: 'Run Automated Audits',
    description:
      'Our engine analyzes your code continuously, checking against hundreds of security rules and compliance requirements.',
    icon: <Icon name="terminal" />,
  },
  {
    number: 4,
    title: 'Review & Remediate',
    description:
      'Get actionable insights with prioritized findings, code examples, and remediation guidance from security experts.',
    icon: <Icon name="check" />,
  },
];

export const HowItWorks: React.FC<HowItWorksProps> = ({ className = '' }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (prefersReducedMotion) return;

      gsap.fromTo(
        '.step-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 20%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className={`${styles.section} ${className}`}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.label}>How It Works</span>
          <h2 className={styles.title}>
            From Code to Compliance{' '}
            <span style={{ color: 'var(--color-accent-primary)' }}>in 4 Steps</span>
          </h2>
          <p className={styles.subtitle}>
            Get started in minutes. Our streamlined process takes you from connecting your
            repository to having actionable compliance reports.
          </p>
        </header>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div key={step.number} className={`${styles.stepWrapper} step-card`}>
              <StepCard
                stepNumber={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isLast={index === steps.length - 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
