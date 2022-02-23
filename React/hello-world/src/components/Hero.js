import React from 'react'

function Hero({heroName}) {
    if(heroName=='JOKER') throw("Not a hero");
    return (
    <div>{heroName}</div>
  )
}

export default Hero