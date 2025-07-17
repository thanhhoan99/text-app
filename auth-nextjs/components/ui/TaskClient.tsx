'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Task } from '@/app/types';

// interface TasksData {
//   id: string;
//   title: string;
//   description: string;
//   status: string;
// }

const TasksClient = () => {
  //Lấy session từ client component
  const { data: session } = useSession();

  console.log('<<=== 🚀 TasksClient session ===>>', session);

  const [data, setData] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        /**
         * Có thể sử dụng access token từ session để gọi Backend API.
         * Ví dụ: const token = session?.user.accessToken;
         * const res = await fetch('https://server.aptech.io/workspaces/tasks', {
            headers: {
                Authorization: `Bearer session?.user.accessToken`,
            },
            });

         * Tuy nhiên cách này làm lộ access token trong trình duyệt.
         * Nên sử dụng server-side rendering hoặc API route để bảo mật hơn.
         */
        const res = await fetch('/api/tasks'); 
        /**
         * Gọi trung gian qua Router Handler ==> app\api\tasks\route.ts
         * Router Hanlder lấy token từ session sau đó gọi đến Backend API
         */
        if (!res.ok) throw new Error('Lỗi khi lấy dữ liệu task');
        const task = await res.json();
        setData(task.data);
      } catch (err) {
        setError(err.message || 'Lỗi không xác định');
      } finally {
        setLoading(false);
      }
    };
    fetchTask();
  }, []);

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!data) return <div>Không có dữ liệu</div>;
  return (
  <div className="bg-white rounded-lg shadow p-6">
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
              {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th> */}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Due Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Assignee</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((task :Task) => (
              <tr key={task.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{task.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{task.title}</td>
                {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.status}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.priority}</td> */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {task.due_date ? new Date(task.due_date).toLocaleDateString() : 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.assignee_id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
                  <Link
                    href={`/task-isr/${task.id}`}
                    className="ml-4 text-blue-600 hover:text-blue-900"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TasksClient;
