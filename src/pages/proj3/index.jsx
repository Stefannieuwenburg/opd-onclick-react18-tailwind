import React from 'react'

const Proj3 = () => {

  const handleClick2 = (name) => {
   alert(`${name}" was clicked "`)
  }
  return (
    <div name="button3" className="h-screen w-full bg-yellow-500 ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row">
        <div className="flex flex-col justify-center ">
          <p className="text-gray-500 py-4 max-w-md"> Proje4 lets have fun !</p>
          
          {/* buttons OnClick */}
          <button className="btn m-2" onClick={() => handleClick2("stefan")}>
            click for name
          </button>
        </div>
      </div>
    </div>
  );
}

export default Proj3