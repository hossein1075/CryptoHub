import ContactFooterIcon from '@/components/modules/mainAboutUs/ContactFooterIcon/ContactFooterIcon'
import ContactFooterList from '@/components/modules/mainAboutUs/ContactFooterList/ContactFooterList'
import Link from 'next/link'
import React from 'react'

function ContactFooter() {
    return (
        <section className='mt-15 font-lahze'>
            <div className="container">
                <div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M6 8l6-4 6 4v8l-6 4-6-4V8z"></path>
                                        <path d="M12 4v16"></path>
                                        <path d="M6 8l6 4 6-4"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p>تی ارز</p>
                                    <p>صرافی ارز دیجیتال</p>
                                </div>
                            </div>
                            <p>بستری ساده، امن و سریع برای خرید، فروش و نگهداری ارزهای دیجیتال.</p>
                        </div>
                        <div>
                            <ContactFooterList />
                        </div>
                        <div>
                            <ContactFooterList />
                        </div>
                        <div>
                            <h3 className='text-15px font-black text-gray-900 mb-5 relative inline-block'>
                                پیوندها
                            </h3>
                            <p className='text-13px text-gray-500 font-medium mb-4 hover:text-blue-600 transition-colors duration-500 ease-out'>پشتیبانی ۲۴ ساعته</p>
                            <p className='text-13px text-gray-500 font-medium mb-4 hover:text-blue-600 transition-colors duration-500 ease-out'>ایمیل: support@example.com</p>
                            <div>
                                <ContactFooterIcon/>
                                <ContactFooterIcon/>
                                <ContactFooterIcon/>
                            </div>
                        </div>
                    </div>
                     <div className='flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-bold'>
                            <p>© تمامی حقوق محفوظ است.</p>
                            <p>طراحی شده با Tailwind CSS و Alpine.js</p>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default ContactFooter