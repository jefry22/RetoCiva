import React, { useMemo } from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationControls = ({ currentPage, totalPages, setCurrentPage }) => {
  const paginationItems = useMemo(() => {
    return [...Array(totalPages)].map((_, index) => (
      <Pagination.Item
        key={index}
        active={index === currentPage}
        onClick={() => setCurrentPage(index)}
        className={`px-4 py-2 rounded-lg transition-all duration-300 ${
          index === currentPage
            ? 'bg-purple-800 text-white font-bold'
            : 'bg-gray-200 text-gray-700 hover:bg-blue-300'
        }`}
      >
        {index + 1}
      </Pagination.Item>
    ));
  }, [totalPages, currentPage]);

  return (
    <Pagination className="flex items-center space-x-2 mt-6">
      <Pagination.Prev
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 0}
        className={`px-4 py-2 rounded-lg border border-gray-300 transition-all duration-300 ${
          currentPage === 0 ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-200'
        }`}
      />
      {paginationItems}
      <Pagination.Next
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
        className={`px-4 py-2 rounded-lg border border-gray-300 transition-all duration-300 ${
          currentPage === totalPages - 1 ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-200'
        }`}
      />
    </Pagination>
  );
};

export default PaginationControls;
