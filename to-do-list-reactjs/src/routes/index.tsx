
import AddTask from '../pages/AddTask';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MyTasks from '../pages/MyTasks';

import Tasks from '../pages/Tasks';
import UpdateTask from '../pages/UpdateTask';
import User from '../pages/User';
import { DesktopOutlined  ,EditOutlined,PlusOutlined,UserOutlined} from '@ant-design/icons';

const routes = [
  {
    path: '/login',
    showOnMenu: false,
    isPublic: true,
     icon: <DesktopOutlined />,
    name: 'Login',
    index: true,
    element: <Login />,
  },
  {
    path: '/home',
    showOnMenu: true,
    icon: <UserOutlined />,
    name: 'Home',
    index: true,
    element: <Home />,
    roles: ['Users', 'customer', 'Leaders'],
  },
  {
    path: '/tasks',
    showOnMenu: true,
     icon: <UserOutlined />,
    name: 'Tasks',
    index: true,
    element: <Tasks />,
    roles: ['Managers', 'Leaders'],
  },

  {
    path: '/my-tasks',
    showOnMenu: true,
    icon: <UserOutlined />,
    name: 'My Tasks',
    index: true,
    element: <MyTasks />,
    roles: ['Managers', 'Leaders'],
    children: [
      {
        path: '/my-tasks/add',
        showOnMenu: true,
        name: 'Add Task',
        element: <AddTask />,
        icon: <PlusOutlined />,
        roles: ['Managers', 'Leaders'],
      },
      {
        path: '/my-tasks/update',
        showOnMenu: true,
        name: 'Update Task',
        element: <UpdateTask />,
        icon: <EditOutlined />,
        roles: ['Managers', 'Leaders'],
      }
    ],
  },
    {
    path: '/users',
    showOnMenu: true,
    icon: <UserOutlined />,
    name: 'Users',
    index: true,
    element: <User />,
    roles: ['Developer'],
  },



  {
    path: '/security',
    showOnMenu: true,
   icon: <UserOutlined />,
    name: 'Security',
    index: true,
    element: <div>Security</div>,
    roles: ['Managers'],
  },
];
export default routes;