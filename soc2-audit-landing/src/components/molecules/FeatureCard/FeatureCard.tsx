import React from 'react';
import styles from './FeatureCard.module.css';
import type { FeatureCardProps } from './FeatureCard.types';

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className = '',
}) => {
  return (
    <article className={`${styles.card} ${className}`}>
      <div className={styles.iconWrapper}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
};

export default FeatureCard;
