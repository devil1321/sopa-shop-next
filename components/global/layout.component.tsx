import React from 'react'
import Nav from './nav.component';

interface LayoutProps{
    className:string;
    title:string;
    meta:any[]
    children:React.ReactNode
}

const Layout:React.FC<LayoutProps> = ({className,title,meta,children}) => {
  return (
    <div>
      <Nav />
      <main className={className}>
        {children}
      </main>
    </div>
  )
}


export default Layout
