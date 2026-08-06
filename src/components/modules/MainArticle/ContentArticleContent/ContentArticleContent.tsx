import Article from '@/app/article/page'
import React from 'react'
import ContentArticleContentBox from '../ContentArticleContentBox/ContentArticleContentBox'

function ContentArticleContent() {
    return (
        <article className='lg:col-span-8 font-lahze'>
            <div className='rounded-32px border border-indigo-50 bg-white p-6 md:p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] mb-6'>
                <div className='flex flex-wrap gap-2 mb-5'>
                    <span className='px-3 py-2 rounded-2xl bg-[#F8FAFF] text-[#6B7280] text-[12px] font-bold'>#بیت‌کوین</span>
                    <span className='px-3 py-2 rounded-2xl bg-[#F8FAFF] text-[#6B7280] text-[12px] font-bold'>#آموزش</span>
                    <span className='px-3 py-2 rounded-2xl bg-[#F8FAFF] text-[#6B7280] text-[12px] font-bold'>#رمزارز</span>
                </div>
                <p className='text-15px leading-8 text-[#4B5563] font-medium'>بیت کوین اولین و شناخته‌شده‌ترین ارز دیجیتال دنیاست که با هدف ایجاد یک سیستم پرداخت غیرمتمرکز معرفی شد. این دارایی دیجیتال بدون نیاز به بانک مرکزی یا نهاد واسطه کار می‌کند و همین موضوع باعث شده توجه کاربران، سرمایه‌گذاران و شرکت‌های بزرگ را به خود جلب کند.</p>
            </div>
            <div className='rounded-32px border border-indigo-50 bg-white p-6 md:p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] mb-6'>
                <h2 className='text-2xl mt-10 font-black mb-4 text-gray-900 leading-9'>بیت کوین چیست؟</h2>
                <p className='text-15px font-medium mb-4 text-gray-600 leading-9'>بیت کوین یک پول دیجیتال غیرمتمرکز است که در سال ۲۰۰۹ معرفی شد. بر خلاف پول‌های سنتی، مدیریت و کنترل آن در اختیار یک بانک یا دولت خاص نیست. تراکنش‌های بیت کوین بر بستر فناوری بلاکچین ثبت می‌شوند و این ثبت به صورت شفاف و غیرقابل تغییر انجام می‌شود.</p>
                <p className='text-15px font-medium mb-4 text-gray-600 leading-9'>بسیاری از کاربران بیت کوین را به عنوان طلای دیجیتال می‌شناسند؛ زیرا عرضه آن محدود است و تنها ۲۱ میلیون واحد از آن وجود خواهد داشت. همین محدود بودن عرضه، یکی از دلایل مهم ارزشمند بودن آن در طول زمان است.</p>
                <div className='border-r-4 rounded-r-2xl border-blue-600 bg-slate-50 text-gray-700 py-5 px-4 my-6 leading-8 font-bold'>بیت کوین فقط یک ارز دیجیتال نیست؛ بلکه یک سیستم مالی جدید است که تلاش می‌کند واسطه‌ها را حذف کرده و مالکیت واقعی دارایی را به کاربران بازگرداند.</div>
                <h2 className='text-2xl mt-10 font-black mb-4 text-gray-900 leading-9'>بیت کوین چگونه کار می‌کند؟</h2>
                <p className='text-15px font-medium mb-4 text-gray-600 leading-9'>عملکرد بیت کوین بر پایه شبکه‌ای از رایانه‌ها در سراسر جهان است. این رایانه‌ها نسخه‌ای از دفترکل تراکنش‌ها را نگهداری می‌کنند. هر زمان که تراکنشی انجام می‌شود، اطلاعات آن در بلاک‌هایی ذخیره شده و سپس به زنجیره بلاک‌ها اضافه می‌گردد.</p>
                <h3 className='text-2xl mt-10 font-black mb-4 text-gray-900 leading-9'>نقش بلاکچین</h3>
                <p className='text-15px font-medium mb-4 text-gray-600 leading-9'>بلاکچین یک دفترکل توزیع‌شده است که تمامی تراکنش‌ها در آن ثبت می‌شود. چون اطلاعات بین تعداد زیادی از نودها توزیع شده، تغییر یا دستکاری آن بسیار دشوار است.</p>
                <h3 className='text-2xl mt-10 font-black mb-4 text-gray-900 leading-9'>نقش ماینرها</h3>
                <p className='text-15px font-medium mb-4 text-gray-600 leading-9'>ماینرها با استفاده از توان پردازشی، تراکنش‌ها را تأیید و امنیت شبکه را حفظ می‌کنند. در ازای این کار، پاداش دریافت می‌کنند. این سازوکار باعث می‌شود شبکه بدون نیاز به یک نهاد مرکزی به فعالیت ادامه دهد.</p>
                <h2 className='text-2xl mt-10 font-black mb-4 text-gray-900 leading-9'>چرا بیت کوین محبوب شد؟</h2>
                <p className='text-15px font-medium mb-4 text-gray-600 leading-9'>محبوبیت بیت کوین فقط به خاطر قیمت آن نیست. ویژگی‌های منحصربه‌فرد این رمزارز باعث شده در سال‌های اخیر به یکی از مهم‌ترین دارایی‌های دیجیتال جهان تبدیل شود.</p>
                <ul className='text-gray-700 pr-5 mt-4 mb-6'>
                    <li className='font-medium text-sm leading-8 mb-3'>غیرمتمرکز بودن و حذف واسطه‌ها</li>
                    <li className='font-medium text-sm leading-8 mb-3'>شفافیت بالا در ثبت تراکنش‌ها</li>
                    <li className='font-medium text-sm leading-8 mb-3'>عرضه محدود و کمیاب بودن</li>
                    <li className='font-medium text-sm leading-8 mb-3'>قابلیت انتقال بین‌المللی سریع‌تر نسبت به برخی روش‌های سنتی</li>
                    <li className='font-medium text-sm leading-8 mb-3'>شناخته‌شده بودن و پذیرش بالا در بازار</li>
                </ul>
                <h2 className='text-2xl mt-10 font-black mb-4 text-gray-900 leading-9'>تفاوت بیت کوین با پول سنتی</h2>
                <p className='text-15px font-medium mb-4 text-gray-600 leading-9'>پول‌های سنتی توسط بانک‌های مرکزی چاپ و مدیریت می‌شوند، اما بیت کوین چنین ساختاری ندارد. همچنین انتقال بیت کوین می‌تواند بدون نیاز به بانک و در سطح جهانی انجام شود. از طرف دیگر، نوسان قیمت بیت کوین بسیار بیشتر از پول‌های رایج است و همین موضوع آن را هم به یک فرصت و هم به یک ریسک تبدیل می‌کند.</p>
                <h2 className='text-2xl mt-10 font-black mb-4 text-gray-900 leading-9'>آیا بیت کوین برای سرمایه‌گذاری مناسب است؟</h2>
                <p className='text-15px font-medium mb-4 text-gray-600 leading-9'>پاسخ این سوال به میزان ریسک‌پذیری، هدف مالی و دانش شما بستگی دارد. بیت کوین در سال‌های گذشته رشد قابل توجهی داشته، اما همزمان نوسانات شدیدی را نیز تجربه کرده است. بنابراین قبل از هر تصمیمی بهتر است آموزش کافی ببینید و مدیریت سرمایه را جدی بگیرید.</p>
                <h2 className='text-2xl mt-10 font-black mb-4 text-gray-900 leading-9'>جمع‌بندی</h2>
                <p className='text-15px font-medium mb-4 text-gray-600 leading-9'>بیت کوین به عنوان اولین ارز دیجیتال دنیا، مسیر جدیدی را در اقتصاد دیجیتال باز کرده است. اگرچه نوسانات آن بالاست، اما به دلیل ویژگی‌هایی مانند غیرمتمرکز بودن، شفافیت، امنیت شبکه و عرضه محدود، همچنان یکی از مهم‌ترین دارایی‌های بازار رمزارزها به شمار می‌رود.</p>
                <p className='text-15px font-medium mb-4 text-gray-600 leading-9'>اگر تازه وارد دنیای ارزهای دیجیتال شده‌اید، آشنایی کامل با بیت کوین می‌تواند نقطه شروع بسیار خوبی برای شما باشد.</p>
            </div>
            <div className='rounded-32px border border-indigo-50 bg-white p-6 mt-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] mb-6'>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-5'>
                    <div>
                        <p className='text-sm font-black text-[#111827] mb-3'>برچسب‌ها</p>
                        <div className='flex flex-wrap gap-2 mb-5'>
                            <span className='px-3 py-2 rounded-2xl bg-[#F8FAFF] text-[#6B7280] hover:text-white hover:bg-blue-700 transition duration-300 ease-in-out text-[12px] font-bold'>#بیت‌کوین</span>
                            <span className='px-3 py-2 rounded-2xl bg-[#F8FAFF] text-[#6B7280] hover:text-white hover:bg-blue-700 transition duration-300 ease-in-out text-[12px] font-bold'>#آموزش</span>
                            <span className='px-3 py-2 rounded-2xl bg-[#F8FAFF] text-[#6B7280] hover:text-white hover:bg-blue-700 transition duration-300 ease-in-out text-[12px] font-bold'>#رمزارز</span>
                        </div>
                    </div>
                    <div>
                        <p className='text-sm font-black text-[#111827] mb-3'>اشتراک‌گذاری</p>
                        <div className='flex items-center gap-2'>
                            <ContentArticleContentBox />
                            <ContentArticleContentBox />
                            <ContentArticleContentBox />
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-6 gap-4'>
                <div className='rounded-32px hover:border border-indigo-50 hover:-translate-y-1 transition duration-300 ease-linear bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.06)]'>
                    <p className='text-[12px] text-[#9CA3AF] font-bold mb-2'>مقاله قبلی</p>
                    <h4 className='text-15px font-black text-[#111827] leading-7'>تتر چیست و چه کاربردی در بازار ارز دیجیتال دارد؟</h4>
                </div>
                <div className='rounded-32px hover:border border-indigo-50 hover:-translate-y-1 transition duration-300 ease-linear bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.06)]'>
                    <p className='text-[12px] text-[#9CA3AF] font-bold mb-2'>مقاله بعدی</p>
                    <h4 className='text-15px font-black text-[#111827] leading-7'>چطور امنیت کیف پول ارز دیجیتال  خود را افزایش دهیم؟</h4>
                </div>
            </div>
        </article>
    )
}

export default ContentArticleContent