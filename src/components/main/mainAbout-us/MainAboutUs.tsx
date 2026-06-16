import AboutTCryto from '@/components/template/about-us/AboutTCrypto/AboutTCryto'
import StatusWeb from '@/components/template/about-us/StatusWeb/StatusWeb'
import TimeLineWeb from '@/components/template/about-us/TimeLineWeb/TimeLineWeb'
import ValuesWeb from '@/components/template/about-us/ValuesWeb/ValuesWeb'
import React from 'react'

function MainAboutUs() {
  return (
    <main>
      <AboutTCryto />
      <StatusWeb/>
      <ValuesWeb/>
      <TimeLineWeb/>
    </main>
  )
}

export default MainAboutUs