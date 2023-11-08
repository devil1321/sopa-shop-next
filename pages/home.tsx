import React from 'react'
import { GlobalComponents } from '@/components/global'
import styles from '@/styles/pages/home.module.scss'
import { HomeComponents } from '@/components/home'

import fs from 'fs/promises';
import path from 'path';

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
  // Get the absolute path to the JSON file in the public folder
  const filePath = path.join(process.cwd(), 'public', 'db' ,'products.json');

  try {
    // Read the contents of the JSON file
    const fileContents = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContents);

    return {
      props: {
        products: data,
      },
    };
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return {
      props: {
        products: [],
      },
    };
  }
}