import React from 'react'
import styles  from '@/styles/components/faq/form.module.scss'

const Form = () => {
  return (
    <div className={styles.form}>
      <h1 className='h3'>How can we help?</h1>
      <form action="">
        <div className={styles.field}>
            <img src="/assets/icons/search.png" alt="search" />
            <input type="text" placeholder='What can we help you with?'/>
        </div>
      </form>
    </div>
  )
}

export default Form
