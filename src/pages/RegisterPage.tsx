import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '@/shared/layouts/AuthLayout';
import FormInput from '@/shared/components/molecules/FormInput';
import BasicButton from '@/shared/components/atoms/buttons/BasicButton';
import BasicText from '@/shared/components/atoms/texts/BasicText';
import useAuthStore from '@/shared/stores/authStore';
import { routes } from '@/routes/routes';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { register, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해주세요.';
    }

    if (!formData.email) {
      newErrors.email = '이메일을 입력해주세요.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식이 아닙니다.';
    }

    if (!formData.password) {
      newErrors.password = '비밀번호를 입력해주세요.';
    } else if (formData.password.length < 6) {
      newErrors.password = '비밀번호는 최소 6자 이상이어야 합니다.';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = '비밀번호 확인을 입력해주세요.';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = '비밀번호가 일치하지 않습니다.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      await register(formData.email, formData.password, formData.name);
      navigate(routes.default);
    } catch (error) {
      setErrors({ 
        general: error instanceof Error ? error.message : '회원가입에 실패했습니다.' 
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
    <AuthLayout>
      <div className="text-center mb-6">
        <BasicText
          as="h2"
          size="2xl"
          weight="bold"
        >
          회원가입
        </BasicText>
        <BasicText
          size="sm"
          color="muted"
          className="mt-2"
        >
          LANDAS와 함께하세요
        </BasicText>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {errors.general && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4">
            <BasicText size="sm" color="destructive">
              {errors.general}
            </BasicText>
          </div>
        )}

        <FormInput
          label="이름"
          type="text"
          placeholder="이름을 입력해주세요."
          value={formData.name}
          onChange={handleInputChange('name')}
          error={errors.name}
          autoComplete="name"
        />

        <FormInput
          label="이메일"
          type="email"
          placeholder="이메일을 입력해주세요."
          value={formData.email}
          onChange={handleInputChange('email')}
          error={errors.email}
          autoComplete="email"
        />

        <FormInput
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={formData.password}
          onChange={handleInputChange('password')}
          error={errors.password}
          showPassword={showPassword}
          onTogglePassword={() => setShowPassword(!showPassword)}
          autoComplete="new-password"
        />

        <FormInput
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호를 다시 입력해주세요."
          value={formData.confirmPassword}
          onChange={handleInputChange('confirmPassword')}
          error={errors.confirmPassword}
          showPassword={showConfirmPassword}
          onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
          autoComplete="new-password"
        />

        <BasicButton
          type="submit"
          fullWidth
          disabled={isLoading}
        >
          {isLoading ? '가입 중...' : '회원가입'}
        </BasicButton>

        <div className="text-center">
          <BasicText size="sm" color="muted">
            이미 계정이 있으신가요?{' '}
            <Link
              to={routes.login}
              className="font-medium text-primary-600 hover:text-primary-500"
            >
              로그인하기
            </Link>
          </BasicText>
        </div>
      </form>
    </AuthLayout>
  );
}