import type { ReactNode } from 'react'; 

export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
  'data-testid'?: string;
}

export type Size = 'sm' | 'md' | 'lg';
export type Variant = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'neutral';
export type ColorScheme = 'light' | 'dark';

export interface ButtonProps extends BaseComponentProps {
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

export interface InputProps extends BaseComponentProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
  required?: boolean;
  size?: Size;
  fullWidth?: boolean;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  ariaLabel?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode; // optional now
  showCloseButton?: boolean;
  closeOnEscape?: boolean;
  closeOnBackdrop?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  'data-testid'?: string;
}


export interface CardProps extends BaseComponentProps {
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: Size;
  hoverable?: boolean;
  clickable?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}