import React from "react";
import one from "../assets/1.svg";
import two from "../assets/2.svg";
import three from "../assets/3.svg";
import kid from "../assets/KIDD.svg"

const CCM = () => { 
   return (
        <div className="w-full py-[10rem] px-4 bg-[#5B112B]">  
       
             <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">

                      <div className="bg-[#F6C9C7] w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                        <img className="w-20 mx-auto mt-[-3rem]" src={one} alt="/" />
                        <h2 className="text-2xl font-bold text-center py-8">Creez un compte</h2>
                        <p className="text-center text-xl py-4 mx-8 "> 
                            Inscrivez-vous pour
                            pouvoir profiter pleinement
                            de toutes les fonctionnalités 
                            proposées par notre site 
                       </p>
                       <button className="bg-[#FB9B90] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-[#191A43] border border-[#ED6361]"> Se connecter </button>
                      </div>

                      <div className="bg-[#F6C9C7] w-full shadow-xl flex flex-col p-4  my-4 rounded-lg hover:scale-105 duration-300">
                        <img className="w-20 mx-auto mt-[-3rem]" src={two} alt="/" />
                        <h2 className="text-2xl font-bold text-center py-8">Réservez une crèche</h2>
                        <p className="text-center text-xl py-4 mx-8 "> 
                              Trouvez la creche ideale
                              Grâce à notre grande 
                              sélection de crèches et à nos 
                              critères de recherche 
                              selectives
                       </p>
                       <button className="bg-[#FB9B90] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-[#191A43] border border-[#ED6361]"> Rechercher </button>
                      </div>

                      <div className="bg-[#F6C9C7] w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                        <img className="w-20 mx-auto mt-[-3rem]" src={three} alt="/" />
                        <h2 className="text-2xl font-bold text-center py-8">Ajoutez votre creche</h2>
                        <p className="text-center text-xl py-4 mx-8 "> 
                        Vous êtes un propriétaire 
                        en quête de nouvelle 
                        clientèle ?
                        N'attendez plus et ajoutez 
                        vos creches sur notre site.
                       </p>
                       <button className="bg-[#FB9B90] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-[#191A43] border border-[#ED6361]"> Ajouter </button>
                      </div>

             </div>
              
         </div>

   )
}

export default CCM;