import { useState, useEffect } from 'react'

import {

  Modal,
  ModalOverlay,
  ModalContent

} from '@chakra-ui/react'

const setCookieView = (cName, cValue, expDays ) => {
  
  let date = new Date()
  date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000 ))
  const expires = "expires=" + date.toUTCString()
  let a = document.cookie = `${cName} = ${cValue} + "; " ${expires} "; path=/"`

  console.log(a)

}

let getCookie = (cName) => {
  const name = `${cName} = `
  
  const cDecoded = decodeURIComponent(document.cookie)

  console.log(cDecoded)

  const cArr = cDecoded.split('; ')
  let res
  cArr.forEach(val => {
    if(val.indexOf(name) === 0 ) res = val.substring(name.length)
  })

  return res
}

const ModalEntrada = () => {

  const [ onPlay, setOnPlay ] = useState(false)
  const handleClose = () => setOnPlay(!onPlay)

  // setamos la cookie
  useEffect(() => {
    setCookieView('VideoOk', 10 , 1 )
  },[])
  
  useEffect(() => {
    let a = getCookie('VideoOk')
    console.log(a)
  },[])

  return(
    <Modal
      blockScrollOnMount={false}  
      isOpen={onPlay}
      onClose={handleClose}
    >
      <ModalOverlay />
      <ModalContent>
        <h1>Seré un Modal</h1>
      </ModalContent>

    </Modal>
  )
}


export default ModalEntrada