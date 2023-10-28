import React from 'react'
import { HelpComponents } from '@/components/help'
import styles from '@/styles/pages/help.module.scss'
import { GlobalComponents } from '@/components/global'

const Help = () => {
  return (
    <GlobalComponents.LayoutWithFooter className={styles.help} title="Help" meta={[]}>
      <HelpComponents.Item img='/assets/help/help-1.png' title='Track your order' />
      <HelpComponents.Item img='/assets/help/help-2.png' title='Start a return' />
      <HelpComponents.Item img='/assets/help/help-3.png' title='FAQs' />
      <HelpComponents.Item img='/assets/help/help-4.png' title='Discount Program' />
      <HelpComponents.Item img='/assets/help/help-5.png' title='Refer a Friend' />
      <HelpComponents.Item img='/assets/help/help-6.png' title='Sopa Ambassadors' />
      <h3 className="h7">Any other questions?</h3>
      <p className='p5'>Contact us at support@sopa.com</p>
      <p className='p5'>or text us at +1 (917) 000-0000</p>
    </GlobalComponents.LayoutWithFooter>
  )
}

export default Help
