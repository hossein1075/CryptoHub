import { Button } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'

function Footer() {
    return (
        <>
            <footer>
                <div className='container'>
                    {/* svg background */}
                    <div>
                        <div></div>
                    </div>

                    <div>
                        {/* 1 */}
                        <div>
                            <div>
                                <div>
                                    <svg className="w-5 h-5 text-[#4270FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                        </path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    <span>آدرس دفتر مرکزی</span>
                                </div>
                                <p>مشهد، بلوار هفتم تیر، مجتمع تجاری آرمیتاژ</p>
                            </div>

                        </div>
                        {/* 2 */}
                        <div>
                            <div>
                                <Link href=''>
                                    <div>
                                        <div></div>
                                    </div>
                                    <span>
                                        کیف<span>پـولِ‌مـن</span>
                                    </span>
                                </Link>
                                <p>تی ارز، به‌عنوان نخستین سامانه نگهداری ارزهای دیجیتال در کشور، با بهره‌گیری از استانداردهای روز جهانی و فناوری‌های نوین امنیتی، بستری امن و مطمئن برای ذخیره، مدیریت و مبادله رمزارزها فراهم کرده است. این سامانه با ارائه خدمات پیشرفته، نیازهای اشخاص حقیقی و حقوقی را در حوزه دادوستد و نگه‌داری رمزارزها برطرف می‌کند و با تکیه بر ساختارهای مدرن و به‌روز، تجربه‌ای سریع، ایمن و کاربرپسند در اختیار آن‌ها قرار می‌دهد.</p>
                                <div>
                                    <div>
                                        <span></span>
                                        <Button variant="white" size="sm" className="text-sm! hover:shadow-sm rounded-full! font-bold! text-slate-500! border-2 border-gray-200!">
                                            تمامی گیفت کارت ها
                                            <IoIosArrowBack size={16} className='text-slate-400! mr-2' />
                                        </Button>
                                    </div>
                                    <div>
                                        <div>
                                            <Image src='/images/footer/qrcode-kifpool.png' alt='QR' width={94} height={94} />
                                            <div></div>
                                        </div>
                                        <div>
                                            <Link href=''>
                                                <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M17.523 15.3414C17.523 15.3414 16.208 17.6534 12 17.6534C7.792 17.6534 6.477 15.3414 6.477 15.3414C6.477 15.3414 4 11.2384 4 6.4884C4 6.4884 6.84 4.0924 12 4.0924C17.16 4.0924 20 6.4884 20 6.4884C20 11.2384 17.523 15.3414 17.523 15.3414Z" fill="#A4C639"></path>
                                                    <path d="M8.5 8C9.32843 8 10 7.32843 10 6.5C10 5.67157 9.32843 5 8.5 5C7.67157 5 7 5.67157 7 6.5C7 7.32843 7.67157 8 8.5 8Z" fill="#fff"></path>
                                                    <path d="M15.5 8C16.3284 8 17 7.32843 17 6.5C17 5.67157 16.3284 5 15.5 5C14.6716 5 14 5.67157 14 6.5C14 7.32843 14.6716 8 15.5 8Z" fill="#fff"></path>
                                                </svg>
                                                اپ اندروید
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3>پیوندها</h3>
                                <span></span>
                                <ul>
                                    <li>
                                        <Link href=''>کیف پول من</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* 3 */}
                        <div>
                            <Link href=''>خرید بیت کوین</Link>
                            <span>•</span>
                        </div>
                        {/* 4 */}
                        <div>
                            <p>تمامی حقوق مادی و معنوی محفوظ است.</p>
                            <div>
                                <Link href='#'>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <rect width="18" height="18" x="3" y="3" rx="4" strokeWidth="2"></rect>
                                        <circle cx="12" cy="12" r="4" strokeWidth="2"></circle>
                                        <path d="M16.5 7.5v.01" strokeWidth="2"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer

//  1
                            // <div>
                            //     <div>
                            //         <svg className="w-5 h-5 text-[#4270FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                            //             </path>
                            //         </svg>
                            //         <span>شماره مرکز پشتیبانی مشتریان</span>
                            //     </div>
                            //     <Link href='#'>۰۲۱-76543221</Link>
                            // </div>
                            // <div>
                            //     <div>
                            //         <svg className="w-5 h-5 text-[#4270FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                            //             </path>
                            //         </svg>
                            //         <span>پست الکترونیکی</span>
                            //     </div>
                            //     <Link href='#'>info@Tarz.me</Link>
                            // </div>