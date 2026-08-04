import TitleSec from '@/components/modules/TitleSec/TitleSec'
import Image from 'next/image'
import React from 'react'

function PosterArticle() {
  return (
    <section className='font-lahze mt-5'>
      <div className="container">
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
          <div className='col-span-7'>
            <TitleSec />
            <h1 className='text-28px md:text-42px font-black leading-[1.8] mb-5'>بیت کوین چیست و چرا مهم‌ترین ارز دیجیتال بازار است؟</h1>
            <p className='text-sm md:text-15px text-gray-500 leading-8 font-medium max-w-180 mb-8'>در این مقاله به زبان ساده با مفهوم بیت کوین، ویژگی‌ها، دلایل محبوبیت، کاربردها و تفاوت آن با پول‌های سنتی آشنا می‌شوید.</p>
            <div className='flex flex-wrap items-center gap-5'>
              <div className='flex items-center gap-3'>
                <Image src='/images/article/icon/avatar-1535713875002.jpg' width={41} height={41} alt='Article Profile' />
                <div>
                  <p className='text-13px font-black text-[#111827]'>تیم محتوا</p>
                  <p className='text-[12px] text-[#9CA3AF] font-bold'>نویسنده مقاله</p>
                </div>
              </div>
              <div className='flex flex-wrap items-center gap-3 text-xs font-bold text-gray-400'>
                <span>۲۰ اردیبهشت ۱۴۰۵</span>
                <span className='size-1 rounded-full bg-gray-300'></span>
                <span>۷ دقیقه مطالعه</span>
                <span className='size-1 rounded-full bg-gray-300'></span>
                <span>۲۵۴۳ بازدید</span>
                <span className='size-1 rounded-full bg-gray-300'></span>
              </div>
            </div>
          </div>
          <div className='col-span-5'>
            <div className='relative overflow-hidden rounded-36px border border-indigo-50 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]'>
              <Image src='/images/article/post-1621761191319.jpg' alt='Poster Article' width={513} height={380} className='w-full h-80 md:h-95 object-cover'/>
              <div className='absolute inset-0 bg-linear-to-t from-black/40 via-black/5 to-transparent'></div>
              <div className='absolute bottom-4 right-5 left-5 flex items-center justify-between gap-3'>
                <span className='inline-flex items-center px-4 py-1.5 rounded-2xl bg-white text-blue-600 text-xs font-black mb-5'>مقاله ویژه آموزشی</span>
                <div className='size-14 rounded-full bg-white text-blue-600 mb-5 flexCenter group-hover:bg-blue-600 group-hover:text-white transition duration-300 ease-in-out'>
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PosterArticle