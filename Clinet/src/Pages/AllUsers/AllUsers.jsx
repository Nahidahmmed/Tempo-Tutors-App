import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

export default function AllUsers() {
  const {
    isPending,
    refetch,
    data: users = [],
  } = useQuery({
    queryKey: ["addedClass"],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  const handleMakeAdmin = (user) => {
    console.log(user);
    fetch(`${import.meta.env.VITE_BASE_URL}/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeInstructor = (user) => {
    fetch(`${import.meta.env.VITE_BASE_URL}/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="overflow-x-auto container mx-auto">
      <h1 className="mb-20 text-center mt-20 text-5xl font-bold">
        All Users Of <span className="text-[#CD1818]">Music Classes</span>
      </h1>
      <table className="lg:w-full w-[50%] divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              #
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Admin
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Instructor
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user, index) => (
            <tr
              key={user._id}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {user.role === "admin" ? (
                  <button className="px-4 py-2 rounded-full bg-gray-400 text-gray-700 hover:bg-gray-500 focus:outline-none">
                    Admin
                  </button>
                ) : (
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    className="px-4 py-2 rounded-full bg-green-500 text-white hover:bg-green-600 focus:outline-none"
                  >
                    Make Admin
                  </button>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {user.role === "instructor" ? (
                  <button className="px-4 py-2 rounded-full bg-gray-400 text-gray-700 hover:bg-gray-500 focus:outline-none">
                    Instructor
                  </button>
                ) : (
                  <button
                    onClick={() => handleMakeInstructor(user)}
                    className="px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 focus:outline-none"
                  >
                    Make Instructor
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
