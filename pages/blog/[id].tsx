import React, { useEffect,useState } from 'react'
import { GlobalComponents } from '@/components/global'
import { BlogDetailsComponents } from '@/components/blog-details'
import blogs from '@/public/db/blog.json'
import styles from '@/styles/pages/blog-details.module.scss'

const BlogDetails:React.FC<any> = ({params}) => {

  const [image,setImage] = useState<string>('')
  
  const handleImage = async() =>{
    const blogs = await fetch('/db/blog.json')
    const data = await blogs.json()
    const item = data.filter((b:any) => b.id = Number(params.id)).map((b:any,i:number) => {
        b.id = i + 1
        return b
    }).find((b:any) => b.id == Number(params.id))
    setImage(item?.img as string)
  }

  useEffect(()=>{
    handleImage()
  },[])

  return (
      <GlobalComponents.LayoutWithFooter className={styles.blog_details} title='Blog Details' meta={[]}>
        <BlogDetailsComponents.HeroComponents.Hero img={image} />
        <BlogDetailsComponents.Feature />
      </GlobalComponents.LayoutWithFooter>
  )
}


export default BlogDetails


export async function getStaticPaths() {
  try {
    const paths = blogs.map((b: any) => ({
      params: {
        id: b.id.toString(),
      },
    }));
    return {
      paths,
      fallback: false, // or 'blocking' or true
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps({ params }:{params:any}) {
  return {
    props: {
      params,
    },
  };
}