import React from 'react'
import styles from '@/styles/components/checkout/modal.module.scss'

interface ModalProps{
    setIsModal:(isModal:boolean) => any
}

const ShppingPolicy:React.FC<ModalProps> = ({setIsModal}) => {
  return (
    <div className={styles.modal_wrapper}>
        <div className={styles.overlay}></div>
        <div className={styles.modal}>
          <div className={styles.header}>
            <h3 className='p3'>Refund policy</h3>
            <img onClick={()=>setIsModal(false)} src="/assets/icons/close.png" alt="close" />
          </div>
          <h3 className="p5">Policy</h3>
          <p className="p5">We know how important it is to receive your order in a timely manner, which is why we strive to ship all orders within 24-72 hours. With our standard shipping option, you can expect to receive your order within 4-8 days from the day you placed your order. Rest assured that we'll do everything we can to get your order to you as quickly as possible.</p>
          <h3 className="p5">HOW MUCH DOES SHIPPING COST?</h3>
          <p className="p5">We believe that shipping and returns should be hassle-free and affordable for all of our customers. That's why we offer complimentary shipping and returns within the USA for orders over $75. For orders below $75, we charge a flat rate shipping fee of $5. No matter how much you spend, we're committed to providing you with a great shopping experience every time you shop with us.</p>
        </div>
    </div>
  )
}

export default ShppingPolicy
