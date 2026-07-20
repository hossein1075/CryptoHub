import QuickInfoBox from '@/components/modules/MainUser/QuickInfoBox/QuickInfoBox'
import React from 'react'

function UserInfo() {
  return (
    <section className='mt-5 font-lahze'>
      <div className="container">
        <div className='relative w-full text-white rounded-32px overflow-hidden shadow-[0_20px_50px_rgba(37,99,235,0.2)] bg-linear-to-br from-blue-500 via-indigo-600 to-violet-700 p-6 md:p-8'>
          <div className='absolute inset-0 opacity-10 bg-[radial-gradient(white_2px,transparent_2px)] bg-size-[30px_30px]'></div>
          <div className='flex-1 flex flex-col justify-between'>
            <div>
              <div className='flex flex-wrap items-center gap-3 mb-5'>
                <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 hover:bg-white/15 transition-all duration-200 ease-in text-white text-sm font-medium mb-6 backdrop-blur-sm'>
                  <span className='relative size-3.5 flexCenter'>
                    <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                    <span className='relative inline-flex size-3 rounded-full bg-green-500'></span>
                  </span>
                  خوش آمدید 👋
                </div>
                <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-400/15 border border-emerald-200/20 text-emerald-100 text-xs font-black mb-6 backdrop-blur-sm'>
                  حساب شما فعال است
                </div>
              </div>
              <h2 className='text-2xl md:text-4xl font-black leading-[1.8]'>عزیز، به داشبورد خود خوش آمدید</h2>
              <p className='mt-3 text-sm md:text-base text-white/85 leading-8 font-medium max-w-3xl'>در این بخش می‌توانید وضعیت موجودی، دارایی‌ها، سفارش‌های اخیر، تراکنش‌ها، اعلان‌ها و امنیت حساب خود را به‌صورت سریع و یکپارچه مدیریت کنید.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 mt-7 max-w-3xl'>
              <QuickInfoBox />
              <QuickInfoBox />
              <QuickInfoBox />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserInfo