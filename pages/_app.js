import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { LocalBusinessJsonLd, CorporateContactJsonLd } from 'next-seo'
import LOCAL from './config/seo/local'
import CORP from './config/seo/corp'

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
