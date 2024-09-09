import React from 'react'
import logo from '../Components/images/Logo.png'
import { OrangeButton } from '../Components/Button';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='bg-Navyblue'>
        <div className=' h-full bg-cover w-full py-10  '>
                <div className=' flex space-x-20 justify-center  '>
               <div className='  '> <img src={logo} className='w-52 h-9'  /></div>
              <ul className='flex space-x-10 text-white font-Krub font-semibold text-sm divide-x-2 h-[22px] w-[] divide-y-0  divide-gray-700 '>
                <Link to='/'>
                <li className=' px-3'>Home</li>
                </Link>
             <Link to='/AboutUs'>
                <li className='px-5' >About</li>
                </Link>
                <Link to='/Services' >
                 <li className='px-5'>Services</li>
                 </Link>
                  <Link to='/Shedule a trip' >
                 <li className='px-5'>Schedule a trip</li>
                 </Link>
                 <Link to='/Contacts ' >
                 <li className='px-5'>Contact</li>
                 </Link>
              </ul>
              <OrangeButton name={'SIGN IN'}  />
                </div>
        
       
        </div>
    </div>
  )
}

export default Navbar;