'use client'

import { setIsDarkMode, setIsSidebarCollapsed } from '@/state'
import {Bell, Menu, Moon, Settings, Sun} from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@/app/redux'
import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
  const dispach = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  )
  const isDarkMode = useAppSelector((state)=>
    state.global.isDarkMode
  )

  const toggleSidebar = () => {
    dispach(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const toggleDarkMode = ()=>{
    dispach(setIsDarkMode(!isDarkMode));
  }
  return (
    <div className="flex justify-between items-center w-full mb-7">
      <div className="flex justify-between items-center gap-5">
        <button className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100" onClick={toggleSidebar}>
           <Menu className='w-4 h-4'/>
        </button>
      </div>
      <div className='relative'>
         <input type="search" className='pl-10 pr-4 py-2 w-52 md:w-80 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500' placeholder='Buscar categoria o productos ' />
         <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
          <Bell className='text-gray-500' size={20}/>
        </div>
      </div>
      <div className='flex justify-between items-center gap-5'>
        <div className='hidden md:flex justify-between items-center gap-2'>
          <div>
            <button onClick={toggleDarkMode}>
              {
                isDarkMode ? (<Sun className='cursor-pointer text-gray-500' size={24}/>) : <Moon className='cursor-pointer text-gray-500' size={24}/>
              }
               
            </button>
          </div>
          <div className='relative'>
            <Bell className='cursor-pointer text-gray-500' size={24}/>
            <span className='absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-400 rounded-full'>
                4
            </span>
          </div>
          <hr className='w-0 h-7 border border-solid border-l border-gray-300 mx-3'/>
          <div className='flex items-center gap-3 cursor-pointer'>
            <Image src="data:image/jpeg;base64,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"
            alt='User'
            width={40}
            height={20}
            className='rounded-full h-full object-cover'/>
            <span className='font-semibold'>Juan</span>
          </div>
        </div>
        <Link href="/settings">
            <Settings className='cursor-pointer text-gray-500' size={24}/>
        </Link>
      </div>
    </div>
  )
}
