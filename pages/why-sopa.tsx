import React from 'react'
import { GlobalComponents } from '@/components/global'
import { WhySopaComponents } from '@/components/why-sopa'
import { HomeComponents } from '@/components/home'
import { CommunityComponents } from '@/components/community'
import styles from '@/styles/pages/why-sopa.module.scss'


const WhySopa = () => {
  return (
    <GlobalComponents.LayoutWithFooter className={styles.why_sopa} title='Why Sopa' meta={[]}>
      <WhySopaComponents.HeroComponents.Hero />
      <WhySopaComponents.FirstFeature />
      <WhySopaComponents.SecondFeature />
      <WhySopaComponents.ThirdFeature />
      <WhySopaComponents.BetterWay />
      <HomeComponents.Logos title="“These are the most thoughtfully designed sneakers on the market.”" />
      <CommunityComponents.Items />
    </GlobalComponents.LayoutWithFooter>
  )
}

export default WhySopa
