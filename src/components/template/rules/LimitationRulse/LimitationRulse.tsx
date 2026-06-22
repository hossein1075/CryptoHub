import LimitationRulseBox from '@/components/modules/MainRulse/LimitationRulseBox/LimitationRulseBox'
import React from 'react'

function LimitationRulse() {
  return (
    <section className='rounded-30px border border-blue-100 bg-white/90 backdrop-blur-xl p-6 md:p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] scroll-mt-28'>
      <div className='flex items-start gap-4 font-lahze'>
        <div className='size-12 rounded-2xl bg-sky-600 text-white flexCenter shrink-0 font-black'>۸</div>
        <div>
          <h3 className='text-xl font-black text-slate-900'>محدودیت‌ها و تغییرات خدمات</h3>
          <p className='text-sm text-slate-600 leading-9 font-medium mt-4'>پلتفرم می‌تواند در راستای حفظ امنیت، بهبود عملکرد، رعایت الزامات عملیاتی یا کنترل ریسک، بخشی از خدمات را به‌صورت موقت یا دائم تغییر دهد، محدود کند یا از دسترس خارج نماید.</p>
          <div className='p-4 mt-5 bg-slate-50 border border-slate-100 rounded-2xl'>
            <p className='text-sm font-black text-slate-500'>موارد محدودیت احتمالی</p>
            <div className='mt-3 flex flex-wrap gap-3'>
              <LimitationRulseBox/>
              <LimitationRulseBox/>
              <LimitationRulseBox/>
              <LimitationRulseBox/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LimitationRulse