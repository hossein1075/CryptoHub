import BreadCrumb from '@/components/modules/BreadCrumb/BreadCrumb'
import ContentArticle from '@/components/template/article/ContentArticle/ContentArticle'
import PosterArticle from '@/components/template/article/PosterArticle/PosterArticle'
import QuestionArticle from '@/components/template/article/QuestionArticle/QuestionArticle'
import RelatedArticle from '@/components/template/article/RelatedArticle/RelatedArticle'
import React from 'react'

function MainArticle() {
  return (
    <main>
      <div className="container">
        <BreadCrumb/>
        <PosterArticle/>
        <ContentArticle/>
        <RelatedArticle/>
        <QuestionArticle/>
      </div>
    </main>
  )
}

export default MainArticle