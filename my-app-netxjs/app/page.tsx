

export default function Home() {
  return (
    <div className="flex min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Sidebar */}
     
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Administration</h1>
        <p className="text-gray-600">Chọn một kiểu rendering để xem danh sách công việc (Tasks).</p>
      </main>
    </div>
  );
}
