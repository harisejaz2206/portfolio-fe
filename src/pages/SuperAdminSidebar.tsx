import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { AppThunkDispatch } from "../store/rootReducer";
import { logout } from '../app/features/auth/auth.slice';
import { FaHome, FaStore, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { clearStoreData } from '../app/features/store/store.slice';

interface SuperAdminSidebarItemProps {
  icon: JSX.Element;
  text: string;
  isActive: boolean; 
  to?: string;
}

const SuperAdminSidebar: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearStoreData())
    navigate('/');
  };

  return (
    <div className="bg-white h-auto w-1/5 p-4 md:w-1/6 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-center mt-4">
          <span className="text-gray-800 text-lg font-bold ml-2">Dot Brand</span>
        </div>
        <div className="space-y-4 mt-8">
          <Link to="/super-admin/">
            <SuperAdminSidebarItem
              icon={<FaHome />}
              text="Dashboard"
              isActive={location.pathname === '/super-admin/'}
            />
          </Link>
          <Link to="/super-admin/stores">
            <SuperAdminSidebarItem
              icon={<FaStore />}
              text="Stores"
              to="/stores"
              isActive={location.pathname === '/super-admin/stores'}
            />
          </Link>
          <SuperAdminSidebarItem
            icon={<FaCog />}
            text="Settings"
            isActive={location.pathname === '/super-admin/settings'}
          />
          <div>
        <button className="flex text-xs items-center text-white cursor-pointer bg-red-600 rounded-md py-2 px-2 w-40 mt-10" onClick={handleLogout}>
          <FaSignOutAlt className="mr-2" />
          Log Out
        </button>
      </div>
        </div>
      </div>
      
    </div>
  );
};

const SuperAdminSidebarItem: React.FC<SuperAdminSidebarItemProps> = ({ icon, text, isActive }) => {
  return (
    <div className={`group flex items-center py-2 px-2 mt-4 text-gray-600 cursor-pointer transition-bg rounded-md hover:bg-indigo-500 hover:rounded-md hover:text-white ${isActive ? 'bg-indigo-500 text-white' : ''}`} title={text}>
      {icon}
      <span className="ml-2 text-xs">{text}</span>
    </div>
  );
};

export default SuperAdminSidebar;
