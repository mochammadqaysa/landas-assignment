import { Outlet } from 'react-router-dom';
import BasicText from '@/shared/components/atoms/texts/BasicText';

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center text-landas-yellow">
          <BasicText
            as="h1"
            size="4xl"
            weight="bold"
            color="accent"
            className="mb-6"
          >
            LANDAS
          </BasicText>
        </div>

        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Outlet />
        </div>

        <div className="absolute bottom-0 left-0 w-full flex justify-center pb-4 px-2 sm:px-0">
          <BasicText
            size="xs"
            color="muted"
            className="text-center w-full sm:w-auto"
          >
            Copyright © WWW.kdsb2bmail.com All right reserved
          </BasicText>
        </div>
      </div>
    </div>
  );
}