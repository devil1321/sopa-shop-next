import React, { useEffect,useState } from 'react'
import products from '@/public/db/products.json'
import { GlobalComponents } from '@/components/global'
import { DetailsComponents } from '@/components/details'
import styles from '@/styles/pages/details.module.scss'
import { HomeComponents } from '@/components/home'

const Details:React.FC<any> = ({params}) => {
  const [product,setProduct] = useState<any>({})


  const model_000_regex = /Model 000/
  const model_001_regex = /Model 001/

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
        {model_000_regex.test(product.name) && 
          <React.Fragment>
           <DetailsComponents.Model_000.FeatureGallery />
           <HomeComponents.Logos title='“These are the most thoughtfully designed sneakers on the market.”' />
          </React.Fragment>}
        {model_001_regex.test(product.name) && 
          <React.Fragment>
            <DetailsComponents.Model_001.Introduce />
            <DetailsComponents.Model_001.Video />
            <DetailsComponents.Model_001.CardsComponents.Cards />
            <DetailsComponents.Model_001.Feature />
            <DetailsComponents.Model_001.Carousel />
            <DetailsComponents.Model_001.SecondFeature />
          </React.Fragment>        
        }
        <DetailsComponents.Global.SecondGallery />
        <DetailsComponents.Global.CommentsComponents.Comments />
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