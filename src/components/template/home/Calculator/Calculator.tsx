import React from 'react'
import { Button, Select } from "@mantine/core";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
function Calculator() {
    return (
        <>
            <section className='mt-15 font-lahze'>
                <div className="container">
                    <h2 className='mb-6 text-lg md:text-xl lg:text-3xl font-extrabold text-slate-700'>ماشین حساب ارز</h2>

                    <ul className='flex justify-center sm:justify-start max-w-175 flex-wrap mb-4 bg-white rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] px-2'>
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

                    <div className='flex items-center flex-col lg:flex-row justify-center lg:justify-start gap-6'>
                        <div className="flex flex-col w-full lg:w-auto">
                            <label className="text-xs font-extrabold text-slate-800 mb-3">
                                انتخاب سرویس
                            </label>

                            <div className="relative w-full lg:max-w-full text-slate-700 font-bold bg-cryptoPrice hover:bg-input2 transition-colors ease-out duration-500 rounded-xl px-4 py-3.5">

                                <Select
                                    data={[
                                        { value: "charge", label: "شارژ حساب بی پال" },
                                        { value: "create", label: "افتتاح حساب بی پال" },
                                        { value: "verify", label: "وریفای حساب بی پال" },
                                        { value: "cash", label: "نقد کردن درآمد ارزی" },
                                        { value: "payment", label: "پرداخت با پی بال" },
                                        { value: "card", label: "خرید با مستر / ویزا کارت" },
                                    ]}
                                    defaultValue="charge"
                                    classNames={{
                                        input:
                                            "bg-transparent border-none outline-none font-bold text-slate-700 w-full",
                                        dropdown:
                                            "rounded-xl shadow-lg border border-gray-100 mt-3",
                                        option:
                                            "",
                                    }}
                                    rightSection={<FaChevronDown size={12} />}
                                />

                            </div>
                        </div>
                        <div className="flex flex-col w-full lg:w-auto">
                            <label className="text-xs font-extrabold text-slate-800 mb-3">
                                میزان ارز
                            </label>

                            <div className="flex items-center justify-between gap-2 bg-cryptoPrice hover:bg-input2 transition-colors ease-out duration-500 rounded-xl px-4 py-3.5">

                                <div className="relative flex w-full lg:max-w-full text-slate-700 font-bold">

                                    <Select
                                        data={[
                                            { value: "usd", label: "دلار بی پال" },
                                            { value: "eur", label: "یورو" },
                                            { value: "gbp", label: "پوند" },
                                            { value: "aed", label: "درهم" },
                                            { value: "try", label: "لیر" },
                                            { value: "cad", label: "دلار کانادا" },
                                        ]}
                                        defaultValue="usd"
                                        classNames={{
                                            input:
                                                "bg-cryptoPrice  border-none outline-none font-bold text-slate-700 w-full",
                                            dropdown:
                                                "rounded-xl shadow-lg mt-3",
                                            option:
                                                "",
                                        }}
                                        rightSection={<FaChevronDown size={12} />}
                                    />

                                </div>

                                <input
                                    type="text"
                                    placeholder="مقدار"
                                    className="outline-none w-10 ltr text-slate-700 bg-transparent"
                                />
                            </div>
                        </div>
                        <div className='flex flex-col w-full items-center text-center lg:items-end lg:text-right justify-center pt-2 lg:w-[15%]'>
                            <h4 className='text-xs font-bold text-slate-500 mb-1'>قیمت نهایی خرید</h4>
                            <div className='flex items-baseline gap-1 text-slate-700'>
                                <span className='text-10px font-bold'>تومان</span>
                                <span className='text-lg font-extrabold'>۱۷۸,۳۹۰</span>
                            </div>
                        </div>
                        <div className='pt-2 flex justify-center items-center lg:justify-end lg:items-end  w-full lg:w-[15%]'>
                            <Button size='lg' fullWidth color='#2fd66e' className='shadow-[0_8px_15px_-5px_rgba(47,214,110,0.4)] rounded-xl transition-all duration-300 font-extrabold text-sm'>ثبت سفارش</Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Calculator