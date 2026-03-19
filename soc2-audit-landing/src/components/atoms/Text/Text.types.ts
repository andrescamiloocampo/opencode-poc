export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'small';
export type TextColor = 'primary' | 'secondary' | 'tertiary' | 'muted' | 'accent';

export interface TextProps {
  variant?: TextVariant;
  color?: TextColor;
  as?: TextVariant;
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
}
