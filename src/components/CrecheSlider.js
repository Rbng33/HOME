import React from "react";

import {CrecheSliderdata} from '../data';

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import '../slider.css';
import { FreeMode, Pagination } from "swiper";

 const CrecheSlider = () => { 
      return ( 
        <div className="container py-5 px-0 mx-auto  gap-8 items-center  ">
   <Swiper freeMode={true} grabCursor={true}
    modules={[FreeMode]} className="mySwiper" 
    slidesPerView={3} spaceBetween={25} 
    breakpoints={{ 
        0 :  {
            slidesPerView : 1,
        },
        360 : { 
            slidesPerView : 2,
        },
        768 : { 
            slidesPerView : 3,
        }
    }}
    > 
      { CrecheSliderdata.map((slide,index) => {
        const {image,name,Location}=slide;
        return (
            
            <SwiperSlide key={index} className="p-0 overflow-hidden h-100   w-full  flex  my-4 bg-white shadow-[0px_4.39131px_17.5652px_rgba(158,158,158,0.25)] rounded-[17.5652px]  " >
              
                
                  
                        <img className=" mx-auto mt-2  "  src={image} alt="" /> 
                     
                
                    <div className="text-left pl-8 text-2xl font-bold py-2  ">{name}</div>
                  <div className="text-left pl-8  font-bold ">{Location}</div> 
                  <div className="flex  justify-center">
                  <button className="bg-[#FB9B90] w-[160px] rounded-md font-bold my-6  py-3 text-[#191A43] border-5  border-[#ED6361] hover:scale-110 duration-300"> Voir plus </button>
                  </div>

                
                        
                       
             
            </SwiperSlide>
            
        );
      })}

   </Swiper>
   </div>
   );
      
 };

 export default CrecheSlider;