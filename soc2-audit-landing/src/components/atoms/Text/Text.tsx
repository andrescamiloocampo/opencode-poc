import React from 'react';
import styles from './Text.module.css';
import type { TextProps, TextVariant, TextColor } from './Text.types';

const variantClasses: Record<TextVariant, string> = {
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
  h4: styles.h4,
  h5: styles.h5,
  h6: styles.h6,
  p: styles.p,
  span: styles.span,
  small: styles.small,
};

const colorClasses: Record<TextColor, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  tertiary: styles.tertiary,
  muted: styles.muted,
  accent: styles.accent,
};

export const Text: React.FC<TextProps> = ({
  variant = 'p',
  color = 'primary',
  as,
  children,
  className = '',
  align = 'left',
  weight = 'normal',
}) => {
  const Component = as || variant;
  
  const classNames = [
    styles.text,
    variantClasses[variant],
    colorClasses[color],
    styles[align],
    styles[weight],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <Component className={classNames}>{children}</Component>;
};

export default Text;
