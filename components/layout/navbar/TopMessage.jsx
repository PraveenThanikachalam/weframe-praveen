'use client';
import React, { useState } from 'react';

const TopMessage = () => {
  const [showUnderDevelopment, setShowUnderDevelopment] = useState(true);

  const handleClose = () => {
    setShowUnderDevelopment(false);
  };
  return (
    <div>
      {showUnderDevelopment && (
        <div className="bg-[#123d41] p-2 text-center">
          <p className="text-sm text-gray-100 z-20 sticky top-0 font-medium">
            This website is currently under development. We appreciate your
            patience. If you have any urgent inquiries or require assistance,
            please feel free to contact us:
            <button onClick={handleClose} className="float-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default TopMessage;
