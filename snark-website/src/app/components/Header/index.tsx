import React from 'react';

const Header = () => {

  return (

    <div>
      <div className="relative z-10 container mx-auto flex items-center justify-center">
        <div className="flex flex-wrap items-center justify-center w-full">
          <div className="w-full px-4 lg:w-1/2 flex justify-center lg:justify-end">
          </div>
            <div className="max-w-[600px]">
            <img src="./images/snark.png" alt="snark-logo" className=" flex flex-col items-center justify-center" /> {/* Added image here */}
            </div>
          </div>
          </div>
        </div>
  );

};



export default Header;