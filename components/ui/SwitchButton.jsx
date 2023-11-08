'use client'
import React,{useState} from 'react'


const SwitchButton = ({label1, label2}) => {
    const [shift,setShift] = useState(false)
  return (
    <div className="rounded-xl  w-full  h-14 mt-4 border-gray-500  flex items-center justify-center">
    <div
      onClick={() => {
        setShift(!shift);
      }}
      className={`flex items-center justify-center font-semibold cursor-pointer shadow shadow-gray-300 lg:text-md text-sm lg:h-full w-[50%] h-20 px-10 py-2 rounded-l-xl ${
        shift ? 'bg-white text-black' : 'text-gray-300 '
      } `}
    >
      {label1}
    </div>
    <div
      onClick={() => {
        setShift(!shift);
      }}
      className={`flex items-center justify-center font-semibold   cursor-pointer  lg:text-md text-sm px-10 py-2 lg:h-full w-[50%] h-20 rounded-r-xl ${
        shift ? 'text-gray-300 ' : 'bg-white text-black'
      } `}
    >
      {label2}
    </div>
  </div>
  )
}

export default SwitchButton
