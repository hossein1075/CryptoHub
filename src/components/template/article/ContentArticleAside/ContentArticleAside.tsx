import Link from 'next/link'
import React from 'react'

function ContentArticleAside() {
  return (
    <aside className='lg:col-span-4 space-y-6'>
      <section className='font-lahze mt-15'>
        <div className="container">
          <div className='lg:sticky lg:top-24 rounded-32px border border-indigo-50 bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.06)]'>
            <div className='flex items-center justify-between mb-5'>
              <h3 className='text-[18px] font-black text-[#111827]'>فهرست مطالب</h3>
              <span className='w-10 h-10 rounded-2xl bg-blue-600/10 text-blue-600 flex items-center justify-center'>
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 6h13"></path>
                  <path d="M8 12h13"></path>
                  <path d="M8 18h13"></path>
                  <path d="M3 6h.01"></path>
                  <path d="M3 12h.01"></path>
                  <path d="M3 18h.01"></path>
                </svg>
              </span>
            </div>
            <div className='space-y-2'>
              <Link href='#' className='block px-4 py-3 rounded-2xl bg-slate-50 text-gray-500 text-13px font-bold hover:bg-blue-600 hover:text-white transition'>
                بیت
                کوین چیست؟
              </Link>
              <Link href='#' className='block px-4 py-3 rounded-2xl bg-slate-50 text-gray-500 text-13px font-bold hover:bg-blue-600 hover:text-white transition'>
                بیت
                کوین چگونه کار می‌کند؟
              </Link>
              <Link href='#' className='block px-4 py-3 rounded-2xl bg-slate-50 text-gray-500 text-13px font-bold hover:bg-blue-600 hover:text-white transition'>
                چرا
                بیت کوین محبوب شد؟
              </Link>
              <Link href='#' className='block px-4 py-3 rounded-2xl bg-slate-50 text-gray-500 text-13px font-bold hover:bg-blue-600 hover:text-white transition'>
                تفاوت
                بیت کوین با پول سنتی
              </Link>
              <Link href='#' className='block px-4 py-3 rounded-2xl bg-slate-50 text-gray-500 text-13px font-bold hover:bg-blue-600 hover:text-white transition'>
                آیا
                بیت کوین برای سرمایه‌گذاری مناسب است؟
              </Link>
              <Link href='#' className='block px-4 py-3 rounded-2xl bg-slate-50 text-gray-500 text-13px font-bold hover:bg-blue-600 hover:text-white transition'>
                جمع‌بندی
              </Link>
            </div>
          </div>
        </div>
      </section>
    </aside>
  )
}

export default ContentArticleAside