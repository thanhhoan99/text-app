import "./globals.css";

import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Usually, you don't put content directly inside <html> in Next.js like this */}
      {/* Next.js expects you to manage the structure in _document.js, 
          but if you're customizing, do so accordingly */}

      {/* Remove the <div> outside <body> */}
      
      <body className="bg-white font-sans"> {/* Add class here if needed */}
        {/* Banner top */}
        <div className="bg-blue-400 text-white text-sm flex">
          <Image src="/banner-top.png" alt="banner-top" width={1500} height={50} />
        </div>

        {/* Header */}
        <header className="bg-yellow-400 flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <div className="font-black text-xl text-black italic">thegioididong</div>
            <input
              type="text"
              placeholder="Bạn tìm gì..."
              className="px-4 py-2 rounded-full w-96 outline-none bg-gray-200"
            />
          </div>
          <div className="flex items-center gap-6 text-sm text-black font-semibold">
            <span className="cursor-pointer hover:text-blue-600">👤 Đăng nhập</span>
            <span className="cursor-pointer hover:text-blue-600">🛒 Giỏ hàng</span>
            <span className="cursor-pointer hover:text-blue-600">📍 Hồ Chí Minh</span>
          </div>
        </header>

        {/* Navigation */}
        <nav className="bg-yellow-300 flex justify-around text-sm font-medium py-2 border-b">
          {[
            'Điện thoại',
            'Laptop',
            'Phụ kiện',
            'Smartwatch',
            'Đồng hồ',
            'Tablet',
            'Máy cũ, Thu cũ',
            'Màn hình, Máy in',
            'Sim, Thẻ cào',
            'Dịch vụ tiện ích',
          ].map((item) => (
            <div key={item} className="cursor-pointer hover:text-blue-600">
              {item}
            </div>
          ))}
        </nav>

        {/* Banner chính */}
        <section className="bg-black text-white">
          <div>
            <Image src="/banner.png" alt="banner-main" width={1300} height={200} />
          </div>
        </section>

        {/* Main content */}
        {children}
        <footer className="bg-gray-100 text-center p-4">
          <p>&copy; {new Date().getFullYear()} thegioididong. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}