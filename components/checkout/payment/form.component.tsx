import React from 'react'
import styles from '@/styles/components/checkout/payment/form.module.scss'
import Link from 'next/link'

const Form = () => {
  return (
    <div className={styles.form}>
      <form action="">
        <div className={styles.item}>
          <p className="p5">Contact</p>
          <input type="text" value="borkat2042@gmail.com" />
          <p className="u3">Change</p>
        </div>
        <div className={styles.item}>
          <p className="p5">Contact</p>
          <input type="text" value="Sunnah Lab, 13th Street. 47 W 13th St , New York" />
          <p className="u3">Change</p>
        </div>
        <h3 className="p5">Payment</h3>
        <p className='p5'>All transactions are secure and encrypted</p>
        <div className={styles.radio}>
          <input type="radio" name="" id="" />
          <div className={`${styles.label} p5`}>All transactions are secure and encrypted</div>
          <div className={styles.cards}>
            <img src="/assets/icons/visa.png" alt="visa" />
            <img src="/assets/icons/mastercard.png" alt="mastercard" />
            <img src="/assets/icons/american-express.png" alt="american-express" />
            <img src="/assets/icons/discover.png" alt="discover" />
            <p className='p5'>and more...</p>
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="" className='p5'>Card number</label>
          <input type="text" value="Visa" />
        </div>
        <div className={styles.field}>
          <label htmlFor="" className='p5'>Name on card</label>
          <input type="text" value="Borkat Ullah" />
        </div>
        <div className={styles.group}>
          <div className={styles.field}>
            <label htmlFor="" className='p5'>Expiration date MM / YY</label>
            <input type="text" value="12/12/2024" />
          </div>
          <div className={styles.field}>
            <label htmlFor="" className='p5'>Security code</label>
            <input type="text" name="" id="" value="25544" />
          </div>
        </div>
        <div className={styles.cards_images}>
          <img src="/assets/icons/shop-pay.png" alt="shop-pay" />
          <img src="/assets/icons/paypal.png" alt="paypal" />
          <img src="/assets/icons/discover.png" alt="discover" />
        </div>
        <h3 className="p5">Billing address</h3>
        <p className="p5">Select the address that matches your card or payment</p>

        <div className={styles.radio_address}>
          <input type="radio" name="address" id="" checked/>
          <div className={`${styles.label} p5`}>Same as shipping address</div>
        </div>
        <div className={styles.radio_address}>
          <input type="radio" name="address" id="" />
          <div className={`${styles.label} p5`}>Use a different billing address</div>
        </div>
        <div className={styles.footer}>
          <Link href="#" className='u3'><img src="/assets/icons/chevron-left.png" alt="chevron-left" />Return to information</Link>
          <button type="submit">Continue to payment</button>
        </div>
      </form>
    </div>
  )
}

export default Form
