import React, { useState } from 'react';
// import { FaHome, FaStore, FaChartBar, FaLifeRing, FaCog, FaUsers, FaSignOutAlt, FaCaretDown, FaCaretRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate, Link, useLocation} from 'react-router-dom';
import { AppThunkDispatch } from "../store/rootReducer";
import { logout } from '../app/features/auth/auth.slice';
import { clearOutletData } from "../app/features/outlet/outlet.slice"
// import { Link } from 'react-router-dom';
import { FaHome, FaStore, FaChartBar, FaBook, FaInbox, FaStar, FaShoppingCart, FaCog, FaUsers, FaSignOutAlt, FaCaretDown, FaCaretRight } from 'react-icons/fa';
import { clearStoreData } from '../app/features/store/store.slice';

interface SidebarItemProps {
  icon: JSX.Element;
  text: string;
  isActive: boolean;
  to?: string;
}

interface SidebarSubItemProps {
  text: string;
  isActive: boolean;
}

const Sidebar: React.FC = () => {
  const [isInventoryOpen, setInventoryOpen] = useState(false);
  const dispatch = useDispatch<AppThunkDispatch>();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleInventory = () => {
    setInventoryOpen(!isInventoryOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearOutletData())
    dispatch(clearStoreData())
    navigate('/');
  };

  return (
    <div className="bg-white h-auto w-2/3 p-4 md:w-1/6 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-center mt-4">
          <span className="text-gray-800 text-lg font-bold ml-2">Dot Brand</span>
        </div>
        <div className="space-y-4 mt-8">
          <Link to={"/multi-admin/"}>
            <SidebarItem 
             icon={<FaHome />}
             text="Dashboard" 
             isActive={location.pathname === '/multi-admin/'}
             />
          </Link>
          <Link to={"/multi-admin/outlets"}>
            <SidebarItem
             icon={<FaStore />} 
             text="Outlets" to="/outlets" 
             isActive={location.pathname === '/multi-admin/outlets'}
             />
          </Link>
          <div className="group flex items-center justify-between py-2 px-2 mt-4 text-gray-600 cursor-pointer transition-bg hover:bg-indigo-500 hover:rounded-md hover:text-white " onClick={toggleInventory}>
            <FaChartBar />
            <span className="text-xs -ml-10">Inventory</span>
            {isInventoryOpen ? <FaCaretDown className="ml-1" /> : <FaCaretRight className="ml-1" />}
          </div>
          {isInventoryOpen && (
            <div className="pl-6">
              <Link to="/multi-admin/products">
                <SidebarSubItem 
                text="Products" 
                isActive={location.pathname === '/multi-admin/products'}
                />
              </Link>
              <Link to="/multi-admin/catalogue">
                <SidebarSubItem 
                text="Catalogue"
                isActive={location.pathname === 'multi-admin/catalogue'} 
                />
              </Link>
              <Link to="/multi-admin/categories">
                <SidebarSubItem 
                text="Categories"
                isActive={location.pathname === '/multi-admin/categories'}  
                />
              </Link>
              <Link to="/multi-admin/manufacturers">
                <SidebarSubItem 
                text="Manufacturers" 
                isActive={location.pathname === '/multi-admin/manufacturers'}
                />
              </Link>
            </div>
          )}
          <Link to={"/multi-admin/users"}>
            <SidebarItem 
            icon={<FaUsers />} 
            text="Users" 
            isActive={location.pathname === '/multi-admin/users'}/>
          </Link>
          <Link to={"/multi-admin/orders"}>
            <SidebarItem 
            icon={<FaShoppingCart />} 
            text="Orders" 
            isActive={location.pathname === '/multi-admin/orders'}
            />
          </Link>
          <Link to={"/multi-admin/banners"}>
            <SidebarItem 
            icon={<FaStar />} 
            text="Banners" 
            isActive={location.pathname === '/multi-admin/banners'}
            />
          </Link>
          <SidebarItem 
          icon={<FaBook />} 
          text="Pages"
          isActive={location.pathname === ''}
           />
          <Link to={"/multi-admin/chat"}>
            <SidebarItem 
            icon={<FaInbox />} 
            text="Chat" 
            isActive={location.pathname === '/multi-admin/chat'}
            /> 
          </Link>
          <SidebarItem 
          icon={<FaCog />} 
          text="Settings"
          isActive={location.pathname === ''} 
          />
        <div>
          <button className="flex text-xs items-center text-white cursor-pointer bg-red-600 rounded-md py-2 px-2 w-40 mt-[10%]" onClick={handleLogout}>
            <FaSignOutAlt className="mr-2" />
            Log Out
          </button>
        </div>
      </div>
      </div>
      
    </div>
  );
};

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, isActive }) => {
  return (
    <div className={`group flex items-center py-2 px-2 mt-4 text-gray-600 cursor-pointer transition-bg rounded-md hover:bg-indigo-500 hover:rounded-md hover:text-white ${isActive ? 'bg-indigo-500 text-white' : ''}`} title={text}>
      {icon}
      <span className="ml-2 text-xs">{text}</span>
    </div>
  );
};

const SidebarSubItem: React.FC<SidebarSubItemProps> = ({ text, isActive }) => {
  return (
    <div className={`group flex items-center py-2 px-2 mt-2 text-gray-600 cursor-pointer transition-bg rounded-md hover:bg-indigo-500 hover:rounded-md hover:text-white ${isActive ? 'bg-indigo-500 text-white' : ''}`} title={text}>
      <span className="text-xs">{text}</span>
    </div>
  );
};

export default Sidebar;
