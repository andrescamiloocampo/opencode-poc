import React from 'react';
import styles from './TestimonialCard.module.css';
import { Icon } from '../../atoms/Icon';
import type { TestimonialCardProps } from './TestimonialCard.types';

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  avatar,
  rating = 5,
  className = '',
}) => {
  const initials = author
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`${styles.star} ${i < rating ? styles.filled : ''}`}
        aria-hidden="true"
      >
        <Icon name="star" />
      </span>
    ));
  };

  return (
    <article className={`${styles.card} ${className}`}>
      <div className={styles.quoteIcon}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <div className={styles.rating}>{renderStars()}</div>

      <blockquote className={styles.quote}>"{quote}"</blockquote>

      <div className={styles.author}>
        <div className={styles.avatar}>
          {avatar ? <img src={avatar} alt={author} /> : initials}
        </div>
        <div className={styles.authorInfo}>
          <span className={styles.authorName}>{author}</span>
          <span className={styles.authorRole}>
            {role}, {company}
          </span>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
