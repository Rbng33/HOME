import React from "react";

const Hero =()=> { 
return (
    <div className="text-[#0B0C38]">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
              <p className=" font-bold p-2">
              GROWING WITH DATA ANALYTICS
              </p>
              <h1 className=" md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
              Grow with data.
              </h1>
       
              <div className="flex justify-center items-center ">
                    <p className=" md:text-5xl sm:text-4xl text-xl font-bold pl-2">
                         Fast,flexible financing for BTB.
                    </p>
              </div>
              <p className="md:text-2xl text-xl font-bold text-gray-600">Monitor your data analystics to increase revenue for BTB,BTC SASS platforms. </p>
              <button className="bg-[#FB9B90] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#191A43] border border-[#ED6361]">Se Connecter</button>
        </div>
    </div>
)
}

export default Hero ;