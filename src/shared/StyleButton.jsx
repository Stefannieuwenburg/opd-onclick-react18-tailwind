import React from 'react'

export const StyleButton = ({ children }) => {
  const handleClickStyle = () => {
    alert('style button clicked')
  }
  return (
    <button className="bg-gray-700 text-yellow-200 rounded-full py-2 px-3 hover:bg-green-500 italic cursor-pointer flex justify-center m-2"onClick={handleClickStyle}>
      {children}
    </button>
  );
}
