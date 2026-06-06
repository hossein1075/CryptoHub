import React from 'react'
import { Button } from "@mantine/core";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
function Calculator() {
    return (
        <>
            <section className='mt-15 mb-80 font-lahze'>
                <div className="container">
                    <h2 className='mb-6 text-lg md:text-xl lg:text-3xl font-extrabold text-slate-700'>ماشین حساب ارز</h2>

                    <ul className='flex justify-start mb-4 bg-white rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] px-2'>
                        <li className='relative px-6 py-4 text-sm font-bold text-gray-400 hover:text-gray-600 transition-all duration-150 ease-linear '>
                            شارژ حساب های بین المللی
                            {/* <span className='absolute bottom-0 left-0 right-0 h-0.75 bg-blue-500 rounded-t-md mx-6'></span> */}
                        </li>
                        <li className='relative px-6 py-4 text-sm font-bold text-gray-400 hover:text-gray-600 transition-all duration-150 ease-linear '>
                            پرداخت های اینترنتی
                            {/* <span className='absolute bottom-0 left-0 right-0 h-0.75 bg-blue-500 rounded-t-md mx-6'></span> */}
                        </li>
                        <li className='relative px-6 py-4 text-sm font-bold text-gray-400 hover:text-gray-600 transition-all duration-150 ease-linear '>
                            گیفت کارت
                            {/* <span className='absolute bottom-0 left-0 right-0 h-0.75 bg-blue-500 rounded-t-md mx-6'></span> */}
                        </li>
                        <li className='relative px-6 py-4 text-sm font-bold text-gray-400 hover:text-gray-600 transition-all duration-150 ease-linear '>
                            افتتاح حساب ها
                            {/* <span className='absolute bottom-0 left-0 right-0 h-0.75 bg-blue-500 rounded-t-md mx-6'></span> */}
                        </li>
                    </ul>

                    {/* 
                        اکتیو شدن لیست ها با این کلاس
                        activeTab === tab.id ? 'text-blue-900' : 'text-gray-400 hover:text-gray-600'
                        +
                        span under li
                        */}

                    <div className='flex items-center gap-6'>
                        <div className='flex flex-col'>
                            <label className='text-xs font-extrabold text-slate-800 mb-3'>انتخاب سرویس</label>
                            <div className='relative w-95 text-slate-700 font-bold bg-cryptoPrice hover:bg-input2 transition-colors ease-out duration-500 rounded-xl px-4 py-3.5'>
                                    <FaChevronDown size={12} className='absolute right-4 inset-y-0 my-auto pointer-events-none transition-all duration-300 ease-in-out text-slate-400' />
                                    {/* rotate-180 */}
                                <select id="" className='appearance-none outline-none w-full '>
                                    <option className='text-slate-700 font-semibold' value="charge">شارژ حساب بی پال</option>
                                    <option value="create">افتتاح حساب بی پال</option>
                                    <option value="verfy">وریفای حساب بی پال</option>
                                    <option value="cash">نقد کردن درآمد ارزی</option>
                                    <option value="payment">پرداخت با پی بال</option>
                                    <option value="paymentMaster">خرید با مستر / ویزا کارت</option>
                                </select>

                            </div>
                        </div>
                        <div className='flex flex-col '>
                            <label className='text-xs font-extrabold text-slate-800 mb-3'>میزان ارز</label>
                           
                                <div className='flex items-center justify-between gap-2 bg-cryptoPrice hover:bg-input2 transition-colors ease-out duration-500 rounded-xl px-4 py-3.5'>
                                    <div className='relative flex w-75'>
                                        <FaChevronDown size={12} className='absolute right-2 inset-y-0 my-auto pointer-events-none transition-all duration-300 ease-in-out text-slate-400' />
                                    {/* rotate-180 */}
                                    <select id="" className='appearance-none outline-none w-full'>
                                        <option className='text-slate-700 font-extrabold' value="dollor">دلار بی پال</option>
                                        <option value="uro">یورو</option>
                                        <option value="pond">پوند</option>
                                        <option value="derham">درهم</option>
                                        <option value="lire">لیر</option>
                                        <option value="dollorCanada">دلار کانادا</option>
                                    </select>
                                    </div>
                                        <input type="text" placeholder='مقدار' className='outline-none w-10 ltr text-slate-700'/>
                                </div>
                           
                        </div>
                        <div>
                            <h4>قیمت نهایی خرید</h4>
                            <div>
                                <span>تومان</span>
                                <span>۱۷۸,۳۹۰</span>
                            </div>
                        </div>
                        <div>
                            <Button>ثبت سفارش</Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Calculator