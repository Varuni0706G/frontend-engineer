import React from 'react';
import styled, { css } from 'styled-components';
import type { CardProps, Size } from '../../types/types';
import { theme } from '../../theme/theme';
import { handleKeyDown } from '../../utils/accessibility';

const getPaddingStyles = (padding: Size) => {
  const paddings = {
    sm: theme.spacing.md,
    md: theme.spacing.lg,
    lg: theme.spacing.xl,
  };
  return paddings[padding];
};

const getVariantStyles = (variant: CardProps['variant']) => {
  const variants = {
    default: css`
      background: white;
      border: 1px solid ${theme.colors.neutral[200]};
    `,
    outlined: css`
      background: white;
      border: 2px solid ${theme.colors.neutral[300]};
    `,
    elevated: css`
      background: white;
      border: 1px solid ${theme.colors.neutral[100]};
      box-shadow: ${theme.shadows.md};
    `,
  };
  return variants[variant || 'default'];
};

const StyledCard = styled.div<{
  $variant: CardProps['variant'];
  $padding: Size;
  $hoverable: boolean;
  $clickable: boolean;
}>`
  border-radius: ${theme.borderRadius.lg};
  transition: all ${theme.transitions.fast};
  position: relative;
  
  ${({ $variant }) => getVariantStyles($variant)}
  
  padding: ${({ $padding }) => getPaddingStyles($padding)};
  
  ${({ $hoverable }) =>
    $hoverable &&
    css`
      &:hover {
        transform: translateY(-2px);
        box-shadow: ${theme.shadows.lg};
      }
    `}
  
  ${({ $clickable }) =>
    $clickable &&
    css`
      cursor: pointer;
      
      &:hover {
        transform: translateY(-1px);
        box-shadow: ${theme.shadows.md};
      }
      
      &:active {
        transform: translateY(0);
        box-shadow: ${theme.shadows.sm};
      }
      
      &:focus-visible {
        outline: 2px solid ${theme.colors.primary[500]};
        outline-offset: 2px;
      }
    `}

  @media (max-width: ${theme.breakpoints.sm}) {
    ${({ $hoverable, $clickable }) =>
      ($hoverable || $clickable) &&
      css`
        &:hover {
          transform: none;
          box-shadow: inherit;
        }
      `}
  }
`;

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'md',
  hoverable = false,
  clickable = false,
  onClick,
  children,
  className,
  'data-testid': dataTestId,
  ...rest
}) => {
  const handleClick = () => {
    if (clickable && onClick) {
      onClick();
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (clickable && onClick) {
      handleKeyDown(event, onClick);
    }
  };

  const cardProps = {
    className,
    'data-testid': dataTestId,
    onClick: clickable ? handleClick : undefined,
    onKeyDown: clickable ? handleKeyPress : undefined,
    tabIndex: clickable ? 0 : undefined,
    role: clickable ? 'button' : undefined,
    'aria-pressed': clickable ? false : undefined,
    $variant: variant,
    $padding: padding,
    $hoverable: hoverable,
    $clickable: clickable,
    ...rest,
  };

  return (
    <StyledCard {...cardProps}>
      {children}
    </StyledCard>
  );
};