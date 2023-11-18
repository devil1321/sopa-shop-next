import React from 'react'
import { GlobalComponents } from '@/components/global'
import styles from '@/styles/pages/blog.module.scss'
import blog from '@/public/db/blog.json'
import { BlogComponents } from '@/components/blog'

const Blog:React.FC<any> = ({items}) => {
  return (
    <GlobalComponents.LayoutWithFooter className={styles.blog} title='Blog' meta={[]}>
      {items?.map((item:any) => 
        <BlogComponents.Item 
          key={item.id} 
          id={item.id}
          img={item.img} 
          title={item.title} 
          text={item.text} 
        />)}
    </GlobalComponents.LayoutWithFooter>
  )
}

export default Blog


export async function getStaticProps(){
  return{
    props:{
      items:blog
    }
  }
}