import news from '../public/articulos.json'


export default function Noticias({ styles }){
    return(
      <section className={styles.s}>
        <h2>Ultímos artículos</h2>

        { news.NOTICIAS.map((nota, index) => 

            <div key={index} className={styles.cardNoticias}>
            <img src={nota.img} alt="imagen de noticia" />
            <div>
              <h2 className={styles.titleNota}>
                {nota.title}
              </h2>
              <small>{nota.fecha}</small>
            </div>
        </div>
        )}

      <div className={styles.paginador}>
          <p>artículos anteriores</p>
      </div>

      </section>
    )

}