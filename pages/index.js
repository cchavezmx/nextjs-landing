import Head from 'next/head'
import Footer from '../components/_Footer.jsx'
import Navigation from '../components/_Navigation'
import SeccionesCard from '../components/_SeccionesCard'
import ModalEntrada from '../components/_ModalEntrada'

import HeaderWave from '../components/HeaderWave'


export default function Home() {
  
  return (
    <div lang="es_MX" className="styles">

      <Head>
      <title>Grupo Intecsa</title>
        <link rel='alternate' href='https://grupointecsa.com/' hrefLang='x-default' />
        <link rel='alternate' href='https://grupointecsa.com/es-CA' hrefLang='ca-es' />
        <link rel='alternate' href='https://grupointecsa.com/es-GA' hrefLang='gl-es' />
        <link rel='alternate' href='https://grupointecsa.com/es-EU' hrefLang='eu-es' />
        <link rel='alternate' href='https://grupointecsa.com/es-ES' hrefLang='es-es' />
        <meta name="description" content="Empresa dedicada a la venta, construcción, ingeniería, ejecución de obra eléctrica para el sector industrial, comercial y de edificios"></meta>
        <meta name="description" content="Integradores de autorizados ABB"></meta>
        <meta property="og:locale" content="es_MX" />
        <meta property="og:title" content="Grupo Intecsa | Venta ABB, Construcción, Energía, Instalaciónes Eléctricas, Canalización Eléctrica"/>
        <meta property="og:description" content="Somos empresa dedicada a la fabricación, comercialización y montaje de instalaciones eléctricasen en industrias, comercios y edificios."/>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar">
          <Navigation />
          <ModalEntrada />
      </nav>
      <main className="container">
  
        <HeaderWave title="Grupo Intecsa" subtitulo="CREATIVIDAD EN ELECTRICIDAD" />
    
    <div>
        <SeccionesCard />
    </div>
      </main>
      <section>
        {/* <News { /> */}

      </section>
        <Footer />
      
    </div>
    
  )
}
