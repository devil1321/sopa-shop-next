import { GlobalComponents } from '@/components/global'
import styles from '@/styles/pages/index.module.scss'
import Link from 'next/link'
export default function Home() {
  return (
    <GlobalComponents.LayoutWithFooter className={styles.sign_in} title="Sign In" meta={[]}>
      <div className={styles.inner_wrapper}>
        <h1 className="h1">Sign In.</h1>
        <form action="">
          <input type="text" placeholder='Email address' />
          <button className='p4'>Email me a login link</button>
        </form>
        <span className='p4'>New to Sopa?<Link href="/sign-up" className='u2'>Create an account</Link></span>
      </div>
    </GlobalComponents.LayoutWithFooter>
  )
}
