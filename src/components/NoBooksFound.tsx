import React from 'react';

// TypeScript functional component


const NoBooksFound: React.FC = (
    
) => (
  <div className="flex items-start justify-center h-screen bg-gray-100 p-4">
    <div className="text-center bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <svg
        className="w-20 h-20 mx-auto mb-4 text-red-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h14M5 12l7-7m-7 7l7 7"
        />
      </svg>
      <p className="text-2xl font-semibold text-gray-800">No Books Found</p>
      <p className="text-gray-600 mt-2">Try adjusting your filters or searching for something else.</p>

    </div>
  </div>
);

export default NoBooksFound;
