import Link from 'next/link'
import { Fragment } from "react"

const Navigation = () => {
  
  const phone = "5215546371510"
  const whatsappMessage = `https://api.whatsapp.com/send/?phone=${phone}&text=Me gustaria tener información`

  return(
    <Fragment>

          <div>
            {/* <h1 className={styles.logo_title}>Grupo Intecsa</h1> */}
            <Link href="/">
            {/* <div className="logo_title"/> */}
            <img src="/web-logo.webp" className="logo_title btn--global" alt="Síguenos en Facebook"/>
            </Link>
          </div>
          <div className="row">

            <a href={whatsappMessage}
            target="_blank"
            rel="noopener follow"
            aria-label="Mandanos un whatsapp"
            >
            <img src="/social/whatsapp.svg" className="imgnav" alt="Síguenos en Facebook"/>
            </a>

            <a href="https://www.facebook.com/Grupo-Intecsa-Mx-Oficial-213945636173987/"
            target="_blank"
            rel="noopener follow"
            aria-label="Sígenos en facebook"
            >
            <img src="/social/facebook.svg" className="imgnav" alt="Síguenos en Facebook"/>
            </a>


            <a href="https://www.instagram.com/grupointecsamx/?hl=es-la"
            target="_blank"
            rel="noopener follow"
            aria-label="Sígenos en instagram"
            >
            <img src="/social/insta.svg" className="hidden" alt="Síguenos en Instragram"  />
            </a>

            <a href="https://www.linkedin.com/company/grupo-intecsa/about/"
            target="_blank"
            rel="noopener follow"
            aria-label="Nuestra empresa en linkedin"
            >
            <img src="/social/linkedin.svg" className="hidden" alt="Síguenos en Linkedin"  />
            </a>

            <a href="https://www.youtube.com/channel/UCyjWF1Qa_ehQVYOHX_RF84w/null"
            target="_blank"
            rel="noopener follow"
            aria-label="Cómo llegar"
            >
            <img src="/social/youtube.svg" className="imgnav" alt="Síguenos en Youtube" />
            </a>
            
            <a href="https://www.google.com/maps?ll=19.38668,-99.223983&z=16&t=m&hl=es&gl=MX&mapclient=embed&q=Ra%C3%BAl+Z%C3%A1rate+Machuca+11+Cuevitas+%C3%81lvaro+Obreg%C3%B3n+01220+Ciudad+de+M%C3%A9xico,+CDMX"
            target="_blank"
            rel="noopener follow"
            aria-label="Cómo llegar"
            >
            <img src="/social/maps.svg" className="imgnav" alt="Encuentranos en MAPS"  />
            </a>
          </div>
        
      </Fragment>
      
  )

}

export default Navigation