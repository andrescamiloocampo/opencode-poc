import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import { gsap } from 'gsap';
import { Button } from '../../atoms/Button';
import { Badge } from '../../atoms/Badge';
import { Icon } from '../../atoms/Icon';
import type { HeroProps } from './Hero.types';

export const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-badge',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          '.hero-title',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.3'
        )
        .fromTo(
          '.hero-subtitle',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          '.hero-actions > *',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          '-=0.3'
        )
        .fromTo(
          '.hero-stat',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          '-=0.2'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.hero} ${className}`}>
      <div className={styles.background}>
        <div className={styles.gridPattern} />
        <div className={`${styles.gradientOrb} ${styles.orb1}`} />
        <div className={`${styles.gradientOrb} ${styles.orb2}`} />
        <div className={`${styles.gradientOrb} ${styles.orb3}`} />
      </div>

      <div className={styles.container}>
        <div ref={contentRef} className={styles.content}>
          <div className={`${styles.badge} hero-badge`}>
            <Badge variant="success" size="md">
              SOC2 Certified
            </Badge>
          </div>

          <h1 className={`${styles.title} hero-title`}>
            Enterprise Code Audits{' '}
            <span className={styles.highlight}>Without the Chaos</span>
          </h1>

          <p className={`${styles.subtitle} hero-subtitle`}>
            Automate security compliance, detect vulnerabilities, and maintain SOC2 standards
            across your entire codebase — in minutes, not months.
          </p>

          <div className={`${styles.actions} hero-actions`}>
            <Button variant="primary" size="lg">
              Request Demo
              <Icon name="arrow-right" />
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="play" />
              Watch Video
            </Button>
          </div>

          <div className={`${styles.stats} hero-stats`}>
            <div className={`${styles.stat} hero-stat`}>
              <div className={styles.statValue}>99.9%</div>
              <div className={styles.statLabel}>Uptime SLA</div>
            </div>
            <div className={`${styles.stat} hero-stat`}>
              <div className={styles.statValue}>10K+</div>
              <div className={styles.statLabel}>Repositories</div>
            </div>
            <div className={`${styles.stat} hero-stat`}>
              <div className={styles.statValue}>50ms</div>
              <div className={styles.statLabel}>Scan Time</div>
            </div>
            <div className={`${styles.stat} hero-stat`}>
              <div className={styles.statValue}>500+</div>
              <div className={styles.statLabel}>Enterprise Clients</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.codeWindow}>
          <div className={styles.codeHeader}>
            <span className={`${styles.codeDot} ${styles.dot1}`} />
            <span className={`${styles.codeDot} ${styles.dot2}`} />
            <span className={`${styles.codeDot} ${styles.dot3}`} />
          </div>
          <div className={styles.codeBody}>
            <div className={styles.codeLine}>
              <span className={styles.lineNumber}>1</span>
              <span className={styles.codeContent}>
                <span className={styles.comment}>// Running security audit...</span>
              </span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNumber}>2</span>
              <span className={styles.codeContent}>
                <span className={styles.keyword}>const</span> scan ={' '}
                <span className={styles.function}>auditCode</span>({'{'}
              </span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNumber}>3</span>
              <span className={styles.codeContent}>
                {'  '}compliance: <span className={styles.string}>"SOC2"</span>,
              </span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNumber}>4</span>
              <span className={styles.codeContent}>
                {'  '}depth: <span className={styles.string}>"full"</span>,
              </span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNumber}>5</span>
              <span className={styles.codeContent}>
                {'}'});
              </span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNumber}>6</span>
              <span className={styles.codeContent}>
                <span className={styles.comment}>// Found 0 critical issues</span>
              </span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNumber}>7</span>
              <span className={styles.codeContent}>
                <span className={styles.comment}>// 847 checks passed</span>
              </span>
            </div>
            <div className={styles.codeLine}>
              <span className={styles.lineNumber}>8</span>
              <span className={styles.codeContent}>
                <span className={styles.comment}>// Compliance: APPROVED</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
