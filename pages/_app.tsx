import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import '../styles/styles.scss'


import store from '../controller/store'
import { Provider } from 'react-redux';

import { useInitialState } from '@/hooks/useInitialState';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ShopActions from '../controller/action-creators/shop.action-creators'
import { State } from '@/controller/reducers/root.reducer';

function MyApp(props: AppProps) {

  return (
      <Provider store={store}>
        <Redux {...props} />
      </Provider>
  );
}

function Redux({ Component, pageProps }: AppProps) {

  const dispatch = useDispatch()
  const shopActions = bindActionCreators(ShopActions,dispatch)
  const  { products ,cart, summary }  = useSelector((state:State) => state.shop)
  const { appData } = useInitialState()

  useEffect(()=>{
    shopActions.handleSetProducts(appData)
    shopActions.handleSummary(cart)
  },[appData])
  
  return (
    <div className='main-container'>
     <Component {...pageProps} 
      products={products}
      cart={cart}
      summary={summary}
      shopActions={shopActions}
     />
    </div>
  )
}

export default MyApp;