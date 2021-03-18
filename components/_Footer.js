import { FOOTER } from '../public/articulos.json'

const Footer = ({ styles }) => {

  return(
    <div className={styles.footer}>

        <div className={styles.footer_img}>
            <img src={FOOTER.logo} alt="logo de la empresa grupo intecsa" loading="lazy"/>
        </div>
        <div>
          {/* rutas */}
        </div>
        <div>
          {/* datos del contacto */}
                <span className={styles.footer_direccion}>
                <br></br>
                <img src="/location.svg" alt="encuentranos en maps" className={styles.footer_direccion}/>
                <div>
                  <br></br>
                  <p>Raúl Zárate Machuca Cuevitas, 01220 Ciudad de México, CDMX</p>
                  </div>
                </span>
                <br></br>
                <br></br>

                <span className={styles.footer_direccion}>
                <img src="/telefono.svg" alt="encuentranos en maps" className={styles.footer_direccion}/>
                  <div>
                    <p>+52 55 55 70 11 97</p>
                    <p>+52 55 52 59 24 85</p>
                  </div>
                </span>
                <br></br>
                
                <span className={styles.footer_direccion}>
                <img src="/gmail.svg" alt="encuentranos en maps" className={styles.footer_direccion}/>
                <div>
                  <p><a href="mailto:contacto@grupintecsa.com">contacto@grupintecsa.com</a></p>
                  <p><a href="mailto:servicio@grupintecsa.com">servicio@grupintecsa.com</a></p>
                </div>
                </span>
                <br></br>
        </div>
    </div>
  )
}


export default Footer