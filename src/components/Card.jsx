import React from 'react';

const Card = ({ imageSrc, category }) => {
  return (
    <div className="w-64 h-40 bg-white border border-gray-200 rounded-2xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <a href="/medicine">
        <img src={imageSrc} alt={category}  className="w-40 h-32 object-fit mx-auto"/>
        </a>
        <p className="text-center font-semibold text-gray-700">
            {category}
       </p> 
       </div>
  );
}

export default Card;
