import React from 'react';

const StartInfo: React.FC = () => {
    return (
        <div className='itemflex flex-row items-center'>
        <div>
        <a href="https://snark-app.chalmers.it/" target="_blank" rel="noopener noreferrer flex flex-col items-center justify-center">
          <img src="./images/hand_with_app.png" alt="hand-with-app" className="h-128 w-128 hover:brightness-50" />
          </a>
            </div>
        <div className="background-block">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-3xl xl:text-4xl mb-4">
              Usability & Desirability
            </h2>
            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
              Introducing the IKEA SNARK, 
            </p>
          </div>
          </div>
    );
};

export default StartInfo;