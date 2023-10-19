import React from 'react'
import styles from '@/styles/components/global/footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.column}>
        <Link href="/home">
          <img src="/assets/logos/sopa-logo-white.png" alt="logo" />
        </Link>
        <p className='p5'>Stay informed about Sopa with our latest releases and founder news.</p>
        <button>Enter email here for updates</button>
      </div>
      <div className={styles.column}>
        <h3 className='p4'>Products</h3>
        <Link className="p5" href="/details/[id]" as="details/1">Model 000</Link>
        <Link className="p5" href="/details/[id]" as="details/2">Model 001</Link>
        <Link className="p5" href="/details/[id]" as="details/3">Laces</Link>
        <Link className="p5" href="/details/[id]" as="details/4">Masks</Link>
        <Link className="p5" href="/details/[id]" as="details/4">No-show Socks</Link>
        <Link className="p5" href="/details/[id]" as="details/5">Crew Socks</Link>
        <Link className="p5" href="#">Gift Cards</Link>
      </div>
      <div className={styles.column}>
        <h3 className='p4'>Support</h3>
        <Link className="p5" href="/help">Help Center</Link>
        <Link className="p5" href="/faq">FAQs</Link>
        <Link className="p5" href="/cart">Order</Link>
        <Link className="p5" href="/order-status">Order Status</Link>
        <Link className="p5" href="/returns-exchanges">Returns & Exchanges</Link>
        <Link className="p5" href="/contact">Contact Us</Link>
      </div>
      <div className={styles.column}>
        <h3 className='p4'>Everything Else</h3>
        <Link className="p5" href="/community">Community</Link>
        <Link className="p5" href="/why-sopa">Why Sopa</Link>
        <Link className="p5" href="/about">About </Link>
        <Link className="p5" href="/discount">Discount Program</Link>
        <Link className="p5" href="/blog">Sopa Blog</Link>
        <Link className="p5" href="/ambassadors">Sopa Ambassadors</Link>
      </div>
      <div className={styles.column}>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <img src="/assets/icons/twitter.png" alt="twitter" />
            <span className="p5">Twitter</span>
          </div>
          <div className={styles.icon}>
            <img src="/assets/icons/instagram.png" alt="instagram" />
            <span className="p5">Instagram</span>
          </div>
          <div className={styles.icon}>
            <img src="/assets/icons/facebook.png" alt="facebook" />
            <span className="p5">Facebook</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
