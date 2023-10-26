import React from 'react'
import styles from '@/styles/components/details/global/description.module.scss'

interface DescriptionProps{
    product:any;
}

const Description:React.FC<DescriptionProps> = ({product}) => {
  return (
    <div className={styles.description}>
      <p className="p4">{product.details}</p>
    </div>
  )
}

export default Description
