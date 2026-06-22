import React from 'react'

function TransactionRulse() {
  return (
    <section className='rounded-30px border border-blue-100 bg-white/90 backdrop-blur-xl p-6 md:p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] scroll-mt-28'>
       <div className='flex items-start gap-4 font-lahze'>
        <div className='size-12 rounded-2xl bg-sky-600 text-white flexCenter shrink-0 font-black'>۶</div>
        <div>
          <h3 className='text-xl font-black text-slate-900'>کارمزدها و هزینه‌ها</h3>
          <p className='text-sm text-slate-600 leading-9 font-medium mt-4'>کارمزد خدمات، معاملات، واریز، برداشت یا انتقال ممکن است بر اساس نوع دارایی، شبکه، سطح کاربری، شرایط بازار و سیاست‌های داخلی پلتفرم متفاوت باشد. مبلغ کارمزد در زمان ثبت درخواست به کاربر نمایش داده می‌شود.</p>
      <div className='mt-5 overflow-hidden rounded-2xl border border-blue-100'>
            <table className='w-full text-sm font-lahze'>
            <thead className='bg-blue-50 text-slate-700'>
              <tr>
                <th className='tableHead'>نوع عملیات</th>
                <th className='tableHead'>وضعیت کارمزد</th>
                <th className='tableHead'>توضیحات</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-blue-50 bg-white'>
              <tr>
                <th className='tableBodyTitle'>واریز</th>
                <th className='tableBody'>وابسته به شبکه</th>
                <th className='tableBody'>ممکن است برای برخی شبکه‌ها رایگان باشد.</th>
              </tr>
              <tr>
                <th className='tableBodyTitle'>برداشت</th>
                <th className='tableBody'>متغیر</th>
                <th className='tableBody'>بر اساس کارمزد شبکه محاسبه می‌شود.</th>
              </tr>
              <tr>
                <th className='tableBodyTitle'>معامله</th>
                <th className='tableBody'>بر اساس سطح کاربری</th>
                <th className='tableBody'>ممکن است با افزایش سطح کاهش یابد.</th>
              </tr>
            </tbody>
          </table>
      </div>
        </div>
      </div>
    </section>
  )
}

export default TransactionRulse