import React from 'react'
import logo from '../Components/images/Logo.png'
import { NavLink } from 'react-router-dom'
import Navbar from '../Layout/Navbar'
import Header from '../Layout/Header'
import { ParagraphHome } from '../Components/Paragraph'
import { YellowHomeButton } from '../Components/Button'
import partern from '../Components/images/Pattern.png'
import what from '../Components/images/what.png'
import region from '../Components/images/region.png'
import air from '../Components/images/air.png'
import bus from '../Components/images/bus.jpg'
import vehicles from '../Components/images/vehicles.png'

const Home = () => {
  return (
    <div className='m-0 w-full h-full '>
      < Navbar />
      < Header />
         <div>
          {/* your get away */}
          <div className='home w-[1500px] bg-no-repeat -mt-14   '>
              <div className='py-52 px-80 text-start'>
                <div className='flex'>
                  <div className=' '>
                    <img src={partern} alt="" />
                  </div>
                <div className=' w-64 '><h4 className='text-white bg-grey bg-opacity-70 font-Rubik font-normal px-1 h-6 text-xsm bg-contain '>Seamless transportation for Lagosian</h4></div> </div>
                <h1 className=' font-Rubik text-lg font-bold not-italic text-white   '> Your Gateway <br /> to any Destination <br /> across Lagos</h1>
                <h3 className='font-Poppins text-white'>TransitFlow is a Lagos technology powered company, <br />providing seamless mobility service to commuters <br /> across Lagos city</h3>
                  <div className='pt-3'> 
                <YellowHomeButton name={'Explore More'} type={'submit'}/>
              </div>
              </div>  
          </div>
          {/* safe and rekiable */}
          <div >
          <div className='flex' >
            <div>
            <div className='flex'>
              <img src={what} alt="" />
              <div className='bg-lightgrey2 w-20'>
                <h3 className='text-xsm font-Rubik font-light text-black ' >What We Do</h3>
              </div>
            </div>
           <div> <h2 className='text-black font-Krub text-md font-semibold text-start '>Safe & Reliable <br /> Transportation <br /> Solutions</h2></div>
           </div>
            <div>
              <ul>
                <li className='flex'>
                  <img src={region} alt="" /> <div><h1 className='font-Rubik font-normal text-smd text-black text-start '>Region & Inter-State <br /> Transportation</h1>
                  <h2 className='font-Krub font-medium text-black text-sm text-start'>"Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. </h2></div> 
                </li>
                  <li className='flex'>
                   
                  <img src={air} alt="" /> <div> <h1 className='font-Rubik font-normal text-smd text-black text-start '>Local Air Flight Service <br /> Transportation</h1>
                  <h2 className='font-Krub font-medium text-black text-sm text-start'>"Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. </h2></div>
                </li>
              </ul>
            </div>
          </div>
          </div>
          {/* img */}
          <div className='w-[1500px]  bg-contain text-center bg-no-repeat '>
            <img src={bus} alt="" />
          <div className='bg-white flex justify-center '>
            <div>
            <div className='flex'>
              <img src={what} alt="" />
              <div className='bg-lightgrey2 w-20'>
                <h3 className='text-xsm font-Rubik font-light text-black ' >Why Us</h3>
              </div>
            </div>
            <div>
                <div> <h2 className='text-black font-rubik text-md font-semibold text-start '>We provide full range Local <br /> and Inter-State <br /> transportation  solution</h2></div>
                <h3 className='font-Krub font-medium text-black text-sm text-start' >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua. </h3>
            </div>
            {/* icons */}
            <div> 
              
            </div>
            </div>
            <div>
              <img src={vehicles} alt="" />
            </div>
            </div>
          </div>
         </div>
      
    </div>
  )
}

export default Home;