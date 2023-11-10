import React from 'react'
import { InformationComponents } from '@/components/checkout/information'
import styles from '@/styles/pages/checkout/shipping.module.scss'
import { ShippingComponents } from '@/components/checkout/shipping'

const Shipping = () => {
  return (
    <div className={styles.shipping}>
      <div className={styles.column}>
        <InformationComponents.Path />
        <ShippingComponents.Form />
      </div>
      <div className={styles.column}>
        <InformationComponents.Item />
        <InformationComponents.GiftCard />
        <InformationComponents.Summary />
      </div>
    </div>
  )
}

export default Shipping
