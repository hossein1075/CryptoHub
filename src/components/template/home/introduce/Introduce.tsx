import React from 'react'
import { Button } from "@mantine/core";
import { HiBars3 } from 'react-icons/hi2';
function Introduce() {
    return (
        <>
            <div>
                <div className='container'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-16 font-lahze'>
                        <div className='space-y-8 pl-0 lg:pl-10 '>
                            <h1 className='text-lg md:text-xl lg:text-3xl font-black leading-tight'>تی ارز، پرداخت بی‌حد و مرز</h1>
                            <p className='leading-[35px] text-justify lg:text-right'>
                                در تی ارز، مرزی برای پرداخت‌های بین‌المللی وجود ندارد. تمامی پرداخت‌ها از طریق پی‌پال، ویزا، مسترکارت و وایز به صورت هوشمند و آنی انجام می‌شوند. خدمات متنوعی از جمله خرید از سایت‌های خارجی، پرداخت هزینه تعیین وقت سفارت‌ها، شرکت در آزمون‌های بین‌المللی و بسیاری امکانات دیگر تنها با چند کلیک ساده در دسترس شماست.
                            </p>
                            <div className='flex flex-row gap-4 justify-end lg:justify-start'>
                            
                                <Button variant='white' size='lg' style={{width: '160px'}} className='shadow-sm w-full hover:shadow-md transition-all duration-300 font-bold'>درباره ما</Button>
                                
                                <Button size='lg' color='#2563eb' className='shadow-lg shadow-blue-200 font-bold'>
                                    <HiBars3 className='ml-2'/>
                                    لیست خدمات
                                </Button>
                            </div>
                        </div>
                        <div className='relative w-full h-125 flexCenter'>
                        {/* svg background */}
                        <div className='absolute inset-0 z-0 flexCenter opacity-40'>
                            <svg className="w-full h-full bg-lines" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M150 500 C 130 350, 180 150, 280 0" stroke="#93c5fd" stroke-width="1.5" stroke-linecap="round"></path>
                            <path d="M220 500 C 200 400, 220 200, 320 0" stroke="#86efac" stroke-width="1.5" stroke-linecap="round"></path>
                            <path d="M280 500 C 260 300, 290 180, 400 0" stroke="#fcd34d" stroke-width="1.5" stroke-linecap="round"></path>
                            <path d="M350 500 C 400 400, 420 250, 500 100" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round"></path>
                        </svg>
                        </div>  
                        </div>
                        {/* crypto symble */}
                         {/* <div>
                           <span>€</span>
                           <span>$</span>
                           <span>£</span>
                           <span>¥</span>
                        </div> */}
                        {/* carts group */}
                        {/* <div>
                           <div>
                            <h3>Payment</h3>
                            <div>
                                <div>
                                    <span>p</span>
                                </div>
                                <div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span>p</span>
                                </div>
                                <div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                           </div>
                           <div>
                            <div>
                                <svg className="w-10 h-8 opacity-80" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="40" height="30" rx="4" fill="#3b82f6" fill-opacity="0.5"></rect>
                                    <path d="M10 0v30m20-30v30M0 10h40M0 20h40" stroke="#60a5fa" stroke-width="1.5" opacity="0.5"></path>
                                </svg>
                                <span>VISA Master</span>
                            </div>
                            <div>
                                <h2>VISA</h2>
                                <div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                           </div>
                           <div>
                            <div>
                                <span>4</span>
                            </div>
                            <div>
                                <h4>wise</h4>
                                <div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div>
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z">
                                    </path>
                                </svg>
                            </div>
                           </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Introduce