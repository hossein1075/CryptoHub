import TitleSec from '@/components/modules/TitleSec/TitleSec'
import React from 'react'

function FormSupport() {
    return (
        <section className='mt-5 font-lahze'>
            <div className="container">
                <div className='grid lg:grid-cols-12 gap-12 items-start'>
                    {/* from */}
                    <div className='lg:col-span-8'>
                        <div className='rounded-36px border border-indigo-50 bg-white p-6 md:p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)]'>
                            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8'>
                                <div>
                                    <TitleSec />
                                    <h2 className='text-26px md:text-32px font-black text-gray-900 leading-[1.7]'>پیام خود را برای ما ارسال کنید</h2>
                                    <p className='text-13px text-gray-400 mt-2 font-bold'>لطفاً اطلاعات را دقیق وارد کنید تا سریع‌تر راهنمایی شوید.</p>
                                </div>
                                <div className='size-14 rounded-3xl flexCenter shrink-0 text-blue-600 bg-blue-600/10'>
                                    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 2L11 13"></path>
                                        <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
                                    </svg>
                                </div>
                            </div>
                            <form className='space-y-5'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                                    <div>
                                        <label className='block font-black text-13px text-gray-700 mb-2'>نام و نام خانوادگی</label>
                                        <input type="text" placeholder='مثلاً علی رضایی' className='w-full h-13 rounded-2xl border border-indigo-50 bg-slate-50 px-4 text-13px! font-medium text-gray-900 outline-none focus:border-blue-600 focus:bg-white transition duration-300 ease-in-out'/>
                                    </div>
                                    <div>
                                        <label className='block font-black text-13px text-gray-700 mb-2'>شماره موبایل</label>
                                        <input type="text" placeholder='مثلاً 09123456789' className='w-full h-13 rounded-2xl border border-indigo-50 bg-slate-50 px-4 text-13px! font-medium text-gray-900 outline-none focus:border-blue-600 focus:bg-white transition duration-300 ease-in-out'/>
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                                    <div>
                                        <label className='block font-black text-13px text-gray-700 mb-2'>ایمیل</label>
                                        <input type="text" placeholder='example@email.com' className='w-full h-13 rounded-2xl border border-indigo-50 bg-slate-50 px-4 text-13px! font-medium text-gray-900 outline-none focus:border-blue-600 focus:bg-white transition duration-300 ease-in-out'/>
                                    </div>
                                    <div>
                                        <label className='block font-black text-13px text-gray-700 mb-2'>موضوع پیام</label>
                                        <select className='w-full h-13 rounded-2xl border border-indigo-50 bg-slate-50 px-4 text-13px! font-medium text-gray-900 outline-none focus:border-blue-600 focus:bg-white transition duration-300 ease-in-out'>
                                            <option value="subject">انتخاب موضوع</option>
                                            <option value="support">پشتیبانی حساب کاربری</option>
                                            <option value="trade">خرید و فروش ارز دیجیتال</option>
                                            <option value="kyc">احراز هویت</option>
                                            <option value="despite">واریز و برداشت</option>
                                            <option value="other">سایر موارد</option>
                                        </select>
                                    </div>
                                </div>
                                 <div>
                                    <div>
                                        <label className='block font-black text-13px text-gray-700 mb-2'>متن پیام</label>
                                        <textarea rows={7} placeholder='پیام خود را اینجا بنویسید...' className='w-full rounded-2xl border border-indigo-50 bg-slate-50 p-4 text-13px! font-medium text-gray-900 outline-none leading-8 focus:border-blue-600 focus:bg-white transition duration-300 ease-in-out'/>
                                    </div>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* aside */}
                    <div></div>
                </div>
            </div>
        </section>
    )
}

export default FormSupport