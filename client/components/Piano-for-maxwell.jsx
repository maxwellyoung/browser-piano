import React, { useState } from 'react'
import Key from './Key'
import notes from './constants'

import useSound from 'use-sound'

import tuneOne from '../sounds/but-tweet.mp3'
import C from '../sounds/piano-C.mp3'

const PianoForMaxwell = () => {
  let [playTuneOne] = useSound(C)
  let [playTuneTwo] = useSound(tuneOne)

  let collectionOfHandlers = {
    'c': playTuneOne,
    'e': playTuneTwo,
  }

  let keys = notes.map((note, index) => {
    if (typeof collectionOfHandlers[note] === 'function') {
      // here if function exists
      let handler = collectionOfHandlers[note]
      // `handler` happens on this Key when clicked
      return (
        <Key
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
    <div className='piano'>
     {keys}
    </div>
  )
}

export default PianoForMaxwell
