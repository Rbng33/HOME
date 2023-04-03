import React , {useState} from 'react';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => { 
 const [nav,setNav]=useState(false)

const handleNav= () => {
    setNav(!nav)
}

return (
<div className="flex justify-between items-center h-24 max-w[1240px] mx-auto px-4 text-black"> 
      <h1 className='w-full text-3xl font-bold text-[#FF7D6B]'>BABYLAND.</h1>
          <ul className='hidden md:flex'> 
              <li className='p-4'>Rechercher</li>
              <li className='p-4'>S'inscrire</li>
              <li className='p-4'>Connecter</li>
          </ul>
    <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size = {20} /> : <AiOutlineMenu size={20} />}
    </div>
           <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-600 bg-[#FBEDEC] ease-in-out duration-500' : 'fixed left-[-100%]'} > 
               <h1 className='w-full text-3xl font-bold text-[#FF7D6B] m-4'>BABYLAND.</h1>
                <li className='p-4 text-[#FF7D6B] border-b border-orange-600'>Rechercher</li>
                <li className='p-4 text-[#FF7D6B] border-b border-orange-600'>S'inscrire</li>
                <li className='p-4 text-[#FF7D6B] '>Connecter</li>
           </ul>
    </div>

)
}

export default Navbar 