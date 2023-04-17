import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';

import { Clock } from 'react-feather';
import { FiMapPin } from 'react-icons/fi';
import { DollarSign } from 'react-feather';


const Search = () => {
  return (
   

      

      <div className='  w-full h-full flex flex-col justify-center bg-[#FBEDEC] text-center text-white p-4'>
      <h1 className=' text-xl xxs:text-2xl xs:text-3xl font-bold text-[#5B112B] font-[Poppins]'>Rechercher Une Créche </h1>
        <h2 className='pb-4 text-xl xxs:text-2xl xs:text-3xl font-bold text-[#5B112B] font-[Poppins]'>Qui Satisfait Vos Besoins </h2>
        
        <form
          className='flex justify-between items-center max-w-[700px] mx-auto w-full border border-[#ED6361] p-1
          rounded-md text-white bg-[#5B112B] hover:scale-105 duration-300'
        >
            
          <div >
            <input
              className='bg-transparent w-full font-inter focus:outline-none p-3'
              type='text'
              placeholder='  Saisissez un lieu'
            />
          </div>

          <div>
            <button className=' mr-1 p-3 border border-[#ED6361] bg-transparent rounded-md hover:scale-105 duration-300'>
              <AiOutlineSearch size={15} className='color:#5B112B text-2xl cursor-pointer'   />
            </button>
          </div>          

        </form>

        <div className=" mx-auto grid grid-cols-4 gap-5 pt-3">

            <div className="bg-transparent w-full  flex flex-col my-3 rounded-lg ">
                <button className=' p-3 bg-[#FB9B90] border border-[#ED6361]  rounded-md hover:scale-105 duration-300' title='% Distance'>
              < FiMapPin size={15} className='color:#5B112B  cursor-pointer'    />
            </button>
                </div>

                <div className="bg-transparent w-full  flex flex-col my-3 rounded-lg ">
                <button className=' p-3  bg-[#FB9B90] border border-[#ED6361]  rounded-md hover:scale-105 duration-300' title='Mieux notés'>
              <AiOutlineStar size={15} className='color:#5B112B  cursor-pointer'   />
            </button>
                </div>

                <div className="bg-transparent w-full   my-3 rounded-lg  ">
                <button className=' p-3  bg-[#FB9B90] border border-[#ED6361]  rounded-md hover:scale-105 duration-300' title='horaire douverture'>
              <Clock size={15} className='color:#5B112B  cursor-pointer '   /> 
            </button>
                </div>

                <div className="bg-transparent w-full   my-3 rounded-lg  ">
                <button className=' p-3  bg-[#FB9B90] border border-[#ED6361]  rounded-md hover:scale-105 duration-300' title='Tarifs'>
              <DollarSign size={15} className='color:#5B112B  cursor-pointer '   /> 
            </button>
                </div>
           
           </div>

           
      </div>

   
  );
};

export default Search;
