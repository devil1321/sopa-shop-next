import React, { useEffect } from 'react'
import styles from '@/styles/components/details/global/gallery.module.scss'

interface GalleryProps{
    product:any;
}

const Gallery:React.FC<GalleryProps> = ({product}) => {

  const handleWidth = () =>{
    const images = document.querySelectorAll('.details__gallery-img') as NodeListOf<HTMLImageElement>
    if(images.length > 1){
      images.forEach((img:HTMLImageElement) => img.style.width = 'calc(50% - 2px)')
    }else{
      images.forEach((img:HTMLImageElement) => img.style.width = '100%')
    }
  }

  useEffect(()=>{
    handleWidth()
  },[product])

  return (
    <div className={styles.gallery}>
      {product?.details_images?.map((img:string) => <img className="details__gallery-img" key={img} src={img} alt="gallery-image" />)}
    </div>
  )
}

export default Gallery
