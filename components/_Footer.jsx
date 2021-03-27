import {  Flex, Center, Text, Box, Image, Divider, AspectRatio } from '@chakra-ui/react'
import { Fragment } from 'react'
// import { FOOTER } from '../public/articulos.json'



const Footer = () => {

  return(
    <Fragment>
    <div className="footer">

        <Center>
          <Image src="/web-logo.webp" alt="encuentranos en maps" width={{ base: "4rem"}} objectFit="cover" /> 
            
        </Center>

        <Divider orientation="horizontal" />

      <Flex
        justifyContent="space-around"
        flexDirection={
          {
            base: "column",
            md: "row"
          }
        }
      
        >
        <Center padding="10px">
        <Box display="flex" flexDirection={{ base: "column", md: "row" }} alignItems={{ base: "center" }}>

          <Box padding="1rem">
              <Image src="/social/contact.svg" alt="contactanos para mas informacion" width={{ base: "3rem", md: "4rem" }} objectFit="cover"/>
          </Box>
            <div>
              <Text fontSize={{ base: "large", md: "x-large" }} fontWeight="bold" textAlign="center" >contacto@grupointecsa.com</Text>
              <Text textAlign={{ base: "center", md: "left" }}>¿Tienes dudas? ¡Llámanos y te apoyamos!</Text>
              
              <Text fontWeight="bold" textAlign={{ base: "center", md: "left" }} padding="0.5rem"> +52 55 5570-1197</Text>
            </div>
          </Box>
        </Center>

        {/* <Center padding="10px">
        <Box display="flex" flexDirection={{ base: "column", md: "row" }} alignItems={{ base: "center" }}>
        <Box marginRight="10px" padding="1rem">
              <Image src="/social/horarios.svg" alt="contactanos para mas informacion" width={{ base: "3rem", md: "4rem" }} objectFit="cover" />
          </Box>
              <div>
              <Text fontSize={{ base: "large", md: "x-large" }} fontWeight="bold" >Nuestros horarios</Text>
                <div>
                    <p>Lunes / Jueves 09:00 - 15:00</p>
                </div>
              </div>
          </Box>          
        </Center> */}

        <Center padding="10px">
        <Box display="flex" flexDirection={{ base: "column", md: "row" }} alignItems={{ base: "center" }}>
        <Box marginRight="10px" padding="1rem">
              <Image src="/social/maps.svg" alt="contactanos para mas informacion" width={{ base: "3rem", md: "4rem" }} objectFit="cover" />
          </Box>
              <div>
              
              <Text fontSize={{ base: "large", md: "x-large" }} fontWeight="bold" >Información de Contacto</Text>
                <p className="col-8">Raúl Zárate Machuca Cuevítas, 01220 Ciudad de México, CDMX</p>
              <Text fontWeight="bold">Nuestros horarios <p>Lunes / Jueves 09:00 - 15:00</p></Text>
                </div>
              
          </Box>          
        </Center>

      </Flex>
    </div>
    <AspectRatio ratio={16 / 9}>
    <iframe title="myMapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5322.527002406184!2d-99.22696839255828!3d19.38668419189787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201adefab9513%3A0xa5936acc13a69c0d!2sRa%C3%BAl%20Z%C3%A1rate%20Machuca%2011%2C%20Cuevitas%2C%20%C3%81lvaro%20Obreg%C3%B3n%2C%2001220%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1613650539398!5m2!1ses!2smx" frameBorder="0" style={{ "border": "0" }} allowFullScreen="" aria-hidden="false" tabIndex="0" width="100%" height="100%"  ></iframe>
    </AspectRatio>

      <div className="footer__licencia">Grupo Intecsa 2021</div>

    </Fragment>
  )
}


export default Footer

// <div className={styles.footer_img}>
// <img src={FOOTER.logo} alt="logo de la empresa grupo intecsa" loading="lazy"/>
// </div>
// <div>
// {/* rutas */}
// </div>
// <div>
// {/* datos del contacto */}
//     <span className={styles.footer_direccion}>
//     <br></br>
//     <img src="/location.svg" alt="encuentranos en maps" className={styles.footer_direccion}/>
//     <div>
//       <br></br>
//       <p>Raúl Zárate Machuca Cuevitas, 01220 Ciudad de México, CDMX</p>
//       </div>
//     </span>
//     <br></br>
//     <br></br>

//     <span className={styles.footer_direccion}>
//     <img src="/telefono.svg" alt="encuentranos en maps" className={styles.footer_direccion}/>
//       <div>
//         <p>+52 55 55 70 11 97</p>
//         <p>+52 55 52 59 24 85</p>
//       </div>
//     </span>
//     <br></br>
    
//     <span className={styles.footer_direccion}>
//     <img src="/gmail.svg" alt="encuentranos en maps" className={styles.footer_direccion}/>
//     <div>
//       <p><a href="mailto:contacto@grupintecsa.com">contacto@grupintecsa.com</a></p>
//       <p><a href="mailto:servicio@grupintecsa.com">servicio@grupintecsa.com</a></p>
//     </div>
//     </span>
//     <br></br>
// </div>