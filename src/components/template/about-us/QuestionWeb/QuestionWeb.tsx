import AccordianQuestion from '@/components/modules/mainAboutUs/AccordianQuestion/AccordianQuestion'
import TitleSec from '@/components/modules/TitleSec/TitleSec'
import React from 'react'

function QuestionWeb() {
    return (
        <section className='mt-15 font-lahze'>
            <div className="container">
                <div>
                    <TitleSec />
                    <h2 className='text-28px md:text-4xl font-black text-gray-900 leading-[1.8] mb-4'>سوالاتی درباره تی ارز</h2>

                    <div>
                        <AccordianQuestion/>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default QuestionWeb