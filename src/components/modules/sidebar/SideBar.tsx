import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RxCross2 } from 'react-icons/rx'

function SideBar() {
    return (
        <>
            <div className='absolute top-0 z-50 bg-slate-900/72 backdrop-blur-[18px] h-screen text-white p-5 font-lahze'>
                        <div className='flex items-center justify-between mb-6'>
                          <div className='flex items-center gap-3'>
                              <div className='size-11 flexCenter bg-linear-to-br from-blue-600 to-cyan-400 text-white rounded-2xl shadow-lg shadow-blue-500/30'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 3l7 4v10l-7 4-7-4V7l7-4z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 7l4 2.3v5.4L12 17l-4-2.3V9.3L12 7z"></path>
                                </svg>
                            </div>
                            <div>
                                <h2 className='font-bold text-lg'>منوی اصلی</h2>
                                <p className='text-xs text-slate-300'>دسترسی سریع به تمام بخش‌ها</p>
                            </div>
                          </div>
                            <button className='size-10 rounded-xl bg-white/10 flexCenter'>
                                <RxCross2 />
                            </button>
                        </div>
                    
                        <div className='rounded-xl bg-white/10 border-2 border-white/10 p-4 flex items-center gap-3 mb-5'>
                            <Image src='/images/navbar/pravatar-80-12.jpg' alt='logo' width={44} height={44} className='size-12 rounded-xl object-cover'/>
                            <div>
                            <h2 className='font-bold'>علی رضایی</h2>
                            <h2 className='text-sm text-slate-300'>حساب کاربری فعال</h2>
                            </div>
                        </div>
                    
                    <div>
                        <ul className='space-y-2'>
                            <li className='navLinkSideBar'>
                                <Link href=''>کیف پول</Link>
                            </li>
                            <li className='navLinkSideBar'>
                                <Link href=''>مقاله‌ها</Link>
                            </li>
                            <li className='navLinkSideBar'>
                                <Link href=''>درباره ما</Link>
                            </li>
                            <li className='navLinkSideBar'>
                                <Link href=''>قوانین</Link>
                            </li>
                            <li className='navLinkSideBar'>
                                <Link href=''>پشتیبانی</Link>
                            </li>
                            <li className='navLinkSideBar'>
                                <Link href=''>داشبورد</Link>
                            </li>
                        </ul>
                    </div>
            </div>
        </>

    )
}

export default SideBar