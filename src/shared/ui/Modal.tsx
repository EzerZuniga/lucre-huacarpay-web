import { useEffect, type ReactNode, type MouseEvent } from 'react';
import { FiX } from 'react-icons/fi';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const SIZE_CLASSES: Record<NonNullable<ModalProps['size']>, string> = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
};

export default function Modal({ isOpen, onClose, title, children, size = 'md' }: ModalProps) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={handleBackdropClick}
    >
      <div
        className={`bg-wetland-foam rounded-xl shadow-2xl w-full ${SIZE_CLASSES[size]} max-h-[90vh] overflow-hidden animate-in fade-in duration-300`}
      >
        <div className="flex items-center justify-between p-6 border-b border-wetland-sand">
          {title && <h2 className="text-xl font-bold text-wetland-ink">{title}</h2>}
          <button
            onClick={onClose}
            className="text-wetland-ink-soft hover:text-wetland-ink transition-colors duration-300 p-1 rounded-lg hover:bg-wetland-sand/40"
            aria-label="Cerrar modal"
          >
            <FiX size={24} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
