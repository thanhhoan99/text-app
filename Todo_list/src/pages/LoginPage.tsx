// File: vtc_afternoon/week-01/Todo_list/src/pages/LoginPage.tsx
import { useContext } from 'react';
import AuthContext from '../context';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { login } from '../service';

interface IFormInput {
  username: string;
  password: string;
}

// Validation schema using Yup
const schema = yup
  .object({
    username: yup.string().email('Email is invalid').required('Email is required'),
    password: yup.string().min(4, 'Password must be at least 4 characters').required('Password is required'),
  })
  .required();

export default function LoginPage() {
  const { setUser } = useContext(AuthContext);

  // react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: 'tungnt@softech.vn',
      password: '123456789',
    },
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log('Form submitted:', data);

    try {
      // Call API to authenticate user
      const result = await login(data.username, data.password);
      console.log('Login result:', result);

      const authenticatedUser = {
        id: result.loggedInUser.id,
        email: result.loggedInUser.email,
        access_token: result.access_token,
      };

      setUser(authenticatedUser);

      // save user info to localStorage
      localStorage.setItem('user', JSON.stringify(authenticatedUser));

      // save access token to localStorage
      localStorage.setItem('access_token', result.access_token);

      window.location.href = '/tasks'; // Redirect to tasks page
    } catch (error) {
      console.error('Login failed:', error);
      // You might want to display an error message to the user here
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Username:
          </label>
          <input
            {...register('username')}
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          />
          {errors.username && (
            <p className="text-red-500 text-xs italic mt-1">{errors.username.message}</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password:
          </label>
          <input
            {...register('password')}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic mt-1">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
}
