import { useState, useEffect, useRef } from 'react'

import {

  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton

} from '@chakra-ui/react'

const ModalEntrada = () => {

  const refVideoTag = useRef()

  const [ onPlay, setOnPlay ] = useState(false)
  const handleClose = () => setOnPlay(!onPlay)


  const closeVideo = () => {
    if(refVideoTag.current && refVideoTag.current.currentTime === 26.027){
      handleClose()
    }
  }

  setInterval(closeVideo, 1000)



  useEffect(() => {
    // revisamos la fecha 
    let isView = localStorage.getItem("Video-visto")
    
    if(isView){

      let secondsDiff = ( Date.now() - isView ) / 1000
      Math.floor(secondsDiff) > 3600 && localStorage.removeItem('Video-visto')

    }else if(!isView){
      setOnPlay(true)
      localStorage.setItem("Video-visto",  Date.now() )
    }

  },[])

  return(
    <Modal
      size="6xl"
      isCentered
      blockScrollOnMount={false}  
      isOpen={onPlay}
      onClose={handleClose}
    >
      <ModalOverlay />
      <ModalContent zIndex={800} >
      <ModalCloseButton zIndex={900} style={{ color: "white"}} />
        
          <video autoPlay={true} controls="true" ref={refVideoTag} >
            <source src="/video/videoModal.m4v" type="video/x-m4v"/>
          </video>

      </ModalContent>

    </Modal>
  )
}


export default ModalEntrada