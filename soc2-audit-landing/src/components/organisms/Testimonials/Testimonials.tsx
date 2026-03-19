import React, { useEffect, useRef } from 'react';
import styles from './Testimonials.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TestimonialCard } from '../../molecules/TestimonialCard';
import type { TestimonialsProps } from './Testimonials.types';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "AuditGuard reduced our SOC2 audit preparation from 3 months to 2 weeks. The automated compliance reports saved us countless hours of manual work.",
    author: 'Sarah Chen',
    role: 'CISO',
    company: 'TechFlow Inc.',
    rating: 5,
  },
  {
    quote:
      "We caught a critical data exposure vulnerability before it reached production. The ROI on this tool paid for itself on day one.",
    author: 'Marcus Rodriguez',
    role: 'VP of Engineering',
    company: 'CloudScale Systems',
    rating: 5,
  },
  {
    quote:
      "Finally, a security tool that developers actually enjoy using. The CI/CD integration is seamless and the remediation guidance is actionable.",
    author: 'Emily Tanaka',
    role: 'Director of Security',
    company: 'FinServe Global',
    rating: 5,
  },
];

export const Testimonials: React.FC<TestimonialsProps> = ({ className = '' }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (prefersReducedMotion) return;

      gsap.fromTo(
        '.testimonial-card',
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
    <section ref={sectionRef} className={`${styles.section} ${className}`}>
      <div className={styles.background}>
        <div className={styles.bgGradient} />
      </div>

      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.label}>Testimonials</span>
          <h2 className={styles.title}>
            Trusted by Security Leaders{' '}
            <span style={{ color: 'var(--color-accent-primary)' }}>Worldwide</span>
          </h2>
          <p className={styles.subtitle}>
            See what enterprise security teams say about AuditGuard.
          </p>
        </header>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              rating={testimonial.rating}
              className="testimonial-card"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
