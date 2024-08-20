import { Fragment } from "react";
import Navigation from "../components/_Navigation";
import Footer from "../components/_Footer";

const Politicas = () => {
  return (
    <main
      style={{
        marginTop: "80px",
        padding: "2rem",
      }}
    >
      <div className="navbar">
        <Navigation />
      </div>
      <div className="policy-container">
        <h1 className="policy-title">POLÍTICA DE NO DISCRIMINACIÓN</h1>
        <p className="policy-paragraph">
          La presente Política es aplicable a todo el personal que labora en
          este centro de trabajo, su vigilancia, operación y evaluación, estará
          a cargo de INSTALACIONES Y TECNICA, S.A. DE C.V.
        </p>
        <p className="policy-paragraph">
          El objetivo de la Política de No Discriminación es establecer los
          lineamientos que promuevan una cultura de sana convivencia en el
          centro de trabajo y garantizar la igualdad de oportunidades para cada
          integrante de la plantilla del personal, de acuerdo a lo establecido
          en el Articulo 2 y 3 de la Ley Federal del Trabajo, Articulo 1 de la
          Constitución Política de los Estados Unidos Mexicanos y Artículo 1
          Fracción III de la Ley Federal para Prevenir y Eliminar la
          Discriminación.
        </p>
        <p className="policy-paragraph">
          Queda estrictamente prohibida cualquier forma de maltrato, violencia y
          segregación de las autoridades del centro de trabajo entre personal de
          INSTALACIONES Y TECNICA, S.A. DE C.V., directivos, jefes, sub
          gerentes, empleados, clientes y todos aquellos involucrados de manera
          directa o indirecta con INSTALACIONES Y TECNICA, S.A. DE C.V.
        </p>
        <ul className="policy-list">
          <li className="policy-list-item">Apariencia física</li>
          <li className="policy-list-item">
            Condición social, económica, de salud o jurídica.
          </li>
          <li className="policy-list-item">Cultura</li>
          <li className="policy-list-item">Discapacidad</li>
          <li className="policy-list-item">Edad</li>
          <li className="policy-list-item">Embarazo</li>
          <li className="policy-list-item">Estado civil</li>
          <li className="policy-list-item">Género</li>
          <li className="policy-list-item">Idioma/dialecto</li>
          <li className="policy-list-item">Opiniones</li>
          <li className="policy-list-item">Origen étnico o nacional</li>
          <li className="policy-list-item">Preferencias sexuales</li>
          <li className="policy-list-item">Religión</li>
          <li className="policy-list-item">Condición migratoria y,</li>
          <li className="policy-list-item">
            Todas aquellas que atenten contra la dignidad humana.
          </li>
        </ul>

        <h2 className="policy-subtitle">Principios Generales</h2>
        <p className="policy-paragraph">
          I. Respetamos la diversidad cultural, religiosa y étnica de nuestros
          colaboradores.
        </p>
        <p className="policy-paragraph">
          II. Promovemos el acceso a las mismas oportunidades de desarrollo y
          crecimiento, entre hombres y mujeres.
        </p>
        <p className="policy-paragraph">
          III. En procesos de contratación, otorgamos las mismas oportunidades
          de selección a nuestros candidatos, sin importar: origen étnico,
          religión, género, orientación sexual, estado civil, nacionalidad,
          discapacidad y todas las contempladas en la Ley Federal del Trabajo,
          leyes estatales y/o locales.
        </p>
        <p className="policy-paragraph">
          IV. Fomentamos un ambiente laboral sano priorizando siempre el respeto
          y el trato digno, una línea de comunicación abierta entre el patrón y
          trabajadores, así como un lugar de trabajo libre de discriminación,
          acoso y todas aquellas que atenten contra la dignidad humana de
          nuestros colaboradores.
        </p>
        <p className="policy-paragraph">
          V. Estamos comprometidos en la atracción, retención y motivación de
          nuestro equipo, por lo que el sistema de compensaciones y beneficios
          de nuestro centro de trabajo no hace diferencia alguna entre empleados
          o empleadas que desempeñen funciones de responsabilidad similares.
        </p>
        <p className="policy-paragraph">
          VI. Respetamos el derecho de los trabajadores para tener un ambiente
          laboral equilibrado que les permita tener una calidad de vida digna y
          sana.
        </p>
      </div>

      {/* Añadir el resto de políticas de manera similar */}

      <div
        style={{
          marginTop: "50px",
        }}
      >
        <Footer />
      </div>
    </main>
  );
};

export default Politicas;
