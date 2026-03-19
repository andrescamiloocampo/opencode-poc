import React from 'react';
import styles from './Badge.module.css';
import type { BadgeProps, BadgeVariant, BadgeSize } from './Badge.types';

const variantClasses: Record<BadgeVariant, string> = {
  default: styles.default,
  success: styles.success,
  warning: styles.warning,
  error: styles.error,
  info: styles.info,
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: styles.sm,
  md: styles.md,
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const classNames = [
    styles.badge,
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classNames} {...props}>
      <span className={styles.dot} />
      {children}
    </span>
  );
};

export default Badge;
