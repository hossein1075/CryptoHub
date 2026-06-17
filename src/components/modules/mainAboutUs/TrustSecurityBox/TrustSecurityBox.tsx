import React from 'react'

function TrustSecurityBox() {
    return (
        <div className='bg-slate-50 rounded-40px p-5 border border-indigo-50'>
            <div className='w-12 h-12 rounded-2xl bg-white text-blue-600 flex items-center justify-center border border-[#EEF2FF] mb-4'>
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="10" rx="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
            </div>
            <h3 className='text-15px font-black text-gray-900 mb-2'>حفاظت از حساب کاربری</h3>
            <p className='text-13px text-gray-500 leading-7 font-medium'>استفاده از فرآیندهای امنیتی برای محافظت بهتر از حساب کاربران.</p>
        </div>
    )
}

export default TrustSecurityBox