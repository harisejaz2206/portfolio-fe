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
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  // Function to filter users based on search query
  const dispatch = useDispatch<AppThunkDispatch>();
  const usersData = useSelector(selectUsersData);
  console.log("users data:", usersData);

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

  const filteredUsers = usersData!.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(usersData!.length / itemsPerPage);

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-base font-semibold text-indigo-600 mb-4">Users</h1>

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
            {paginatedUsers.map((user) => (
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
    </div>
  );
};

export default SoleAdminUser;
