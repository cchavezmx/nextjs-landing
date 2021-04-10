import { Fragment } from "react"

const HeaderWave = () => {

  return(
    <Fragment>

        <div className="inner--header flex">
          <div className="welcom">

              <div className="logo">
                  <img src="/logos/git-big-wb.webp" />
              </div>

              <div>
                <h1 className="title">
                    Grupo Intecsa
                </h1>
                  <p className="code">CREACTIVIDAD EN ELECTRICIDAD.</p>
              </div>
              
          </div>
        </div>
        
    </Fragment>
  )
}

export default HeaderWave