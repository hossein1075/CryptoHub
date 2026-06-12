import GifCartsBox from '@/components/modules/GifCartsBox/GifCartsBox'
import { Button } from '@mantine/core'
import { IoIosArrowBack } from 'react-icons/io'

function GifCarts() {
    return (
        <section className='mt-15 font-lahze bg-slate-50'>
            <div className="container">
                {/* header section */}
                <div className='flex flex-col md:flex-row justify-between items-center py-12 mb-8'>
                    <div className='text-right w-full md:w-auto mb-6 md:mb-0'>
                        <h2 className='text-2xl md:text-3xl font-extrabold text-slate-600'>انواع گیفت کارت‌ها</h2>
                        <p className='text-sm font-medium mb-2 text-slate-500'>دسترسی به گیفت کارت‌ها برای بازی، اپلیکیشن و خدمات آنلاین</p>
                    </div>
                    <Button variant="white" size="sm" className="text-sm! hover:shadow-sm rounded-full! font-bold! text-slate-500! border-2 border-gray-200!">
                    تمامی گیفت کارت ها
                    <IoIosArrowBack size={16} className='text-slate-400! mr-2'/>
                    </Button>
                </div>
                {/* body section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                   <GifCartsBox/>
                   <GifCartsBox/>
                   <GifCartsBox/>
                   <GifCartsBox/>
                </div>
            </div>
        </section>
    )
}

export default GifCarts