import React from 'react';
import { Link } from 'react-router-dom';
import { Wheat } from 'lucide-react';
import farmer from '../../assets/images/pexels-tomfisk-1483880.jpg'

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  alternativeAction: {
    text: string;
    linkText: string;
    href: string;
  };
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
  alternativeAction,
}) => {
  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-no-repeat bg-cover" style={{backgroundImage:`url(${farmer})`}}>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {children}

          <div className="mt-6">
            <p className="text-center text-sm text-gray-600">
              {alternativeAction.text}{' '}
              <Link
                to={alternativeAction.href}
                className="font-medium text-green-600 hover:text-green-500"
              >
                {alternativeAction.linkText}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;