import AccordianQuestion from '@/components/modules/mainAboutUs/AccordianQuestion/AccordianQuestion'
import TitleSec from '@/components/modules/TitleSec/TitleSec'
import React from 'react'

function QuestionArticle() {
  return (
    <section className='mt-15 font-lahze'>
      <div className="container">
        <div className='max-w-5xl mx-auto'>
          <div className="text-center mb-10">
            <TitleSec />
            <h2 className='text-28px md:text-4xl font-black text-gray-900 leading-[1.8] mb-4'>سوالات رایج درباره بیت کوین</h2>
          </div>
          <AccordianQuestion />
        </div>
      </div>
    </section>
  )
}

export default QuestionArticle