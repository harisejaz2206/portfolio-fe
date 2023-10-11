import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaEdit, FaTrash, FaPlusCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { AppThunkDispatch } from '../store/rootReducer';
import { selectStoreData, selectStoreLoading } from '../app/features/store/store.selector';
import { getStores } from '../app/features/store/store.thunk';

// Define a type for a single store
interface Store {
  id: number;
  name: string;
  adminName: string;
  adminEmail: string;
  adminPassword: string;
}

// Dummy data for stores (replace with your actual data)
const initialStores: Store[] = [
  {
    id: 1,
    name: 'Store 1',
    adminName: 'Admin A',
    adminEmail: 'adminA@example.com',
    adminPassword: 'password123',
  },
  {
    id: 2,
    name: 'Store 2',
    adminName: 'Admin B',
    adminEmail: 'adminB@example.com',
    adminPassword: 'password456',
  },
  // Add more store items as needed
];

const ManageStores: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const navigate = useNavigate();
  const stores = useSelector(selectStoreData) || [];
  const loading = useSelector(selectStoreLoading);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    dispatch(getStores());
  }, [dispatch]);

  // Function to filter stores based on search query
  const filteredStores = stores.filter(
    (store) =>
      store.storeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.multiAdminName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.multiAdminEmail.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">Manage Stores</h1>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4 text-sm">
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-400">
                <FaSearch />
              </span>
              <input
                type="text"
                placeholder="Search stores..."
                className="border rounded-md pl-10 pr-4 py-1 w-36 focus:outline-none focus:ring focus:border-indigo-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex space-x-4 text-sm">
            <Link
              to="/super-admin/add-store"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-1 px-3 rounded-md flex items-center"
            >
              <FaPlusCircle className="mr-2" /> Add Store
            </Link>
          </div>
        </div>

        <table className="min-w-full divide-y divide-gray-200 mt-8 text-sm">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Store Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Admin Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Admin Email
              </th>

              <th className="px-6 py-3 bg-gray-50 font-medium text-xs text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredStores.map((store) => (
              <tr key={store._id}>
                <td className="px-6 py-4 whitespace-no-wrap">{store.storeName}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{store.multiAdminName}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{store.multiAdminEmail}</td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm font-medium ">
                  <Link to={`/path-to-edit-store/${store._id}`}>
                    <button className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline ml-4">
                      <FaEdit />
                    </button>
                  </Link>
                  <button
                    className="text-red-600 hover:text-red-900 focus:outline-none focus:underline ml-4"
                  // onClick={() => removeStore(store.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageStores;