import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { jsonLD } from '../public/jsonLD'

import News from '../components/_news'
import Footer from '../components/_Footer'



export default function Home() {

  const phone = "5215546371510"
  const whatsappMessage = `https://api.whatsapp.com/send/?phone=${phone}&text=Me gustaria tener información`

  return (
    <div lang="es_MX" className={styles.container}>
      
      <Head>
        <title>Grupo Intecsa</title>
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD)}}
        ></script>
        <meta name="description" content="Empresa dedicada a la venta, construcción, ingeniería, ejecución de obra eléctrica para el sector industrial, comercial y de edificios"></meta>
        <meta name="description" content="Integradores de autorizados ABB"></meta>
        <meta property="og:locale" content="es_MX" />
        <meta property="og:title" content="Grupo Intecsa | Venta ABB, Construcción, Energía, Instalaciónes Eléctricas, Canalización Eléctrica"/>
        <meta property="og:description" content="Somos empresa dedicada a la fabricación, comercialización y montaje de instalaciones eléctricasen en industrias, comercios y edificios."/>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.navbar}>
      <div>
        {/* <h1 className={styles.logo_title}>Grupo Intecsa</h1> */}
        <img src="/web-logo.webp" className={styles.logo_title} alt="Síguenos en Facebook"/>
      </div>
      <div className={styles.row}>

        <a href={whatsappMessage}
        target="_blank"
        rel="noopener nofollow"
        aria-label="Mandanos un whatsapp"
        >
        <img src="/social/whatsapp.svg" className={styles.imgnav} alt="Síguenos en Facebook"/>
        </a>

        <a href="https://www.facebook.com/Grupo-Intecsa-Mx-Oficial-213945636173987/"
        target="_blank"
        rel="noopener nofollow"
        aria-label="Sígenos en facebook"
        >
        <img src="/social/facebook.svg" className={styles.imgnav} alt="Síguenos en Facebook"/>
        </a>


        <a href="https://www.instagram.com/itamxoficial/?hl=es-la"
        target="_blank"
        rel="noopener nofollow"
        aria-label="Sígenos en instagram"
        >
        <img src="/social/insta.svg" className={styles.hidden} alt="Síguenos en Instragram"  />
        </a>

        <a href="https://www.linkedin.com/company/grupo-intecsa/about/"
        target="_blank"
        rel="noopener nofollow"
        aria-label="Nuestra empresa en linkedin"
        >
        <img src="/social/linkedin.svg" className={styles.hidden} alt="Síguenos en Linkedin"  />
        </a>

        <a href="https://www.youtube.com/channel/UCyjWF1Qa_ehQVYOHX_RF84w/null"
        target="_blank"
        rel="noopener nofollow"
        aria-label="Cómo llegar"
        >
        <img src="/social/youtube.svg" className={styles.imgnav} alt="Síguenos en Youtube" />
        </a>
        
        <a href="https://www.google.com/maps?ll=19.38668,-99.223983&z=16&t=m&hl=es&gl=MX&mapclient=embed&q=Ra%C3%BAl+Z%C3%A1rate+Machuca+11+Cuevitas+%C3%81lvaro+Obreg%C3%B3n+01220+Ciudad+de+M%C3%A9xico,+CDMX"
        target="_blank"
        rel="noopener nofollow"
        aria-label="Cómo llegar"
        >
        <img src="/social/maps.svg" className={styles.imgnav} alt="Encuentranos en MAPS"  />
        </a>
      </div>
        
      
      </nav>
      <main className={styles.main}>

      <h1 className={styles.title}>
          Grupo Intecsa
      </h1>

      <p className={styles.code}>TRANSFORMAMOS LA ENERGÍA EN LUZ...Y LA LUZ EN ENERGÍA TAMBIÉN.</p>
      
        <div className={styles.grid}>

        <a
            href="/about"
            className={styles.card}
          >
            <div className={styles.cardHeader}>
            {/* <FontAwesomeIcon icon={faInfo} className={styles.fonts}/> */}
            <img src="/info.svg" alt="conoce nuestras empresas"/>
            </div>
            
            <div>
              <h3 className={styles.center}>Empresa </h3>
              <p>
                Empresa dedicada a la fabricación, comercialización y montaje de instalaciones eléctricas en industrias, comercios y edificios.
              </p>
            </div>
          </a>
            
          <a href="https://www.instagram.com/itamxoficial/?hl=es-la" className={styles.card}>
            <div className={styles.cardHeader}>
            {/* <FontAwesomeIcon icon={faCameraRetro} className={styles.fonts}/> */}
            <img src="/like.svg" alt="conoce nuestras empresas"/>
            </div>
            
            <div>
              <h3 className={styles.center}>Galería</h3>
              <p>
                Con imagenes y videos; te mostramos los retos que hemos tenido a lo largo de más de 25 años de experiencia.
              </p>
            </div>
          </a>

          <a href="https://itamx.com/#/dashboard" className={styles.card}>
          <div className={styles.cardHeader}>
            {/* <FontAwesomeIcon icon={faShoppingBag} className={styles.fonts}/> */}
            <img src="/venta.svg" alt="sitio de venta de material eléctrico" className={styles.imgencard}/>
            </div>
            
            <div>
            <h3 className={styles.center}>Venta</h3>
              <p>
              Sitio exclusivo donde puedes adquirir: productos ABB, registros eléctricos, Canalizaciones y soportería, matérial eléctrico Onka.
              </p>
            </div>
          </a>

          <a
            href="https://forms.monday.com/forms/embed/608067760034e1ac1f86e10392668e8b?r=use1"
            className={styles.card}
          >
            <div className={styles.cardHeader}>
            {/* <FontAwesomeIcon icon={faPhone} className={styles.fonts}/> */}
            <img src="/contacto.svg" alt="imagen de contacto"/>
            </div>

            <div>
              <h3 className={styles.center}>Contacto </h3>
              <p>
                ¿Quieres una cotización?, contamos con la capacidad técnica y humana para desarrollar cualquier tipo de
                trabajo eléctrico.
              </p>
            </div>
          </a>

        </div>
      </main>
      <section>
        <News styles={styles} />
      </section>
        <Footer styles={styles} />
      
    </div>
    
  )
}
