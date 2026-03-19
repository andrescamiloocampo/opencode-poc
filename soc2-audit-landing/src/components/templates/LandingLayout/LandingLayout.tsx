import React from 'react';
import styles from './LandingLayout.module.css';
import { Navbar } from '../../organisms/Navbar';
import { Footer } from '../../organisms/Footer';
import type { LandingLayoutProps } from './LandingLayout.types';

export const LandingLayout: React.FC<LandingLayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
