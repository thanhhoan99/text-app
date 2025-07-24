/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import { useAuthStore } from './stores/useAuthStore';
import MainLayout from './layouts/MainLayout';

export default function TasksManagementWithZustandAndSecurity() {
  const { loggedInUser } = useAuthStore((state) => state);
  const userRoles: string[] =
    loggedInUser?.roles?.map((role: any) => role.code.toLowerCase()) || [];

  const getProtectedRoutes = (routes: any[]) => {
    return routes.flatMap((route) => {
      const routeRoles = route.roles?.map((r: string) => r.toLowerCase()) || [];
      const hasAccess = userRoles.some(
        (r) => r === 'administrators' || routeRoles.includes(r)
      );

      if (!hasAccess || route.isPublic === true) return [];

      const children = route.children?.map((child: any) => ({
        path: child.path,
        element: child.element,
      })) || [];

      return [{ path: route.path, element: route.element }, ...children];
    });
  };

  const protectedRoutes = getProtectedRoutes(routes);

  const router = createBrowserRouter([
    {
      path: '/login',
      element: routes.find((r) => r.path === '/login')?.element,
    },
    {
      path: '/',
      element: <MainLayout />,
      children: protectedRoutes,
    },
    {
      path: '*',
      element: <div style={{ padding: 20 }}>404 Not Found</div>,
    },
  ]);

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </React.Suspense>
  );
}
