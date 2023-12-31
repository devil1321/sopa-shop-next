import React, { useEffect, useState } from 'react'
import styles from '@/styles/components/details/global/details-controller.module.scss'
import handleRating from '@/lib/handle-rating';
import { off } from 'process';
import Link from 'next/link';

interface DetailsControllerProps{
    product:any;
    products:any;
    cart:any;
    shopActions:any;
}

const DetailsController:React.FC<DetailsControllerProps> = ({product,products,cart,shopActions}) => {

  const [activeColor,setActiveColor] = useState<any>({})
  const [isMenu,setIsMenu] = useState<boolean>(false)
  const [size,setSize] = useState<string>(()=>{
    if(product?.sizes){
        if(product?.sizes[0]){
            return product?.sizes[0]
        }else{
            return false
        }
    }
  })

  const handleActiveColor = (e:any) =>{
    const colors = document.querySelectorAll('.details__controller-color') as NodeListOf<HTMLDivElement>
    colors.forEach(c => c.classList.remove('details__controller-color-active'))
    e.target.classList.add('details__controller-color-active')
  }

  const handleActiveGender = (e:any) =>{
    const genders = document.querySelectorAll('.details__controller-gender') as NodeListOf<HTMLDivElement>
    genders.forEach(c => c.classList.remove('details__controller-gender-active'))
    e.target.classList.add('details__controller-gender-active')
  }

  useEffect(()=>{
    if(product?.sizes){
        setSize(product.sizes[0])
    }
    if(product?.colors){
      setActiveColor(product.colors[0])
    }
  },[product])

  return (
    <div className={styles.controller}>
      <h2 className='p1'>{product?.name}</h2>
      <div className={styles.stars}>
        {handleRating(product).map((rating:string) => <img key={rating} src="/assets/icons/star.png" alt="star" />)}
        <span className='p5'>{product?.rating} <span>&#40;{product?.rating_count}&#41;</span> </span>
      </div>
      <div className={styles.colors}>
        <h3 className='p5'>Color: {activeColor.name}</h3>
        {product?.colors?.map((c:any,index:number)=>
            <div 
                key={c.color} 
                className={`${styles.color} ${index === 0 && 'details__controller-color-active'} details__controller-color`}
                onClick={(e)=>{
                    handleActiveColor(e)
                    setActiveColor(c)
                }}
            >
            <div style={{backgroundColor:c.color}}></div></div>)}
      </div>
      <div className={styles.select}>
        <h3 className="p5">Select Gender & Size <span>Size Guide <img src="/assets/icons/alert.png" /></span></h3>
        <div className={styles.select_gender}>
            <div className="details__controller-gender details__controller-gender-active p2" onClick={(e)=>handleActiveGender(e)}>Women</div>
            <div className="details__controller-gender p2" onClick={(e)=>handleActiveGender(e)}>Men</div>
        </div>
        {size && 
            <div className={styles.sizes}>
                <div className={styles.select_size} onClick={()=>setIsMenu(!isMenu)}>
                    <span className='p3'>{size}</span>
                    <img src="/assets/icons/chevron-down.png" alt="chevron-down" />
                </div>
                {isMenu && 
                    <div className={styles.sizes_menu}>
                        {product?.sizes?.map((s:string | number) => 
                            <div 
                                key={s} 
                                className='p5' 
                                onClick={()=>{
                                    setSize(s as string)
                                    setIsMenu(false)
                                }}
                            >{s}</div>)}
                    </div>}
            </div>}
      </div>
      {!product?.inCart 
        ? <button onClick={()=>shopActions.handleAddProduct(product.id,cart,products,activeColor.color,size)} className={styles.button}>Add To Bag {product?.price}$</button>
        : <Link href="/gift-card">
            <button className={`${styles.button} details__button-in-cart`}>In Cart</button>
          </Link>}
        <div className={styles.foot}>
            <h3 className='p5'>4 payments of $36.25 using <span>Shop <img src="/assets/icons/pay.png" alt="pay" />Or afterpay</span></h3>
            <p className='p5'>Free shipping on orders over $30 & free returns in the US</p>
        </div>
    </div>
  )
}

export default DetailsController
