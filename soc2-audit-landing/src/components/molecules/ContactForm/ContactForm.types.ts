export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
  className?: string;
}
