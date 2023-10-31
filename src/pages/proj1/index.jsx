import React from 'react'

const Proj1 = () => {

  const handleClick = () => {
    alert('clicked')
  }
  return (
    <div name="button1" className="h-screen w-full bg-red-500 ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row">
        <div className="flex flex-col justify-center ">
          <p className="text-gray-500 py-4 max-w-md"> Proje1 lets have fun !</p>
          {/* buttons OnClick */}
          <button className="btn m-2" onClick={handleClick}>
            onClick
          </button>
        </div>
      </div>
    </div>
  );
}

export default Proj1