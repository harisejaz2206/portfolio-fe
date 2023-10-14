import React from 'react';
// import { FaHome, FaStore, FaChartBar, FaLifeRing, FaCog, FaUsers, FaSignOutAlt, FaCaretDown, FaCaretRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { AppThunkDispatch } from "../store/rootReducer";
import { logout } from '../app/features/auth/auth.slice';
// import { Link } from 'react-router-dom';
import { FaHome, FaStore, FaShoppingCart, FaCog, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import { clearStoreData } from '../app/features/store/store.slice';

interface SuperAdminSidebarItemProps {
  icon: JSX.Element;
  text: string;
  to?: string;
}

// interface SuperAdminSidebarSubItemProps {
//   text: string;
// }

const SuperAdminSidebar: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const navigate = useNavigate();

  // const toggleInventory = () => {
  //   setInventoryOpen(!isInventoryOpen);
  // };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearStoreData())
    navigate('/');
  };

  return (
    <div className="bg-white h-auto w-1/5 p-4 md:w-1/6 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-start mt-4">
          <img src="/logo192.png" alt="Brand Logo" className="h-10 w-10" />
          <span className="text-gray-800 text-lg font-bold ml-2">DOT BRAND</span>
        </div>
        <div className="space-y-4 mt-8">
          <Link to={"/super-admin/"}><SuperAdminSidebarItem icon={<FaHome />} text="Dashboard" /></Link>
          <Link to={"/super-admin/stores"}><SuperAdminSidebarItem icon={<FaStore />} text="Stores" to="/stores" /></Link>
          <Link to={"/super-admin/users"}><SuperAdminSidebarItem icon={<FaUsers />} text="Users" /></Link>
          <Link to={"/super-admin/orders"}><SuperAdminSidebarItem icon={<FaShoppingCart />} text="Orders" /></Link>
          <SuperAdminSidebarItem icon={<FaCog />} text="Settings" />
        </div>
      </div>
      <div>
        <button className="flex text-xs items-center text-white cursor-pointer bg-red-600 rounded-md py-2 px-2 w-40 mt-[10%]" onClick={handleLogout}>
          <FaSignOutAlt className="mr-2" />
          Log Out
        </button>
      </div>
    </div>
  );
};

const SuperAdminSidebarItem: React.FC<SuperAdminSidebarItemProps> = ({ icon, text }) => {
  return (
    <div className="group flex items-center py-2 px-2 mt-4 text-gray-600 cursor-pointer transition-bg hover:bg-orange-500 hover:rounded-md hover:text-white " title={text}>
      {icon}
      <span className="ml-2 text-xs">{text}</span>
    </div>
  );
};

// const SuperAdminSidebarSubItem: React.FC<SuperAdminSidebarSubItemProps> = ({ text }) => {
//   return (
//     <div className="group flex items-center py-1 pl-2 mt-1 text-gray-600 cursor-pointer transition-bg hover:bg-orange-500 hover:rounded-md hover:text-white">
//       <span className="text-xs">{text}</span>
//     </div>
//   );
// };

export default SuperAdminSidebar;
