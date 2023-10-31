import React from 'react'
import { StyleButton } from 'shared/StyleButton'

const Proj2 = () => {
  return (
    <div name="button2" className="h-screen w-full bg-green-500">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row">
        <div className="flex flex-col justify-center ">
          <p className="text-gray-500 py-4 max-w-md"> Proje1 lets have fun !</p>
          {/* buttons OnClick */}
          <StyleButton >On to Click</StyleButton>
        </div>
      </div>
    </div>
  );
}

export default Proj2