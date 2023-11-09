import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaEdit, FaTrash, FaPlusCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { AppThunkDispatch } from '../store/rootReducer';
import { selectStoreData, selectStoreLoading } from '../app/features/store/store.selector';
import { getStores, toggleStoreStatus } from '../app/features/store/store.thunk';
import { PropagateLoader } from 'react-spinners';
import Toggle from 'react-toggle';
import ToggleModal from '../components/globals/modal/ToggleModal';
import Pagination from '../components/Pagination';// Replace 'path-to-DynamicModal' with the actual path to your DynamicModal component.

import 'react-toggle/style.css';
import { toggleActiveStatus } from '../app/features/store/store.slice';
import { Toast } from '../utils/toast';
import { selectToken } from '../app/features/auth/auth.selector';


const ManageStores: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  // const navigate = useNavigate();
  const stores = useSelector(selectStoreData) || [];
  const loading = useSelector(selectStoreLoading);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeStoreId, setActiveStoreId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;


  useEffect(() => {
    dispatch(getStores());
  }, [dispatch]);

  const filteredStores = stores.filter(
    (store) =>
      store.storeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.multiAdminName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.multiAdminEmail.toLowerCase().includes(searchQuery.toLowerCase())

  );

  const start = currentPage * itemsPerPage;
  const end = (currentPage + 1) * itemsPerPage;
  const displayedStores = filteredStores.slice(start, end);

  // const openToggleModal = (storeID: string) => {
  //   setActiveStoreId(storeID);
  //   setIsModalOpen(true);
  // };

  const closeToggleModal = () => {
    setIsModalOpen(false);
    setActiveStoreId(null);
  };

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const toggleStore = async () => {
    if (activeStoreId) {
      try {
        await dispatch(toggleStoreStatus(activeStoreId)).then((result: any) => {
          if ('message' in result.payload) {
            Toast.fire({
              icon: "success",
              title: result.payload.message,
            });
          }
        });
        dispatch(toggleActiveStatus(activeStoreId));
      } catch (error) {
        console.error("Failed to toggle store status: ", error);
      }
      closeToggleModal();
    }
  };



  return (
    <div className="bg-gray-100 min-h-screen p-4 relative">
      {loading && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 9999,
          backgroundColor: 'rgba(255, 255, 255, 0.8)'
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}>
            <PropagateLoader color="#000000" />
          </div>
        </div>
      )}
      {/* Your existing code goes here */}
      <div className={`bg-gray-100 min-h-screen p-4 ${loading ? 'blur' : ''}`}>
        {loading && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
            <PropagateLoader color={"#000000"} loading={true} size={15} />
          </div>
        )}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-xl font-semibold text-gray-800 mb-4">Manage Stores</h1>

            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-4 text-sm">
                <div className="relative text-base">
                  <span className="absolute left-3 top-[30%] text-gray-600 ">
                    <FaSearch />
                  </span>
                  <input
                    type="text"
                    placeholder="Search stores..."
                    className="border border-gray-600 rounded-md pl-10 pr-4 py-[5%] w-52 focus:outline-none focus:ring focus:border-indigo-300"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex space-x-4 text-sm">
                <Link
                  to="/super-admin/add-store"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 text-base rounded-lg flex items-center"
                >
                  <FaPlusCircle className="mr-2" /> Add Store
                </Link>
              </div>
            </div>

            <table className="min-w-full divide-y divide-gray-200 mt-8 text-sm">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider ">
                    Store Name
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Admin Name
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Admin Email
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Created At
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Current Status
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Active
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {displayedStores.map((store) => (
                  <tr key={store._id} className="bg-white">
                    <td className="px-6 py-3 whitespace-no-wrap w-[30%]">{store.storeName}</td>
                    <td className="px-6 py-3 whitespace-no-wrap w-[25%]">{store.multiAdminName}</td>
                    <td className="px-6 py-3 whitespace-no-wrap w-1/6">{store.multiAdminEmail}</td>
                    <td className="px-6 py-3 whitespace-no-wrap w-[25%]">
                      {new Date(store.createdAt!).toLocaleString()}
                    </td>
                    <td className="px-6 py-3 whitespace-no-wrap [30%]">
                      <span className={` py-1 px-2 rounded ${store.isActive ? 'bg-green-500 text-white font-semibold px-3.5' : 'bg-red-500 text-white font-semibold '}`}>
                        {store.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-3 whitespace-no-wrap w-1/6">
                      <Toggle
                        defaultChecked={store.isActive}
                        icons={false}
                        onChange={() => {
                          setIsModalOpen(true);
                          setActiveStoreId(store._id!);
                        }}
                      />
                    </td>
                    <td className="px-6 py-3 whitespace-no-wrap text-right text-sm font-medium w-1/6">
                      <div className="flex space-x-4">
                        <Link to={`/path-to-edit-store/${store._id}`}>
                          <button className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline">
                            <FaEdit />
                          </button>
                        </Link>
                        <button className="text-red-600 hover:text-red-900 focus:outline-none focus:underline">
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination component */}
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredStores.length / itemsPerPage)}
          onPageChange={onPageChange}
        />

        {/* Modal for toggling store status */}
        {isModalOpen && (
          <ToggleModal
            title="Warning: Change Store Status"
            description="Are you sure you want to change the status of this store?"
            onConfirm={toggleStore}
            onCancel={closeToggleModal}
          />
        )}
      </div>
    </div>
  );
}

export default ManageStores;
