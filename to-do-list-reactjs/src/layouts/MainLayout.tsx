// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from 'react';
// import { NavLink, Outlet } from 'react-router';
// import { useAuthStore } from '../useAuthStore';
// import routes from '../routes';
// import { HiOutlineMenuAlt2, HiOutlineChevronLeft } from 'react-icons/hi';
// import { LuLogOut } from 'react-icons/lu';
// import { BiUserCheck } from 'react-icons/bi';

// export default function MainLayout() {
//   const { loggedInUser, logOut } = useAuthStore((state) => state);
//   const userRoles: string[] = loggedInUser?.roles?.map((role: any) => role.code?.toLowerCase()) || [];

//   const [collapsed, setCollapsed] = useState(false);
//   const toggleSidebar = () => setCollapsed(!collapsed);

//   return (
//     <div className="flex min-h-screen font-sans bg-gray-100 text-gray-900">
//       {/* Sidebar */}
//       {loggedInUser && (
//         <aside
//           className={`${
//             collapsed ? 'w-20' : 'w-64'
//           } h-screen bg-gray-900 text-white flex flex-col justify-between transition-all duration-300 relative`}
//         >
//           <div className="p-4">
//             <div className="flex items-center justify-between mb-6">
//               {!collapsed ? (
//                 <div className="bg-gray-800 text-center py-2 px-2 rounded-lg text-sm font-semibold w-full truncate">
//                   {loggedInUser.username}
//                 </div>
//               ) : (
//                 <div className="text-white text-xl font-bold">
//                   <BiUserCheck size={30} />
//                 </div>
//               )}
//             </div>

//             {/* Toggle Sidebar Button */}
//             <button
//               onClick={toggleSidebar}
//               className="absolute top-4 -right-4 bg-white text-black w-9 h-9 flex items-center justify-center rounded-full shadow-md hover:bg-gray-200 z-10"
//             >
//               {collapsed ? <HiOutlineMenuAlt2 size={20} /> : <HiOutlineChevronLeft size={20} />}
//             </button>

//             {/* Navigation */}
//             <nav className="space-y-1 text-sm mt-8">
//               {routes.map((route) => {
//                 if (!route.showOnMenu) return null;

//                 const routeRoles = route.roles?.map((role: string) => role.toLowerCase()) || [];
//                 const hasAccess = userRoles.some(
//                   (role) => role === 'administrators' || routeRoles.includes(role)
//                 );
//                 if (!hasAccess) return null;

//                 return (
//                   <NavLink
//                     key={route.path}
//                     to={route.path}
//                     className={({ isActive }) =>
//                       `flex items-center px-4 py-2 rounded-md font-medium transition ${
//                         isActive
//                           ? 'bg-white text-black'
//                           : 'text-white hover:bg-gray-700'
//                       }`
//                     }
//                   >
//                     {collapsed ? (
//                       <span className="text-center w-full">{route.icon || route.name[0]}</span>
//                     ) : (
//                       <span>{route.name}</span>
//                     )}
//                   </NavLink>
//                 );
//               })}
//             </nav>
//           </div>

//           {/* Logout */}
//           <div className="p-4 border-t border-gray-700">
//             <button
//               onClick={async () => {
//                 await logOut();
//                 window.location.href = '/login';
//               }}
//               className="w-full bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
//             >
//               {!collapsed ? 'Logout' : <LuLogOut size={22} />}
//             </button>
//           </div>
//         </aside>
//       )}

//       {/* Main Area */}
//       <div className="flex-1 flex flex-col bg-gray-100">
//         {/* Header */}
//         <header className="sticky top-0 bg-white px-6 py-4 shadow-md border-b border-gray-200 flex justify-between items-center">

//           <h1 className="text-xl font-semibold">Dashboard</h1>
//           <span className="text-sm text-gray-500">
//             {loggedInUser?.username}
//           </span>
//         </header>

//         {/* Content */}
//         <main className="flex-1 p-6 bg-gray-50 overflow-auto">
//           <Outlet />
//         </main>

//         {/* Footer */}
//         <footer className="bg-white border-t border-gray-200 px-6 py-3 text-center text-sm text-gray-500">
//           &copy; {new Date().getFullYear()} Your Company. All rights reserved.
//         </footer>
//       </div>
//     </div>
//   );
// }

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Layout, Menu, Dropdown, Space, type MenuProps, Avatar } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { DownOutlined, LogoutOutlined } from '@ant-design/icons';
import { useAuthStore } from '../useAuthStore';
import routes from '../routes';
import DynamicBreadcrumb from '../pages/DynamicBreadcrumb';

const { Header, Content, Footer, Sider } = Layout;

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { loggedInUser, logOut } = useAuthStore((state) => state);

  const userRoles: string[] =
    loggedInUser?.roles?.map((role: any) => role.code.toLowerCase()) || [];

  const buildMenuItems = (routes: any[]) => {
    return routes.flatMap((route) => {
      if (!route.showOnMenu) return [];

      const routeRoles = route.roles?.map((r: string) => r.toLowerCase()) || [];
      const hasAccess = userRoles.some(
        (role) => role === 'administrators' || routeRoles.includes(role)
      );

      if (!hasAccess) return [];

      if (route.children?.some((child: any) => child.showOnMenu)) {
        const childItems = route.children
          .filter((child: any) => {
            const childRoles = child.roles?.map((r: string) => r.toLowerCase()) || [];
            return (
              child.showOnMenu &&
              userRoles.some((role) => role === 'administrators' || childRoles.includes(role))
            );
          })
          .map((child: any) => ({
            key: child.path,
            label: child.name,
            icon: child.icon,
          }));

        return [
          {
            key: route.path,
            label: route.name,
            icon: route.icon,
            children: childItems,
          },
        ];
      }

      return [
        {
          key: route.path,
          label: route.name,
          icon: route.icon,
        },
      ];
    });
  };

  const menuItems = buildMenuItems(routes);

  const handleMenuClick = (e: any) => {
    navigate(e.key);
  };

  const userMenu: MenuProps['items'] = [
  {
    key: 'logout',
    label: 'Logout',
    icon: <LogoutOutlined />,
    onClick: () => {
      logOut();
      navigate('/login');
    },
  },
]

  if (!loggedInUser) return null;

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 64, textAlign: 'center', paddingTop: 16, color: 'white', fontWeight: 'bold' }}>
          {collapsed ? '🧾' : loggedInUser.username}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header className='shadow-md' style={{ background: '#fff', padding: 0, display: 'flex', justifyContent: 'space-between', paddingRight: 16 ,position: 'sticky', top: 0, zIndex: 100}}>
             <div>Search</div>
              <Dropdown menu={{ items: userMenu }} trigger={['click']}>
                <div
                  onClick={(e) => e.preventDefault()}
                  style={{
                    height: 64,
                    textAlign: 'center',
                    padding: '0 16px',
                    color: '#000', // ✅ sửa tại đây
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
          <Space>
            <Avatar style={{ backgroundColor: '#1677ff' }} size="small">
                {loggedInUser.username.charAt(0).toUpperCase()}
              </Avatar>
              {loggedInUser.username}
              <DownOutlined />
          </Space>
        </div>
             </Dropdown>
        </Header>
        <DynamicBreadcrumb />
        <Content style={{ marginLeft: '16px' }}>
          <div style={{ padding: 24, background: '#fff', borderRadius: 8 }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

