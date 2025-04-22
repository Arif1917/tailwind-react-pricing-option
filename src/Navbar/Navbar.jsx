
import { Menu, X } from 'lucide-react';

import React, { useState } from 'react';
const dataNavigation = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" }
  ];
  
const Navbar = () => {
  const [open, setOpen] = useState(false)
  const links =  dataNavigation.map(data => <li key={data.id} className='md:mr-10 px-4 hover:bg-gray-500'><a href={data.path}>{data.name}</a></li>)
    return (
        <div>
          
           <nav className='flex justify-between items-center mx-10 py-7'>
          
           <span onClick={() =>setOpen(!open)} className='flex items-center'>
           { open ? <X className='md:hidden' size={28} color="black"></X> :  <Menu className='md:hidden' size={28} color="black"/> }
           
          <ul className={`md:hidden absolute duration-900
          ${open ? 'top-15' : '-top-40'}
            bg-amber-200`}>
          {
            links
           }
           </ul>
        

           <h2 className='text-3xl font-medium ml-4'>My Navbar</h2>
           
           </span>
          

            <ul className='md:flex hidden '>
                {
                  links
                }
            </ul>
            <button className='btn text-2xl text-amber-700 bg-green-500 rounded-2xl'>Sign in</button>
           </nav>
        </div>
    );
};

export default Navbar;