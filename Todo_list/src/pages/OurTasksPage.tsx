import React, {useEffect, useState } from 'react';

import type { Task } from '../types';
import { useNavigate } from 'react-router';
import { getTasks } from '../service';
import SearchTasks from '../components/SearchTasks';




export default function OurTasksPage() {

  const navigate = useNavigate();

  const [tasks, setTasks] = React.useState([]);

   const [filters, setFilters] = useState<any>({
    status: '',
    priority: '',
  });



  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await getTasks();
        setTasks(tasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleOnEdit = (id: number) => {
    // Logic to handle task edit
    navigate(`/update-task/${id}`);
  };
const handleOnSearch = (filters: { status?: string; priority?: string }) => {
    // Logic to filter tasks based on status and priority
    console.log('Filters applied:', filters);
    // You can implement the filtering logic here or pass it to a service function
    setFilters(filters);
  };

  const filteredTasks = tasks.filter((task: Task) => {
    let matches = true;

    if (filters.status && task.status !== filters.status) {
      matches = false;
    }

    if (filters.priority && task.priority !== filters.priority) {
      matches = false;
    }

    return matches;
  });

  return (
    // File: vtc_afternoon/week-01/Todo_list/src/pages/OurTasksPage.tsx
<div>
   <SearchTasks onSearch={handleOnSearch} />
      <div className="overflow-x-auto shadow-md rounded-lg"> {/* Added container for shadow and rounded corners */}
        <table className="min-w-full divide-y divide-gray-200 bg-white"> {/* Added bg-white for table background */}
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Priority
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Due Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Assignee
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200"> {/* Added divide-y for row borders */}
            {filteredTasks?.map((task: Task) => (
              <tr key={task.id} className="hover:bg-gray-50 transition-colors"> {/* Changed hover:bg-gray-100 to hover:bg-gray-50 for subtler effect */}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{task.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{task.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.status}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.priority}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {task.due_date ? new Date(task.due_date).toLocaleDateString() : ''}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.assignee_id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => {if (typeof task.id ==='number'){
                      handleOnEdit(task.id)
                    }}}
                    className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => navigate(`/view-task/${task.id}`)}
                    className="ml-4 text-blue-600 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}