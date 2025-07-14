import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

type FormData={
    name:string;
    email:string;
    address:string;
}
const signupSchema = yup.object({
  name: yup.string().min(2,'Minimum 2 characters').required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
 address: yup.string().min(5,'Minimum 5 characters').required('Address is required')
});

export default function BuyerForm() {
     const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = async (data:FormData)     => {

    console.log('Submitted:', data);
  };

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white rounded shadow">
  <div className="mb-4">
    <label className="block mb-1 font-semibold text-gray-700">Name</label>
    <input
      {...register('name')}
      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
  </div>
  <div className="mb-4">
    <label className="block mb-1 font-semibold text-gray-700">Email</label>
    <input
      {...register('email')}
      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
  </div>
  <div className="mb-4">
    <label className="block mb-1 font-semibold text-gray-700">Address</label>
    <input
      {...register('address')}
      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {errors.address && <p className="text-red-600 text-sm mt-1">{errors.address.message}</p>}
  </div>
  <div>
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
    >
      Submit
    </button>
  </div>
</form>
    </div>
  )
}