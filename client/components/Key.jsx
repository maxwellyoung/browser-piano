import React from 'react'
import { motion } from 'framer-motion'


const Key = (props) => {
  // const [count, setCount] = useState(0)
  
  const noteIsFlat = (note) => {
    return note.length > 1
  }
  const [isActive, setIsActive] = React.useState(false);

  
  let keyClassName = "key"

  // const noteIsFlat = noteIsFlat(props.note)
  if (noteIsFlat(props.note)) {
    keyClassName += "-flat";
  } else {
    keyClassName;
    
  }

  function onContextMenuHandler(evt) {
    evt.preventDefault()
    setIsActive(!isActive)
  }

  if (props.animation === true) {
    return (
      <motion.div className={keyClassName} onClick={props.onClick}  onContextMenu={onContextMenuHandler}
      >
        
  
    <motion.div 
          // animate={{
          // 
          
          // transitionEnd: {
          //   display: "none",
  
     
      animate={{
        scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 360, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
      transition={{ duration: 2, repeat: Infinity }}

      className='key-text'>
        {!noteIsFlat(props.note) ? props.note.toUpperCase() : undefined} 
      </motion.div>
  </motion.div>
  )
  } else {
    return (
      <div className={keyClassName} onClick={props.onClick}>
      <div className='key-text'>
        {!noteIsFlat(props.note) ? props.note.toUpperCase() : undefined} 
      </div>
      </div>
    )
    
  }
}



export default Key
