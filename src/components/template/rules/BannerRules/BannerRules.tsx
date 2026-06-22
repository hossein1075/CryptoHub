import BannerRulesBox from '@/components/modules/MainRulse/BannerRulesBox/BannerRulesBox'
import Link from 'next/link'
import React from 'react'

function BannerRules() {
    return (
        <section className='mt-15 font-lahze'>
            <div className="container">
                <div className='relative w-full rounded-34px overflow-hidden shadow-[0_25px_70px_rgba(37,99,235,0.28)] bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 text-white p-6 md:p-9'>
                    <div>
                        <div>
                            <span>
                                آخرین بروزرسانی: 1405/02/20
                            </span>
                            <h2>پیش از استفاده از خدمات، قوانین و مقررات را با دقت مطالعه کنید</h2>
                            <p>استفاده از خدمات این پلتفرم به منزله مطالعه، آگاهی و پذیرش کامل قوانین، شرایط استفاده، سیاست‌های امنیتی، احراز هویت، تراکنش‌ها و مسئولیت‌های کاربر است.</p>
                            <div className='flexCenter flex-col sm:flex-row gap-4'>
                                <Link href='#' className='propertySignHome bg-white text-blue-600 px-8 py-4 font-extrabold text-lg rounded-2xl shadow-[0_10px_25px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_35px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-500 ease-linear'>
                                    همین حالا ثبت‌نام کنید
                                </Link>
                                <Link href='#' className='propertySignHome px-8 py-4 font-extrabold text-white text-lg border border-white/30 bg-transparent rounded-2xl hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition duration-500 ease-linear'>
                                    ورود به حساب
                                </Link>
                            </div>
                        </div>

                        <div>
                            <div>

                                <div>
                                    <div>
                                        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M9 12l2 2 4-4"></path>
                                            <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p>وضعیت سند</p>
                                        <p>نسخه فعال و قابل اجرا</p>
                                    </div>
                                </div>

                                <div>
                                  <BannerRulesBox/>
                                  <BannerRulesBox/>
                                  <BannerRulesBox/>
                                </div>

                                <div>
                                    <div></div>
                                </div>

                                <p>مطالعه کامل قوانین برای ادامه استفاده توصیه می‌شود.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default BannerRules