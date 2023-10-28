import React from 'react'
import { GlobalComponents } from '@/components/global'
import styles from '@/styles/pages/faq.module.scss'
import { FaqComponents } from '@/components/faq'

const Faq = () => {
  return (
    <GlobalComponents.LayoutWithFooter className={styles.faq} title='Faq' meta={[]}>
      <FaqComponents.Form />
      <div className={styles.items}>
        <FaqComponents.Item 
            title="Top questions" 
            paragraphs={[
                'Top questions',
                'How do I exchange/return my Atoms shoes?',
                'What is the return policy?',
                'When will my order be shipped? (Order status/ETA)',
                'What size should I order?'
            ]} 
        />
        <FaqComponents.Item 
            title="Shoes" 
            paragraphs={[
                'Can I change the insoles?',
                'How do I clean my Atoms shoes?',
                'Comparing 000 and 001 - what is the difference between the Model 000 and Model 001?',
                'Do Atoms come in various widths for wide or narrow feet?',
                'When will you release more colors?'
            ]} 
            withLink={true}
        />
        <FaqComponents.Item 
            title="Ordering" 
            paragraphs={[
                'Do you ship internationally?',
                'Can I buy Atoms at a store?',
                'How did I pay for my order?',
                'How do I find my order number?',
                'Is there a minimum/maximum order?'
            ]} 
            withLink={true}
        />
        <FaqComponents.Item 
            title="Shipping" 
            paragraphs={[
                'Which countries do you ship to?',
                'International Shipping',
                'How do I stop or hold a delivery?',
                'How do I find my tracking number?',
                'Can you hold my order till (date)?'
            ]} 
            withLink={true}
        />
        <FaqComponents.Item 
            title="Returns and Exchanges" 
            paragraphs={[
                'I lost the return label, can I get a new one?',
                'My return label isn\'t showing up when I click it.',
                'When will I receive my refund?',
                'How much is it to return a pair of Atoms shoes?',
                'I received the incorrect order'
            ]} 
            withLink={true}
        />
        <FaqComponents.Item 
            title="Gifting" 
            paragraphs={[
                'What if I don\'t know their size?',
                'How to get and claim a referral discount',
                'Can I return or exchange a gift order?',
                'How do I redeem my gift card?',
                'Can I gift someone a pair of Sopa?'
            ]} 
            withLink={true}
        />
        <FaqComponents.Item 
            title="Customer Experience" 
            paragraphs={[
                'How to get a discount with ID.me?',
                'Hello',
                'Do you have any sales, coupons, discount codes, promo codes, or referral programs?',
                'I can\'t find what I am looking for!',
            ]} 
        />
        <FaqComponents.Item 
            title="SOPA, Inc." 
            paragraphs={[
                'Corporate Social Responsibility',
                'Where are Sopa made?',
                'I am looking to speak with someone in Public Relations',
                'How do I work at Sopa?',
                'What is it like working at Sopa?'
            ]} 
            withLink={true}
        />
        <FaqComponents.Item 
            title="Website Data Security and Privacy Policy" 
            paragraphs={[
                'How do I unsubscribe from emails?',
                'What data is collected?',
            ]} 
        />
      </div>
      <FaqComponents.Footer />
    </GlobalComponents.LayoutWithFooter>
  )
}

export default Faq
