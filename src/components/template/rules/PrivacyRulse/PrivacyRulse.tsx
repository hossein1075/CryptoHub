import React from 'react'

function PrivacyRulse() {
  return (
    <section className='rounded-30px border border-blue-100 bg-white/90 backdrop-blur-xl p-6 md:p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] scroll-mt-28'>
      <div className='flex items-start gap-4 font-lahze'>
        <div className='size-12 rounded-2xl bg-indigo-600 text-white flexCenter shrink-0 font-black'>۷</div>
        <div>
          <h3 className='text-xl font-black text-slate-900'>حریم خصوصی و نگهداری اطلاعات</h3>
          <p className='text-sm text-slate-600 leading-9 font-medium mt-4'>پلتفرم متعهد است اطلاعات کاربران را مطابق سیاست‌های امنیتی و محرمانگی نگهداری کند. اطلاعات کاربر صرفاً برای ارائه خدمات، افزایش امنیت، پشتیبانی، احراز هویت، تحلیل ریسک و بهبود تجربه کاربری استفاده می‌شود.</p>
          <ul className='text-sm space-y-3 text-slate-600 leading-9 font-medium mt-4'>
            <li className='flex gap-3'>
              <span className='mt-3 size-2 rounded-full bg-blue-600 shrink-0'></span>
              اطلاعات حساس با کنترل‌های امنیتی مناسب محافظت می‌شود.            </li>
            <li className='flex gap-3'>
              <span className='mt-3 size-2 rounded-full bg-blue-600 shrink-0'></span>
              کاربر می‌تواند درخواست بررسی یا به‌روزرسانی اطلاعات حساب خود را ثبت کند.            </li>
            <li className='flex gap-3'>
              <span className='mt-3 size-2 rounded-full bg-blue-600 shrink-0'></span>
              دسترسی به اطلاعات کاربران محدود و کنترل‌شده است.            </li>

          </ul>

        </div>
      </div>
    </section>
  )
}

export default PrivacyRulse