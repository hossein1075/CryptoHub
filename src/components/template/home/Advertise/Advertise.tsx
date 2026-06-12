import Image from 'next/image'
import React from 'react'

function Advertise() {
  return (
     <section className='mt-15 font-lahze'>
                    <div className="container">
                        <div>
                            <div>
                                <Image width={590} height={140} src='/images/home/banner-exchange.avif' alt='AdvertisePic'/>
                            </div>
                            <div>
                                <Image width={590} height={140} src='/images/home/banner-exchange.avif' alt='AdvertisePic'/>
                            </div>
                        </div>
                    </div>
                </section>
  )
}

export default Advertise