import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from './Modal';
import { vi } from 'vitest';

describe('Modal', () => {
  test('renders when isOpen is true', () => {
    render(
      <Modal isOpen={true} onClose={() => {}} title="Test Modal">
        <p>Content</p>
      </Modal>
    );
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
  });

  test('does not render when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        <p>Content</p>
      </Modal>
    );
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });

  test('displays title when provided', () => {
    render(
      <Modal isOpen={true} onClose={() => {}} title="My Title">
        <p>Content</p>
      </Modal>
    );
    expect(screen.getByText('My Title')).toBeInTheDocument();
  });

  test('calls onClose when Escape key is pressed', () => {
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <p>Content</p>
      </Modal>
    );
    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test('does not close on Escape when closeOnEscape is false', () => {
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose} closeOnEscape={false}>
        <p>Content</p>
      </Modal>
    );
    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });
    expect(handleClose).not.toHaveBeenCalled();
  });

  test('prevents body scroll when open', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <p>Content</p>
      </Modal>
    );
    expect(document.body.style.overflow).toBe('hidden');
  });

  test('restores body scroll when closed', () => {
    const { unmount } = render(
      <Modal isOpen={true} onClose={() => {}}>
        <p>Content</p>
      </Modal>
    );
    unmount();
    expect(document.body.style.overflow).toBe('');
  });

  test('does not show close button when showCloseButton is false', () => {
    render(
      <Modal isOpen={true} onClose={() => {}} showCloseButton={false}>
        <p>Content</p>
      </Modal>
    );
    expect(screen.queryByLabelText('Close')).not.toBeInTheDocument();
  });

  test('applies data-testid', () => {
    render(
      <Modal isOpen={true} onClose={() => {}} data-testid="modal-test">
        <p>Content</p>
      </Modal>
    );
    expect(screen.getByTestId('modal-test')).toBeInTheDocument();
  });
});
