import React from 'react'
import { AboutComponents } from '@/components/about'
import { GlobalComponents } from '@/components/global'
import styles from '@/styles/pages/about.module.scss'

const About = () => {
  return (
    <GlobalComponents.LayoutWithFooter className={styles.about} title="About" meta={[]}>
      <AboutComponents.Hero />
      <AboutComponents.Feature />
    </GlobalComponents.LayoutWithFooter>
  )
}

export default About
