import React from 'react'
import styles from '@/styles/pages/community.module.scss'
import { CommunityComponents } from '@/components/community'
import { GlobalComponents } from '@/components/global'

const Community = () => {
  return (
    <GlobalComponents.LayoutWithFooter className={styles.community} title="Community" meta={[]}>
      <CommunityComponents.Intro title='Sopa Details, (Sopa) Universal Love' text='We know we can’t please everyone, but these are just a few people who can’t stop raving about their Sopa'/>
      <CommunityComponents.Items />
      <CommunityComponents.Feature 
        img='/assets/community/feature.png' 
        title='We eagerly anticipate the moment when you will join us for a walk.' 
        text='Equipped with a pair of Sopas, your journey will know no bounds, taking you to places beyond your wildest imagination.' 
        button='Shop Now' 
      />
    </GlobalComponents.LayoutWithFooter>
  )
}

export default Community
