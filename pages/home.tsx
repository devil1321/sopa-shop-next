import React from 'react'
import { GlobalComponents } from '@/components/global'
import styles from '@/styles/pages/home.module.scss'
import { HomeComponents } from '@/components/home'

const Home = () => {
  return (
    <GlobalComponents.LayoutWithFooter className={styles.home} title='Home' meta={[]}>
      <HomeComponents.Hero heading="Step inside, for comfort and magic await you." button="Shop Now" />
      <HomeComponents.Logos title="“These are the most thoughtfully designed sneakers on the market.”" />
    </GlobalComponents.LayoutWithFooter>
  )
}

export default Home
