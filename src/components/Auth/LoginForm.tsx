import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthStore } from '../../store/auth-store';
import { useNavigate } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data.email, data.password);
      navigate('/dashboard'); // Redirect to the dashboard on successful login
    } catch (err) {
      if (err instanceof Error) {
        console.error('Login error:', err.message); // Updated to use `err`
        alert(err.message); // Updated to use `err`
      } else {
        console.error('Login error:', err);
        alert('An unknown error occurred. Please try again.');
      }
    }
  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
             <div className="flex justify-center">
             </div>
             <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
             Hi there
             </h2>
             <p className="mt-2 text-center text-sm text-gray-600">
             Log in to your account
             </p>
           </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          {...register('email')}
          type="email"
          className="mt-1 block w-full  border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 h-10 py-2 px-2 text-base rounded-full"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          {...register('password')}
          type="password"
          className="mt-1 block w-full border-gray-300 shadow-sm  focus:border-orange-500 focus:ring-orange-500  h-10 py-2 px-2 text-base rounded-full"
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 rounded-full"
      >
        {isSubmitting ? 'Logging in...' : 'Log in'}
      </button>
    </form>
  );
};

export default LoginForm;
