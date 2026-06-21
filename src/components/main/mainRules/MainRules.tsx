import CostRulse from '@/components/template/rules/CostRulse/CostRulse'
import IntroductionRulse from '@/components/template/rules/IntroductionRulse/IntroductionRulse'
import LimitationRulse from '@/components/template/rules/LimitationRulse/LimitationRulse'
import PrivacyRulse from '@/components/template/rules/PrivacyRulse/PrivacyRulse'
import RegisterRulse from '@/components/template/rules/RegisterRulse/RegisterRulse'
import RulseAside from '@/components/template/rules/RulseAside/RulseAside'
import SecurityRulse from '@/components/template/rules/SecurityRulse/SecurityRulse'
import SignUserRulse from '@/components/template/rules/SignUserRulse/SignUserRulse'
import TransactionRulse from '@/components/template/rules/TransactionRulse/TransactionRulse'
import React from 'react'

function MainRules() {
  return (
    <main>
      <div className="container">
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 py-8'>
        {/* box */}
        <aside className='lg:col-span-4 xl:col-span-3'>
          <RulseAside />
        </aside>
        {/* section */}
        <div className='lg:col-span-8 xl:col-span-9 space-y-5'>
          <IntroductionRulse/>
          <SignUserRulse/>
          <RegisterRulse/>
          <CostRulse/>
          <SecurityRulse/>
          <TransactionRulse/>
          <PrivacyRulse/>
          <LimitationRulse/>
        </div>
      </div>
      </div>
    </main>
  )
}

export default MainRules