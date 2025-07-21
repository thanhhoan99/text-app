/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink, Outlet } from 'react-router';
import { useAuthStore } from '../useAuthStore';
import routes from '../routes';

export default function MainLayout() {
  const { loggedInUser, logOut } = useAuthStore((state) => state);
  const userRoles: string[] = loggedInUser?.roles?.map((role: any) => role.code?.toLowerCase()) || [];

  return (
    <div className="min-h-screen flex font-sans bg-gray-100 text-gray-800">
      {loggedInUser && (
        <>
          {/* Sidebar */}
          <aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between shadow-lg">
            <div className="p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-10 tracking-tight">{loggedInUser?.username}</h1>
              <button className="w-full bg-black text-white py-2 px-4 rounded-lg font-semibold mb-6 hover:bg-gray-800 transition">
                + New Invoice
              </button>

              <nav className="space-y-2 text-sm">
                {routes.map((route) => {
                  if (!route.showOnMenu) return null;

                  const routeRoles = route.roles?.map((role: string) => role.toLowerCase()) || [];
                  const hasAccess = userRoles.some(
                    (role) => role === 'administrators' || routeRoles.includes(role)
                  );
                  if (!hasAccess) return null;

                  return (
                    <NavLink
                      key={route.path}
                      to={route.path}
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 rounded-lg font-medium transition ${
                          isActive
                            ? 'bg-black text-white'
                            : 'text-gray-700 hover:bg-gray-100 hover:text-black'
                        }`
                      }
                    >
                      {route.name}
                    </NavLink>
                  );
                })}
              </nav>
            </div>

            <div className="p-6 border-t border-gray-200">
              <button
                onClick={async () => {
                  await logOut();
                  window.location.href = '/login';
                }}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition font-medium"
              >
                Logout
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-10 bg-gray-50">
            <Outlet />
          </main>
        </>
      )}
    </div>
  );
}
