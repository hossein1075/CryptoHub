import { Button } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

function SignHome() {
  return (
    <section className='mt-15 font-lahze'>
      <div className="container">
        <div className='relative w-full rounded-32px overflow-hidden shadow-[0_20px_50px_rgba(37,99,235,0.2)] bg-[linear-gradient(-45deg,var(--color-blue-900),var(--color-blue-600),var(--color-indigo-600),var(--color-sky-600))] p-10 md:p-16 lg:p-20 flexCenter flex-col text-center'>
          {/* background */}
          <div className='absolute inset-0 opacity-10 bg-[radial-gradient(white_2px,transparent_2px)] bg-size-[30px_30px]'></div>
          {/* text */}
          <div className='relative max-w-2xl z-10 mx-auto'>
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm'>
              <span className='relative size-3.5 flexCenter'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                <span className='relative inline-flex size-3 rounded-full bg-green-500'></span>
              </span>
              آماده یک تغییر بزرگ هستید؟
            </div>
            <h2 className='text-lg md:text-xl lg:text-3xl font-black text-white leading-tight mb-6'>
              به دنیای خدمات ارزی
              <span className='text-transparent inline-block bg-clip-text bg-linear-to-l from-cyan-300 to-blue-100'>
                بدون مرز
              </span>
              بپیوندید
            </h2>
            <p className='text-blue-100/90 text-lg md:text-xl font-light leading-relaxed mb-10'>
              با عضویت در پلتفرم ما، در کمتر از ۵ دقیقه احراز هویت کنید و به تمامی خدمات پرداخت بین‌المللی با بهترین نرخ بازار دسترسی داشته باشید.
            </p>
            <div className='flexCenter flex-col sm:flex-row gap-4'>
              <Link href='' className='propertySignHome bg-white text-blue-600 px-8 py-4 font-extrabold text-lg rounded-2xl shadow-[0_10px_25px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_35px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-500 ease-linear'>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z">
                    </path>
                  </svg>
                  همین حالا ثبت‌نام کنید
              </Link>
              <Link href='' className='propertySignHome px-8 py-4 font-extrabold text-white text-lg border border-white/30 bg-transparent rounded-2xl hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition duration-500 ease-linear'>
                  ورود به حساب
              </Link>
            </div>
            <div className='mt-8 flexCenter flex-wrap gap-6 text-sm text-blue-200'>
              <div className='propertySignHome'>
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                ثبت‌نام رایگان
              </div>
              <div className='propertySignHome'>
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                پشتیبانی ۲۴ ساعته
              </div>
              <div className='propertySignHome'>
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                تایید آنی حساب
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignHome