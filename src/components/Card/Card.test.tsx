import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { describe, it, expect, vi } from 'vitest';
import { Card } from './Card';
import { theme } from '../../theme/theme';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('Card', () => {
  it('renders correctly', () => {
    renderWithTheme(
      <Card>
        <p>Card content</p>
      </Card>
    );
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = renderWithTheme(
      <Card className="custom-card">
        <p>Card content</p>
      </Card>
    );
    expect(container.firstChild).toHaveClass('custom-card');
  });

  it('applies data-testid', () => {
    renderWithTheme(
      <Card data-testid="test-card">
        <p>Card content</p>
      </Card>
    );
    expect(screen.getByTestId('test-card')).toBeInTheDocument();
  });

  it('handles click events when clickable', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    renderWithTheme(
      <Card clickable onClick={handleClick}>
        <p>Clickable card</p>
      </Card>
    );

    const card = screen.getByRole('button');
    await user.click(card);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not handle click events when not clickable', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    renderWithTheme(
      <Card onClick={handleClick}>
        <p>Non-clickable card</p>
      </Card>
    );

    const card = screen.getByText('Non-clickable card').parentElement!;
    await user.click(card);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('handles keyboard navigation when clickable', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    renderWithTheme(
      <Card clickable onClick={handleClick}>
        <p>Keyboard accessible card</p>
      </Card>
    );

    const card = screen.getByRole('button');
    card.focus();
    await user.keyboard('{Enter}');
    expect(handleClick).toHaveBeenCalledTimes(1);

    await user.keyboard(' ');
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('has proper accessibility attributes when clickable', () => {
    renderWithTheme(
      <Card clickable onClick={() => {}}>
        <p>Accessible card</p>
      </Card>
    );

    const card = screen.getByRole('button');
    expect(card).toHaveAttribute('tabIndex', '0');
    expect(card).toHaveAttribute('aria-pressed', 'false');
  });

  it('does not have accessibility attributes when not clickable', () => {
    const { container } = renderWithTheme(
      <Card>
        <p>Regular card</p>
      </Card>
    );

    const card = container.firstChild as HTMLElement;
    expect(card).not.toHaveAttribute('role');
    expect(card).not.toHaveAttribute('tabIndex');
    expect(card).not.toHaveAttribute('aria-pressed');
  });

  it('renders different variants correctly', () => {
    const variants = ['default', 'outlined', 'elevated'] as const;

    variants.forEach((variant) => {
      const { container } = renderWithTheme(
        <Card variant={variant}>
          <p>{variant} card</p>
        </Card>
      );
      expect(container.firstChild).toBeInTheDocument();
    });
  });

  it('renders different padding sizes correctly', () => {
    const sizes = ['sm', 'md', 'lg'] as const;

    sizes.forEach((padding) => {
      const { container } = renderWithTheme(
        <Card padding={padding}>
          <p>{padding} padding card</p>
        </Card>
      );
      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
