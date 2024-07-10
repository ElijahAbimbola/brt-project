import React from 'react'
import logo from '../Components/images/Logo.png'
import { InputFieldPrimary, InputField } from '../Components/InputField'
import send from '../Components/images/send.png'

const Footer = () => {
  return (
    <div className='w-[1500px] '>
        <div className='flex space-x-10 bg-Navyblue bg-opacity-90'>
            <div className='bg-Navyblue py-5 ml-60 pl-10 pr-20 '>
                <img src={logo} alt="" />
            </div>
            <ul className='flex justify-between font-Rubik font-medium text-smd text-white py-5 space-x-24'>
                <li>Pages</li>
                <li>Utility</li>
                <li>Subscribe</li>
            </ul>
        </div>
        <div className='flex bg-Navyblue pl-64 space-x-24 pt-20 pb-40'>
            <div className='text-xsm text-white font-Krub font-medium text-start'>
                <p>"Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna <br /> aliqua. </p>
            </div>
            <div className='text-white '>
               <ul className='space-y-3'>
                
                <li>About Us</li>
                <li>Service</li>
                <li>Contacts</li>
               </ul>
            </div>
            <div className='text-white'>
                <ul>
                    <li>Not Found</li>
                </ul>
            </div>
            <div>
                <InputField placeholder={'Email here*'}/>
                <img src={send} className='w-32 h-10 mt-5' />
            </div>
        </div>
        <div className='bg-Navyblue text-white border py-2 border-blue font-Krub text-start font-medium text-sm pl-64'>
            <h3 >Copyright © TransitFlow | Designed by Obiyomi Oladayo Elizebeth</h3>
        </div>
    </div>
  )
}

export default Footer