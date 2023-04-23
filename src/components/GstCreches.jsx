import React from "react";
import CrecheSlider from "./CrecheSlider";
import { AiOutlinePlusSquare } from 'react-icons/ai';




const GstCreches = () => { 
    return (   
       
        <div className="max-w-[1000px] mt-[5] mx-auto text-center flex flex-col justify-center text-[#0B0C38]">
             
              <h1 className=" md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 font-concert ">
              Gestion des Creches
              </h1>
              <p className="md:text-3xl text-2xl font-bold text-[#5B112B] my-2">  Vos creches : </p>
                <CrecheSlider/>

               
              
                <p className="md:text-2xl text-xl font-bold text-[#5B112B]">  Ajoutez une creche en appuyant sur ce button : </p>
           
                <div className="bg-transparent text-white  flex justify-center items-center my-3 rounded-lg ">
          
                <button  title="Ajouter" className="bg-[#FB9B90]  rounded-md font-bold my-1 px-3 py-3 text-[#191A43] border-5  border-[#ED6361] hover:scale-110 duration-300">
                < AiOutlinePlusSquare size={30} className='  cursor-pointer mx-auto'    />
                  </button>
                
                </div> 
              
        </div>
    
    )
}

export default GstCreches;