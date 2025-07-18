
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { createTask } from '../service';

interface IFormInput {
  title: string;
  start_date: string;
  due_date?: string;
  description?: string;
  status: 'to_do' | 'in_progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  assignee_id?: number;
}

// Yup validation schema
const schema: yup.ObjectSchema<IFormInput> = yup.object({
  title: yup
    .string()
    .required('Title is required')
    .min(3, 'Title must be at least 3 characters')
    .max(100, 'Title must be less than 100 characters'),
  start_date: yup
    .string()
    .required('Start date is required')
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Please enter a valid date'),
  due_date: yup
    .string()
    .optional()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Please enter a valid date')
    .test('due_date-after-start_date', 'Due date must be after start date', function (value) {
      if (!value) return true;
      const { start_date } = this.parent;
      return new Date(value) >= new Date(start_date);
    }),
  description: yup.string().optional().max(500, 'Description must be less than 500 characters'),
  status: yup
    .mixed<'to_do' | 'in_progress' | 'done'>()
    .required('Status is required')
    .oneOf(['to_do', 'in_progress', 'done'], 'Please select a valid status'),
  priority: yup
    .mixed<'low' | 'medium' | 'high'>()
    .required('Priority is required')
    .oneOf(['low', 'medium', 'high'], 'Please select a valid priority'),
  assignee_id: yup.number().min(1, 'Assignee ID must be a positive number'),
});

export default function CreateTaskPage() {
  const navigate = useNavigate();
  // react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: '',
      start_date: '',
      due_date: '',
      description: '',
      status: 'to_do',
      priority: 'medium',
      assignee_id: undefined,
    },
    mode: 'onChange',
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: SubmitHandler<IFormInput> = async (data: any) => {
    console.log('Form submitted:', data);
    try {
      await createTask(data);
      navigate('/tasks');
    } catch (error) {
      console.error('Error creating task:', error);
      alert('Failed to create task. Please try again.');
    }
  };

  return (
<div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Create New Task</h2>

          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
              Title:
            </label>
            <input
              {...register('title')}
              type="text"
              id="title"
              name="title"
              placeholder="Enter task title"
              className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.title && <p className="text-red-500 text-xs italic mt-1">{errors.title.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
              Description:
            </label>
            <input
              {...register('description')}
              type="text"
              id="description"
              name="description"
              placeholder="Enter task description"
              className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.description && <p className="text-red-500 text-xs italic mt-1">{errors.description.message}</p>}
          </div>

          {/* start_date */}
          <div className="mb-4">
            <label htmlFor="start_date" className="block text-gray-700 text-sm font-bold mb-2">
              Start Date:
            </label>
            <input
              {...register('start_date')}
              type="date"
              id="start_date"
              name="start_date"
              placeholder="YYYY-MM-DD"
              className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.start_date && <p className="text-red-500 text-xs italic mt-1">{errors.start_date.message}</p>}
          </div>

          {/* due_date */}
          <div className="mb-4">
            <label htmlFor="due_date" className="block text-gray-700 text-sm font-bold mb-2">
              Due Date:
            </label>
            <input
              {...register('due_date')}
              type="date"
              id="due_date"
              name="due_date"
              placeholder="YYYY-MM-DD"
              className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.due_date && <p className="text-red-500 text-xs italic mt-1">{errors.due_date.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">
              Status:
            </label>
            <select
              {...register('status')}
              id="status"
              name="status"
              className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="to_do">To Do</option>
              <option value="in_progress">In Progress</option>
              <option value="done">Done</option>
            </select>
            {errors.status && <p className="text-red-500 text-xs italic mt-1">{errors.status.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="priority" className="block text-gray-700 text-sm font-bold mb-2">
              Priority:
            </label>
            <select
              {...register('priority')}
              id="priority"
              name="priority"
              className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            {errors.priority && <p className="text-red-500 text-xs italic mt-1">{errors.priority.message}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="assignee_id" className="block text-gray-700 text-sm font-bold mb-2">
              Assignee ID:
            </label>
            <input
              {...register('assignee_id')}
              type="text"
              id="assignee_id"
              name="assignee_id"
              placeholder="Enter assignee ID"
              className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.assignee_id && <p className="text-red-500 text-xs italic mt-1">{errors.assignee_id.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full transition-colors duration-200"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
}