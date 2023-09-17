import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePageClick = (page) => {
    onPageChange(page);
  };

  return (
    <div className="mt-4 flex justify-center">
      <ul className="flex space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <li key={i}>
            <button
              className={`px-3 py-1 ${
                i === currentPage
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-300 hover:bg-gray-400 text-gray-600'
              } rounded-md`}
              onClick={() => handlePageClick(i)}
            >
              {i + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
