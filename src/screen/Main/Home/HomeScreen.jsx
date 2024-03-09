import React from 'react'

import { IoAddSharp } from "react-icons/io5";

export default function HomeScreen() {
    return (
        <div className='p-3'>
            <div className='flex justify-between'>
                <h1 className='font-bold text-xl text-black'>Favour NotePad</h1>
                <div className='flex items-center px-5 py-3 rounded bg-black hover:opacity-80 cursor-pointer'>
                    <p className='text-white text-xs'>Add</p>
                    <IoAddSharp color='white' className='ml-2' />
                </div>
            </div>
            {/* DETAILS BELOW */}


        </div>
    )
}

