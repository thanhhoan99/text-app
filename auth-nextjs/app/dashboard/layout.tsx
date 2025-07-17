import LogoutButton from "@/components/ui/LogoutButton"
import Link from "next/link"
import React from "react"

const DashboardLayout = ({children}:{children:  React.ReactNode}) => {
  return (
    <div>
        <header className="bg-gray-800 text-white p-4">
            <h1 className="text-xl">Dashboard</h1>
        </header>
        <main className="p-4 flex gap-x-5">
            <aside className="w-1/4 bg-gray-100 p-4">
           
               <div className="flex flex-col gap-y-4">
                 <Link href="/dashboard/tasks-server" className="block px-4 py-2 rounded-lg transition duration-200 bg-gray-300 hover:bg-white hover:text-black">
                Tasks Server Component
                </Link>
           
            
                <Link href="/dashboard/tasks-client" className="block px-4 py-2 rounded-lg transition duration-200 bg-gray-300 hover:bg-white hover:text-black">
                Tasks Client Component
                </Link>
                 <Link href="/dashboard/add-task" className="block px-4 py-2 rounded-lg transition duration-200 bg-gray-300 hover:bg-white hover:text-black">
                Add Task
                </Link>
           
            
            <LogoutButton />
               </div>
            </aside>
        
            <section className="w-3/4 bg-white p-4 shadow-md rounded-lg">
                {children}
            </section>
        </main>
    </div>
  )
}

export default DashboardLayout