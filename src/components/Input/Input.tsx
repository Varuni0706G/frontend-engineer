import React, { useState, useId } from 'react';
import styled, { css } from 'styled-components';
import type { InputProps, Size } from '../../types/types'; 
import { theme } from '../../theme/theme';

const getSizeStyles = (size: Size) => {
  const sizes = {
    sm: css`
      padding: ${theme.spacing.sm} ${theme.spacing.md};
      font-size: ${theme.typography.fontSize.sm};
      min-height: 2rem;
    `,
    md: css`
      padding: ${theme.spacing.md};
      font-size: ${theme.typography.fontSize.base};
      min-height: 2.5rem;
    `,
    lg: css`
      padding: ${theme.spacing.lg} ${theme.spacing.md};
      font-size: ${theme.typography.fontSize.lg};
      min-height: 3rem;
    `,
  };
  return sizes[size];
};

const InputWrapper = styled.div<{ $fullWidth: boolean }>`
  display: inline-flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  ${({ $fullWidth }) => $fullWidth && 'width: 100%;'}
`;

const Label = styled.label`
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.neutral[700]};
  line-height: ${theme.typography.lineHeight.tight};
`;

const StyledInput = styled.input<{
  $size: Size;
  $error: boolean;
  $fullWidth: boolean;
}>`
  border: 1px solid ${theme.colors.neutral[300]};
  border-radius: ${theme.borderRadius.md};
  font-family: ${theme.typography.fontFamily.sans.join(', ')};
  line-height: ${theme.typography.lineHeight.normal};
  transition: all ${theme.transitions.fast};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  
  ${({ $size }) => getSizeStyles($size)}
  
  &::placeholder {
    color: ${theme.colors.neutral[400]};
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary[500]};
    box-shadow: 0 0 0 3px ${theme.colors.primary[100]};
  }

  &:hover:not(:disabled) {
    border-color: ${theme.colors.neutral[400]};
  }

  &:disabled {
    background-color: ${theme.colors.neutral[100]};
    color: ${theme.colors.neutral[500]};
    cursor: not-allowed;
  }

  ${({ $error }) =>
    $error &&
    css`
      border-color: ${theme.colors.error[500]};
      
      &:focus {
        border-color: ${theme.colors.error[500]};
        box-shadow: 0 0 0 3px ${theme.colors.error[100]};
      }
    `}

  @media (max-width: ${theme.breakpoints.sm}) {
    ${({ $size }) =>
      $size === 'lg' &&
      css`
        padding: ${theme.spacing.md};
        font-size: ${theme.typography.fontSize.base};
        min-height: 2.5rem;
      `}
  }
`;

const HelperText = styled.span<{ $error: boolean }>`
  font-size: ${theme.typography.fontSize.xs};
  color: ${({ $error }) => 
    $error ? theme.colors.error[600] : theme.colors.neutral[600]
  };
  line-height: ${theme.typography.lineHeight.tight};
`;

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  defaultValue,
  disabled = false,
  error = false,
  helperText,
  label,
  required = false,
  size = 'md',
  fullWidth = false,
  onChange,
  onBlur,
  onFocus,
  className,
  ariaLabel,
  'data-testid': dataTestId,
  ...rest
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  const id = useId();
  const helperId = useId();
  
  const inputValue = value !== undefined ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <InputWrapper $fullWidth={fullWidth} className={className}>
      {label && (
        <Label htmlFor={id}>
          {label}
          {required && <span style={{ color: theme.colors.error[500] }}>*</span>}
        </Label>
      )}
      <StyledInput
        id={id}
        type={type}
        placeholder={placeholder}
        value={inputValue}
        disabled={disabled}
        required={required}
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={onFocus}
        aria-label={ariaLabel || label}
        aria-describedby={helperText ? helperId : undefined}
        aria-invalid={error}
        data-testid={dataTestId}
        $size={size}
        $error={error}
        $fullWidth={fullWidth}
        {...rest}
      />
      {helperText && (
        <HelperText id={helperId} $error={error}>
          {helperText}
        </HelperText>
      )}
    </InputWrapper>
  );
};