import AboutTCrytoBox from '@/components/modules/mainAboutUs/AboutTCrytoBox/AboutTCrytoBox'
import BreadCrumb from '@/components/modules/BreadCrumb/BreadCrumb'
import TitleSec from '@/components/modules/TitleSec/TitleSec'
import { Button } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

function AboutTCryto() {
    return (
        <section className='mt-15 font-lahze'>
            <div className="container">
                {/* breadCrumb */}
                <BreadCrumb />
                {/* section */}
                <div className='relative overflow-hidden rounded-40px border border-indigo-50 shadow-[0_24px_70px_rgba(15,23,42,0.08)]'>
                    <div className='absolute inset-0 bg-linear-to-br from-slate-50 via-white to-blue-50'></div>
                    <div className='absolute -top-24 -left-20 rounded-full bg-blue-600/10 blur-3xl'></div>
                    <div className='absolute -bottom-28 -right-20 size-80 rounded-full bg-sky-200/30 blur-3xl'></div>
                    {/* context */}
                    <div className='relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-6 md:p-10 lg:p-12'>
                        <div className='lg:col-span-7'>
                            <TitleSec />
                            <h1 className='text-3xl md:text-46px font-black leading-[1.8] mb-5'>ساختن تجربه‌ای ساده، امن و سریع برای ورود به دنیای ارزهای دیجیتال</h1>
                            <p className='text-sm md:text-15px text-gray-500 leading-8 font-medium max-w-180 mb-8'>تی ارز با هدف ساده‌سازی خرید، فروش و نگهداری ارزهای دیجیتال ایجاد شده است؛ جایی که کاربران بتوانند با اطمینان، سرعت و پشتیبانی واقعی، دارایی‌های دیجیتال خود را مدیریت کنند.</p>
                            <div className='flex flex-col xs:flex-row gap-3'>

                                <Button size='lg' color='#2563eb' className='shadow-lg text-13px! font-black! shadow-blue-200 '>

                                    داستان ما
                                </Button>
                                <Button variant='white' size='lg' className='text-13px! font-black! shadow-[0_14px_28px_rgba(66,112,250,0.28)] w-full hover:shadow-md transition-all duration-300'>ارزش‌های ما</Button>

                            </div>
                        </div>
                        <div className='lg:col-span-5'>
                            <div className='relative'>
                                <div className='rounded-34px bg-linear-to-br from-blue-500 to-blue-600 p-7 text-white overflow-hidden shadow-[0_24px_60px_rgba(66,112,250,0.25)]'>
                                    <div className='absolute -top-1/6 -left-16 size-44 rounded-full bg-white/10'></div>
                                    <div className='absolute -bottom-20 -right-20 size-56 rounded-full bg-white/10'></div>
                                    <div className='relative'>
                                        <div className='size-16 rounded-3xl bg-white/15 backdrop-blur mb-6 flexCenter'>
                                            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 3l8 4v6c0 5-3.5 8-8 8s-8-3-8-8V7l8-4z"></path>
                                                <path d="M9 12l2 2 4-5"></path>
                                            </svg>
                                        </div>
                                        <h2 className='text-2xl font-black mb-3 leading-10'>اعتماد، امنیت و شفافیت</h2>
                                        <p className='text-13px leading-7 text-white/80 font-medium mb-6'>تمرکز ما روی ایجاد زیرساختی پایدار، امن و قابل اعتماد برای کاربران است؛ از احراز هویت تا نگهداری دارایی و پشتیبانی.</p>
                                        <div className='grid grid-cols-2 gap-3 '>
                                            {/* # */}
                                            <AboutTCrytoBox/>
                                            <AboutTCrytoBox/>
                                        </div>
                                    </div>
                                </div>
                                <div className='absolute -bottom-5 -right-4 hidden md:flex items-center gap-3 rounded-24px bg-white border border-indigo-50 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.08)]'>
                                    <span className='size-11 rounded-2xl bg-emerald-50 flexCenter'>
                                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>
                                    <div>
                                        <p className='text-13px font-black text-gray-900'>همراه کاربران</p>
                                        <p className='text-11px font-bold text-gray-400'>در مسیر اقتصاد دیجیتال</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTCryto