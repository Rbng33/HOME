import React from "react";
import Logo from "./Assets/Logo1.svg";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import FloatingImage from "./Functions/Floatingimage"
const Login = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className=" max-w-[1240px]  h-1/2 mx-auto grid md:grid-cols-2 md:items-center md:justify-center ">

                  <div className="flex items-center justify-center">
       
             <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto w-[80%] md:h-screen md:w-full lg:py-0">
       
      <div class="w-full bg-[#F5D5D5] rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class=" welcome text-xl font-normal  leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  BIENVENUE !
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-semibold text-[#0B0C38] ">E-mail</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-solid border-[#FD8C7D] shadow-[-4.09869px_3.27895px_3px_rgba(0,0,0,0.25)]  sm:text-sm  rounded-[20px] block w-full p-2.5" placeholder="nom@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-semibold text-[#0B0C38]">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-solid border-[#FD8C7D] shadow-[-4.09869px_3.27895px_3px_rgba(0,0,0,0.25)]  sm:text-sm  rounded-[20px] block w-full p-2.5 " required=""/>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-[#FD8C7D] rounded bg-gray-50 accent-[#FD8C7D]" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" className="font-semibold text-[#191A43]">Se souvenir de moi</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-semibold text-[#191A43] hover:underline ">Mot de passe oublié ?</a>
                  </div>
                  <button type="submit" class="w-full text-[#191A42] bg-[#FD8C7D] font-semibold rounded-[20px] text-sm px-5 py-2.5 text-center shadow-[0px_3.27895px_3.27895px_rgba(0,0,0,0.25),inset_3.27895px_6.5579px_3.27895px_rgba(0,0,0,0.25)] ">Sign in</button>
                  <p class="text-sm text-center font-light text-[#444B59]">
                   Vous n'avez pas de compte <a href="#" class="font-medium text-[#F16951] hover:underline ">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>

        </div>
        <div className="hidden     md:flex md:flex-col  md:items-center     ">
          <FloatingImage />
        </div>
      </div>
    </>
  );
};

export default Login;