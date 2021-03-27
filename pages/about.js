import styles from '../styles/About.css'
import Link from 'next/link'

export default function about (){


  return(
    <main className={styles.About}>

    <div className={styles.proximamente}>
      <h1>Acerca de Nosotros</h1>
      <p>Sección en Construcción</p>

      <Link href="/" replace={true} ><p className={styles.linkbutton} >Regresar</p></Link>

    </div>

    </main>
  )
}