import React from 'react';
import styles from './PricingCard.module.css';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';
import type { PricingCardProps } from './PricingCard.types';

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  description,
  features,
  isPopular = false,
  ctaText,
  onCtaClick,
  className = '',
}) => {
  const cardClasses = [
    styles.card,
    isPopular ? styles.popular : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cardClasses}>
      {isPopular && <span className={styles.popularBadge}>Most Popular</span>}
      
      <div className={styles.header}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.priceWrapper}>
          <span className={styles.price}>{price}</span>
          <span className={styles.period}>/month</span>
        </div>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.features}>
        <ul className={styles.featuresList}>
          {features.map((feature, index) => (
            <li key={index} className={styles.feature}>
              <span className={styles.featureIcon}>
                <Icon name="check" />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <Button
        variant={isPopular ? 'primary' : 'secondary'}
        size="lg"
        isFullWidth
        onClick={onCtaClick}
        className={styles.cta}
      >
        {ctaText}
      </Button>
    </div>
  );
};

export default PricingCard;
