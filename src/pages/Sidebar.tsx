import React, { useState } from 'react';
// import { FaHome, FaStore, FaChartBar, FaLifeRing, FaCog, FaUsers, FaSignOutAlt, FaCaretDown, FaCaretRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { AppThunkDispatch } from "../store/rootReducer";
import { logout } from '../app/features/auth/auth.slice';
import { clearOutletData } from "../app/features/outlet/outlet.slice"
import { FaHome, FaStore, FaChartBar, FaBook, FaInbox, FaStar, FaShoppingCart, FaCog, FaUsers, FaSignOutAlt, FaCaretDown, FaCaretRight } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

interface SidebarItemProps {
  icon: JSX.Element;
  text: string;
  to?: string;  // Note the "?" which means it's optional
}

interface SidebarSubItemProps {
  text: string;
}

const Sidebar: React.FC = () => {
  const [isInventoryOpen, setInventoryOpen] = useState(false);
  const dispatch = useDispatch<AppThunkDispatch>();
  const navigate = useNavigate();

  const toggleInventory = () => {
    setInventoryOpen(!isInventoryOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearOutletData())
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
          <Link to={"/admin/"}><SidebarItem icon={<FaHome />} text="Dashboard" /></Link>
          <Link to={"/admin/outlets"}><SidebarItem icon={<FaStore />} text="Outlets" to="/outlets" /></Link>
          <div className="group flex items-center justify-between py-2 px-2 mt-4 text-gray-600 cursor-pointer transition-bg hover:bg-orange-500 hover:rounded-md hover:text-white " onClick={toggleInventory}>
            <FaChartBar />
            <span className="text-xs -ml-14">Inventory</span>
            {isInventoryOpen ? <FaCaretDown className="ml-1" /> : <FaCaretRight className="ml-1" />}
          </div>
          {isInventoryOpen && (
            <div className="pl-6">
              <Link to="/admin/products"><SidebarSubItem text="Products" /></Link>
              {/* <Link to="/admin/catalogue"><SidebarSubItem text="Catalogue" /></Link> */}
              <Link to="/admin/categories"><SidebarSubItem text="Categories" /></Link>
              <Link to="/admin/manufacturers"><SidebarSubItem text="Manufacturers" /></Link>
            </div>
          )}
          <Link to={"/admin/users"}><SidebarItem icon={<FaUsers />} text="Users" /></Link>
          <Link to={"/admin/orders"}><SidebarItem icon={<FaShoppingCart />} text="Orders" /></Link>
          <Link to={"/admin/banners"}><SidebarItem icon={<FaStar />} text="Banners" /></Link>
          <SidebarItem icon={<FaBook />} text="Pages" />
          <Link to={"/admin/chat"}><SidebarItem icon={<FaInbox />} text="Chat" /> </Link>
          <SidebarItem icon={<FaCog />} text="Settings" />
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

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text }) => {
  return (
    <div className="group flex items-center py-2 px-2 mt-4 text-gray-600 cursor-pointer transition-bg hover:bg-orange-500 hover:rounded-md hover:text-white " title={text}>
      {icon}
      <span className="ml-2 text-xs">{text}</span>
    </div>
  );
};

const SidebarSubItem: React.FC<SidebarSubItemProps> = ({ text }) => {
  return (
    <div className="group flex items-center py-1 pl-2 mt-1 text-gray-600 cursor-pointer transition-bg hover:bg-orange-500 hover:rounded-md hover:text-white">
      <span className="text-xs">{text}</span>
    </div>
  );
};

export default Sidebar;