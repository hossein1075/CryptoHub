import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function SideBar() {
    return (
    <>
            <div>
                <div>
                    <div>
                        <div>
                            <Image src='' alt='logo' width={44} height={44} />
                            <div>
                                <h2>BlueTrade</h2>
                                <p>مدیریت مالی، بازار و خدمات دیجیتال</p>
                            </div>
                        </div>
                        <button></button>
                    </div>
                    <div>
                        <div>
                            <Image src='' alt='logo' width={44} height={44} />
                            <h2>علی رضایی</h2>
                        </div>
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