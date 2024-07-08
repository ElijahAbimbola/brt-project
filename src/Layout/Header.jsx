import React from 'react'
import { WhiteButton } from '../Components/Button';
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { RiTwitterFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";

const Header = () => {
  return (
    <div>
         <div className=' header  w-[1500px]  text-white font-Krub text-sm font-semibold '>
            <div className=' flex space-x-40 '>
                <ul className='flex space-x-7 pt-5 pl-64'>
                    <li className=''>Home </li>   
                    <li>About</li> 
                    <li>Book a Seat</li> 
                    <li>Schedule a trip </li> 
                    <li>Contact</li> 
                </ul>
                <ul className='flex space-x-5  text-white '>
                  <li className='pt-5'> <IoLogoInstagram /></li>
                  <li className='pt-5'><IoLogoFacebook /> </li>
                  <li className='pt-5'><RiTwitterFill /> </li>
                  <li className='pt-5'><IoLogoLinkedin /> </li>
                
                <div className='pl-12'>
                    < WhiteButton name={'Request Quote'} />
                </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header