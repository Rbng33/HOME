import React from "react";
import pic from "../assets/pic1.svg";

const Filters = () => { 
    return ( 
       

    <div className="  mx-auto justify-center items-center grid  md:grid-cols-2 bg-[#FBEDEC]"> 
    
                 < img className=" w-[400px] mx-auto my-4" src={pic} alt="/" />
    
            <div className="flex flex-col  my-6   "> 
                         <h4 className="text-[#FB9B90] text-3xl font-bold font-concert"> LA CRECHE DA COTE</h4>

                        <h1 className="xs:text-3xl text-2xl font-bold py-2 font-inter ">Rechercher En Utilisant Nos Filtres</h1>

                      <div className=" px-3 grid  justify-center   xxs:grid-cols-2  xs:grid-cols-3 mx:auto   md:grid-cols-2 bo:grid-cols-3  ">
                               <button className="bg-[#F6C9C7] w-[160px] rounded-md font-medium my-2 xs:mx-1   py-3 text-[#191A43] border border-[#ED6361] hover:bg-[#FB9B90]"> Nom de la crèche </button>
                               <button className="bg-[#F6C9C7] w-[160px] rounded-md font-medium my-2 xs:mx-1  py-3 text-[#191A43] border border-[#ED6361] hover:bg-[#FB9B90]"> Jours d’accueil </button>
                               <button className="bg-[#F6C9C7] w-[160px] rounded-md font-medium my-2  xs:mx-1  py-3 text-[#191A43] border border-[#ED6361] hover:bg-[#FB9B90]"> Privée </button>
                               <button className="bg-[#F6C9C7] w-[160px] rounded-md font-medium my-2 xs:mx-1  py-3 text-[#191A43] border border-[#ED6361] hover:bg-[#FB9B90]"> A proximité </button>
                               <button className="bg-[#F6C9C7] w-[160px] rounded-md font-medium my-2 xs:mx-1   py-3 text-[#191A43] border border-[#ED6361] hover:bg-[#FB9B90]"> Age d’accueil </button>
                               <button className="bg-[#F6C9C7] w-[160px] rounded-md font-medium my-2 xs:mx-1  py-3 text-[#191A43] border border-[#ED6361] hover:bg-[#FB9B90]"> Places disponible </button>
                               <button className="bg-[#F6C9C7] w-[160px] rounded-md font-medium my-2 xs:mx-1   py-3 text-[#191A43] border border-[#ED6361] hover:bg-[#FB9B90]"> Etatique </button>
                               <button className="bg-[#F6C9C7] w-[160px] rounded-md font-medium my-2 xs:mx-1   py-3 text-[#191A43] border border-[#ED6361] hover:bg-[#FB9B90]"> Enfants handicapés </button>
                               <button className="bg-[#F6C9C7] w-[160px] rounded-md font-medium my-2 xs:mx-1  py-3 text-[#191A43] border border-[#ED6361] hover:bg-[#FB9B90]"> Medecin </button> 
                               <button className="bg-[#F6C9C7] w-[160px] rounded-md font-medium my-2 xs:mx-1  py-3 text-[#191A43] border border-[#ED6361] hover:bg-[#FB9B90]"> Adresse </button> 
                               <button className="bg-[#F6C9C7] w-[160px] rounded-md font-medium my-2 xs:mx-1   py-3 text-[#191A43] border border-[#ED6361] hover:bg-[#FB9B90]"> Transport inculs </button> 
                               <button className="bg-[#F6C9C7] w-[160px] rounded-md font-medium my-2 xs:mx-1 py-3 text-[#191A43] border border-[#ED6361] hover:bg-[#FB9B90]"> Accueil RDV </button>
                      </div> 

            </div>

   </div>
  
    )
}

export default Filters;