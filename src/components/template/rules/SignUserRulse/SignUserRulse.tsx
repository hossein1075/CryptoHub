import React from 'react'

function SignUserRulse() {
  return (
    <section className='rounded-30px border border-blue-100 bg-white/90 backdrop-blur-xl p-6 md:p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] scroll-mt-28'>
      <div className='flex items-start gap-4 font-lahze'>
        <div className='size-12 rounded-2xl bg-indigo-600 text-white flexCenter shrink-0 font-black'>۲</div>
        <div>
          <h3 className='text-xl font-black text-slate-900'>ثبت‌نام و حساب کاربری</h3>
          <ul className='text-sm space-y-3 text-slate-600 leading-9 font-medium mt-4'>
            <li className='flex gap-3'>
              <span className='mt-3 size-2 rounded-full bg-blue-600 shrink-0'></span>
              کاربر موظف است اطلاعات صحیح، کامل و به‌روز در زمان ثبت‌نام ارائه کند.
            </li>
            <li className='flex gap-3'>
              <span className='mt-3 size-2 rounded-full bg-blue-600 shrink-0'></span>
              مسئولیت حفظ محرمانگی رمز عبور، کدهای امنیتی و دسترسی حساب بر عهده کاربر است.
            </li>
            <li className='flex gap-3'>
              <span className='mt-3 size-2 rounded-full bg-blue-600 shrink-0'></span>
              هرگونه فعالیت انجام‌شده از طریق حساب کاربری، به عنوان فعالیت مالک حساب تلقی می‌شود.
            </li>
            <li className='flex gap-3'>
              <span className='mt-3 size-2 rounded-full bg-blue-600 shrink-0'></span>
              پلتفرم می‌تواند در صورت مشاهده رفتار مشکوک، دسترسی حساب را محدود یا موقتاً مسدود کند.
            </li>
          </ul>

        </div>
      </div>
    </section>
  )
}

export default SignUserRulse