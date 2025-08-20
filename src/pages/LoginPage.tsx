import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { routes } from '@/routes/routes';
import FormInput from '@/shared/components/molecules/FormInput';
import BasicButton from '@/shared/components/atoms/buttons/BasicButton';
import BasicText from '@/shared/components/atoms/texts/BasicText';
import useAuthStore from '@/shared/stores/authStore';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { login, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = '아이디를 입력하지 않았습니다.';
    }

    if (!formData.password) {
      newErrors.password = '아이디 또는 비밀번호가 일치하지 않습니다.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      await login(formData.email, formData.password);
      navigate(routes.main);
    } catch (error) {
      setErrors({ 
        general: error instanceof Error ? error.message : '로그인에 실패했습니다.' 
      });
    }
  };

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errors.general && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <BasicText size="sm" color="destructive">
            {errors.general}
          </BasicText>
        </div>
      )}

      <FormInput
        label="아이디"
        type="text"
        placeholder="아이디를 입력해주세요."
        value={formData.email}
        onChange={handleInputChange('email')}
        error={errors.email}
        className={errors.email ? 'bg-red-100 text-red-900 placeholder-red-500' : ''}
        autoComplete="username"
      />

      <FormInput
        label="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요."
        value={formData.password}
        onChange={handleInputChange('password')}
        error={errors.password}
        className={errors.email ? 'bg-red-100 text-red-900 placeholder-red-500' : ''}
        showPassword={showPassword}
        onTogglePassword={() => setShowPassword(!showPassword)}
        autoComplete="current-password"
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2">
            <BasicText size="sm" color="secondary">
              아이디 저장
            </BasicText>
          </label>
        </div>

        <div className="text-sm">
          <Link
            to="#"
            className="font-medium text-primary-600 hover:text-primary-500"
          >
            아이디찾기 | 비밀번호 찾기
          </Link>
        </div>
      </div>

      <BasicButton
        type="submit"
        fullWidth
        disabled={isLoading}
        onClick={() => navigate(routes.main)}
        className="!bg-gray-400 !text-white hover:!bg-gray-500"
      >
        {isLoading ? '로그인 중...' : '로그인'}
      </BasicButton>

      <BasicButton
        type="button"
        variant="outline"
        fullWidth
        onClick={() => navigate(routes.signup)}
      >
        회원가입
      </BasicButton>
    </form>
  );
}