import React from "react";

const Info = () => {
  return (
    <div>
      <div className="relative z-10 container mx-auto flex items-start justify-center">
        <div className="w-full px-4 lg:w-1/2 flex justify-start lg:justify-start">
          <div className="background-block">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-3xl xl:text-4xl mb-4">
              Usability & Desirability
            </h2>
            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">

At the heart of our product development, we conducted in-depth user interviews to better 
understand the specific needs and preferences of our customers. A recurring theme from our conversations was the challenge of maintaining optimal 
sleeping conditions, particularly in terms of temperature control. Many users expressed concerns about experiencing sleeping 
troubles due to uncomfortable temperature fluctuations throughout the night. Our focus group where middle-class users from the United States that experiences
warm weather. <br /> <br />

With these insights, we designed a solution that puts temperature control at your fingertips, enabling users to personalize 
their bed&#39;s settings to achieve the perfect sleeping environment. By understanding the unique demands of users in the Americas, 
where climates vary widely, our product ensures a tailored sleep experience that addresses these concerns. Our commitment to listening 
to our customers has allowed us to create a product that significantly improves sleep quality by aligning with real-life needs and preferences.

            </p>
          </div>
        </div>
        <div className="w-full px-4 lg:w-1/2 flex items-start justify-center lg:justify-end">
          <div className="background-block">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-3xl xl:text-4xl mb-4">
              Feasibility & Viability
            </h2>

            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
            When evaluating the feasibility of incorporating advanced technologies into our temperature-controlled bed, 
            we focused on practicality and user experience. Presence sensing was a key feature, allowing the bed to 
            automatically adjust based on occupancy. With widespread WiFi access, this technology is easily integrated into most homes. <br /> <br />

            Usning AC-technology to cool the bed, we ensure that the bed is always at the right temperature. With integration for smart divices such
            as smart watches you can get more accuate biometric data on your sleep patterns. <br /> <br />

            Finally, we designed the product with minimal data usage in mind, ensuring quick, secure cloud processing while prioritizing user  
            privacy. These technologies together offer a seamless, smart sleeping experience without requiring complex infrastructure.
            </p>
          </div>
        </div>
        <div className="w-full px-4 lg:w-1/2 flex justify-center lg:justify-end">
          <div className="background-block">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-3xl xl:text-4xl mb-4">
              Sustainability
            </h2>

            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
            Our temperature-controlled bed is designed with sustainability in mind, contributing to a greener 
            lifestyle in several ways. By integrating smart temperature control, the bed minimizes energy consumption, 
            allowing users to heat or cool their sleeping environment more efficiently compared to whole-room climate control systems. 
            This targeted approach reduces reliance on energy-intensive air conditioning and heating, leading to lower overall energy usage. <br /> <br />

            The use of WiFi presence sensing also enhances sustainability by automatically adjusting settings when the bed is not in use, 
            ensuring that energy isn&#39;t wasted. Additionally, the product is built to be compatible with wearable data to optimize comfort 
            without unnecessary power consumption, further reducing environmental impact. <br /> <br />

            Our focus on durable materials and efficient use of data and technology ensures that the bed contributes to a sustainable future, 
            offering users comfort without compromising the planet&#39;s resources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
