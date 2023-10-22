import { GlobalComponents } from '@/components/global'
import React, { useEffect,useState } from 'react'
import products from '@/public/db/products.json'

const Details:React.FC<any> = ({params}) => {
  const [product,setProduct] = useState<any>({})

  const handleProduct = () =>{
    const item = products.find((p:any) => p.id === Number(params.id))
    setProduct(item)
  }

  useEffect(()=>{
    handleProduct()
  },[params])

  return (
      <GlobalComponents.LayoutWithFooter className='details' title='Details' meta={[]}>
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