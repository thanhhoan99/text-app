/* eslint-disable @typescript-eslint/no-explicit-any */

import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import routes from '../routes';

// Tìm route theo path
const findRouteByPath = (path: string, routeList: any[]) => {
  for (const route of routeList) {
    if (route.path === path) return route;
    if (route.children) {
      const found :any = findRouteByPath(path, route.children);
      if (found) return found;
    }
  }
  return null;
};

export default function DynamicBreadcrumb() {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);

  const breadcrumbItems = [
    // {
    //   title: <Link to=""></Link>,
    // },
    ...pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      const route = findRouteByPath(url, routes);
      const name = route?.name || pathSnippets[index]; // fallback nếu không tìm thấy
      return {
        title: <Link to={url}>{name}</Link>,
      };
    }),
  ];

  return <Breadcrumb style={{ margin: '16px' }} items={breadcrumbItems} />;
}
