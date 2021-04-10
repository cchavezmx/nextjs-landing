import { Fragment } from "react"

const HeaderWave = ({ title, subtitulo }) => {

  return(
    <Fragment>

        <div className="inner--header flex">
          <div className="welcom">

              <div className="logo">
                  <img src="/logos/git-big-wb.webp" />
              </div>

              <div>
                <h1 className="title">
                    {title}
                </h1>
                  <p className="code">{subtitulo}</p>
              </div>

          </div>
        </div>
        
    </Fragment>
  )
}

export default HeaderWave