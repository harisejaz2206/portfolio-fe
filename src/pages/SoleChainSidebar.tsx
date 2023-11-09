import React, { useState } from 'react';
// import { FaHome, FaStore, FaChartBar, FaLifeRing, FaCog, FaUsers, FaSignOutAlt, FaCaretDown, FaCaretRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { AppThunkDispatch } from "../store/rootReducer";
import { logout } from '../app/features/auth/auth.slice';
import { clearOutletData } from "../app/features/outlet/outlet.slice"
// import { Link } from 'react-router-dom';
import { FaHome, FaStore, FaChartBar, FaBook, FaInbox, FaStar, FaShoppingCart, FaImages, FaCog, FaUsers, FaSignOutAlt, FaCaretDown, FaCaretRight, FaEnvelope } from 'react-icons/fa';
import { GrUserAdmin } from 'react-icons/gr';
import { selectUser } from '../app/features/auth/auth.selector';

interface SoleChainSidebarItemProps {
  icon: JSX.Element;
  text: string;
  to?: string;
}

interface SoleChainSidebarSubItemProps {
  text: string;
}

const SoleChainSidebar: React.FC = () => {
  const [isInventoryOpen, setInventoryOpen] = useState(false);
  const dispatch = useDispatch<AppThunkDispatch>();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const userEmail = user?.email

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
        <div className="flex items-center justify-center mt-4">
          <span className="text-gray-800 text-lg font-bold ml-2">Dotbrand Inc.</span>
        </div>
        <div className="space-y-4 mt-8">
          <GrUserAdmin className="text-black-800 text-sm font-bold ml-2 mr-1" />
          <div className="text-red-800 text-sm font-bold ml-2 text-center">Sole-chain Admin</div>
          <div className="flex items-center">
            <FaEnvelope className="text-black-800 text-sm font-bold ml-2 mr-1" />
            <span className="text-red-800 text-sm font-bold text-center">{userEmail}</span>
          </div>

          <Link to={"/sole-admin/"}><SoleChainSidebarItem icon={<FaHome />} text="Dashboard" /></Link>
          <div className="group flex items-center justify-between py-2 px-2 mt-4 text-gray-600 cursor-pointer transition-bg hover:bg-orange-500 hover:rounded-md hover:text-white " onClick={toggleInventory}>
            <FaChartBar />
            <span className="text-xs -ml-14">Inventory</span>
            {isInventoryOpen ? <FaCaretDown className="ml-1" /> : <FaCaretRight className="ml-1" />}
          </div>
          {isInventoryOpen && (
            <div className="pl-6">
              <Link to="/sole-admin/products"><SoleChainSidebarSubItem text="Products" /></Link>
              <Link to="/sole-admin/catalogue"><SoleChainSidebarSubItem text="Catalogue" /></Link>
              <Link to="/sole-admin/brands"><SoleChainSidebarSubItem text="Brands" /></Link>
              <Link to="/sole-admin/categories"><SoleChainSidebarSubItem text="Categories" /></Link>
            </div>
          )}
          <Link to={"/sole-admin/users"}><SoleChainSidebarItem icon={<FaUsers />} text="Users" /></Link>
          <Link to={"/sole-admin/orders"}><SoleChainSidebarItem icon={<FaShoppingCart />} text="Orders" /></Link>
          <Link to={"/sole-admin/banners"}><SoleChainSidebarItem icon={<FaImages />} text="Banners" /></Link>
          <SoleChainSidebarItem icon={<FaCog />} text="Settings" />
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

const SoleChainSidebarItem: React.FC<SoleChainSidebarItemProps> = ({ icon, text }) => {
  return (
    <div className="group flex items-center py-2 px-2 mt-4 text-gray-600 cursor-pointer transition-bg hover:bg-orange-500 hover:rounded-md hover:text-white " title={text}>
      {icon}
      <span className="ml-2 text-xs">{text}</span>
    </div>
  );
};

const SoleChainSidebarSubItem: React.FC<SoleChainSidebarSubItemProps> = ({ text }) => {
  return (
    <div className="group flex items-center py-1 pl-2 mt-1 text-gray-600 cursor-pointer transition-bg hover:bg-orange-500 hover:rounded-md hover:text-white">
      <span className="text-xs">{text}</span>
    </div>
  );
};

export default SoleChainSidebar;
