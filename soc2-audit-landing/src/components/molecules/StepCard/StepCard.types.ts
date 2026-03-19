export interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
  className?: string;
}
