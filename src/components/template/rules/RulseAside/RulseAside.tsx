import React from 'react'

function RulseAside() {
  return (
    <>
      <div className='font-lahze lg:sticky lg:top-28 rounded-30px  border border-blue-100 text-white/90 backdrop-blur-xl p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)]'>
        <h4 className='font-black text-slate-900 text-base'>فهرست قوانین</h4>
        <p className='font-medium text-xs text-slate-500 leading-6 mt-2'>بخش‌های اصلی مقررات استفاده از خدمات.</p>
        <div className='mt-6 rounded-2xl bg-amber-50 p-4 border border-amber-100'>
          <div className='flex items-center gap-3'>
            <div className='size-9 rounded-xl bg-amber-500 text-white shrink-0 flexCenter'>
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"></path>
                <path d="M12 9v4"></path>
                <path d="M12 17h.01"></path>
              </svg>
            </div>
            <div>
              <p className='font-black text-sm text-amber-700'>نکته مهم</p>
              <p className='font-medium text-xs text-amber-700/80 leading-6 mt-1'>ادامه استفاده از خدمات به منزله پذیرش آخرین نسخه قوانین است.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RulseAside