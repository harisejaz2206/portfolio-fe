import React from 'react';

const DealCard = ({ product, index }) => {
  const { imageSrc, category, discount, text } = product;

  // Define gradient colors based on index modulo 3
  const colorIndex = index % 3;
  let gradientColors;
  let discountBackgroundColor;
  
  switch (colorIndex) {
    case 0:
      gradientColors = 'from-red-500 to-white';
      discountBackgroundColor = 'bg-red-900';
      break;
    case 1:
      gradientColors = 'from-yellow-500 to-white';
      discountBackgroundColor = 'bg-yellow-600';
      break;
    case 2:
      gradientColors = 'from-green-500 to-white';
      discountBackgroundColor = 'bg-green-900';
      break;
    default:
      gradientColors = 'from-gray-200 to-white'; // Default gradient for other cards
      discountBackgroundColor = 'bg-gray-900'; // Default background color for other cards
  }

  return (
    <div
      className={`w-full sm:w-[360px] h-auto bg-gradient-to-t ${gradientColors} border border-gray-200 rounded-2xl shadow-lg dark:bg-gray-800 dark:border-gray-700 relative`}
    >
       <div className='flex flex-col justify-between px-3 py-2'>
        <div className="flex flex-col sm:flex-row justify-between">
          <h2 className="font-semibold mt-3 ml-3">
            {category}
          </h2>
          <p className={`text-white text-sm rounded-md h-6 w-14 mt-2 text-center flex items-center justify-center sm:mt-0 sm:ml-3 ${discountBackgroundColor}`}>
            {discount}
          </p>
        </div>
        <a href="/medicine" className="mt-2 mx-auto">
          <img src={imageSrc} alt={category} className="w-28 h-24 object-fit" />
        </a>
        <p className='text-md text-red-900 font-bold ml-3 mt-2 sm:mt-0 hover:underline'>
          {text}
        </p>
      </div>
    </div>
  );
}

export default DealCard;
