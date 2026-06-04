import Image from 'next/image'
import React from 'react'
import { FaBars } from "react-icons/fa";
import { IoIosSearch } from 'react-icons/io';
function NavMobile() {
  return (
    <nav className='gx:hidden block sticky top-10 z-30'>
      <div className='container'>
        <div className='flex justify-between items-center bg-white border-2 border-white border-solid shadow-[0_10px_40px_rgba(30,64,175,0.10)] font-lahze rounded-2xl px-4 py-3'>
          <div className='flex items-center gap-3'>
            <div className='size-11 flexCenter bg-linear-to-br from-blue-600 to-cyan-400 text-white rounded-2xl shadow-lg shadow-blue-500/30 '>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 3l7 4v10l-7 4-7-4V7l7-4z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 7l4 2.3v5.4L12 17l-4-2.3V9.3L12 7z"></path>
              </svg>
            </div>
            <div className='hidden xs:block'>
              <h2 className='text-slate-950 font-extrabold text-lg'>BlueTrade</h2>
              <p className='text-xs text-slate-500'>مدیریت مالی، بازار و خدمات دیجیتال</p>
            </div>
          </div>
          <div className='flex items-center gap-3 px-3 py-2'>
            <button className='size-11 flexCenter rounded-2xl bg-white/70 border-2 border-white/70 shadow-sm'>
              <IoIosSearch />
            </button>
            <button className='size-11 flexCenter bg-linear-to-br from-blue-600 to-cyan-400 text-white rounded-2xl shadow-lg shadow-blue-500/30'>
              <FaBars />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavMobile

