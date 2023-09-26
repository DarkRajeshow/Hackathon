"use client"
import ScreenLoading from '@/components/ScreenLoading';
import React, { useState } from 'react'

export default function Page() {

  const [loadState, setLoadState] = useState(false);
  const [textMessage, setTextMessage] = useState("Retriving file...")

  const handleSubmit = () => {
    setLoadState(true);
    setTimeout(() => {
      setTextMessage("File Retrived Successfully");
    }, 4000);
    setTimeout(() => {
      setLoadState(false);
    }, 5000);
    setTimeout(() => {
      setTextMessage("Retriving file...");
    }, 6000);
  }

  return (

    <>
      <ScreenLoading loadState={loadState} textMessage={textMessage} checkText={"File Retrived Successfully"} />
      <article className='p-4 py-10 sm:p-6 md:p-8 lg:p-10'>
        <div className='text-center'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15]'>Validate Your hash code to get your files.</h2>
          <p className='py-2 text-xs sm:text-sm md:text-base lg:text-lg font-medium'>Retrive your files safely with blockchain technology</p>
        </div>

        <div className='flex flex-col items-center py-10 bg-dark rounded-lg my-10 text-light'>
          <h3 className='text-center text-2xl md:text-3xl lg:text-4xl font-bold py-4 w-[90%] mx-auto'>Enter your hash code to retrive your files.</h3>
          <div className='flex gap-1 sm:gap-2 md:gap-4 w-[90%] justify-center'>
            <input type="text" name="" id="" placeholder='Enter your hash code here...' className='p-1 px-2  md:py-2 md:px-3 rounded-md text-lg w-[60%] sm:w-[60%] md:w-[40%] lg:w-[30%] text-dark font-semibold'/>
            <button className='text-sm sm:text-base md:text-lg text-light bg-green-500 p-1 px-2  md:py-2 md:px-3 rounded-md font-semibold' onClick={handleSubmit}>Get Document</button>
          </div>
        </div>
        <div className='flex flex-col items-start px-6 sm:px-8 md:px-10 lg:px-20 py-4 sm:py-6 md:py-8 lg:py-10 bg-dark rounded-lg my-4 sm:my-6 md:my-8 lg:my-10 text-light'>
          <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold py-4'>Your all files!</h3>
          <div className='text-center w-full py-20 bg-light/10 rounded-md ' >

            <p className='w-[80%] mx-auto text-center text-sm sm:text-base md:text-lg font-medium'>Your didn&apos;t received any files yet.</p>
          </div>
        </div>
      </article>
    </>
  )
}
