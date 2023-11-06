import React from 'react';

const DealCard = ({ product, index }) => {
  const { imageSrc, category, discount, text } = product;

  // Define gradient colors based on index modulo 3
  const colorIndex = index % 3;
  let gradientColors;
  let discountBackgroundColor;
  
  switch (colorIndex) {
    case 0:
      gradientColors = 'bg-white';
      discountBackgroundColor = 'bg-white';
      break;
    case 1:
      gradientColors = 'bg-white';
      discountBackgroundColor = 'bg-white';
      break;
    case 2:
      gradientColors = 'bg-white';
      discountBackgroundColor = 'bg-white';
      break;
    default:
      gradientColors = 'from-gray-200 to-white'; // Default gradient for other cards
      discountBackgroundColor = 'bg-gray-900'; // Default background color for other cards
  }

  return (
    <div
      className={`w-full sm:w-[360px] h-auto bg-gradient-to-t ${gradientColors} border border-gray-200 rounded-2xl shadow-2xl relative`}
    >
       <div className='flex flex-col justify-between px-3 py-2'>
        <div className="flex flex-col sm:flex-row justify-between">
          <h2 className="font-semibold mt-3 ml-3 text-red-900">
            {category}
          </h2>
          <p className={`text-red-900 text-md font-semibold rounded-md h-6 w-14 mt-2 text-center flex items-center justify-center sm:mt-0 sm:ml-3 ${discountBackgroundColor}`}>
            {discount}
          </p>
        </div>
        <a href="/medicine" className="mt-2 mx-auto">
          <img src={imageSrc} alt={category} className="w-28 h-24 object-fit bg-white rounded-full " />
        </a>
        <p className='text-md text-red-900 font-semibold ml-3 mt-2 sm:mt-0 hover:underline'>
          {text}
        </p>
      </div>
    </div>
  );
}

export default DealCard;
