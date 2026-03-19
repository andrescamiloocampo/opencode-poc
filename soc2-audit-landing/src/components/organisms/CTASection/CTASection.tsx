import React, { useEffect, useRef } from 'react';
import styles from './CTASection.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';
import type { CTASectionProps } from './CTASection.types';

gsap.registerPlugin(ScrollTrigger);

export const CTASection: React.FC<CTASectionProps> = ({ className = '' }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
      });

      tl.fromTo(
        '.cta-content',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      ).fromTo(
        '.cta-actions > *',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        '-=0.4'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.section} ${className}`}>
      <div className={styles.background}>
        <div className={styles.bgGradient} />
        <div className={styles.bgPattern} />
        <div className={`${styles.decorative} ${styles.orb1}`} />
        <div className={`${styles.decorative} ${styles.orb2}`} />
      </div>

      <div className={styles.container}>
        <h2 className={`${styles.title} cta-content`}>
          Ready to Secure Your Codebase?
        </h2>
        <p className={`${styles.subtitle} cta-content`}>
          Join 500+ enterprises that trust AuditGuard for their SOC2 compliance journey.
          Get started with a free 14-day trial.
        </p>
        <div className={`${styles.actions} cta-actions`}>
          <Button variant="primary" size="lg">
            Start Free Trial
            <Icon name="arrow-right" />
          </Button>
          <Button variant="secondary" size="lg">
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
