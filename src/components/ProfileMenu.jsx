import React from 'react';
import { FaUser, FaGift, FaFileAlt } from 'react-icons/fa';
import { MdPolicy } from 'react-icons/md';
import { BsFillBagCheckFill} from 'react-icons/bs';

const ProfileMenu = () => {
  const menuItems = [
    { name: 'My Profile', url: '/profile', icon: <FaUser /> },
    { name: 'Loyalty Points', url: '/loyaltyPoints', icon: <FaGift /> },
  ];

  return (
    <div className="h-full">
      {/* Left-aligned menu */}
      <div className="flex flex-col bg-gray-100 rounded py-4 px-4 ">
        <h1 className="text-red-900 font-bold text-lg mb-2">My Account</h1>
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className="px-3 py-2 w-56 cursor-pointer hover:border-b-2 border-red-950 hover:text-red-950 flex items-center"
          >
            {item.icon}
            <span className="ml-2">{item.name}</span>
          </a>
        ))}
        <hr className="border border-gray-200 mt-2" />
        <h1 className="text-red-900 font-bold text-lg mt-4 mb-2">Orders</h1>
        <a
          href="/orders"
          className="px-3 py-2 cursor-pointer hover:border-b-2 border-red-950 hover:text-red-950 flex items-center"
        >
          <BsFillBagCheckFill className="mr-2" />
          Orders
        </a>
        <hr className="border border-gray-200 mt-2" />
        <h1 className="text-red-900 font-bold text-lg mt-4 mb-2">Legal</h1>
        <a
          href="/privacy"
          className="px-3 py-2 cursor-pointer hover:border-b-2 border-red-950 hover:text-red-950 flex items-center"
        >
          <MdPolicy className="mr-2" />
          Privacy Policy
        </a>
        <a
          href="/conditions"
          className="px-3 py-2 cursor-pointer hover:border-b-2 border-red-950 hover:text-red-950 flex items-center"
        >
          <FaFileAlt className="mr-2" />
          Terms & Conditions
        </a>
      </div>
    </div>
  );
};

export default ProfileMenu;
