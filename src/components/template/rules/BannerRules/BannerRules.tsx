import BannerRulesBox from '@/components/modules/MainRulse/BannerRulesBox/BannerRulesBox'
import Link from 'next/link'
import React from 'react'

function BannerRules() {
    return (
        <section className='mt-15 font-lahze'>
            <div className="container">
                <div className='relative w-full rounded-34px overflow-hidden shadow-[0_25px_70px_rgba(37,99,235,0.28)] bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 text-white p-6 md:p-9'>
                    <div className='relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
                        <div className='lg:col-span-8'>
                            <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50/10 text-xs border border-white/15 mb-5 font-black'>
                                آخرین بروزرسانی: 1405/02/20
                            </span>
                            <h2 className='text-2xl md:text-4xl font-black leading-[1.8]'>پیش از استفاده از خدمات، قوانین و مقررات را با دقت مطالعه کنید</h2>
                            <p className='mt-3 text-sm md:text-base text-white/85 leading-8 font-medium max-w-3xl'>استفاده از خدمات این پلتفرم به منزله مطالعه، آگاهی و پذیرش کامل قوانین، شرایط استفاده، سیاست‌های امنیتی، احراز هویت، تراکنش‌ها و مسئولیت‌های کاربر است.</p>
                            <div className='flex flex-col sm:flex-row gap-3 mt-7'>
                                <Link href='#' className='propertySignHome text-sm bg-white text-blue-700 font-black px-6 h-12  rounded-2xl shadow-[0_10px_25px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_35px_rgba(255,255,255,0.4)] hover:scale-105 hover:bg-blue-50 transition-all duration-500 ease-linear'>
                                    مطالعه قوانین
                                </Link>
                                <Link href='#' className='propertySignHome text-sm px-6 h-12 bg-white/10  text-white font-black border border-white/30 rounded-2xl hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition duration-500 ease-linear'>
                                    سوالات متداول
                                </Link>
                            </div>
                        </div>

                        <div className='lg:col-span-4'>
                            <div className='rounded-28px bg-white/12 border border-white/15 backdrop-blur-xl p-5'>

                                <div className='flex items-center gap-3'>
                                    <div className='size-12 bg-white rounded-2xl flexCenter text-blue-600'>
                                        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M9 12l2 2 4-4"></path>
                                            <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className='text-sm font-black'>وضعیت سند</p>
                                        <p className='text-xs mt-1 text-white/75'>نسخه فعال و قابل اجرا</p>
                                    </div>
                                </div>

                                <div className='mt-5 space-y-3'>
                                    <BannerRulesBox />
                                    <BannerRulesBox />
                                    <BannerRulesBox />
                                </div>

                                <div className='mt-5 h-2 overflow-hidden rounded-full bg-white/15'>
                                    <div className='h-full w-[86%] bg-white rounded-full'></div>
                                </div>

                                <p className='mt-2 font-medium text-xs text-white/70'>مطالعه کامل قوانین برای ادامه استفاده توصیه می‌شود.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default BannerRules