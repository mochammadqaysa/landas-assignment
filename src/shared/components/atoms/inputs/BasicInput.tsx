import type { BasicInputProps } from '@/shared/types/inputTypes';
import classNameMerge from '@/shared/utils/classNameMerge';

export default function BasicInput({
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  disabled = false,
  readOnly = false,
  required = false,
  className,
  id,
  name,
  autoComplete,
  maxLength,
  minLength,
  pattern,
}: BasicInputProps) {
  const base = 'w-full px-3 py-2 border  rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-landas-yellow focus:border-landas-yellow transition-colors';

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      id={id}
      name={name}
      autoComplete={autoComplete}
      maxLength={maxLength}
      minLength={minLength}
      pattern={pattern}
      className={classNameMerge([
        base,
        disabled && 'bg-gray-100 cursor-not-allowed',
        readOnly && 'bg-gray-50',
        className
      ])}
    />
  );
}