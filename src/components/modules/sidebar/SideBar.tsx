import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RxCross2 } from 'react-icons/rx'

function SideBar() {
    return (
        <>
            <div>
                <div>
                        <div>
                          <div>
                              <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 3l7 4v10l-7 4-7-4V7l7-4z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 7l4 2.3v5.4L12 17l-4-2.3V9.3L12 7z"></path>
                                </svg>
                            </div>
                            <div>
                                <h2>منوی اصلی</h2>
                                <p>دسترسی سریع به تمام بخش‌ها</p>
                            </div>
                          </div>
                            <button>
                                <RxCross2 />
                            </button>
                        </div>
                    
                        <div>
                            <Image src='/images/navbar/pravatar-80-12.jpg' alt='logo' width={44} height={44} />

                            <h2>علی رضایی</h2>
                        </div>
                    
                    <div>
                        <ul>
                            <li>
                                <Link href=''>کیف پول</Link>
                            </li>
                            <li>
                                <Link href=''>مقاله‌ها</Link>
                            </li>
                            <li>
                                <Link href=''>درباره ما</Link>
                            </li>
                            <li>
                                <Link href=''>قوانین</Link>
                            </li>
                            <li>
                                <Link href=''>پشتیبانی</Link>
                            </li>
                            <li>
                                <Link href=''>داشبورد</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}

export default SideBar