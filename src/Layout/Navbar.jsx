import React from 'react'
import logo from '../Components/images/Logo.png'
import { BsClock } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";


const Navbar = () => {
  return (
    <div>
        <div className=' h-full bg-cover w-[1500px] bg-Navyblue '>
                <div className=' flex space-x-40 px-48  '>
               <div className='pl-14  py-10'> <img src={logo} className='w-52 h-9'  /></div>
              <ul className='flex  py-10  space-x-10'>
                <li>
                    <div className='flex space-x-2 '>
                <button className='rounded-full p-3 bg-Navyblue2'> < BsClock className=' text-Orange  w-5 h-5' /></button>
                     <div className='text-white bg-Navyblue font-Krub text-xsm font-medium'><section className='text-start'>Mon-Sat 9:00-18:00</section>  <section className='text-start'>Sunday Closed</section></div></div>
                </li>

                 <li>
                    <div className=' flex space-x-2'>
                 <button className='rounded-full p-3 bg-Navyblue2'> < CiMail className=' text-Orange w-5 h-5 ' /></button>
                     <div className='text-white bg-Navyblue font-Krub text-xsm font-medium'><section className='text-start'>Email</section> <section className='text-start'>contact@transitflow.com</section></div></div>
                </li>

                 <li>
                    <div className='flex space-x-2'>
                 <button className='rounded-full p-3 bg-Navyblue2'> < LuPhone className=' text-Orange w-5 h-5  ' /></button>
                     <div className='text-white bg-Navyblue font-Krub text-xsm font-medium'><section className='text-start'>Contact </section> <section className='text-start'>(+234) 802 384 6669</section></div></div>
                </li>
              </ul>
                </div>
        
       
        </div>
    </div>
  )
}

export default Navbar;