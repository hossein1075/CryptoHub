import { Button } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

function GuidSupport() {
  return (
    <section className='mt-15 font-lahze'>
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

          <article className='w-full lg:w-3/4 relative bg-white lg:bg-transparent rounded-24px p-6 lg:p-0 shadow-[0_10px_40px_rgba(0,0,0,0.02)] lg:shadow-none'>
            <div className='relative transition-all duration-300 ease-in-out '>
              {/* max-h-162.5 overflow-hidden */}
              <div className='space-y-14 pb-20'>
                <div>
                  <h2 className='text-2xl md:text-3xl font-extrabold mb-6 text-slate-700'>راهنمای جامع بازار ارز دیجیتال؛ از آموزش تا خرید و فروش آنی</h2>
                  <p className='leading-loose text-justify'>
                    با گسترش تکنولوژی بلاک‌چین، <strong className='text-slate-700'>ارز دیجیتال</strong> (Cryptocurrency) از یک مفهوم حاشیه‌ای به قلب تپنده بازارهای مالی جهان تبدیل شده است. صرافی <strong className='text-slate-700'>"تی ارز"</strong> با درک نیاز کاربران ایرانی، بستری مهیا کرده تا نه تنها به معامله بپردازید، بلکه با آگاهی کامل در این مسیر قدم بگذارید.
                  </p>
                </div>

                <div>
                  <h3 className='text-xl md:text-2xl font-bold mb-5 text-slate-700'>ارز دیجیتال چیست و چرا آینده اقتصاد است؟</h3>
                  <p className='leading-loose text-justify'>
                    <strong className='text-slate-700'>ارز دیجیتال</strong> نوعی پول مجازی است که توسط کدهای برنامه‌نویسی و پروتکل‌های غیرمتمرکز محافظت می‌شود. برخلاف ریال یا دلار، هیچ نهاد مرکزی نمی‌تواند رمز ارزها را مسدود یا چاپ بی‌رویه کند. این ویژگی باعث شده تا بسیاری از سرمایه‌گذاران، خرید <strong className='text-slate-700'>ارز دیجیتال</strong> را راهی برای حفظ ارزش پول در برابر تورم بدانند. شما می‌توانید در صرافی تی ارز، به بیش از ۲۰۰۰ ارز دیجیتال دسترسی داشته و نوسانات لحظه‌ای آن‌ها را رصد کنید.
                  </p>
                </div>

                <div>
                  <h3 className='text-xl md:text-2xl font-bold mb-5 text-slate-700'>آشنایی با انواع ارز دیجیتال و کاربرد آن‌ها</h3>
                  <p className='leading-loose text-justify mb-4'>
                     بازار رمز ارزها بسیار گسترده است و هر پروژه با هدف خاصی ایجاد شده است. شناخت این دسته‌ها به شما کمک می‌کند تا<strong className='text-slate-700'>سبد سرمایه‌گذاری </strong>(پورتفوی) متنوعی از <strong className='text-slate-700'>ارزهای دیجیتال</strong> در مارکت داشته باشید:
                  </p>
                  <ul className='space-y-4 leading-loose pr-4'>
                    <li className='relative beforeGuidSupport size-1.5 bg-blue-600 rounded-full -top-3.5'></li>
                  </ul>
                </div>

                <div>
                  <h3 className='text-xl md:text-2xl font-bold mb-5 text-slate-700'>راهنمای قدم به قدم خرید ارز دیجیتال</h3>
                  <p className='leading-loose text-justify'>روند ثبت نام و احراز هویت در صرافی بسیار ساده طراحی شده است. شما تنها با یک شماره موبایل می‌توانید ثبت نام کرده و پس از تکمیل فرم‌های احراز هویت، در کمتر از ۵ دقیقه حساب کاربری خود را برای شروع معاملات فعال کنید. امنیت در این مراحل تضمین شده است.</p>
                </div>

                <div>
                  <h3 className='text-xl md:text-2xl font-bold mb-5 text-slate-700'>پیش از خرید به چه نکاتی توجه کنیم؟</h3>
                  <p className='leading-loose text-justify'>تحلیل بازار، مدیریت سرمایه و عدم اختصاص تمامی دارایی به یک ارز خاص از مهمترین نکات است. احساسات را از معاملات خود دور کنید و همیشه با استراتژی پیش بروید. بازار ارزهای دیجیتال نوسانات شدیدی دارد و آگاهی مهمترین سلاح شماست.</p>
                </div>

                <div>
                  <h3 className='text-xl md:text-2xl font-bold mb-5 text-slate-700'>بهترین کیف پول ارز دیجیتال برای ایرانیان</h3>
                  <p className='leading-loose text-justify'>کیف پول‌های سخت افزاری مانند لجر و ترزور امن ترین گزینه ها هستند، اما کیف پول اختصاصی پلتفرم ما با سیستم ذخیره سازی سرد (Cold Storage) امنیت دارایی‌های شما را به صورت رایگان تضمین می‌کند و نیازی به نگرانی بابت تحریم‌ها نخواهید داشت.</p>
                </div>

              </div>

              {/* <div className='absolute bottom-0 inset-x-0 h-48 bg-linear-to-t from-slate-100 lg:from-slate-100 bg-white/90 lg:bg-transparent flex items-end justify-center pb-2'>
                <Button variant="white" size="sm" className="text-sm! shadow-sm rounded-full! font-medium! text-gray-600! border-2 border-gray-200! transition-all duration-300 ease-in-out hover:bg-slate-200! hover:text-blue-600!">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                  مشاهده بیشتر
                </Button>
              </div> */}
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}

export default GuidSupport