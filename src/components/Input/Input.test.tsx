import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { describe, it, expect, vi } from 'vitest';
import { Input } from './Input';
import { theme } from '../../theme/theme';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('Input', () => {
  it('renders correctly', () => {
    renderWithTheme(<Input placeholder="Test input" />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('displays label when provided', () => {
    renderWithTheme(<Input label="Test Label" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('displays helper text', () => {
    renderWithTheme(<Input helperText="Helper text" />);
    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });

  it('shows required indicator', () => {
    renderWithTheme(<Input label="Required Field" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('handles controlled input', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    renderWithTheme(<Input value="" onChange={handleChange} />);

    await user.type(screen.getByRole('textbox'), 'test');
    expect(handleChange).toHaveBeenCalledTimes(4);
  });

  it('handles uncontrolled input', async () => {
    const user = userEvent.setup();

    renderWithTheme(<Input defaultValue="default" />);
    const input = screen.getByRole('textbox') as HTMLInputElement;

    expect(input.value).toBe('default');

    await user.clear(input);
    await user.type(input, 'new value');
    expect(input.value).toBe('new value');
  });

  it('is disabled when disabled prop is true', () => {
    renderWithTheme(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('applies error styling', () => {
    renderWithTheme(<Input error helperText="Error message" />);
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('handles focus and blur events', () => {
    const handleFocus = vi.fn();
    const handleBlur = vi.fn();

    renderWithTheme(<Input onFocus={handleFocus} onBlur={handleBlur} />);
    const input = screen.getByRole('textbox');

    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalledTimes(1);

    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it('applies different input types', () => {
    const { rerender } = renderWithTheme(<Input type="email" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');

    rerender(
      <ThemeProvider theme={theme}>
        <Input type="password" label="Password" />
      </ThemeProvider>
    );
    expect(screen.getByLabelText(/password/i)).toHaveAttribute('type', 'password');
  });

  it('applies custom className', () => {
    const { container } = renderWithTheme(<Input className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('applies data-testid', () => {
    renderWithTheme(<Input data-testid="test-input" />);
    expect(screen.getByTestId('test-input')).toBeInTheDocument();
  });

  it('links label and input correctly', () => {
    renderWithTheme(<Input label="Test Label" />);
    const input = screen.getByRole('textbox');
    const label = screen.getByText('Test Label');

    expect(input).toHaveAttribute('id');
    expect(label).toHaveAttribute('for', input.getAttribute('id'));
  });
});
