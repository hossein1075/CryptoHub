import { Button } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

function SignHome() {
  return (
    <section className='mt-15 font-lahze'>
      <div className="container">
        <div>
          {/* background */}
          <div></div>
          {/* text */}
          <div>
            <div>
              <span>
                <span></span>
                <span></span>
              </span>
              آماده یک تغییر بزرگ هستید؟
            </div>
            <h2>
              به دنیای خدمات ارزی
              <span>
                بدون مرز
              </span> بپیوندید
            </h2>
            <p>
              با عضویت در پلتفرم ما، در کمتر از ۵ دقیقه احراز هویت کنید و به تمامی خدمات پرداخت بین‌المللی با بهترین نرخ بازار دسترسی داشته باشید.
            </p>
            <div>
              <Button>
                <Link href=''>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z">
                    </path>
                  </svg>
                  همین حالا ثبت‌نام کنید
                </Link>
              </Button>
              <Button>
                <Link href=''>
                  ورود به حساب
                </Link>
              </Button>
            </div>
            <div className=''>
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