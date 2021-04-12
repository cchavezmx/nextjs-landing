import { Fragment } from 'react'
import Link from 'next/link'

const SeccionesCard = () => {


  return(
    <Fragment>
      <div className="grid">

        <Link href="/about">

        <div className="card btn--global">
            <div className="cardHeader">
            {/* <FontAwesomeIcon icon={faInfo} className={fonts}/> */}
            <img src="/info.svg" alt="conoce nuestras empresas" className="imgencard"/>
            </div>
            
            <div>
              <h3 className="center">Empresa </h3>
              <p>
                Somos una Empresa dedicada a la fabricación, comercialización y montaje de instalaciones eléctricas en industrias, comercios y edificios.
              </p>
            </div>
        </div>

        </Link>
            
        <a href="https://www.instagram.com/grupointecsamx/?hl=es-la" className="card">
            <div className="cardHeader">
            {/* <FontAwesomeIcon icon={faCameraRetro} className={fonts}/> */}
            <img src="/like.svg" alt="conoce nuestras empresas" className="imgencard"/>
            </div>
            
            <div>
              <h3 className="center">Galería</h3>
              <p>
                Síguenos en Intagram y descubre los retos que hemos tenido a lo largo de más de 25 años de experiencia.
              </p>
            </div>
          </a>

          <a href="https://itamx.com/#/dashboard" className="card">
          <div className="cardHeader">
            {/* <FontAwesomeIcon icon={faShoppingBag} className={fonts}/> */}
            <img src="/venta.svg" alt="sitio de venta de material eléctrico" className="imgencard"/>
            </div>
            
            <div>
            <h3 className="center">Venta</h3>
              <p>
              Sitio exclusivo donde puedes adquirir: productos ABB, registros eléctricos, Canalizaciones y soportería, matérial eléctrico Onka.
              </p>
            </div>
          </a>

          <a
            href="https://forms.monday.com/forms/embed/608067760034e1ac1f86e10392668e8b?r=use1"
            className="card btn--global"
          >
            <div className="cardHeader">
            {/* <FontAwesomeIcon icon={faPhone} className={fonts}/> */}
            <img src="/contacto.svg" alt="imagen de contacto" className="imgencard"/>
            </div>

            <div>
              <h3 className="center">Contacto </h3>
              <p>
                ¿Quieres una cotización?, contamos con la capacidad técnica y humana para desarrollar cualquier tipo de
                trabajo eléctrico.
              </p>
            </div>
          </a>

        </div>
    </Fragment>
  )
}

export default SeccionesCard