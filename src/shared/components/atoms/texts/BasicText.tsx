import type { BasicTextProps } from '@/shared/types/textTypes';
import classNameMerge from '@/shared/utils/classNameMerge';

export default function BasicText({
  children,
  as: Tag = 'p',
  size = 'base',
  weight = 'normal',
  color = 'primary',
  align = 'left',
  className,
  id,
}: BasicTextProps) {
  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl'
  }[size];

  const weights = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold'
  }[weight];

  const colors = {
    primary: 'text-gray-900',
    secondary: 'text-gray-600',
    muted: 'text-gray-500',
    accent: 'text-primary-600',
    destructive: 'text-red-600'
  }[color];

  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify'
  }[align];

  return (
    <Tag
      id={id}
      className={classNameMerge([
        sizes,
        weights,
        colors,
        alignments,
        className
      ])}
    >
      {children}
    </Tag>
  );
}