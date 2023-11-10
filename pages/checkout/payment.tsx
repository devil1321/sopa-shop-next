import React from 'react'
import { InformationComponents } from '@/components/checkout/information'
import styles from '@/styles/pages/checkout/payment.module.scss'
import { PaymentComponents } from '@/components/checkout/payment'

const Payment = () => {
  return (
    <div className={styles.payment}>
      <div className={styles.column}>
        <InformationComponents.Path />
        <PaymentComponents.Form />
      </div>
      <div className={styles.column}>
        <InformationComponents.Item />
        <InformationComponents.GiftCard />
        <InformationComponents.Summary />
      </div>
    </div>
  )
}

export default Payment
