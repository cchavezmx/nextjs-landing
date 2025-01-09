import Head from "next/head";
import Footer from "../components/_Footer.jsx";
import Navigation from "../components/_Navigation";
import SeccionesCard from "../components/_SeccionesCard";
import HeaderWave from "../components/HeaderWave";

export default function Home() {
  return (
    <div lang="es_MX" className="styles">
      <Head>
        <title>Grupo Intecsa</title>
        <link
          rel="alternate"
          href="https://grupointecsa.com/"
          hrefLang="x-default"
        />
        <link
          rel="alternate"
          href="https://grupointecsa.com/es-CA"
          hrefLang="ca-es"
        />
        <link
          rel="alternate"
          href="https://grupointecsa.com/es-GA"
          hrefLang="gl-es"
        />
        <link
          rel="alternate"
          href="https://grupointecsa.com/es-EU"
          hrefLang="eu-es"
        />
        <link
          rel="alternate"
          href="https://grupointecsa.com/es-ES"
          hrefLang="es-es"
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/itacatalgo.appspot.com/o/gptitle.png?alt=media&token=49e2b517-03e0-4daa-9ed1-34311ac326df"
        />
        <meta property="og:title" content="Grupo Intecsa" />
        <meta
          property="og:description"
          content="Grupo Intecsa empresas dedicado a la instalación, planeación, construcción y mantenimiento de centros comerciales y tiendas departamentales especializada en proyectos electromecánicos"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          name="description"
          content="Empresa dedicada a la venta, construcción, ingeniería, ejecución de obra eléctrica para el sector industrial, comercial y de edificios"
        ></meta>
        <meta
          name="description"
          content="Integradores de autorizados ABB"
        ></meta>
        <meta property="og:locale" content="es_MX" />
        <meta
          property="og:title"
          content="Grupo Intecsa | Venta ABB, Construcción, Energía, Instalaciónes Eléctricas, Canalización Eléctrica"
        />
        <meta
          property="og:description"
          content="Somos empresa dedicada a la fabricación, comercialización y montaje de instalaciones eléctricasen en industrias, comercios y edificios."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar">
        <Navigation />
        {/* <ModalEntrada /> */}
      </nav>
      <main className="container">
        <HeaderWave
          title="Grupo Intecsa"
          subtitulo="CREATIVIDAD EN ELECTRICIDAD"
        />

        <div>
          <SeccionesCard />
        </div>
      </main>
      <section>{/* <News { /> */}</section>
      <Footer />
    </div>
  );
}
