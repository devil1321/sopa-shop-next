import React from 'react'
import styles from '@/styles/components/checkout/modal.module.scss'

interface ModalProps{
    setIsModal:(isModal:boolean) => any
}

const RefundPolicy:React.FC<ModalProps> = ({setIsModal}) => {
  return (
    <div className={styles.modal_wrapper}>
        <div className={styles.overlay}></div>
        <div className={styles.modal}>
          <div className={styles.header}>
            <h3 className='p3'>Refund policy</h3>
            <img onClick={()=>setIsModal(false)} src="/assets/icons/close.png" alt="close" />
          </div>
          <h3 className='p5'>Returns</h3>
          <p className='p5'>Customer satisfaction is our top priority, which is why we offer hassle-free returns on shoes within 30 days of delivery through our convenient returns portal. Please note that for safety reasons, we are unable to accept returns or exchanges on masks. To initiate a shoe return, simply head over to our returns portal and generate a pre-paid return label.</p>
          <h3 className='p5'>Eligibility for Refunds</h3>
          <p className='p5'>We understand how important it is to keep our customers informed every step of the way. As soon as we receive and inspect your return, we'll promptly send you an email to confirm receipt and update you on the status of your refund. If your refund is approved, we'll automatically apply a credit to your original method of payment or credit card within 3 business days, so you can expect to see the funds returned to your account in no time.</p>
          <h3 className="p5">Status of Late or Missing Refunds</h3>
          <p className="p5">We know that receiving a refund is an important part of the return process, and we want to make sure you receive your funds as quickly as possible. If you haven't received your refund yet, we recommend checking your bank account again first, as refunds are usually listed as SOPA on most bank statements. If you still don't see your refund, please contact your credit card company, as it may take some time before the refund is officially posted. If you've taken these steps and still haven't received your refund, please reach out to your bank, as there may be a processing time before the refund is posted to your account from when it's processed on our end</p>
          <h3 className="p5">Eligibility for Exchanges</h3>
          <p className="p5">Here at Sopa, we stand behind the quality of our products and want you to be completely satisfied with your purchase. If your item arrives damaged or defective, we'll happily replace it with a new one. To initiate an exchange for the same item, please send us an email at support@sopa.com and return your item to Sopa, Inc."</p>
        </div>
    </div>
  )
}

export default RefundPolicy
