import Image from 'next/image'
import React from 'react'

function Advertise() {
  return (
     <section className='mt-15 font-lahze'>
                    <div className="container">
                        <div className='flex flex-col md:flex-row items-center gap-10'>
                          
                                <Image width={590} height={140} src='/images/home/banner-exchange.avif' className='hover:shadow-[0_0_20px_1px_#00000040] hover:scale-105 transition duration-500 ease-out rounded-20px' alt='AdvertisePic'/>
                            
                            
                                <Image width={590} height={140} src='/images/home/banner-exchange.avif' className='hover:shadow-[0_0_20px_1px_#00000040] hover:scale-105 transition duration-500 ease-out rounded-20px' alt='AdvertisePic'/>
                            
                        </div>
                    </div>
                </section>
  )
}

export default Advertise