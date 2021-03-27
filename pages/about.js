import Link from 'next/link'

export default function about (){


  return(
    <main className="About">

    <div className="proximamente">
      <h1>Acerca de Nosotros</h1>
      <p>Sección en Construcción</p>

      <Link href="/" replace={true} ><p className="linkbutton" >Regresar</p></Link>

    </div>

    </main>
  )
}