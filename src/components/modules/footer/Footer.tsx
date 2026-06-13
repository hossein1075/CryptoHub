import { Button } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import SvgBackGroundBox from '../PartsOfFooter/SvgBackGroundBox'
import InfoCrypto from '../PartsOfFooter/InfoCrypto'
import QRBtn from '../PartsOfFooter/QRBtn'
import ListFooter from '../PartsOfFooter/ListFooter'

function Footer() {
    return (
        <>
            <footer className='relative bg-white pt-16 pb-6 overflow-hidden border-t border-gray-200 mt-20 font-lahze'>
                {/* svg background */}
                <div className='absolute inset-0 pointer-events-none flexCenter z-10 opacity-20 overflow-hidden'>
                    <SvgBackGroundBox />
                    <SvgBackGroundBox />
                    <SvgBackGroundBox />
                    <SvgBackGroundBox />
                </div>
                <div className='container'>
                    <div className='z-20 relative'>
                        {/* 1 */}
                        <div className='flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-100 pb-8 mb-10'>
                            <InfoCrypto />
                            <InfoCrypto />
                            <InfoCrypto />
                        </div>
                        {/* 2 */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12'>
                            <div className='lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-right'>
                                <Link href='#' className='flex items-center gap-2 mb-4'>
                                    <div className='size-8 bg-blue-600 rounded-10px flexCenter text-white font-bold text-xl rounded-tr-none'>
                                        <div className='size-3 bg-white rounded-sm'></div>
                                    </div>
                                    <span className='text-2xl font-black text-gray-800'>
                                        کیف<span className='text-gray-600'>پـولِ‌مـن</span>
                                    </span>
                                </Link>
                                <p className='text-13px text-gray-500 leading-relaxed mb-6 text-justify'>تی ارز، به‌عنوان نخستین سامانه نگهداری ارزهای دیجیتال در کشور، با بهره‌گیری از استانداردهای روز جهانی و فناوری‌های نوین امنیتی، بستری امن و مطمئن برای ذخیره، مدیریت و مبادله رمزارزها فراهم کرده است. این سامانه با ارائه خدمات پیشرفته، نیازهای اشخاص حقیقی و حقوقی را در حوزه دادوستد و نگه‌داری رمزارزها برطرف می‌کند و با تکیه بر ساختارهای مدرن و به‌روز، تجربه‌ای سریع، ایمن و کاربرپسند در اختیار آن‌ها قرار می‌دهد.</p>
                                <div className='bg-gray-50 w-full rounded-2xl p-4 border border-gray-100 relative z-20'>
                                    <div className='flex justify-between items-baseline mb-3'>
                                        <span className='text-sm font-bold text-gray-800'>دانلود اپلیکیشن تی ارز</span>
                                        <Link href='#' className='text-blue-600! text-xs flex items-center hover:text-blue-700! transition-colors duration-300 ease-in font-bold! gap-1! text-13px'>
                                            <IoIosArrowBack size={16} />
                                            مشاهده همه
                                        </Link>
                                    </div>
                                    <div className='flex gap-3'>
                                        <div className='size-28 bg-white p-2 rounded-xl shrink-0 border border-gray-200 flexCenter relative'>
                                            <Image src='/images/footer/qrcode-kifpool.png' alt='QR' width={94} height={94} className='size-full rounded-lg' />
                                            <div className='absolute inset-0 flexCenter'>
                                                <div className='size-6 bg-white rounded-md shadow-sm p-1 flexCenter'>
                                                    <div className='size-3 bg-blue-600 rounded-[3px] rounded-tr-none'></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-2 w-full'>
                                            <QRBtn />
                                            <QRBtn />
                                            <QRBtn />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ListFooter/>
                            <ListFooter/>
                            <ListFooter/>
                            <ListFooter/>
                        </div>
                        {/* 3 */}
                        <div>
                            <Link href=''>خرید بیت کوین</Link>
                            <span>•</span>
                        </div>
                        {/* 4 */}
                        <div>
                            <p>تمامی حقوق مادی و معنوی محفوظ است.</p>
                            <div>
                                <Link href='#'>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <rect width="18" height="18" x="3" y="3" rx="4" strokeWidth="2"></rect>
                                        <circle cx="12" cy="12" r="4" strokeWidth="2"></circle>
                                        <path d="M16.5 7.5v.01" strokeWidth="2"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer

//  1
// <div>
//     <div>
//         <svg className="w-5 h-5 text-[#4270FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
//             </path>
//         </svg>
//         <span>شماره مرکز پشتیبانی مشتریان</span>
//     </div>
//     <Link href='#'>۰۲۱-76543221</Link>
// </div>
// <div>
//     <div>
//         <svg className="w-5 h-5 text-[#4270FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
//             </path>
//         </svg>
//         <span>پست الکترونیکی</span>
//     </div>
//     <Link href='#'>info@Tarz.me</Link>
// </div>