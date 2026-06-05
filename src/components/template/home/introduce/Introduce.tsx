import React from 'react'
import { Button } from "@mantine/core";
import { HiBars3 } from 'react-icons/hi2';
function Introduce() {
    return (
        <>
            <div>
                <div className='container'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-16 font-lahze'>
                        <div className='space-y-8 pl-0 lg:pl-10 order-2 lg:order-1'>
                            <h1 className='text-lg md:text-xl lg:text-3xl font-black leading-tight'>تی ارز، پرداخت بی‌حد و مرز</h1>
                            <p className='leading-8.75 text-justify lg:text-right'>
                                در تی ارز، مرزی برای پرداخت‌های بین‌المللی وجود ندارد. تمامی پرداخت‌ها از طریق پی‌پال، ویزا، مسترکارت و وایز به صورت هوشمند و آنی انجام می‌شوند. خدمات متنوعی از جمله خرید از سایت‌های خارجی، پرداخت هزینه تعیین وقت سفارت‌ها، شرکت در آزمون‌های بین‌المللی و بسیاری امکانات دیگر تنها با چند کلیک ساده در دسترس شماست.
                            </p>
                            <div className='flex flex-col xs:flex-row gap-4 justify-center xs:justify-start'>
                            
                                <Button variant='white' size='lg'  w={{ base: 'auto', sm: 160 }} className='shadow-sm w-full hover:shadow-md transition-all duration-300 font-bold'>درباره ما</Button>
                                
                                <Button size='lg' color='#2563eb' className='shadow-lg shadow-blue-200 font-bold'>
                                    <HiBars3 className='ml-2'/>
                                    لیست خدمات
                                </Button>
                            </div>
                        </div>
                        <div className='relative hidden sm:block w-full h-125 flexCenter order-1 lg:order-2'>
                        {/* svg background */}
                        <div className='absolute inset-0 z-0 flexCenter opacity-40'>
                            <svg className="w-full h-full bg-lines" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M150 500 C 130 350, 180 150, 280 0" stroke="#93c5fd" strokeWidth="1.5" stroke-linecap="round"></path>
                            <path d="M220 500 C 200 400, 220 200, 320 0" stroke="#86efac" strokeWidth="1.5" stroke-linecap="round"></path>
                            <path d="M280 500 C 260 300, 290 180, 400 0" stroke="#fcd34d" strokeWidth="1.5" stroke-linecap="round"></path>
                            <path d="M350 500 C 400 400, 420 250, 500 100" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round"></path>
                        </svg>
                        </div>  
                        {/* crypto symble */}
                         <div className='absolute inset-0 z-0'>
                           <span className='absolute top-[15%] left-[10%] text-3xl text-cyan-400 font-bold'>€</span>
                           <span className='absolute top-[35%] left-[25%] text-3xl text-green-500 font-bold'>$</span>
                           <span className='absolute top-[10%] left-[40%] text-3xl text-orange-400 font-bold'>£</span>
                           <span className='absolute bottom-[10%] right-[30%] text-3xl text-gray-800 font-bold'>¥</span>
                        </div>
                        {/* carts group */}
                        <div className='relative w-full h-full max-w-112.5'>
                           <div className='absolute top-[5%] right-[5%] w-65 ltr rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] bg-white p-5 z-10 border-2 border-gray-50'>
                            <h3 className='font-extrabold text-lg mb-4 ml-2'>Payment</h3>
                            <div className='border-2 border-gray-100 rounded-2xl p-3 mb-3 flex items-center gap-3'>
                                <div className='size-10 bg-gray-100 rounded-xl flex justify-center'>
                                    <span className='text-gray-300 font-bold text-xl font-sans italic'>p</span>
                                </div>
                                <div className='space-y-2'>
                                    <div className='w-16 h-2 bg-gray-200 rounded-full'></div>
                                    <div className='w-16 h-1.5 bg-gray-100 rounded-full'></div>
                                </div>
                            </div>
                            <div className='border-2 border-gray-100 rounded-2xl p-3 mb-3 flex items-center gap-3 opacity-60 mt-16'>
                                <div className='size-10 bg-gray-100 rounded-xl flex justify-center'>
                                    <span className='text-gray-300 font-bold text-xl font-sans italic'>p</span>
                                </div>
                                <div className='space-y-2'>
                                    <div className='w-16 h-2 bg-gray-200 rounded-full'></div>
                                    <div className='w-16 h-1.5 bg-gray-100 rounded-full'></div>
                                </div>
                            </div>
                           </div>
                           <div className='absolute left-[-5%] bottom-[15%] ltr w-75 h-40 bg-linear-to-r from-linearsec1 to-linearsec2 rounded-2xl shadow-2xl z-20 p-5 flex flex-col justify-between'>
                            <div className='flex items-start justify-between'>
                                <svg className="w-10 h-8 opacity-80" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="40" height="30" rx="4" fill="#3b82f6" fill-opacity="0.5"></rect>
                                    <path d="M10 0v30m20-30v30M0 10h40M0 20h40" stroke="#60a5fa" stroke-width="1.5" opacity="0.5"></path>
                                </svg>
                                <span className='text-white/80 font-medium text-sm'>VISA Master</span>
                            </div>
                            <div className='relative flex items-end justify-between'>
                                <h2 className='text-white font-bold text-4xl italic tracking-wider'>VISA</h2>
                                <div className='flex -space-x-4 space-x-reverse absolute right-0 bottom-1'>
                                    <div className='size-10 rounded-full bg-red-500/80'></div>
                                    <div className='size-10 rounded-full bg-yellow-500/80 -ml-4'></div>
                                </div>
                            </div>
                           </div>
                           <div className='absolute ltr bg-white/0 backdrop-blur-md top-[41%] left-[15%] w-60 h-18.75 rounded-20px shadow-xl z-30 p2 pl-4 pr-3 flex items-center justify-between'>
                            <div className='bg-white size-12 rounded-xl flexCenter transform -rotate-12 shadow-sm'>
                                <span className='font-extrabold italic text-lg'>۴</span>
                            </div>
                            <div className='flex-1 px-4 space-y-2'>
                                <h4 className='font-bold italic text-lg leading-none'>wise</h4>
                                <div className='flex flex-col space-y-1'>
                                    <div className='w-12 h-1 bg-white/70 rounded-full'></div>
                                    <div className='w-20 h-1 bg-white/50 rounded-full'></div>
                                </div>
                            </div>
                            <div className='w-8 h-4 rounded-full bg-transparent border-2 border-white flexCenter'>
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z">
                                    </path>
                                </svg>
                            </div>
                           </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Introduce