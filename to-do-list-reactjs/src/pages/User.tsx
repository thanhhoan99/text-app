/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect, useState } from "react"
// import { useAuthStore } from "../useAuthStore"
// import { apiClient } from "../libraries/api-client";
// import { useNavigate } from "react-router-dom";

export default function User() {
  //   const { loggedInUser}=useAuthStore((state)=>state)
  //   const [users,setUsers]=useState<[]>([])

  //     const navigate = useNavigate();

  //      useEffect(() => {
  //   if (!loggedInUser) {
  //     navigate('/login');
  //   }
  // }, [loggedInUser, navigate]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {

  //       const users = (await apiClient.get('/security/users')) as [];
  //       setUsers(users);    
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>ssssss

            {/* <table className="w-full border border-gray-300">
                <thead>
                    <tr>
                        <th className="px-4 py-3">Username</th>
                        <th className="px-4 py-3">Email</th>
               
                    </tr>
                </thead>
                <tbody>
                    {users.map((user :any) => (
                        <tr key={user.id}>
                            <td className="px-4 py-3">{user.username}</td>
                            <td className="px-4 py-3">{user.fullName}</td>
                         
                        </tr>
                    ))}
                </tbody>
            </table> */}
    </div>
  )
}