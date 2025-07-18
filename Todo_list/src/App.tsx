import  { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router';
import LoginPage from './pages/LoginPage';
import OurTasksPage from './pages/OurTasksPage';
import MyTasksPage from './pages/MyTasksPage';
import CreateTaskPage from './pages/CreateTaskPage';
import UpdateTaskPage from './pages/UpdateTaskPage';
import AuthContext from './context';
import type { User } from './types';


export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = async () => {
    // Clear user from state and localStorage
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
    // Optionally, redirect to login page or show a message
    window.location.href = '/login';
  };

  return (
      <AuthContext.Provider value={{ user, setUser }}>
      <div className="min-h-screen bg-gray-100 flex flex-col"> {/* Main page container */}
        <header className="bg-white shadow-md py-4 px-6">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-extrabold text-gray-800">Tasks Management Guidelines</h1>
            {user && (
              <div className="flex items-center space-x-4">
                <p className="text-lg text-gray-600">Hi, <span className="font-semibold">{user?.email}</span></p>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>
 <BrowserRouter >
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
            <NavLink
              className={({ isActive }) =>
                `text-lg px-4 py-2 rounded-md transition-colors duration-200 ${
                  isActive ? 'font-bold text-blue-200 bg-blue-700' : 'text-white hover:bg-blue-700'
                }`
              }
              to="/create-task"
            >
              Create Task
            </NavLink>
          </div>
        </nav>

        {/* Main content area */}
          <Routes>
            <Route index element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />

            {/* Private Routes - Consider using a ProtectedRoute component for better handling */}
            {user ? (
              <>
                <Route path="/tasks" element={<OurTasksPage />} />
                <Route path="/assignee-me" element={<MyTasksPage />} />
                <Route path="/create-task" element={<CreateTaskPage />} />
                <Route path="/update-task/:id" element={<UpdateTaskPage />} />
              </>
            ) : (
              // Redirect to login if trying to access private routes without being logged in
              <Route path="*" element={<LoginPage />} />
            )}
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}