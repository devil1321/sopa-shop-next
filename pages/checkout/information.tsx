import React, { useState } from 'react'
import styles from '@/styles/pages/checkout/information.module.scss'
import { InformationComponents } from '@/components/checkout/information'
import { CheckoutModals } from '@/components/checkout/modals'

const Information = () => {

  const [isRefundPolicy,setIsRefundPolicy] = useState<boolean>(false)
  const [isPrivacyPolicy,setIsPrivacyPolicy] = useState<boolean>(false)
  const [isShippingPolicy,setIsShippingPolicy] = useState<boolean>(false)
  const [isTermsOfService,setIsTermsOfService] = useState<boolean>(false)

  return (
    <React.Fragment>
      {isRefundPolicy && <CheckoutModals.RefundPolicy setIsModal={setIsRefundPolicy}/>}
      {isPrivacyPolicy && <CheckoutModals.PrivacyPolicy setIsModal={setIsPrivacyPolicy}/>}
      {isShippingPolicy && <CheckoutModals.ShippingPolicy setIsModal={setIsShippingPolicy}/>}
      {isTermsOfService && <CheckoutModals.TermsOfService setIsModal={setIsTermsOfService}/>}
      <div className={styles.information}>
        <div className={styles.column}>
          <InformationComponents.Path />
          <InformationComponents.Logos />
          <InformationComponents.Form 
            setIsRefundPolicy = {setIsRefundPolicy}
            setIsPrivacyPolicy = {setIsPrivacyPolicy}
            setIsShippingPolicy = {setIsShippingPolicy}
            setIsTermsOfService = {setIsTermsOfService}
          />
        </div>
        <div className={styles.column}>
          <InformationComponents.Item />
          <InformationComponents.GiftCard />
          <InformationComponents.Summary />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Information
