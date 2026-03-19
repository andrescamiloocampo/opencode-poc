import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';
import type { ContactFormProps, ContactFormData } from './ContactForm.types';

export const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  className = '',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitted(true);
      onSubmit?.(formData);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className={styles.success}>
        <Icon name="check" />
        <span>Thank you! We'll be in touch shortly.</span>
      </div>
    );
  }

  return (
    <form className={`${styles.form} ${className}`} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <Input
          name="name"
          label="Full Name"
          placeholder="John Smith"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          isFullWidth
        />
        <Input
          type="email"
          name="email"
          label="Work Email"
          placeholder="john@company.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          isFullWidth
        />
      </div>

      <Input
        name="company"
        label="Company"
        placeholder="Acme Corporation"
        value={formData.company}
        onChange={handleChange}
        isFullWidth
      />

      <div>
        <textarea
          name="message"
          className={styles.textarea}
          placeholder="Tell us about your compliance needs..."
          value={formData.message}
          onChange={handleChange}
          rows={5}
        />
        {errors.message && (
          <span style={{ color: '#ef4444', fontSize: 'var(--font-size-sm)', marginTop: 'var(--spacing-2)', display: 'block' }}>
            {errors.message}
          </span>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className={styles.submitButton}
      >
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
