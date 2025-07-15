'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Task } from '../types';

const baseUrl = 'https://server.aptech.io';
const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0dW5nbnRAc29mdGVjaC52biIsImVtYWlsIjoidHVuZ250QHNvZnRlY2gudm4iLCJzdWIiOjEsImFwcGxpY2F0aW9uIjoiT25saW5lIFNob3AgLSBBUEkiLCJyb2xlcyI6W3siaWQiOjEsIm5hbWUiOiJBZG1pbmlzdHJhdG9ycyJ9LHsiaWQiOjIsIm5hbWUiOiJNYW5hZ2VycyJ9XSwiaWF0IjoxNzUyMDg3MTk1LCJleHAiOjE3ODM2NDQ3OTV9.faZwG9__riyB5qH-x9lVK4GDj3kuyFt6C639FtQ6cok'

const defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: `Bearer ${token}`,
};


export default function TaskListCSR() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch(`${baseUrl}/workspaces/tasks`, {
          method: 'GET',
          headers: defaultHeaders,
        });
        const data = await res.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) return <p className="p-4">Đang tải dữ liệu...</p>;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Due Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Assignee</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{task.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{task.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.status}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.priority}</td>
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
}