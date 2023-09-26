"use client"

import Link from 'next/link';
import React, { useState } from 'react'
import { FaLock, FaUser } from 'react-icons/fa'

export default function Hero() {
    const [isUser, setIsUser] = useState(false);
    return (
        <div className='px-4 sm:px-6 md:px-8 lg:px-10 h-[100vh] w-full flex flex-col items-center justify-center'>
            <div className='w-full md:w-[70%] lg:w-[40%]'>
                <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl leading-tight pb-2'>How do you want to use our platform?</h1>
                <p className='text-xs md:text-sm lg:text-base font-medium'>We’ll personalize your setup experience accordingly.</p>
            </div>
            <div className='w-full md:w-[70%] lg:w-[40%] flex flex-col justify-center my-2'>
                <div className={`icon flex items-center gap-3 p-4 bg-gray-100 my-3 border-2 border-light rounded-md ${!isUser ? "!border-dark" : ""}`}
                    onClick={() => {
                        setIsUser(false);
                    }}
                >
                    <FaLock className='text-4xl md:text-5xl' />
                    <div>
                        <h3 className='text-base md:text-lg font-semibold'>I am a Admin.</h3>
                        <p className='text-xs sm:text-sm'>Provide certificates to the authenticated users.</p>
                    </div>
                </div>
                <div className={`icon flex items-center gap-3 p-4 bg-gray-100 my-3 border-2 border-light rounded-md ${isUser ? "!border-dark" : ""}`} onClick={() => {
                    setIsUser(true);
                }}>
                    <FaUser className='text-4xl md:text-5xl' />
                    <div>
                        <h3 className='text-base md:text-lg font-semibold'>I am a User</h3>
                        <p className='text-xs sm:text-sm'>Get cetificates with hash codes.</p>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-[70%] lg:w-[40%]'>
            <Link href={isUser ? "/user" : "/organization"}>
                <button className='text-light bg-dark rounded-md py-2 px-3 text-lg font-semibold'>Continue...</button>
            </Link>
            </div>
        </div >
    )
}
 