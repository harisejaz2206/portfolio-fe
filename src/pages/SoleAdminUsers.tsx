import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaFilter, FaEye } from "react-icons/fa";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch } from "../store/rootReducer";
import { getUsers } from "../app/features/users/users.thunk";
import { Toast } from "../utils/toast";
import { selectUsersData } from "../app/features/users/users.selectors";


const SoleAdminUser: React.FC = () => {
  // Dummy data for users (replace with your actual data)
  const initialUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      createdDate: "2023-01-15",
      lastActivity: "2023-09-10 14:30:00",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      createdDate: "2022-11-20",
      lastActivity: "2023-09-10 10:15:00",
      status: "Active",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      createdDate: "2021-08-05",
      lastActivity: "2023-09-09 09:45:00",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Bob Williams",
      email: "bob@example.com",
      createdDate: "2021-05-12",
      lastActivity: "2023-09-08 14:55:00",
      status: "Active",
    },
    {
      id: 5,
      name: "Emily Davis",
      email: "emily@example.com",
      createdDate: "2023-02-28",
      lastActivity: "2023-09-07 11:20:00",
      status: "Active",
    },
    {
      id: 6,
      name: "Michael Wilson",
      email: "michael@example.com",
      createdDate: "2022-12-10",
      lastActivity: "2023-09-06 15:40:00",
      status: "Active",
    },
    {
      id: 7,
      name: "Olivia Brown",
      email: "olivia@example.com",
      createdDate: "2023-03-22",
      lastActivity: "2023-09-05 08:10:00",
      status: "Pending",
    },
    {
      id: 8,
      name: "Sophia Lee",
      email: "sophia@example.com",
      createdDate: "2021-10-15",
      lastActivity: "2023-09-04 12:25:00",
      status: "Active",
    },
    {
      id: 9,
      name: "Liam Smith",
      email: "liam@example.com",
      createdDate: "2022-09-30",
      lastActivity: "2023-09-03 09:30:00",
      status: "Active",
    },
    {
      id: 10,
      name: "Ella Taylor",
      email: "ella@example.com",
      createdDate: "2022-08-17",
      lastActivity: "2023-09-02 13:15:00",
      status: "Inactive",
    },
    {
      id: 11,
      name: "Noah White",
      email: "noah@example.com",
      createdDate: "2023-04-09",
      lastActivity: "2023-09-01 10:05:00",
      status: "Active",
    },
    {
      id: 11,
      name: "Noah White",
      email: "noah@example.com",
      createdDate: "2023-04-09",
      lastActivity: "2023-09-01 10:05:00",
      status: "Active",
    },

    // Add more user data as needed
  ];

  const [users, setUsers] = useState(initialUsers);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  // Function to filter users based on search query
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const dispatch = useDispatch<AppThunkDispatch>();
  const usersData = useSelector(selectUsersData)
  console.log("users data:", usersData)

  // Function to handle pagination
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = (currentPage + 1) * itemsPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getUsers()).then((result: any) => {
          Toast.fire({
            icon: "success",
            title: result.payload.message,
          });
        }); // Using await with dispatch here
      } catch (error) {
        console.error("An error occurred while fetching data: ", error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {currentUsers.length > 0 ? (
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-base font-semibold text-indigo-600 mb-4">
            Users
          </h1>

          <div className="flex justify-between items-center mb-4">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search users..."
                className="border rounded-md pl-10 pr-4 py-1 w-64 focus:outline-none focus:ring focus:border-indigo-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="absolute left-3 top-2 text-gray-400">
                <FaSearch />
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-gray-400">
                <FaFilter />
              </button>
              {/* Add more filter buttons as needed */}
            </div>
          </div>

          <table className="min-w-full divide-y divide-gray-200 mt-8 text-sm">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Account Created On
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Last Activity
                </th>
                {/* <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th> */}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {usersData!.map((user) => (
                <tr key={user._id}>
                  <td className="px-6 py-4 whitespace-no-wrap">{user.name}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    {new Date(user.createdAt!).toLocaleString()}
                    {user.createdAt}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    {user.provider}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-right text-sm font-medium">
                    <div className="flex items-center -ml-2 ">
                      {/* <Link
                        to={`/sole-admin/view-account/${user.id}`}
                        className="flex items-center justify-center px-2 py-1 rounded-md text-indigo-600 hover:underline focus:outline-none focus:underline text-sm"
                      >
                        {" "}
                        <FaEye className="mr-1 text-sm text-indigo-600" />
                        View Details
                      </Link> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <img
            src="/Empty Wishlist.png" // Replace with your no user image path
            alt="No Users"
            className="w-32 h-32 mb-4"
          />
          <p className="text-gray-600 text-lg font-semibold mb-4">
            Whoops! There are no current users present.
          </p>
          <Link
            to="/sole-admin/"
            className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
          >
            Back to Dashboard
          </Link>
        </div>
      )}
    </div>
  );
}

export default SoleAdminUser;
