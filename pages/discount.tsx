import React from 'react'
import { DiscountComponents } from '@/components/discount'
import { GlobalComponents } from '@/components/global'
import styles from '@/styles/pages/discount.module.scss'

const Discount = () => {
  return (
    <GlobalComponents.LayoutWithFooter className={styles.discount} title='Discount' meta={[]}>
      <DiscountComponents.Item 
        img='/assets/discount/discount-1.png' 
        title='Supporting those who are making a better tomorrow' 
        paragraphs={['Enjoy a special discount of 10-15% on all orders, exclusively for teachers, students, healthcare workers, military and other government agencies, first responders, and seniors.']} 
        isRight={true} 
      />
      <DiscountComponents.Item 
        img='/assets/discount/discount-2.png' 
        title='Who is eligible for discounts?' 
        paragraphs={[
          `Teachers and Students - 15% \n Teachers, teaching assistants and aides, administrators, and students enrolled at a college, university, or technical program within the US and Canada`,
          `Healthcare Professionals - 10% \n Doctors, nurses, and other healthcare professionals`,
          `First Responders - 10% \n Police, Fire Fighters, and EMTs`,
          `Seniors - 10% \n Those who are age 65 and older`,
          `Government Employees - 10% \n Local, state, and federal employees`,
          `Military - 10% \n Active duty, the reserves, national guard, retirees, veterans, and military families`
        ]} 
        isRight={false} 
      />
      <DiscountComponents.Item 
        img='/assets/discount/discount-3.png' 
        title='Supporting those who are making a better tomorrow' 
        paragraphs={['Enjoy a special discount of 10-70% on all orders, exclusively for teachers, students, healthcare workers, military and other government agencies, first responders, and seniors.']} 
        isRight={true} 
      />
      <DiscountComponents.Item 
        img='/assets/discount/discount-4.png' 
        title="Don't work in any of the above fields?"
        paragraphs={[`No worries, we have an incredible referral program that's open to all. Simply visit our referral page and share the word about us with your friends and family. They'll receive a $20 discount, and as a token of appreciation, you'll also receive a $20 reward for spreading the love.`]} 
        isRight={false} 
      />
    </GlobalComponents.LayoutWithFooter>
  )
}

export default Discount
