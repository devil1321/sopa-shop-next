import React from 'react'
import { GlobalComponents } from '@/components/global'
import styles from '@/styles/pages/home.module.scss'

const Home = () => {
  return (
    <GlobalComponents.LayoutWithFooter className={styles.home} title='Home' meta={[]}>
      home
    </GlobalComponents.LayoutWithFooter>
  )
}

export default Home
