import { useState, useEffect } from "react";

const UserAccountListPage = () => {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    fetch("http://localhost:3000/api/user_accounts", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [token]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Accounts</h1>
      <button className="rounded-lg bg-blue-500 w-32 h-12 mb-8 text-white font-bold py-2 px-4">
        Create
      </button>

      <div className="overflow-hidden rounded-xl border border-gray-500">
        <table className="min-w-full">
          <thead className="bg-zinc-200 text-black border-b border-gray-800">
            <tr>
              <th className="py-5 px-4 text-left">Action</th>
              <th className="py-2 px-4 text-left">Username</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Role</th>
              <th className="py-2 px-4 text-left">Is Active</th>
              <th className="py-2 px-4 text-left">Is Activated</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-gray-700">
                <td className="py-4 px-4">
                  <button className="bg-blue-400 text-white py-3 px-8 rounded-md hover:bg-gray-600">
                    View
                  </button>
                </td>
                <td className="py-4 px-4 ">{user.username}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.user_role.user_role_name}</td>
                <td className="py-2 px-4">{user.is_active.toString()}</td>
                <td className="py-2 px-4">{user.is_activated.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserAccountListPage;
