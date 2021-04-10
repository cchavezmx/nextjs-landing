import { Fragment } from "react"
import Navigation from '../components/_Navigation'
import HeaderWave from '../components/HeaderWave'
import Footer from '../components/_Footer'


const About = () => {

  return(
    <Fragment>
      
      <div className="navbar">
        <Navigation />
      </div>
      <div>
        <HeaderWave title="Nosotros" subtitulo={null} />
      </div>
      <div>
          <h3>Contenido</h3>
      </div>
      <div>
          <Footer />
      </div>
      
    </Fragment>  
  )
}

export default About