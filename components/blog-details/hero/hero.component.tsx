import React from 'react'
import Intro from './intro.component'
import Foot from './foot.component'

const Hero:React.FC<{img:string}> = ({img}) => {
  return (
    <div>
        <Intro img={img} />
        <Foot />
    </div>
  )
}

export default Hero
