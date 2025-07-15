// app/layout.tsx
import './globals.css';
import Link from 'next/link';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Task App',
  description: 'Demo SSR, SSG, CSR, ISR',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen font-sans bg-black text-white">
  {/* Sidebar */}
  <aside className="w-64 bg-gray-900 p-6 border-r border-gray-800 shadow-lg">
    <h2 className="text-2xl font-bold text-white mb-8 tracking-wide">Admin Menu</h2>
    <nav>
      <ul className="flex flex-col gap-4">
        <li>
          <Link
            href="/task-ssr"
            className="block px-4 py-2 rounded-lg transition duration-200 bg-gray-800 hover:bg-white hover:text-black"
          >
            Tasks SSR
          </Link>
        </li>
        <li>
          <Link
            href="/task-ssg"
            className="block px-4 py-2 rounded-lg transition duration-200 bg-gray-800 hover:bg-white hover:text-black"
          >
            Tasks SSG
          </Link>
        </li>
        <li>
          <Link
            href="/task-csr"
            className="block px-4 py-2 rounded-lg transition duration-200 bg-gray-800 hover:bg-white hover:text-black"
          >
            Tasks CSR
          </Link>
        </li>
      </ul>
    </nav>
  </aside>

  {/* Main Content */}
  <main className="flex-1 p-10 bg-white text-black overflow-y-auto">
    {children}
  </main>
</body>

    </html>
  );
}
