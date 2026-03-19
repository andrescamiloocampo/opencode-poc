import React, { useEffect, useRef } from 'react';
import styles from './ContactSection.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ContactForm } from '../../molecules/ContactForm';
import { Icon } from '../../atoms/Icon';
import type { ContactSectionProps } from './ContactSection.types';

gsap.registerPlugin(ScrollTrigger);

export const ContactSection: React.FC<ContactSectionProps> = ({ className = '' }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (prefersReducedMotion) return;

      gsap.fromTo(
        '.contact-content',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 20%',
          },
        }
      );

      gsap.fromTo(
        '.contact-form',
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
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
    <section id="contact" ref={sectionRef} className={`${styles.section} ${className}`}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={`${styles.content} contact-content`}>
            <span className={styles.label}>Get in Touch</span>
            <h2 className={styles.title}>
              Let's Discuss Your{' '}
              <span style={{ color: 'var(--color-accent-primary)' }}>Compliance Needs</span>
            </h2>
            <p className={styles.subtitle}>
              Have questions about AuditGuard or need help planning your compliance journey?
              Our security experts are here to help.
            </p>

            <div className={styles.contactMethods}>
              <div className={styles.contactMethod}>
                <div className={styles.contactIcon}>
                  <Icon name="mail" />
                </div>
                <div className={styles.contactInfo}>
                  <span className={styles.contactLabel}>Email</span>
                  <span className={styles.contactValue}>hello@auditguard.io</span>
                </div>
              </div>

              <div className={styles.contactMethod}>
                <div className={styles.contactIcon}>
                  <Icon name="phone" />
                </div>
                <div className={styles.contactInfo}>
                  <span className={styles.contactLabel}>Phone</span>
                  <span className={styles.contactValue}>+1 (888) 555-AUDIT</span>
                </div>
              </div>

              <div className={styles.contactMethod}>
                <div className={styles.contactIcon}>
                  <Icon name="map-pin" />
                </div>
                <div className={styles.contactInfo}>
                  <span className={styles.contactLabel}>Office</span>
                  <span className={styles.contactValue}>
                    548 Market St, San Francisco, CA 94104
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.formWrapper} contact-form`}>
            <h3 className={styles.formTitle}>Send us a message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
