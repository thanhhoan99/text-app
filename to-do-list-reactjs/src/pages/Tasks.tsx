/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { apiClient } from '../libraries/api-client';
import { useAuthStore } from '../useAuthStore';
import { Link, useNavigate } from 'react-router';


export default function Tasks() {
  const { logOut, loggedInUser } = useAuthStore((state) => state);
  const [tasks, setTasks] = React.useState<[]>([]);
  const navigate = useNavigate();

  const hasRole = (roleName: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return loggedInUser?.roles?.some((r: any) => r.name === roleName);
  };

  useEffect(() => {
    if (!loggedInUser) {
      navigate('/login');
    }
  }, [loggedInUser, navigate]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const tasks = (await apiClient.get('/workspaces/tasks')) as [];
        setTasks(tasks);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="bg-white p-6 rounded-lg shadow flex justify-between items-center border">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">📋 Tasks Dashboard</h2>
          <p className="text-sm text-gray-500">View and manage all your assigned tasks</p>
        </div>
        <div className="space-x-3">
          {hasRole('Administrators') && (
            <button
              onClick={() => navigate('/add-tasks')}
              className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition"
            >
              + Add Task
            </button>
          )}
          <button
            onClick={() => {
              logOut();
              navigate('/login');
            }}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow border p-4">
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full text-sm text-left text-gray-800">
            <thead className="bg-gray-50 border-b text-xs text-gray-500 uppercase">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Assignee</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
             
              {tasks.map((task: any) => (
                <tr key={task.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{task.id}</td>
                  <td className="px-4 py-3 font-medium">{task.title}</td>
                  <td className="px-4 py-3 text-gray-600">{task.description}</td>
                  <td className="px-4 py-3 text-gray-600">{task.assignee_id}</td>
                  <td className="px-4 py-3 space-x-2">
                    <button className="text-indigo-600 hover:text-indigo-900 font-medium">Edit</button>
                    <Link
                      to={`/task-isr/${task.id}`}
                      className="text-blue-600 hover:text-blue-900 font-medium"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
              {tasks.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center py-6 text-gray-400">
                    No tasks available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
