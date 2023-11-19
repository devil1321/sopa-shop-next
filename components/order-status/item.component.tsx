import React from 'react'
import styles from '@/styles/components/order-status/item.module.scss'

import { useSelector,useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ShopActions from '@/controller/action-creators/shop.action-creators'
import { State } from '@/controller/reducers/root.reducer'

interface ItemProps{
    product:any;
}

const Item:React.FC<ItemProps> = ({product}) => {

  const { cart, products } = useSelector((state:State) => state.shop)
  const shopActions = bindActionCreators(ShopActions,useDispatch())

  return (
    <div className={styles.item}>
      <div className={styles.img}>
        <img src={product.details_images[0]} alt="product-image" />
      </div>
      <div className={styles.details}>
        <h3 className="h8">{product.name}</h3>
        <p className="h8">${product.price * product.quantity}</p>
        <p className='p5'>{product.colors[0].name}</p>
        <div className={styles.color} style={{backgroundColor:product.colors[0].color}}></div>
        <div className={styles.quantity}>
          <p className="p5">Items</p>
          <div className={styles.quantity_controller}>
            <div className='p4' onClick={()=>{
              shopActions.handleCartQuantity(product.id,cart,products,-1)
              shopActions.handleSummary(cart)
            }}>-</div>
            <div className='p4'>{product.quantity}</div>
            <div className='p4' onClick={()=>{
              shopActions.handleCartQuantity(product.id,cart,products,1)
              shopActions.handleSummary(cart)
            }}>+</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
