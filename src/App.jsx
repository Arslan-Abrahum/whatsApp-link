import React, {useEffect, useRef} from 'react'
import Logo1 from "./assets/w-whatsapp-1-logo-removebg-preview.png"
import Logo2 from "./assets/w-whatsapp-2-logo-removebg-preview.png"
import { FaArrowRight } from "react-icons/fa6"

function App() {

  const imageRef = useRef(null); // Create a reference to the image

  // useEffect(() => {
  //   // Delay the redirection by 3 seconds (3000 milliseconds)
  //   const timer = setTimeout(() => {
  //     window.location.href = "https://chat.whatsapp.com/ElzWGqAuASp57bOhevsC8y"; // First WhatsApp link
  //   }, 200); // Adjust the time (in milliseconds) as per your requirement

  //   return () => clearTimeout(timer); // Cleanup in case the component unmounts
  // }, []); // Empty dependency array ensures this runs once after the component mounts

  useEffect(() => {
    // Simulate a click on the image when the component mounts
    if (imageRef.current) {
      imageRef.current.click(); // Programmatically click the image
    }
  }, []); // Empty dependency array ensures this runs once after the component mounts



  return (
    <div className="w-full min-h-screen pb-10">
      {/* WhatsApp Group Section */}
      <div className="w-full md:w-[90%] mx-auto mt-6 flex flex-wrap justify-center xl:justify-between lg:justify-between md:justify-between sm:justify-between  items-center flex-col xl:flex-row lg:flex-row md:flex-col  p-4 shadow-lg rounded-lg bg-white text-red-500">
        <div className=" flex items-center flex-wrap flex-col xl:flex-row lg:flex-row">
          <h1 className='text-xl md:text-2xl lg:text-3xl text1 font-bold'>Click this link to join WhatsApp Group</h1>
          <div className='flex space-x-4 mt-5 xl:mt-0'>
            <div className="icon h-10 w-10  text-2xl md:text-3xl flex justify-center items-center bg-red-500 text-white rounded-md ml-3 md:ml-5">
              <FaArrowRight />
            </div>
            <div className="icon h-10 w-10  text-2xl md:text-3xl  flex justify-center items-center bg-red-500 text-white rounded-md ml-3 md:ml-5">
              <FaArrowRight />
            </div>

          </div>
        </div>
        <a href="https://chat.whatsapp.com/LEwTsiYifEwG0VgIpwq2z4" ref={imageRef} className="h-20 w-20 md:h-24 md:w-28 block mt-6 xl:mt-0">
          <img src={Logo1} className="w-full h-full" alt="WhatSAPP" />
        </a>
      </div>

      {/* Second WhatsApp Group Section */}
      <div className="w-full md:w-[90%] mx-auto mt-6 flex flex-wrap justify-center xl:justify-between lg:justify-between md:justify-between sm:justify-between  items-center flex-col xl:flex-row lg:flex-row md:flex-col  p-4 shadow-lg rounded-lg bg-white text-red-500">
        <div className=" flex items-center flex-wrap flex-col xl:flex-row lg:flex-row">
          <h1 className='text-xl md:text-2xl lg:text-3xl text1 font-bold'>Click this link to join WhatsApp Group</h1>
          <div className='flex space-x-4 mt-5 xl:mt-0'>
            <div className="icon h-10 w-10  text-2xl md:text-3xl flex justify-center items-center bg-red-500 text-white rounded-md ml-3 md:ml-5">
              <FaArrowRight />
            </div>
            <div className="icon h-10 w-10  text-2xl md:text-3xl  flex justify-center items-center bg-red-500 text-white rounded-md ml-3 md:ml-5">
              <FaArrowRight />
            </div>

          </div>
        </div>
        <a href="https://chat.whatsapp.com/ElzWGqAuASp57bOhevsC8y" className="h-20 w-20 md:h-24 md:w-28 block mt-6 xl:mt-0">
          <img src={Logo1} className="w-full h-full" alt="WhatsApp" />
        </a>
      </div>

      {/* WhatsApp Number Section */}
      <div className="w-full md:w-[90%] mx-auto mt-6 flex flex-wrap justify-center xl:justify-between lg:justify-between md:justify-between sm:justify-between  items-center flex-col xl:flex-row lg:flex-row md:flex-col  p-4 shadow-lg rounded-lg bg-white text-red-500">
        <div className=" flex items-center flex-wrap flex-col xl:flex-row lg:flex-row">
          <h1 className='text-xl md:text-2xl lg:text-3xl text1 font-bold'>WhatsApp Number: 03497104965</h1>
          <div className='flex space-x-4 mt-5 xl:mt-0'>
            <div className="icon h-10 w-10  text-2xl md:text-3xl flex justify-center items-center bg-red-500 text-white rounded-md ml-3 md:ml-5">
              <FaArrowRight />
            </div>
            <div className="icon h-10 w-10  text-2xl md:text-3xl  flex justify-center items-center bg-red-500 text-white rounded-md ml-3 md:ml-5">
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="h-20 w-20 md:h-24 md:w-28 mt-6 xl:mt-0">
          <img src={Logo2} className="w-full h-full" alt="WhatsApp" />
        </div>
      </div>
    </div>
  );
}

export default App