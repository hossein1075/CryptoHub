import React from 'react'

function CostRulse() {
  return (
    <section className='rounded-30px border border-blue-100 bg-white/90 backdrop-blur-xl p-6 md:p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] scroll-mt-28'>
      <div className='flex items-start gap-4 font-lahze'>
        <div className='size-12 rounded-2xl bg-emerald-600 text-white flexCenter shrink-0 font-black'>۴</div>
        <div>
          <h3 className='text-xl font-black text-slate-900'>تراکنش‌ها، واریز و برداشت</h3>
          <p className='text-sm text-slate-600 leading-9 font-medium mt-4'>کاربر مسئول بررسی دقیق اطلاعات تراکنش، آدرس کیف پول، شبکه انتخابی، مبلغ، کارمزد و سایر جزئیات پیش از ثبت درخواست است. تراکنش‌های ثبت‌شده در شبکه‌های بلاکچینی ممکن است غیرقابل بازگشت باشند.</p>
          <div className='mt-5 rounded-2xl bg-rose-50 p-4 border border-rose-100'>
            <div className='flex items-center gap-3'>
              <div className='size-9 rounded-xl bg-rose-500 text-white shrink-0 flexCenter'>
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"></path>
                  <path d="M12 9v4"></path>
                  <path d="M12 17h.01"></path>
                </svg>
              </div>
              <div>
                <p className='font-black text-sm text-rose-700'>هشدار تراکنش</p>
                <p className='font-medium text-xs text-rose-700/80 leading-7 mt-1'>در صورت وارد کردن آدرس اشتباه، انتخاب شبکه نادرست یا ثبت مبلغ اشتباه، امکان بازیابی دارایی ممکن است وجود نداشته باشد.</p>
              </div>
            </div>
          </div>
          <ul className='text-sm space-y-3 text-slate-600 leading-9 font-medium mt-4'>
            <li className='flex gap-3'>
              <span className='mt-3 size-2 rounded-full bg-emerald-600 shrink-0'></span>
              زمان پردازش تراکنش‌ها بسته به وضعیت شبکه، بررسی امنیتی و سیاست‌های داخلی متفاوت است.            </li>
            <li className='flex gap-3'>
              <span className='mt-3 size-2 rounded-full bg-emerald-600 shrink-0'></span>
              کارمزدها قبل از ثبت نهایی به کاربر نمایش داده می‌شود و ممکن است بر اساس شبکه تغییر کند.            </li>
            <li className='flex gap-3'>
              <span className='mt-3 size-2 rounded-full bg-emerald-600 shrink-0'></span>
              درخواست‌های مشکوک ممکن است برای بررسی بیشتر متوقف شوند.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default CostRulse