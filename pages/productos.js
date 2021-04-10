import { Fragment } from "react"
import Navigation from '../components/_Navigation'
import HeaderWave from '../components/HeaderWave'
import Footer from '../components/_Footer'


const Produccion = () => {

  return(
    <Fragment>
      
      <div className="navbar">
        <Navigation />
      </div>
      <div>
        <HeaderWave title="Productos" subtitulo={null} />
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

export default Produccion