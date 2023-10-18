import React from 'react'
import Nav from './nav.component';
import Footer from './footer.component';

interface LayoutProps{
    className:string;
    title:string;
    meta:any[]
    children:React.ReactNode
}

const LayoutWithFooter:React.FC<LayoutProps> = ({className,title,meta,children}) => {
  return (
    <div className={className}>
      <Nav />
      {children}
      <Footer />
    </div>
  )
}


export default LayoutWithFooter
