import React, { useEffect, useRef } from 'react';
import styles from './Pricing.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PricingCard } from '../../molecules/PricingCard';
import { Icon } from '../../atoms/Icon';
import type { PricingProps } from './Pricing.types';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: 'Starter',
    price: '$299',
    description: 'Perfect for small teams getting started with compliance.',
    features: [
      'Up to 5 repositories',
      'Weekly automated scans',
      'SOC2 compliance reports',
      'Email notifications',
      'Community support',
    ],
    ctaText: 'Start Free Trial',
  },
  {
    name: 'Professional',
    price: '$799',
    description: 'For growing companies with active development pipelines.',
    features: [
      'Up to 25 repositories',
      'Real-time scanning',
      'All compliance frameworks',
      'CI/CD integrations',
      'Priority email support',
      'Custom compliance rules',
    ],
    ctaText: 'Start Free Trial',
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large organizations.',
    features: [
      'Unlimited repositories',
      'Advanced threat detection',
      'SSO & SAML integration',
      'Dedicated success manager',
      '24/7 phone support',
      'On-premise deployment',
    ],
    ctaText: 'Contact Sales',
  },
];

export const Pricing: React.FC<PricingProps> = ({ className = '' }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (prefersReducedMotion) return;

      gsap.fromTo(
        '.pricing-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
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
    <section id="pricing" ref={sectionRef} className={`${styles.section} ${className}`}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.label}>Pricing</span>
          <h2 className={styles.title}>
            Simple, Transparent{' '}
            <span style={{ color: 'var(--color-accent-primary)' }}>Pricing</span>
          </h2>
          <p className={styles.subtitle}>
            Choose the plan that fits your organization. All plans include a 14-day free trial.
          </p>
        </header>

        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              ctaText={plan.ctaText}
              className="pricing-card"
            />
          ))}
        </div>

        <div className={styles.guarantee}>
          <div className={styles.guaranteeIcon}>
            <Icon name="shield" />
          </div>
          <div className={styles.guaranteeText}>
            <div className={styles.guaranteeTitle}>30-Day Money-Back Guarantee</div>
            <div className={styles.guaranteeDesc}>
              Not satisfied? Get a full refund within 30 days, no questions asked.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
