import React from 'react';
import styles from './LandingPage.module.css';
import { Hero } from '../../components/organisms/Hero';
import { FeaturesSection } from '../../components/organisms/FeaturesSection';
import { HowItWorks } from '../../components/organisms/HowItWorks';
import { ComplianceBadges } from '../../components/organisms/ComplianceBadges';
import { Testimonials } from '../../components/organisms/Testimonials';
import { Pricing } from '../../components/organisms/Pricing';
import { CTASection } from '../../components/organisms/CTASection';
import { ContactSection } from '../../components/organisms/ContactSection';
import type { LandingPageProps } from './LandingPage.types';

export const LandingPage: React.FC<LandingPageProps> = ({ className = '' }) => {
  return (
    <div className={`${styles.landingPage} ${className}`}>
      <Hero />
      <FeaturesSection />
      <HowItWorks />
      <ComplianceBadges />
      <Testimonials />
      <Pricing />
      <CTASection />
      <ContactSection />
    </div>
  );
};

export default LandingPage;
