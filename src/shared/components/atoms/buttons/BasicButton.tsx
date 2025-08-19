import type { BasicButtonProps } from '@/shared/types/buttonTypes';
import classNameMerge from '@/shared/utils/classNameMerge';

export default function BasicButton({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  className,
  onClick,
  id,
  title,
  type = 'button',
}: BasicButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4',
    lg: 'h-12 px-5 text-lg'
  }[size];

  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500'
  }[variant];

  return (
    <button
      type={type}
      disabled={disabled}
      title={title}
      onClick={onClick}
      id={id}
      className={classNameMerge([
        base,
        sizes,
        variants,
        fullWidth && 'w-full',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      ])}
    >
      {children}
    </button>
  );
}