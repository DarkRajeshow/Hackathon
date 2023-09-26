"use client"
import ScreenLoading from '@/components/ScreenLoading';
import React, { useState } from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'

export default function Page() {

    const [fileData, setFileData] = useState(false);
    const [loadState, setLoadState] = useState(false);
    const [textMessage, setTextMessage] = useState("Uploading file...")

    const handleChooseFile = (event) => {
        const files = event.target?.files;
        if (files) {
            setFileData({
                name: files[0].name,
                size: files[0].size
            });
        }
        else {
            setFileData(false);
        }
    }

    const HandleLoading = () => {
        setLoadState(true);
        setTimeout(() => {
            setTextMessage("File Uploaded");
        }, 4000);
        setTimeout(() => {
            setLoadState(false);
        }, 5000);
        setTimeout(() => {
            setTextMessage("Uploading file...");
        }, 6000);
    }


    return (
        <>
            <ScreenLoading loadState={loadState} textMessage={textMessage} checkText={"File Uploaded"}/>

            <article className='mx-4 sm:mx-6 md:mx-8 lg:mx-10 my-10'>
                <div className='text-center '>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15]'>Clarify the authentity of any file.</h2>
                    <p className='py-2 text-xs sm:text-sm md:text-base lg:text-lg font-medium'>Store your files safely with blockchain technology</p>
                </div>

                <div className='flex flex-col items-center py-4 sm:py-6 md:py-8 lg:py-10 bg-dark rounded-lg my-10'>
                    <label className='text-lg text-light bg-blue-500 rounded-md py-2 px-3 flex items-center gap-2 cursor-pointer'><FaCloudUploadAlt className='text-green-300' />
                        Choose file
                        <input type="file" onChange={handleChooseFile} className='hidden w-full h-full' />
                    </label>
                    {fileData && <div className="uploadDetails text-left w-full px-4 sm:px-12 md:px-16 lg:px-20 text-light font-medium my-1 py-4 md:my-3 rounded-md">
                        <h3 className='text-xl md:text-2xl md:mb-2 text-primaryDark'>File Details</h3>
                        <div className='text-sm md:text-lg '>
                            <p>Name : {fileData.name}</p>
                            <p>Size : {(fileData.size / 1024).toFixed(0)}kb</p>
                        </div>
                        <button className='my-1 md:my-2 lg:my-3 text-sm sm:text-base md:text-lg text-light bg-green-500 p-1 px-2  md:py-2 md:px-3 rounded-md font-semibold' onClick={HandleLoading}>Upload File</button>
                    </div>}
                </div>
                <div className='flex flex-col items-start px-6 sm:px-8 md:px-10 lg:px-20 py-4 sm:py-6 md:py-8 lg:py-10 bg-dark rounded-lg my-4 sm:my-6 md:my-8 lg:my-10 text-light'>
                    <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold py-4'>Your all Uploads!</h3>
                    <div className='text-center w-full py-20 bg-light/10 rounded-md ' >
                        <p className='w-[80%] mx-auto text-center text-sm sm:text-base md:text-lg font-medium'>Your didn&apos;t uploaded any files yet.</p>
                    </div>
                </div>
            </article>
        </>
    )
}
