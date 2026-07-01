import { Button } from '@mantine/core'
import React from 'react'

function SupportOnline() {
    return (
        <div className='rounded-32px border border-indigo-50 bg-white p-6  shadow-[0_18px_45px_rgba(15,23,42,0.06)]'>
            <div className='size-14 rounded-3xl flexCenter shrink-0 text-blue-600 bg-blue-600/10 mb-5'>
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 10a6 6 0 0 0-12 0v4a2 2 0 0 0 2 2h1v-6H7"></path>
                    <path d="M16 16h1a2 2 0 0 0 2-2v-4"></path>
                    <path d="M12 20h2a4 4 0 0 0 4-4"></path>
                </svg>
            </div>
            <h3 className='mb-3 text-gray-900 font-black text-lg'>پشتیبانی آنلاین</h3>
            <p className='text-13px leading-7 text-gray-500 font-medium mb-5'>گر سوال فوری دارید، می‌توانید از طریق چت آنلاین با پشتیبانی در ارتباط باشید.</p>
            <Button size='lg' type='submit' color='#2563eb' className='w-full! shadow-lg rounded-2xl! text-13px! font-black! shadow-blue-200 '>
                شروع گفتگوی آنلاین
            </Button>
        </div>
    )
}

export default SupportOnline