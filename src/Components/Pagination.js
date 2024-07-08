

import React from 'react';
import '../Components/Pagination.css';

function Pagination({ currentPage, totalPages, paginate }) {
  return (
    <div className="pagination">
      <button 
        onClick={() => paginate(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="current-page">{currentPage}</span>
      <button 
        onClick={() => paginate(currentPage + 1)} 
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;

