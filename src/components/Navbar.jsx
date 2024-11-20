import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {

  const menu = [
    {
      title:"Home",
      Links:"#Home"
    },
    {
      title:"About",
      Links:"#About"
    },
    {
      title:"Projects",
      Links:"#Projects"
    },
    {
      title:"Testimonials",
      Links:"#Testimonials"
    }
  ]


  const [showMobileMenu , setShowMobileMenu] = useState(false)

  //prevent website scrolling
  useEffect(() => {
    if(showMobileMenu){
      document.body.style.overflow = 'hidden'
    }else {
      document.body.style.overflow = 'auto'
    }
    return() => {
      document.body.style.overflow = 'auto'
    }

  },[showMobileMenu])

  return (
    <nav className='absolute top-0 left-0 w-full z-10'> 
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent' >
            <img src={assets.logo} alt="logo" />
            <ul className='hidden md:flex gap-7 text-white'>
              {
                menu.map((menu, index) => (
                  <a key={index} className=' cursor-pointer hover:text-gray-400' href={menu.Links} >{menu.title}</a>
                ))
              }
            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Signout</button>
            <img  onClick={() => setShowMobileMenu(true)} className='md:hidden w-7 cursor-pointer ' src={assets.menu_icon} alt="menuicon" />
        </div>

        {/* ------------------Moble-menu--------------------- */}

        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
          <div className='flex justify-end p-6 cursor-pointer'>
            <img onClick={() => setShowMobileMenu(false)} className='w-6' src={assets.cross_icon} alt="crossicons" /> 
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            {menu.map((menu,index) => (
               <a onClick={() => setShowMobileMenu(false)}  key={index} className=' px-4 py-2 rounded-full inline-block' href={menu.Links} >{menu.title}</a>
            ))}
          </ul>
        </div>
    </nav>
  )
}

export default Navbar