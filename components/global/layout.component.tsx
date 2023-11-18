import React from 'react'
import Nav from './nav.component';
import Cart from './cart.component';

interface LayoutProps{
    className:string;
    title:string;
    meta:any[]
    children:React.ReactNode
}

const Layout:React.FC<LayoutProps> = ({className,title,meta,children}) => {
  return (
    <div className='container'>
      <Cart />
      <Nav />
      <main className={className}>
        {children}
      </main>
    </div>
  )
}


export default Layout
