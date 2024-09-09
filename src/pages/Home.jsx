import React from 'react'
import logo from '../Components/images/Logo.png'
import { NavLink } from 'react-router-dom'
import Navbar from '../Layout/Navbar'
import Header from '../Layout/Header'
import { ParagraphHome } from '../Components/Paragraph'
import { GreyButtonIcon, YellowHomeButton } from '../Components/Button'
import partern from '../Components/images/Pattern.png'
import what from '../Components/images/what.png'
import region from '../Components/images/region.png'
import air from '../Components/images/air.png'
import bus from '../Components/images/bus.jpg'
import vehicles from '../Components/images/vehicles.png'
import { PiMoneyLight } from "react-icons/pi";
import counter from '../Components/images/Counter.png'
import one from '../Components/images/1.png'
import two from '../Components/images/2.png'
import three from '../Components/images/3.png'
import four from '../Components/images/4.png'
import five from '../Components/images/5.png'
import time from '../Components/images/time.png'
import cost from '../Components/images/cost.png'
import project from '../Components/images/Project.png'
import { BsClock } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";
import { InputFieldPrimary, InputFieldSecondary } from '../Components/InputField'
import submit from '../Components/images/Button.png'
import SearchButton from '../Components/images/SearchButton.png'
import client from '../Components/images/Client Logo.png'
import truck from '../Components/images/truck.png'
import OrangeButton from '../Components/images/OrangeButton.png'
import Footer from '../Layout/Footer'

const Home = () => {
  return (
    <main className='flex w-full  min-h-screen items-center justify-center' > 
    <div className=''>
      < Navbar />
      {/* < Header /> */}
         <div>
          {/* your get away */}
          <div className='home w-full h-full bg-no-repeat   '>
              <div className='py-52 px-80 text-start'>
                <div className='flex'>
                  <div className=' '>
                    <img src={partern} alt="" />
                  </div>
                <div className=' w-64 '><h4 className='text-white bg-grey bg-opacity-70 font-Rubik font-normal px-1 h-6 text-xsm bg-contain '>Seamless transportation for Lagosian</h4></div> </div>
                <h1 className=' font-Rubik text-lg font-bold not-italic text-white   '> Your Gateway <br /> to any Destination <br /> across Lagos</h1>
                <h3 className='font-Poppins text-white'>TransitFlow is a Lagos technology powered company, <br />providing seamless mobility service to commuters <br /> across Lagos city</h3>
                  <div className='pt-3'> 
              
                <img src={OrangeButton} alt="" />
              </div>
              </div>  
          </div>

          {/* safe and rekiable */}
          <div className='py-10  ' >
            <div className='flex pl-28 pb-20 space-x-5'>
              
              <div className='flex-col '>
                <p className='text-black font-Rubik text-start'>Origin </p>
              <div className='relative'>
              <GreyButtonIcon name={'Current Location'}  /> 
              <div className='absolute top-2 right-4  '>
              <RiArrowDropDownLine className='w-8 h-10 text-grey4'  />
              </div>
              </div>
              </div>
              <div className='flex-col '>
                <p className='text-black font-Rubik text-start'>Destinationn </p>
              <div className='relative'>
              <GreyButtonIcon name={'Select destination'}  /> 
              <div className='absolute top-2 right-4  '>
              <RiArrowDropDownLine className='w-8 h-10 text-grey4'  />
              </div>
              </div>
              </div>
              <div className='flex-col '>
                <p className='text-black font-Rubik text-start'>Date </p>
              <div className='relative'>
              <GreyButtonIcon name={'Pick a date'}  /> 
              <div className='absolute top-2 right-4  '>
              <RiArrowDropDownLine className='w-8 h-10 text-grey4'  />
              </div>
              </div>
              </div>
              <div className='pt-6'>
                  {/* <YellowHomeButton name={'Search'} type={''}/> */}
                  <img src={SearchButton} alt=""   className='h-14 w-60 '/>

              </div>
            </div>
          <div className='flex justify-center  ' >
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
              <ul className='flex justify-between'>
                <li className='flex space-x-5'>
                  <img src={region} alt="" className='w-[84px] h-[115px]' /> <div><h1 className='font-Rubik font-normal text-smd text-black text-start '>Region & Inter-State <br /> Transportation</h1>
                  <h2 className='font-Krub font-medium text-black text-sm text-start'>"Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. </h2></div> 
                </li>
                  <li className='flex space-x-5'>
                   
                  <img src={air} alt="" className='w-[75px] h-[115px]' /> <div> <h1 className='font-Rubik font-normal text-smd text-black text-start '>Local Air Flight Service <br /> Transportation</h1>
                  <h2 className='font-Krub font-medium text-black text-sm text-start'>"Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. </h2></div>
                </li>
              </ul>
            </div>
          </div>
          </div>
          {/* img */}
          <div className='brt w-[1500px] h-[800px]  bg-contain text-center bg-no-repeat '>
            {/* <img src={bus} alt="" /> */}
         <div className=' text-center py-20  w-[]  '> <div className= 'flex justify-center    '>
            <div className='bg-white flex  '>
              <div className='pl-14 pt-12'>
            <div className='flex '>
              <img src={what} alt="" />
              <div className='bg-lightgrey2 w-20'>
                <h3 className='text-xsm font-Rubik font-light text-black ' >Why Us</h3>
              </div>
            </div>
            <div>
                <div> <h2 className='text-black font-Rubik leading-10 text-md font-semibold text-start '>We provide full range Local <br /> and Inter-State <br /> transportation  solution</h2></div>
                <h3 className='font-Krub font-medium text-black text-sm text-start pt-3' >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua. </h3>
            </div>
             
              
            {/* icons */}
            <div className='text-start'> 
              <div className='flex space-x-5 pt-3'>
                <img src={time} alt=""  className='w-[40px] h-[40px]'/>
                <h2 className='font-Rubik font-normal text-smd pt-2'>Arriving on Time</h2>
              </div>
              <div className='flex space-x-5 pt-3'>
                <img src={cost} alt="" className='w-[40px] h-[40px]' />
                <h2 className='font-Rubik font-normal text-smd pt-2'>Optimized Travel Cost</h2>
              </div>
            </div>
             </div>
            <div className='w-[340px] h-[270px] pt-16 pr-14'>
              <img src={vehicles} alt=""/>
            </div>
            </div>
             
           
            </div>
            </div>
             <div className='flex pt-20 justify-center text-center'>
              <img src={counter} alt="" />
            </div>
           
          </div>
          
          {/* <div>
          <div className='text-md font-Rubik font-semibold text-center text-black pt-32 pl-72 mb-10'>
            <p>Transporting Across the Lagos State</p>
          </div>
        
          <div className='content w-[1500px] bg-contain text-center'>
           
              <div className='flex  justify-center space-x-2 pb-40 px-40 w-[1500px] '> 
                 <img src={one} className=' ' />
                 <img src={two} className='w-80 h-[407px]'  />
                  <img src={three} className='w-80 h-[407px]'  />
                  <img src={four}className='w-80 h-[407px]' />
                  <img src={five} className='w-80 h-[407px]'  />
              </div>
          </div>
          </div> */}

          <div className='w-[1500px] pt-20'>
            <img src={project} alt="" />
          </div>
         </div>
       <div className='bg-white w-[1500px] '>
        {/* get */}
        <div className='pt-20 pl-64 flex space-x-28'>
          <div>
             <div className='flex '>
              <img src={what} alt="" />
              <div className='bg-lightgrey2 w-20 bg-opacity-10'>
                <h3 className='text-xsm font-Rubik font-light  text-white p-0 ' >Contact</h3>
              </div>
              </div>
               <div>
                <div> <h2 className='text-black font-Rubik  text-md font-semibold text-start pb-1  '>Get in touch with us</h2></div>
                <h3 className='font-Krub font-medium text-black text-sm text-start ' >"Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed  do eiusmod tempor <br /> incididunt ut labore et dolore magna  aliqua. </h3>
            </div>
               <ul className='space-y-5 pt-5'>
               
                 <li>
                    <div className=' flex space-x-2'>
                 <button className='rounded-full p-3 bg-Navyblue2'> < CiMail className=' text-white w-5 h-5 ' /></button>
                     <div className='text-black  font-Krub text-xsm font-medium'><section className='text-start'>Email</section> <section className='text-start'>contact@transitflow.com</section></div></div>
                </li>

                 {/* <li>
                    <div className='flex space-x-2'>
                 <button className='rounded-full p-3 bg-Navyblue2'> < LuPhone className=' text-Orange w-5 h-5  ' /></button>
                     <div className='text-white bg-Navyblue font-Krub text-xsm font-medium'><section className='text-start'>Contact </section> <section className='text-start'>(+234) 802 384 6669</section></div></div>
                </li>

                 <li>
                    <div className='flex space-x-2 '>
                <button className='rounded-full p-3 bg-Navyblue2'> < BsClock className=' text-Orange  w-5 h-5' /></button>
                     <div className='text-white bg-Navyblue font-Krub text-xsm font-medium'><section className='text-start'>Mon-Sat 9:00-18:00</section>  <section className='text-start'>Sunday Closed</section></div></div>
                </li> */}
               </ul>
               </div>
               {/* imputfield */}
               <div className='pt-10'> 
                <div className='space-x-5'>
                  < InputFieldPrimary placeholder={ 'Your name*' } />
                  < InputFieldPrimary placeholder={ 'Email*' } />
                </div>
                   <div className='space-x-5 pt-5'>
                  < InputFieldPrimary placeholder={ 'Phone Number*' } />
                  < InputFieldPrimary placeholder={ 'City*' } />
                </div>
                <div className='pt-5 '>
                  < InputFieldSecondary placeholder={'Your Message'} />
                </div>
                <div  className='pt-5 w-40 pb-20'>
                  {/* <YellowHomeButton name={'Submit Message'} /> */}
                  <img src={submit} alt="" />
                </div>
               </div>
            </div >
            {/* clients */}
            {/* <div className='pl-64 pt-10 w-[1220px]'>
            <img src={client} alt="" />
            
       </div> */}
       {/* truck */}
       {/* <div className='w-[1500px] pt-20 '>
        <img src={truck} alt="" />
       </div> */}
       </div>
       <Footer />
    </div>
    </main>
  )
}

export default Home;