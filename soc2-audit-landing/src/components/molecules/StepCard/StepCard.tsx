import React from 'react';
import styles from './StepCard.module.css';
import type { StepCardProps } from './StepCard.types';

export const StepCard: React.FC<StepCardProps> = ({
  stepNumber,
  title,
  description,
  icon,
  isLast = false,
  className = '',
}) => {
  const wrapperClasses = [
    styles.wrapper,
    isLast ? styles.isLast : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClasses}>
      <div className={styles.stepNumber}>
        {icon}
        <span className={styles.stepNumberText}>{stepNumber}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      {!isLast && <div className={styles.connector} aria-hidden="true" />}
    </div>
  );
};

export default StepCard;
