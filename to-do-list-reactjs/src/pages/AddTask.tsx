// src/pages/AddTask.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/useAuthStore';

export default function AddTask() {
  const { loggedInUser } = useAuthStore((state) => state);
  const navigate = useNavigate();


 const hasRole = (roleName: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return loggedInUser?.roles?.some((r: any) => r.name === roleName);
  };

  useEffect(() => {
    if (!loggedInUser || !hasRole('Managers')) {
     navigate('/access-denied');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedInUser, navigate]);
  
console.log('loggedInUserADD:', loggedInUser);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Add New Task</h1>
      <form>
        <input type="text" placeholder="Title" className="border p-2 mb-2 w-full" />
        <textarea placeholder="Description" className="border p-2 mb-2 w-full" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Create Task
        </button>
      </form>
    </div>
  );
}
