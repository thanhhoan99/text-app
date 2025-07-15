import { Task } from "@/app/types";

export const revalidate = 60; // Revalidate every seconds
export const dynamic = 'force-static'; // Use static generation for this page
export const dynamicParams = true; // Allow on-demand generation for unknown IDs

const baseUrl = 'https://server.aptech.io';
const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0dW5nbnRAc29mdGVjaC52biIsImVtYWlsIjoidHVuZ250QHNvZnRlY2gudm4iLCJzdWIiOjEsImFwcGxpY2F0aW9uIjoiT25saW5lIFNob3AgLSBBUEkiLCJyb2xlcyI6W3siaWQiOjEsIm5hbWUiOiJBZG1pbmlzdHJhdG9ycyJ9LHsiaWQiOjIsIm5hbWUiOiJNYW5hZ2VycyJ9XSwiaWF0IjoxNzUyMDg3MTk1LCJleHAiOjE3ODM2NDQ3OTV9.faZwG9__riyB5qH-x9lVK4GDj3kuyFt6C639FtQ6cok'

const defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: `Bearer ${token}`,
};

export async function generateStaticParams() {
  const tasks = await fetch(`${baseUrl}/workspaces/tasks`, {
    headers: defaultHeaders,
  }).then((res) => res.json());

  if (!tasks || !Array.isArray(tasks)) {
    return [];
  }

    return tasks.slice(0, 20).map((task: Task) => ({
    id: task.id?.toString(),
  }));
}
export default async function Index({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  // Fetch product details based on the ID
  const response = await fetch(`${baseUrl}/workspaces/tasks/${id}`, {
    method: 'GET',
    headers: defaultHeaders,
    next: {
      revalidate: 60, // Revalidate every 60 seconds
      tags: [`task-${id}`], // Optional: Tag for cache invalidation
    },
  });
  const task = await response.json();

  return (
   <div className='bg-white rounded-lg shadow p-6'>
  <h1 className='text-2xl font-bold text-gray-800 mb-4'>Task Details</h1>

  <p className='text-gray-600 mb-2'><strong>ID:</strong> {id}</p>
  <p className='text-gray-600 mb-2'><strong>Title:</strong> {task.title}</p>
  <p className='text-gray-600 mb-2'><strong>Description:</strong> {task.description || 'N/A'}</p>
  <p className='text-gray-600 mb-2'><strong>Status:</strong> {task.status || 'N/A'}</p>
  <p className='text-gray-600 mb-2'><strong>Priority:</strong> {task.priority || 'N/A'}</p>
  <p className='text-gray-600 mb-2'><strong>Due Date:</strong> {task.due_date ? new Date(task.due_date).toLocaleDateString() : 'N/A'}</p>
  <p className='text-gray-600 mb-2'><strong>Assignee ID:</strong> {task.assignee_id || 'N/A'}</p>

  <hr className='my-4 border-gray-200 border-t' />

  <div className='text-gray-800'>
    <h2 className='text-xl font-semibold'>Additional Info</h2>
    <p className='mt-2'>You can customize this section with more related task info or links.</p>
  </div>
</div>

  );
}