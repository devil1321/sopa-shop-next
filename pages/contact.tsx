import React from 'react'
import { GlobalComponents } from '@/components/global'
import { ContactComponents } from '@/components/contact'
import styles from '@/styles/pages/contact.module.scss'

const Contact = () => {
  return (
    <GlobalComponents.LayoutWithFooter className={styles.contact} title='Contact Us' meta={[]}>
      <ContactComponents.Intro />
      <ContactComponents.Form />
      <ContactComponents.Details />
    </GlobalComponents.LayoutWithFooter>
  )
}

export default Contact
