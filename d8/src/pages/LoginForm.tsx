import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type FormData = {
  name: string;
  password: string;
};

const signupSchema = yup.object({
  name: yup.string().required('Name is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log('Submitted:', data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-red-600 mb-6">Login</h2>
        <p className="text-sm text-center mb-4 text-gray-600">
          Login to your account
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700">UserName</label>
            <input
              {...register('name')}
              placeholder="Enter email or phone"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Password</label>
            <input
              type="password"
              {...register('password')}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-red-500" />
              Remember me
            </label>
            <a href="#" className="text-red-500 hover:underline">
              Reset Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
          >
            SIGN IN
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have an account yet?{' '}
          <a href="#" className="text-red-500 font-semibold hover:underline">
            Join Grovia Now!
          </a>
        </p>
      </div>
    </div>
  );
}
