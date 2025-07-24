/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import './layout.css';
import { Layout, Menu, Dropdown, Space, type MenuProps, Avatar } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { DownOutlined, LogoutOutlined } from '@ant-design/icons';
import { useAuthStore } from '../stores/useAuthStore';
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
  ];

  if (!loggedInUser) return null;

  const siderWidth = collapsed ? 80 : 220;

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Fixed Sidebar */}
     <Sider
     className="custom-sider"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={220}
        style={{
          height: '100vh',
          overflow: 'auto', // Cuộn riêng nếu nội dung dài
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            height: 64,
            textAlign: 'center',
            paddingTop: 16,
            color: 'white',
            fontWeight: 'bold',
          }}
        >
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


      {/* Main Content */}
      <Layout style={{ marginLeft: siderWidth }}>
        <Header
          className="shadow-md"
          style={{
            background: '#fff',
            padding: 0,
            display: 'flex',
            justifyContent: 'space-between',
            paddingRight: 16,
            position: 'sticky',
            top: 0,
            zIndex: 99,
          }}
        >
          <div>Search</div>
          <Dropdown menu={{ items: userMenu }} trigger={['click']}>
            <div
              onClick={(e) => e.preventDefault()}
              style={{
                height: 64,
                padding: '0 16px',
                color: '#000',
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
          <div
            style={{
              padding: 24,
              background: '#fff',
              borderRadius: 8,
              minHeight: 'calc(100vh - 64px - 64px - 48px)', // Header + Footer + Breadcrumb
            }}
          >
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
