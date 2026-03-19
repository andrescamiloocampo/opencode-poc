import React from 'react';
import styles from './Input.module.css';
import type { InputProps, InputSize } from './Input.types';

const sizeClasses: Record<InputSize, string> = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
};

export const Input: React.FC<InputProps> = ({
  size = 'md',
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  isFullWidth = false,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  const inputClasses = [
    styles.input,
    sizeClasses[size],
    leftIcon ? styles.hasLeftIcon : '',
    rightIcon ? styles.hasRightIcon : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const wrapperClasses = [
    styles.wrapper,
    isFullWidth ? styles.fullWidth : '',
    error ? styles.error : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClasses}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.inputWrapper}>
        {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
        <input id={inputId} className={inputClasses} {...props} />
        {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
      </div>
      {error && <span className={styles.errorMessage}>{error}</span>}
      {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
    </div>
  );
};

export default Input;
