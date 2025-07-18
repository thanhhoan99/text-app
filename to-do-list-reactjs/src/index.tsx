// Create LoginContext to manage login state
import { BrowserRouter  , NavLink, Route, Routes } from 'react-router';


// import AccessDenied from './pages/AccessDenied';
import Tasks from './pages/Tasks';
import Login from './pages/Login';
import AddTask from './pages/AddTask';
import AccessDenied from './pages/AccessDenied';
// import Customer from './pages/Customer';

export default function TasksManagementWithZustand() {
  return (
    <div className="bg-gray-50">
    
        
      <BrowserRouter>
        <nav className="bg-blue-600 shadow-lg py-3">
          <div className="container mx-auto flex justify-center items-center space-x-6">
            <NavLink
              className={({ isActive }) =>
                `text-lg px-4 py-2 rounded-md transition-colors duration-200 ${
                  isActive ? 'font-bold text-blue-200 bg-blue-700' : 'text-white hover:bg-blue-700'
                }`
              }
              to="/tasks"
            >
              Tasks
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-lg px-4 py-2 rounded-md transition-colors duration-200 ${
                  isActive ? 'font-bold text-blue-200 bg-blue-700' : 'text-white hover:bg-blue-700'
                }`
              }
              to="/assignee-me"
            >
              My Tasks
            </NavLink>
            {/* <NavLink
              className={({ isActive }) =>
                `text-lg px-4 py-2 rounded-md transition-colors duration-200 ${
                  isActive ? 'font-bold text-blue-200 bg-blue-700' : 'text-white hover:bg-blue-700'
                }`
              }
              to="/add-tasks"
            >
              Create Task
            </NavLink> */}
            
          </div>
        </nav>
        <div className="container-fluid mx-auto px-8 py-4">
          <Routes>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/add-tasks" element={<AddTask/>} />
             <Route path="/access-denied" element={<AccessDenied />} />
             {/* <Route path="/customer" element={<Customer />} />
            
            <Route path="*" element={<AccessDenied />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}