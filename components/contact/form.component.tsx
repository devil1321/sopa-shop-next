import React from 'react'
import styles from '@/styles/components/contact/form.module.scss'

const Form = () => {
  return (
    <div className={styles.form}>
      <form action="">
        <h3 className="p4">Send us a message, and we’ll be in touch as soon as possible.</h3>
        <input type="text" placeholder='First Name' />
        <input type="text" placeholder='Last Name' />
        <input type="text" placeholder='Phone Number' />
        <input type="text" placeholder='Email Address' />
        <input type="text" placeholder='Subject' />
        <input type="text" placeholder='How can we help?' />
        <h3 className="p5">How should we contact you?</h3>
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='Phone' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form
