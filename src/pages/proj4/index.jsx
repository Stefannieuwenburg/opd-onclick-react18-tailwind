import React from 'react';

const Proj4 = () => {


  return (
    <div  name="button4" className="h-screen w-full bg-white ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row">
        <div className="flex flex-col justify-center ">
          <p className="text-gray-500 py-4 max-w-md"> Proje4 lets have fun !</p>
          {/* buttons OnClick */}
         
          <button className="btn m-2" onClick={()=>window.open('https://github.com/Stefannieuwenburg')}>window open click</button>
        </div>
      </div>
    </div>
  );
}

export default Proj4