import React from 'react';

const VerticalMenu = () => {
  const menuItems = [
    { name: 'Home', url: '/' },
    { name: 'Categories', url: '/categories' },
    { name: 'Deals', url: '/deals' },
    { name: 'Brands', url: '/brands' },
    { name: 'Contact', url: '/contact' },
  ];

  return (
    <div className="flex justify-center mt-4 space-x-6">
      {menuItems.map((item, index) => (
        <a
          key={index}
          href={item.url}
          className="px-3 py-2 text-gray-400 cursor-pointer hover:border-b-2 border-red-950 font-medium hover:text-red-950"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default VerticalMenu;
