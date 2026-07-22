import RelatedArticleBox from '@/components/modules/MainArticle/RelatedArticleBox/RelatedArticleBox'
import React from 'react'
function RelatedArticle() {
  return (
    <section className='mt-15 font-lahze'>
      <div className="container">

        <div className='mb-8'>
          <h2 className='text-26px font-black text-gray-900'>مقالات مرتبط</h2>
          <p className='text-13px font-bold mt-1 text-gray-400'>مطالبی که احتمالاً برای شما مفید هستند</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
          <RelatedArticleBox/>
          <RelatedArticleBox/>
          <RelatedArticleBox/>
        </div>
      </div>
    </section>
  )
}

export default RelatedArticle