import '../styles/globals.css'
import "../styles/politicas.css"

import { ChakraProvider } from '@chakra-ui/react'
import { LocalBusinessJsonLd, CorporateContactJsonLd } from 'next-seo'
import LOCAL from '../seo/local'
import CORP from '../seo/corp'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <LocalBusinessJsonLd {...LOCAL} />
      <CorporateContactJsonLd {...CORP } />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
