import React from 'react'
import styles from '@/styles/components/checkout/modal.module.scss'

interface ModalProps{
    setIsModal:(isModal:boolean) => any
}

const PrivacyPolicy:React.FC<ModalProps> = ({setIsModal}) => {
  return (
    <div className={styles.modal_wrapper}>
        <div className={styles.overlay}></div>
        <div className={styles.modal}>
          <div className={styles.header}>
            <h3 className='p3'>Privacy Policy</h3>
            <img onClick={()=>setIsModal(false)} src="/assets/icons/close.png" alt="close" />
          </div>
          <h3 className="p5">Privacy Policy</h3>
          <p className="p5">At SOPA, we take your privacy seriously and are committed to protecting the personal information you share with us. This Privacy Policy applies to all services provided by SOPA, Inc., including our website, and explains the types of information we collect from users of our services and how we use that information. We encourage all users and visitors to read this policy carefully to understand how we handle and protect your personal information. This Policy applies to all users and visitors to our Services.</p>
          <p className="p5">We may update this Privacy Policy from time to time to reflect changes in our business or to comply with applicable laws and regulations. If we make significant changes to the Policy, we will notify you by sending a notice to your primary email address or by prominently displaying a notice on our website. Non-material changes or clarifications will take effect immediately. You should review this Privacy Policy periodically, including the date of the last update, to stay informed of any changes. Your continued use of our Services after we publish or send a notice about our changes to this Policy signifies your acceptance of the updated Policy and any changes to the collection, use, and sharing of your Personal Information.</p>
          <h3 className="p5">What Information Do We Collect?</h3>
          <p className="p5">We collect information, including Personal Information, to operate effectively and provide you the best experiences with the Services. You provide some of this information directly, such as when you create an account or contact us for support. We get some of it by recording how you interact with the Services by, for example, using technologies like cookies, and receiving error reports or usage data from software running on your device. We collect, store, and use the following information, which includes Personal Information:</p>
          <p className="p5">Information you give us:</p>
          <ul>
            <li className='p5'>Information you share when you create an account on our website or otherwise access our Services, such as your name, email address, postal address, gender, zip code, country, and telephone number.</li>
            <li className='p5'>Your responses to surveys or reviews that we may ask you to complete for research purposes or to help direct Company activities.</li>
            <li className='p5'>Other Personal Information you voluntarily submit, such as your profession, date of birth, your profile picture.</li>
            <li className='p5'>The name, email address, title, telephone number and other contact information of your representative</li>
            <li className='p5'>Any information you share when you contact us.</li>
          </ul>
        </div>
    </div>
  )
}

export default PrivacyPolicy
