import { Button } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

function AboutTCryto() {
    return (
        <section className='mt-15 font-lahze'>
            <div className="container">
                {/* breadCrumb */}
                <div className='pt-8 pb-4 flex flex-wrap items-center gap-2 text-xs font-bold text-gray-400'>
                    <Link href='#' className='hover:text-blue-600 transition-colors duration-300 ease-linear'>خانه</Link>
                    <span>/</span>
                    <Link href='#' className='text-blue-600'>درباره ما</Link>
                </div>

                {/* section */}
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    {/* context */}
                    <div>
                        <div>
                            {/* # */}
                            <span></span>
                            <h1>ساختن تجربه‌ای ساده، امن و سریع برای ورود به دنیای ارزهای دیجیتال</h1>
                            <p>تی ارز با هدف ساده‌سازی خرید، فروش و نگهداری ارزهای دیجیتال ایجاد شده است؛ جایی که کاربران بتوانند با اطمینان، سرعت و پشتیبانی واقعی، دارایی‌های دیجیتال خود را مدیریت کنند.</p>
                            <div className='flex flex-col xs:flex-row gap-4 justify-center xs:justify-start'>

                                <Button variant='white' size='lg' w={{ base: 'auto', sm: 160 }} className='shadow-sm w-full hover:shadow-md transition-all duration-300 font-bold'>ارزش‌های ما</Button>

                                <Button size='lg' color='#2563eb' className='shadow-lg shadow-blue-200 font-bold'>

                                    داستان ما
                                </Button>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <div></div>
                                    <div></div>
                                    <div>
                                        <div>
                                            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 3l8 4v6c0 5-3.5 8-8 8s-8-3-8-8V7l8-4z"></path>
                                                <path d="M9 12l2 2 4-5"></path>
                                            </svg>
                                        </div>
                                        <h2>اعتماد، امنیت و شفافیت</h2>
                                        <p>تمرکز ما روی ایجاد زیرساختی پایدار، امن و قابل اعتماد برای کاربران است؛ از احراز هویت تا نگهداری دارایی و پشتیبانی.</p>
                                        <div>
                                            {/* # */}
                                            <div>
                                                <p>۲۴/۷</p>
                                                <p>پشتیبانی</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <span>
                                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>
                                    <div>
                                        <p>همراه کاربران</p>
                                        <p>در مسیر اقتصاد دیجیتال</p>
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