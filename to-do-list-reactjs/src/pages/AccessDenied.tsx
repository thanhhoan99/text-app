// src/pages/Unauthorized.tsx
export default function AccessDenied() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold text-red-600 mb-4">403 - Unauthorized</h1>
      <p className="text-gray-700">You do not have permission to access this page.</p>
    </div>
  );
}
