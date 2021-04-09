
import { Fragment } from 'react'
import { AspectRatio } from '@chakra-ui/react'

const Footer = () => {

  return(
    <Fragment>
    <div className="footer">     
      <div className="fa">
        <img src="/social/git_logo.svg" alt="Logo Grupo Intecsa ingenieria eléctrica" className="footer-logo" />
      </div>

      <div className="fb">
        <div className="footer_secction">
          <img src="/social/contact.svg" alt="Logo Grupo Intecsa ingenieria eléctrica" className="footer-imges" />
            <div>
            <h5 className="footer__h5">contacto@grupointecsa.com</h5>
              <div className="d-flex flex-column">
                <span>¿Tienes dudas? ¡Llámanos y te apoyamos!</span>
                <h5 className="footer__h5"> +52 55 5570-1197</h5>
              </div>
            </div>
        </div>
      </div>

      <div className="fe">
        <div className="footer_secction">
          {/* dudas */}
          <img src="/social/horarios.svg" alt="Logo Grupo Intecsa ingenieria eléctrica" className="footer-imges" />
          <div>
          <h5 className="footer__h5">Nuestros horarios</h5>
          <p>Lunes / Viernes 09:00 - 18:00</p>
          </div>
        </div>
          
      </div>

      
      <div className="fc">
          {/* direccion */}
        <div className="footer_secction">
          <img src="/social/maps.svg" alt="Logo Grupo Intecsa ingenieria eléctrica" className="btn footer-imges" onClick={() => toggole()}/>
            <div>
            <h5 className="footer__h5">Información de Contacto</h5>
            <p className="col-8">Raúl Zárate Machuca Cuevítas, 01220 Ciudad de México, CDMX</p>
            </div>
        </div>
      </div>


      <div className="fd">
        <h5 className="footer__h5">Síguenos en:</h5>
              <div className="footer_secction">
                
                <div className="center__div">
                                    
                  <img src="/social/facebook.svg" alt="Logo Grupo Intecsa ingenieria eléctrica" className="footer-redes" />
                  <img src="/social/insta.svg" alt="Logo Grupo Intecsa ingenieria eléctrica" className="footer-redes" />
                  <img src="/social/youtube.svg" alt="Logo Grupo Intecsa ingenieria eléctrica" className="footer-redes" />
                  <img src="/social/linkedin.svg" alt="Logo Grupo Intecsa ingenieria eléctrica" className="footer-redes" />
                  
                </div>
              </div>
              {/* logos de redes sociales */}            
      </div>

    </div>
    <AspectRatio ratio={16 / 9}>
    <iframe title="myMapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5322.527002406184!2d-99.22696839255828!3d19.38668419189787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201adefab9513%3A0xa5936acc13a69c0d!2sRa%C3%BAl%20Z%C3%A1rate%20Machuca%2011%2C%20Cuevitas%2C%20%C3%81lvaro%20Obreg%C3%B3n%2C%2001220%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1613650539398!5m2!1ses!2smx" frameBorder="0" style={{ "border": "0" }} allowFullScreen="" aria-hidden="false" tabIndex="0" width="50%" height="50%"  ></iframe>
    </AspectRatio>
    <div className="footer-licencia">
      <p>Grurpo Intecsa 2021</p>
      <small>Revisa nuestro aviso de privacidad</small>
    </div>
    </Fragment>
  )
}


export default Footer
