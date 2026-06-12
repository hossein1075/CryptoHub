import { Button } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'

function GifCarts() {
    return (
        <section className='mt-15 font-lahze'>
            <div className="container">
                {/* header section */}
                <div className='flex flex-col md:flex-row justify-between items-center mb-8'>
                    <div className='text-right w-full md:w-auto mb-6 md:mb-0'>
                        <h2 className='text-2xl font-extrabold text-gray-900'>آخرین قیمت ارزهای دیجیتال</h2>
                        <p className='text-sm mb-1 text-gray-500'>قیمت لحظه‌ای مهم‌ترین ارزها</p>
                    </div>
                    <Button variant="white" size="sm" className="text-sm! shadow-sm rounded-full! font-normal! text-gray-600! border-2 border-gray-200!">
                        مشاهده قیمت تمام ارزهای دیجیتال
                    </Button>
                </div>
                {/* body section */}
                <div>
                    <div>
                        <div>
                            <Image width={260} height={176} src='/images/home/skype.webp' alt='GifCartsImg' />
                            <div></div>
                            <div>
                                <span>گیفت کارت اسکایپ</span>
                            </div>
                            <div>
                                <span>skype</span>
                            </div>
                        </div>
                        <div>
                            <h3>گیفت کارت اسکایپ</h3>
                            <div>
                                <Link href='' className='block'>
                                    <IoIosArrowBack size={3.5}/>
                                    مشاهده
                                </Link>
                                <Link href='' className='block'>کشور</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GifCarts