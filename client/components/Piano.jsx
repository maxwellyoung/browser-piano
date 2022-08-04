import React  from 'react'
import Key from './Key'
import notes from './constants'
import { motion } from 'framer-motion'
import { useSound } from 'use-sound'

// import tuneOne from '../sounds/but-tweet.mp3'
import C from '../sounds/piano-C.mp3'
import cops from '../sounds/cops.mp3'
import phonecall from '../sounds/phone-call.mp3'
import levelup from '../sounds/levelup.mp3'
import scream from '../sounds/mario-scream.mp3'
import imtired from '../sounds/mario-imtired.mp3'
import bass from '../sounds/bass-drop.mp3'

const Piano = (props) => {

  let [playTuneOne] = useSound(C)
  let [playTuneTwo] = useSound(bass)
  let [playTuneThree] = useSound(cops)
  let [playTuneFour] = useSound(phonecall)
  let [playTuneFive] = useSound(scream)
  let [playTuneSix] = useSound(levelup)
  let [playTuneSeven] = useSound(imtired)

  // let noteFlat = this.noteFlat(this.props.note)
  console.log(typeof notes)
  function ColorChangeforD() {
    props.setColor('gradient')
  }

  function ToggleAnimation() {
    props.setAnimation(!props.animation)
  }

  function ColorChangeforE(){
     props.setColor(`#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, 0)}`,
    ) 
  }

  function ColorChangeforGf(){
    props.setColor('rainbowgradient')
  }

  function setRandomColors() {
    let randomHex = () => 
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

    let interval = setInterval(() => {
      props.setColor(randomHex())
    }, 50) // 0.05s change
    
    setTimeout(() => {
      clearInterval(interval)
    }, 5000) // 5 seconds
  }

  let collectionOfHandlers = {
    'd':ColorChangeforD,
    'e':ColorChangeforE,
    'gf': ColorChangeforGf,
    'b':setRandomColors,
    'c': playTuneOne,
    'f': ToggleAnimation,
    'ef': playTuneThree,
    'g': playTuneSix,
    'bf': playTuneFour,
    'a': playTuneFive,
    'af': playTuneTwo,
    'df': playTuneSeven
  }

  let keys = notes.map((note, index) => {
    if (typeof collectionOfHandlers[note] === 'function') {
      // here if function exists
      let handler = collectionOfHandlers[note]
      // `handler` happens on this Key when clicked
      return (
        <Key
        animation = {props.animation}
        key = {index}
        note = {note}
        onClick={handler}
        />
      )
    } else {
      // nothing happens on this Key when clicked
      return ( 
        <Key
        key = {index}
        note = {note}
        />
      )
    }
  }) // [<Key />, <Key />, ...]

  return (
    <motion.div className='piano'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.99 }}>
      {/* // whileFocus={{result} */}
     {keys}
    </motion.div>
  )
}

export default Piano
