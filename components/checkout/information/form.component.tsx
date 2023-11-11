import React from 'react'
import styles from '@/styles/components/checkout/information/form.module.scss'
import Link from 'next/link'

interface FormProps{
  setIsRefundPolicy:(isModal:boolean) => any
  setIsPrivacyPolicy:(isModal:boolean) => any
  setIsShippingPolicy:(isModal:boolean) => any
  setIsTermsOfService:(isModal:boolean) => any
}

const Form:React.FC<FormProps> = ({setIsRefundPolicy,setIsPrivacyPolicy,setIsShippingPolicy,setIsTermsOfService}) => {
  return (
    <div className={styles.form}>
      <form action="">
        <div className={styles.header}>
          <p className="p5">Contact information</p>
          <p className="p5">Already have an account? <Link href="/" className='u3'>Log In</Link></p>
        </div>
        <input type="text" />
        <h3 className="p5">Email me with news and offers</h3>
        <h3 className="p4">Shipping Adress</h3>
        <input type="text" placeholder='Country/region'/>
        <div className={styles.group}>
          <input type="text" placeholder='First name (optional)' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="text" placeholder='Company Optional' />
        <input type="text" placeholder='Address' />
        <input type="text" placeholder='Apartament, suite, etc. (optional)'/>
        <div className={styles.group}>
          <input type="text" placeholder='City' />
          <input type="text" placeholder='Postal code' />
        </div>
        <input type="text" placeholder='Phone-Receive SMS support' />
        <h3 className="p5">Text me with news and offers.</h3>
        <p className="p5">By signing up via text, you agree to receive recurring automated marketing messages, including cart reminders, at the phone number provided. Consent is not a condition of purchase. Reply STOP to unsubscribe. Reply HELP for help. Message frequency varies. Msg & data rates may apply. View our <Link href="#" className='u3' onClick={()=>setIsPrivacyPolicy(true)}>Privacy Policy</Link> and <Link href="#" className='u3' onClick={()=>setIsTermsOfService(true)}>Terms of Service.</Link></p>
        <button type="submit">Continue Shopping</button>
      </form>
      <div className={styles.footer}>
        <Link onClick={()=>setIsRefundPolicy(true)} href="#" className='u3'>Refund policy</Link>
        <Link onClick={()=>setIsShippingPolicy(true)} href="#" className='u3'>Shipping policy</Link>
        <Link onClick={()=>setIsPrivacyPolicy(true)} href="#" className='u3'>Privacy policy</Link>
        <Link onClick={()=>setIsTermsOfService(true)} href="#" className='u3'>Terms of service</Link>
      </div>
    </div>
  )
}

export default Form
