import React from 'react'
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'
import Brt from '../Components/images/BrtBus.png'
import partern from '../Components/images/Pattern.png'


const AboutUs = () => {
  return (
    <div>
         <Navbar />
          <div>
            <div className='about pl-20 py-32 '>
             <div className='flex '>
                  <div className=' '>
                    <img src={partern} alt="" />
                  </div>
                <div className='  '><h4 className='text-white bg-grey bg-opacity-70 font-Rubik font-normal  h-6 text-xsm bg-contain '>About Us</h4></div> </div>
                <div className='font-Rubik font-bold text-lg text-white'>
                    <p>About Our <br /> Transportation</p>
                </div>
            </div>
            {/* transport */}
            <div className='bg-white flex py-10'>
               <div><img src={Brt} alt="" /></div>

               <div >
                 <div className='flex'>
                  <div className=' '>
                    <img src={partern} alt="" />
                  </div>
                <div className=' '><h4 className='text-white bg-grey bg-opacity-70 font-Rubik font-normal px-1 h-6 text-xsm bg-contain '>About Us</h4></div> </div>
                <p className='font-bold text-[35px] font-Rubik '>Our Company Overview</p>
                <h1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h1>
                  
                  <div>
                 
                  </div>

                  <h1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h1>
               </div>
            </div>
          </div>
        <Footer />
    </div>
  )
}

export default AboutUs