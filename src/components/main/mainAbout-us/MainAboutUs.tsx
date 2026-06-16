import AboutTCryto from '@/components/template/about-us/AboutTCrypto/AboutTCryto'
import ContactFooter from '@/components/template/about-us/ContactFooter/ContactFooter'
import QuestionWeb from '@/components/template/about-us/QuestionWeb/QuestionWeb'
import StatusWeb from '@/components/template/about-us/StatusWeb/StatusWeb'
import TimeLineWeb from '@/components/template/about-us/TimeLineWeb/TimeLineWeb'
import TrustSecurity from '@/components/template/about-us/TrustSecurity/TrustSecurity'
import ValuesWeb from '@/components/template/about-us/ValuesWeb/ValuesWeb'
import React from 'react'

function MainAboutUs() {
  return (
    <main>
      <AboutTCryto />
      <StatusWeb/>
      <ValuesWeb/>
      <TimeLineWeb/>
      <TrustSecurity/>
      <QuestionWeb/>
      <ContactFooter/>
    </main>
  )
}

export default MainAboutUs