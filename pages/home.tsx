import React from 'react'
import { GlobalComponents } from '@/components/global'
import styles from '@/styles/pages/home.module.scss'
import { HomeComponents } from '@/components/home'

const Home:React.FC<{products:any[]}> = ({products}) => {
  console.log(products)
  return (
    <GlobalComponents.LayoutWithFooter className={styles.home} title='Home' meta={[]}>
      <HomeComponents.Hero heading="Step inside, for comfort and magic await you." button="Shop Now" />
      <HomeComponents.Logos title="“These are the most thoughtfully designed sneakers on the market.”" />
      <HomeComponents.ProductsComponents.Model_000 product={products[0]} />
      <HomeComponents.ProductsComponents.Products products={products} />
    </GlobalComponents.LayoutWithFooter>
  )
}

export default Home

export async function getStaticProps() {
  // Fetch data from an API, database, or any other source
  const response = await fetch('http://localhost:3000/db/products.json');
  const data = await response.json();

  return {
    props: {
      products:data,
    },
  };
}