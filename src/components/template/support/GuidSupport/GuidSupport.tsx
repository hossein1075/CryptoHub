import Link from 'next/link'
import React from 'react'

function GuidSupport() {
  return (
    <section className='mt-5 font-lahze'>
      <div className="container">
        <div className='flex flex-col md:flex-row gap-8 items-start'>
          <aside className='w-full lg:w-1/4 sticky top-8 bg-white rounded-24px p-6 lg:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.02)] shrink-0 z-10'>
           
            <div className='flex items-center justify-between border-b border-slate-200 pb-4 mb-6'>
              <span className='text-slate-700 font-extrabold text-lg'>آنچه خواهید خواند</span>
              <div className='size-8 rounded-lg border border-slate-200 flexCenter text-slate-400'>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 7 4 4 20 4 20 7"></polyline>
                  <line x1="9" y1="20" x2="15" y2="20"></line>
                  <line x1="12" y1="4" x2="12" y2="20"></line>
                </svg>
              </div>
            </div>

            <div className='relative max-h-[60vh] overflow-y-auto custom-scrollbar pl-2'>
              <div className='absolute right-1.25 top-2 bottom-2 w-0.5 bg-slate-200 rounded-full z-0'></div>
              <ul className='relative space-y-6 z-10'>
                <li className='flex items-start gap-4'>
                  <div className='relative w-3 h-3 mt-1.5 rounded-full cursor-pointer shrink-0 transition-all duration-300 ease-linear shadow-[0_0_0_4px_rgba(47,104,214,0.15)] bg-blue-600 scale-110'></div>
                  <Link href='#' className='text-sm leading-relaxed transition-all duration-300 ease-linear block w-full text-blue-600'>راهنمای جامع بازار ارز دیجیتال؛ از آموزش تا خرید و فروش آنی</Link>
                </li>
                <li className='flex items-start gap-4'>
                  <div className='relative w-3 h-3 mt-1.5 rounded-full cursor-pointer shrink-0 transition-all duration-300 ease-linear bg-slate-300 scale-110'></div>
                  <Link href='#' className='text-sm leading-relaxed transition-all duration-300 ease-linear block w-full text-slate-300'>ارز دیجیتال چیست و چرا آینده اقتصاد است؟</Link>
                </li>
                <li className='flex items-start gap-4'>
                  <div className='relative w-3 h-3 mt-1.5 rounded-full cursor-pointer shrink-0 transition-all duration-300 ease-linear bg-slate-300 scale-110'></div>
                  <Link href='#' className='text-sm leading-relaxed transition-all duration-300 ease-linear block w-full text-slate-300'>آشنایی با انواع ارز دیجیتال و کاربرد آن‌ها</Link>
                </li>
                <li className='flex items-start gap-4'>
                  <div className='relative w-3 h-3 mt-1.5 rounded-full cursor-pointer shrink-0 transition-all duration-300 ease-linear bg-slate-300 scale-110'></div>
                  <Link href='#' className='text-sm leading-relaxed transition-all duration-300 ease-linear block w-full text-slate-300'>راهنمای قدم به قدم خرید ارز دیجیتال در صرافی "تی ارز"</Link>
                </li>
                <li className='flex items-start gap-4'>
                  <div className='relative w-3 h-3 mt-1.5 rounded-full cursor-pointer shrink-0 transition-all duration-300 ease-linear bg-slate-300 scale-110'></div>
                  <Link href='#' className='text-sm leading-relaxed transition-all duration-300 ease-linear block w-full text-slate-300'>پیش از خرید ارز دیجیتال به چه نکاتی توجه کنید؟</Link>
                </li>
                <li className='flex items-start gap-4'>
                  <div className='relative w-3 h-3 mt-1.5 rounded-full cursor-pointer shrink-0 transition-all duration-300 ease-linear bg-slate-300 scale-110'></div>
                  <Link href='#' className='text-sm leading-relaxed transition-all duration-300 ease-linear block w-full text-slate-300'>بهترین کیف پول ارز دیجیتال برای ایرانیان کدام است؟</Link>
                </li>
              </ul>
            </div>

          </aside>
          <article></article>
        </div>
      </div>
    </section>
  )
}

export default GuidSupport