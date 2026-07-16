import React from "react";
import { useState } from 'react'

function Card({word}) {

  let [count, setCount] = useState(1)

  let Addvalue = () => {
    setCount(count + 1)

  }

  let Removevalue = () => {
    if (count > 0) {
      setCount(count - 1)
    }
    else {
      setCount(0)
    }
  }

let reset = ()=>{
setCount(0)
}

  return ( 
    <>
      <h1>Say "{word}"</h1>
      <h2>click count is :- {count}</h2> 
      <div className='flex item-center gap-6  justify-center '>  
      <button  className='bg-white text-black size-20 rounded-full' onClick={Addvalue}>Count+</button>
      <br />
      <button className='bg-white text-black size-20 rounded-full' onClick={Removevalue}>Count-</button>
      <br />
      <button  className='bg-white text-black size-20 rounded-full'onClick={reset}>reset</button>
      </div>
    </>
  )
}

export default Card