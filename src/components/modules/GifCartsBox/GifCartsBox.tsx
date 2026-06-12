import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'

function GifCartsBox() {
  return (
     <div className='bg-white rounded-24px p-3 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.03)] border border-slate-50 relative hover:shadow-[0_16px_40px_-18px_rgba(0,0,0,0.18)] transform hover:-translate-y-2 transition duration-300 ease-in'>
                        <div className='relative h-44 rounded-20px overflow-hidden'>
                            <Image width={260} height={176} src='/images/home/skype.webp' alt='GifCartsImg' />
                            <div className='absolute inset-0 bg-linear-to-t from-black/5 via-black/20 to-transparent'></div>
                            <div className='absolute inset-0 z-10 flexCenter flex-col gap-3 px-4 text-center'>
                                <span className='text-white font-extrabold drop-shadow-sm'>گیفت کارت اسکایپ</span>
                            </div>
                            <div className='absolute left-4 -bottom-3 bg-white px-3 py-1.5 rounded-lg shadow-sm border-dashed border-slate-100 z-20'>
                                <span className='text-xs font-black text-slate-600'>skype</span>
                            </div>
                        </div>
                        <div className='pt-6 pb-2 px-2 flex flex-col gap-5'>
                            <h3 className='text-slate-800 font-bold text-15px pr-1'>گیفت کارت اسکایپ</h3>
                            <div className='flex items-center justify-between mt-auto'>
                                <Link href='' className='text-slate-500! flex items-center hover:text-blue-600! transition-colors duration-300 ease-in font-bold! gap-1! text-13px'>
                                    <IoIosArrowBack size={16}/>
                                    مشاهده
                                </Link>
                                <Link href='' className='inline-block text-xs font-bold text-slate-400'>کشور</Link>
                            </div>
                        </div>
                    </div>
  )
}

export default GifCartsBox