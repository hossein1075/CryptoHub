import RegisterRulseBox from '@/components/modules/MainRulse/RegisterRulseBox/RegisterRulseBox'
import React from 'react'

function RegisterRulse() {
  return (
    <section className='rounded-30px border border-blue-100 bg-white/90 backdrop-blur-xl p-6 md:p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] scroll-mt-28'>
      <div className='flex items-start gap-4 font-lahze'>
        <div className='size-12 rounded-2xl bg-sky-600 text-white flexCenter shrink-0 font-black'>۳</div>
        <div>
          <h3 className='text-xl font-black text-slate-900'>احراز هویت و اطلاعات کاربر</h3>
          <p className='text-sm text-slate-600 leading-9 font-medium mt-4'>استفاده از برخی خدمات مانند برداشت، افزایش سقف تراکنش، سفارش‌های خاص یا دسترسی به امکانات پیشرفته ممکن است نیازمند تکمیل فرآیند احراز هویت باشد.</p>
          <div className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-3'>
            {/* # */}
           <RegisterRulseBox/>
           <RegisterRulseBox/>
           <RegisterRulseBox/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterRulse