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
      <HomeComponents.Hype />
      <HomeComponents.IntroduceComponents.Introduce products={products} />
      <HomeComponents.FeatureItem img="/assets/home/feature-1.png" title="SOPA" button="Our Story" text="SOPA was born out of a simple yet powerful concept - creating a shoe that you would choose to wear every single day, and they've brought this idea to life in the bustling city of New York." />
      <HomeComponents.FeatureItem img="/assets/home/feature-2.png" title="HUMANS OF NEW YORK" button="Featured" text="Read our co-founder Sidra’s story about struggle, chasing dreams, and making shoes." />
      <HomeComponents.Testimonials />
    </GlobalComponents.LayoutWithFooter>
  )
}

export default Home

export async function getStaticProps() {
  // Fetch data from an API, database, or any other source
  const response = await fetch('/public/db/products.json');
  const data = await response.json();

  return {
    props: {
      products:data,
    },
  };
}