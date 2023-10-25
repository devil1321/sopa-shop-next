import React from 'react'
import styles from '@/styles/components/details/global/gallery.module.scss'

interface GalleryProps{
    product:any;
}

const Gallery:React.FC<GalleryProps> = ({product}) => {
  return (
    <div className={styles.gallery}>
      {product?.details_images?.map((img:string) => <img key={img} src={img} alt="gallery-image" />)}
    </div>
  )
}

export default Gallery
