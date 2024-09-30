import React from 'react';

const Info = () => {

  return (

    <div>

<div className="relative z-10 container mx-auto flex items-center justify-center">
        <div className="flex flex-wrap items-center justify-center w-full">
          <div className="w-full px-4 lg:w-1/2 flex justify-center lg:justify-end">
          </div>
            <div className="max-w-[470px]">
            <img src="./images/snark.png" alt="snark-logo" className="mb-9 flex flex-col items-center justify-center" /> {/* Added image here */}

                <div className="background-block">
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Introducing the IKEA SNARK, a cutting-edge bedroom solution designed to enhance comfort, energy savings, 
                and sleep quality. Our temperature-controlled smart bed adjusts automatically to your ideal sleep temperature, 
                ensuring optimal comfort all night long. 
                <br />
                <br />

                The real magic happens with our presence-sensing lights. As you enter the room, the lights can trigger the 
                bed's cooling system, preparing the bed to your preferred temperature before you even lie down. This seamless 
                integration creates a perfectly tailored sleep environment, making your night as effortless as your morning.
                <br />
                <br />

                For IKEA, this isn’t just a product, it's bound to revolutionize the booming smart home market. With 
                eco-conscious customers increasingly seeking energy-efficient solutions, Snark offers a dual benefit: reduced 
                AC energy consumption with spot cooling, and improved well-being through optimized sleep. By integrating smart 
                tech, energy savings, and comfort, IKEA can attract new customers, drive sales, and strengthen its position as 
                a leader in the home innovation market.
                </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 flex justify-start lg:justify-start">
            <div className="background-block">
              <h2 className="text-3xl font-bold sm:text-4xl lg:text-3xl xl:text-4xl mb-4">Project DEMO</h2>
            </div>
          </div>
          </div>
        </div>
  );

};



export default Info;