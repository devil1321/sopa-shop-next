import { GlobalComponents } from '@/components/global'
import styles from '@/styles/pages/sign_up.module.scss'
import Link from 'next/link'
import React from 'react'

const SignUp = () => {
  return (
    <GlobalComponents.LayoutWithFooter className={styles.sign_up} title="Sign Up" meta={[]}>
      <div className={styles.inner_wrapper}>
        <h1 className="h4">Create An Account</h1>
        <form action="">
          <fieldset>
            <legend className='p8'>Email Address</legend>
            <input type="text" className={styles.input} />
          </fieldset>
          <fieldset>
            <legend className='p8'>Password</legend>
            <input type="text" className={styles.input} />
          </fieldset>
          <button>Create An Account</button>
        </form>
        <span className='p4'>Already have an account?<Link href="/" className='u2'>Sign in</Link></span>
      </div>
    </GlobalComponents.LayoutWithFooter>
  )
}

export default SignUp
