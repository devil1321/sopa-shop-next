import React, { useEffect,useState } from 'react'
import products from '@/public/db/products.json'
import { useRouter } from 'next/router'
import { GlobalComponents } from '@/components/global'
import { DetailsComponents } from '@/components/details'
import styles from '@/styles/pages/details.module.scss'

const Details:React.FC<any> = ({params}) => {
  const [product,setProduct] = useState<any>({})

  const router = useRouter()

  const model_000_regex = /model_000/
  const model_001_regex = /model_001/

  const handleProduct = () =>{
    const item = products.find((p:any) => p.id === Number(params.id))
    setProduct(item)
  }

  useEffect(()=>{
    handleProduct()
  },[params])

  return (
      <GlobalComponents.LayoutWithFooter className={styles.details} title='Details' meta={[]}>
        <div className={styles.hero}>
          <DetailsComponents.Global.Gallery product={product} />
          <div className={styles.hero_column}>
            <DetailsComponents.Global.DetailsController product={product} /> 
            <DetailsComponents.Global.Description product={product} /> 
            <DetailsComponents.Global.DetailsFooter /> 
          </div>
        </div>
        {product.id}
      </GlobalComponents.LayoutWithFooter>
  )
}


export default Details


export async function getStaticPaths() {
  try {
    const paths = products.map((p: any) => ({
      params: {
        id: p.id.toString(),
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