import React from "react";

const SlideShow = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div>
        <h1 className="text-5xl text-white flex flex-col items-center justify-center mb-8 mt-20"> Pitch 2 Presentation </h1>
      <iframe src={"./slides/SNARK_PRESENTATION_Pitch2.pdf"} width={'800px'} height={'400px'} className="m-2" />
      </div>
      
      <div>
        <h1 className="text-5xl text-white flex flex-col items-center justify-center mb-8 mt-20"> Final Presentation </h1>
      <iframe src={"./slides/Sprint3_PPT_Team16.pdf"} width={'800px'} height={'400px'} className="m-2" />
      </div>
    </div>
  );
};

export default SlideShow;
