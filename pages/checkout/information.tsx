import React from 'react'
import styles from '@/styles/pages/checkout/information.module.scss'
import { InformationComponents } from '@/components/checkout/information'

const Information = () => {
  return (
    <div className={styles.information}>
      <div className={styles.column}>
        <InformationComponents.Path />
        <InformationComponents.Logos />
        <InformationComponents.Form />
      </div>
      <div className={styles.column}>
        <InformationComponents.Item />
        <InformationComponents.GiftCard />
        <InformationComponents.Summary />
      </div>
    </div>
  )
}

export default Information
