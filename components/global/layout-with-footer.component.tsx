import React from 'react'
import Nav from './nav.component';
import Footer from './footer.component';
import Cart from './cart.component';

interface LayoutProps{
    className:string;
    title:string;
    meta:any[]
    children:React.ReactNode
}

const LayoutWithFooter:React.FC<LayoutProps> = ({className,title,meta,children}) => {
  return (
    <div className='container'>
      <Cart />
      <Nav />
      <main className={className}>
        {children}
      </main>
      <Footer />
    </div>
  )
}


export default LayoutWithFooter
