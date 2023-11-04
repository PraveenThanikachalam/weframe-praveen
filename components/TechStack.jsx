'use client'
import React, { useState } from 'react'
import Backend from '@/components/techstackcomponents/Backend'
import Deployement from '@/components/techstackcomponents/Deployement'
import HeadlessCms from '@/components/techstackcomponents/HeadlessCms'
import MobileFrameworks from '@/components/techstackcomponents/MobileFrameworks'
import WebFrameworks from '@/components/techstackcomponents/WebFrameworks'

const TechStack = () => {
    const [shift, setShift] = useState(false)
    return (
        <div className='techStack w-full flex flex-col items-center justify-center'>
            <div className='w-[80%] lg:w-full text-center flex flex-col items-center justify-center'>
                <h1 className='text-4xl font-bold text-white'>How we <br className='block lg:hidden' /> develop for</h1>
                <div className='rounded-xl border w-56 h-12 mt-4 border-gray-400 flex items-center justify-center'>
                    <div onClick={()=>{setShift(!shift)}} className={`flex items-center justify-center font-semibold cursor-pointer text-md w-[50%] h-full rounded-l-xl ${shift ? 'bg-white text-black': 'text-gray-300 '} `}>Web</div>
                    <div onClick={()=>{setShift(!shift)}} className={`flex items-center justify-center font-semibold cursor-pointer text-md w-[50%] h-full rounded-r-xl ${shift ?  'text-gray-300 ' : 'bg-white text-black'} `}>Mobile</div>
                </div>
            </div> cursor-pointer
            <div className='techstackComponents w-full flex flex-col items-center justify-center lg:gap-12 gap-8'>
                {
                    shift ? <WebFrameworks /> : <MobileFrameworks />


                }
                <HeadlessCms />
                <Deployement />
                <Backend />

            </div>
        </div>
    )
}

export default TechStack
