import ContentArticleContent from '@/components/modules/MainArticle/ContentArticleContent/ContentArticleContent'
import React from 'react'
import ContentArticleAside from '../ContentArticleAside/ContentArticleAside'

function ContentArticle() {
  return (
    <section className='font-lahze mt-15'>
      <div className="container">
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
          <ContentArticleContent/>
          <ContentArticleAside/>
        </div>
      </div>
    </section>
  )
}

export default ContentArticle