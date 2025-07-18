/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';

import { apiClient } from '../libraries/api-client';
import { useAuthStore } from '../useAuthStore';
import {  Link, useNavigate } from 'react-router';
import type { Task } from '../types';

export default function Tasks() {
  const {logOut, loggedInUser } = useAuthStore((state) => state);
  const [tasks, setTasks] = React.useState<any[]>([]);
  const navigate = useNavigate();

 // Hàm kiểm tra role đúng kiểu object
  const hasRole = (roleName: string) => {
    return loggedInUser?.roles?.some((r: any) => r.name === roleName);
  };
  useEffect(()=>{
    if(!loggedInUser) {
      navigate('/login');
    }
  }, [loggedInUser, navigate])

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const tasks = (await apiClient.get('/workspaces/tasks', )) as any[];
        console.log(tasks);
        setTasks(tasks);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>

        {hasRole('Administrators') && (
            <button
              onClick={() => navigate('/add-tasks')}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Add Task
            </button>
          )}
      <button onClick={()=>{
        logOut();
        navigate('/login');
      }}>Logout</button>

       <div className="bg-white rounded-lg shadow p-6">
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Due Date</th> */}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Assignee</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tasks?.map((task:Task) => (
              <tr key={task.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{task.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{task.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.description}</td>
                {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.status}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.priority}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {task.due_date ? new Date(task.due_date).toLocaleDateString() : 'N/A'}
                </td> */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.assignee_id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
                  <Link
                    to={`/task-isr/${task.id}`}
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
    </div>
  );
}