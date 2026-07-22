import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function RelatedArticleBox() {
    return (
        <article className='group overflow-hidden rounded-30px border border-indigo-50 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-indigo-100 hover:shadow-[0_24px_60px_rgba(66,112,250,0.12)]'>
            <Link href='#' className='block relative h-55 overflow-hidden bg-indigo-50'>
                <Image src='/images/article/post-1621504450181.jpg' width={409} height={220} alt='articlePic' className='w-full! h-full! object-cover transition-transform duration-700 group-hover:scale-110'></Image>
                <div className='absolute inset-0 bg-linear-to-t from-black/45 via-black/5 to-transparent'></div>
                <span className='absolute top-4 right-4 inline-flex items-center px-3 py-1.5  rounded-full bg-white/90 backdrop-blur text-blue-700 text-11px font-black'>آموزش ارز دیجیتال</span>
            </Link>
            <div className='p-6'>
                <div className='flex items-center gap-2 mb-4 text-xs text-gray-400 font-bold'>
                    <span>۱۴ اردیبهشت ۱۴۰۵</span>
                    <span className='size-1 rounded-full bg-gray-300'></span>
                    <span>۶ دقیقه مطالعه</span>
                </div>
                <Link href='#'>
                    <h3 className='text-lg font-black text-gray-900 leading-8 mb-3 line-clamp-2 transition-colors duration-300 group-hover:text-blue-700'>تتر چیست و چه کاربردی در بازار ارز دیجیتال دارد؟</h3>
                </Link>
                <p className='leading-7 text-13px text-gray-500 font-medium mb-5 line-clamp-2'>آشنایی با تتر، کاربردها و دلیل محبوبیت آن در بازار معاملات رمزارزی.</p>
                <div className='flex items-center justify-between pt-5 border-t border-t-gray-100'>
                    <div className='flex items-center gap-2'>
                        <Image src='/images/article/icon/avatar-1535713875002.jpg' width={32} height={32} alt='articlePic' className='rounded-full object-cover '></Image>
                        <span className='text-xs font-black text-gray-700'>تیم محتوا</span>
                    </div>
                    <Link href='#' className='inline-flex items-center gap-1 text-xs font-black text-blue-700'>
                        ادامه مطلب
                        <svg className="w-4 h-4 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default RelatedArticleBox