import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Piano from './Piano'

import { useSound } from 'use-sound'

import tuneOne from '../sounds/but-tweet.mp3'

const App = () => {
  const [count, setCount] = useState(0)

  const [playThisTune] = useSound(tuneOne)
  const [backgroundColor, setBackgoundColor] = useState(null)
  
  let myStyle ={}
  if(backgroundColor !== null){
    if (backgroundColor === 'rainbowgradient') {
      myStyle.backgroundImage = 'linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)'
    } else {
      myStyle.backgroundColor=backgroundColor
    }
    if (backgroundColor === 'gradient') {
      myStyle.backgroundImage = 'linear-gradient(#e66465, #9198e5)'
    } else {
      myStyle.backgroundColor=backgroundColor
    }
  }

  const [popKeys, setPopKeys] = useState(false)

  

  return (
    <div style={myStyle}>
      <Piano setColor={setBackgoundColor} setAnimation={setPopKeys} animation={popKeys}/>
      <h1>Count: {count}</h1>

      <div className='btn-container'>
        <button onClick={() => setCount(count + 1)} className='button-39'>Click me!</button>
        <button onClick={playThisTune} className='button-39'>Play the tune</button>
      </div>
      <Routes>
        <Route path='/test' element={<h1>TEST ROUTE</h1>} />
      </Routes>
   
    </div>
  )
}

export default App
