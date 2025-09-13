import  { useEffect } from 'react';
import ReactDOM from 'react-dom';
import type { ModalProps } from '../../types/types';

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  showCloseButton = true,
  closeOnEscape = true,
  closeOnBackdrop = true,
  className = '',
  size = 'md',
  'data-testid': testId = 'modal',
}: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closeOnEscape) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, closeOnEscape]);

  if (!isOpen) return null;

  const sizeClasses =
    size === 'sm'
      ? 'w-64'
      : size === 'md'
      ? 'w-96'
      : 'w-[36rem]'; // lg

  return ReactDOM.createPortal(
    <div
      data-testid={testId}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={closeOnBackdrop ? onClose : undefined}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white p-4 rounded ${sizeClasses} ${className}`}
      >
        {title && (
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">{title}</h2>
            {showCloseButton && (
              <button aria-label="Close" onClick={onClose}>
                ✕
              </button>
            )}
          </div>
        )}
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
};
