import React from 'react'

import { Task } from '../types';
import Link from 'next/link';


export const dynamic = 'force-static';


const baseUrl = 'https://server.aptech.io';
const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0dW5nbnRAc29mdGVjaC52biIsImVtYWlsIjoidHVuZ250QHNvZnRlY2gudm4iLCJzdWIiOjEsImFwcGxpY2F0aW9uIjoiT25saW5lIFNob3AgLSBBUEkiLCJyb2xlcyI6W3siaWQiOjEsIm5hbWUiOiJBZG1pbmlzdHJhdG9ycyJ9LHsiaWQiOjIsIm5hbWUiOiJNYW5hZ2VycyJ9XSwiaWF0IjoxNzUyMDg3MTk1LCJleHAiOjE3ODM2NDQ3OTV9.faZwG9__riyB5qH-x9lVK4GDj3kuyFt6C639FtQ6cok'

const defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: `Bearer ${token}`,
};


export default async function TaskSsgPage() {
  const response = await fetch(`${baseUrl}/workspaces/tasks`, {
    headers: defaultHeaders,
    cache: 'force-cache', // hoặc mặc định cũng được
  });

  const tasks: Task[] = await response.json();

  return (
   <div className="overflow-x-auto shadow-md rounded-lg p-6 bg-white">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Task List (SSG</h1>
      <table className="min-w-full divide-y divide-gray-200 bg-white">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
            <th className="px-6 py-3">Title</th>
            <th className="px-6 py-3">Description</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Priority</th>
            <th className="px-6 py-3">Due Date</th>
            <th className="px-6 py-3">Assignee</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {tasks.map((task) => (
            <tr key={task.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4">{task.id}</td>
              <td className="px-6 py-4">{task.title}</td>
              <td className="px-6 py-4">{task.description}</td>
              <td className="px-6 py-4">{task.status}</td>
              <td className="px-6 py-4">{task.priority}</td>
              <td className="px-6 py-4">
                {task.due_date ? new Date(task.due_date).toLocaleDateString() : '—'}
              </td>
              <td className="px-6 py-4">{task.assignee_id}</td>
              <td className="px-6 py-4">
                <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
                <Link href={`/task-isr/${task.id}`} className="ml-4 text-blue-600 hover:text-blue-900">View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}