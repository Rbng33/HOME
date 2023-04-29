
import React from "react";
import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from "react-router-dom";
import MyButton from "../Mybutton";


function  CrecheCard (props) {
  const URL='/CrecheDescuserx?name='+props.name
return (
<div className="mx-1  my-3 rounded-2xl bg-white font-inter">
<div className=" grid grid-cols-3 text-center items-center w-full border-b-4 border-gray-100 border-t-4 my-3 ">
        <button className="bg-[#5560d8] justify-self-start ml-[5%]  w-fit rounded-md font-medium text-center my-2  ring-2 ring-gray-100  hover:scale-105 duration-0" title="Modifier">
          < AiFillEdit size={20} className=' text-center text-white  cursor-pointer mx-1 my-1  xs:mx-2 xs:my-2 md:mx-3 md:my-3' />
        </button>
        <h1 className="font-inter font-bold justify-self-center">{props.name} </h1>
        
        <button className="bg-[#f92912] justify-self-end mr-[5%]  w-fit  rounded-md font-medium text-center my-2  ring-2 ring-gray-100  hover:scale-105 duration-0" title="Supprimer">
          < AiFillDelete size={20} className=' text-center text-white cursor-pointer mx-1 my-1 xs:mx-2 xs:my-2 md:mx-3 md:my-3' />
        </button>
 </div>
    <h1 className="font-inter mt-5 mb-3 "> <span className="font-bold"> Nom : </span> {props.name} </h1>
    <h1 className="font-inter my-3"> <span className="font-bold"> Location : </span>  {props.Location} </h1>
    <h1 className="font-inter my-3  "> <span className="font-bold"> Description : </span> {props.Description} </h1>
     <a href={URL} >
    <button className=" bg-red-400 text-white  py-2 px-2  w-fit  rounded-md font-medium text-center mt-3 mb-5  ring-2 ring-gray-100 hover:bg-red-600 hover:scale-105 duration-0" title="Supprimer">
          Voir Plus  
      </button>
      </a>
      
      
      
      
      
    
</div>
    
)


}

export default CrecheCard; 