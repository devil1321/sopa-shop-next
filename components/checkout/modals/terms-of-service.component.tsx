import React from 'react'
import styles from '@/styles/components/checkout/modal.module.scss'

interface ModalProps{
    setIsModal:(isModal:boolean) => any
}

const TermsOfService:React.FC<ModalProps> = ({setIsModal}) => {
  return (
    <div className={styles.modal_wrapper}>
        <div className={styles.overlay}></div>
        <div className={styles.modal}>
          <div className={styles.header}>
            <h3 className='p3'>Terms Of Service</h3>
            <img onClick={()=>setIsModal(false)} src="/assets/icons/close.png" alt="close" />
          </div>
         <h3 className="p5">TERMS OF SERVICE</h3>
         <p className="p5">Welcome to Sopa, Inc. These Terms of Service “Terms” govern your use of our Services, including our website applications or other digital products that link to or reference these Terms (collectively, the “Services”). By accessing or using the Services, you acknowledge and agree to be bound by these Terms, which are a binding legal agreement between you or the entity you represent (“you”) and Company. Please note that these Terms include a binding arbitration provision that requires you to submit to binding and final arbitration on an individual basis to resolve disputes, rather than jury trials or class actions, as detailed in Section 12.</p>
         <p className="p5">Please be aware that our Privacy Policy, which sets out the terms on which we process any personal data we collect from you or that you provide to us, is incorporated into these Terms by reference and applies to your use of the Services.</p>
         <p className="p5">Please read these Terms carefully as they may have changed. Although your access and use of the Services are governed by the Terms effective at the time, please note that we may revise and update these Terms at any time at our discretion. If we make material changes to these Terms, we will notify you by email or by posting a notice on our website prior to the effective date of the changes. These Terms are designed to ensure that you use the Services only in the ways in which we intend for it to be used.</p>     <p className="p5">By accessing or using the Services, you acknowledge that you have read, understood, and accept these Terms and any additional documents or policies referred to in or incorporated into these Terms, whether you are participating as a guest or as a registered user. If these Terms have materially changed since you last accessed or used the Services, you acknowledge and agree that your continued access or use of the Services constitutes your acceptance of the changed Terms. You represent and warrant that you are at least eighteen (18) years of age and have the right, authority, and capacity to enter into these Terms, either on behalf of yourself or the entity that you represent. You also consent to receive communications from us electronically, and you agree that such electronic communications, notices, and postings satisfy any legal requirements that such communications be in writing.</p>
        </div>
    </div>
  )
}

export default TermsOfService

