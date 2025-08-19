import BasicInput from '@/shared/components/atoms/inputs/BasicInput';
import BasicText from '@/shared/components/atoms/texts/BasicText';
import type { BasicInputProps } from '@/shared/types/inputTypes';

type FormInputProps = BasicInputProps & {
  label?: string;
  error?: string;
  showPassword?: boolean;
  onTogglePassword?: () => void;
};

export default function FormInput({
  label,
  error,
  showPassword,
  onTogglePassword,
  type,
  className,
  ...inputProps
}: FormInputProps) {
//   const [focused, setFocused] = useState(false);
  
  const isPasswordType = type === 'password';

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    // setFocused(true);
    inputProps.onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    // setFocused(false);
    inputProps.onBlur?.(e);
  };

  return (
    <div className="w-full">
      {label && (
        <BasicText
          size="sm"
          weight="medium"
          color="secondary"
          className="block mb-2"
        >
          {label}
        </BasicText>
      )}
      <div className="relative">
        <BasicInput
          {...inputProps}
          type={isPasswordType && showPassword ? 'text' : type}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`${error ? 'border-red-500' : ''} ${className || ''}`}
        />
        {isPasswordType && onTogglePassword && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
              </svg>
            )}
          </button>
        )}
      </div>
      {error && (
        <BasicText
          size="sm"
          color="destructive"
          className="mt-1"
        >
          {error}
        </BasicText>
      )}
    </div>
  );
}