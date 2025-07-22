// TestComponent.js

import React from 'react';

const TestComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">Welcome to Tailwind!</h1>
        <p className="text-gray-600 text-center mb-4">This is a simple test of TailwindCSS utilities inside a React component.</p>

        <div className="flex flex-col sm:flex-row justify-around gap-4 mt-6">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Button 1
          </button>
          <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-300">
            Button 2
          </button>
        </div>

        <div className="mt-6 text-center">
          <span className="text-gray-500 text-sm">Enjoy testing Tailwind!</span>
        </div>
      </div>
    </div>
  );
};

export default TestComponent;