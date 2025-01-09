import React, { Fragment } from "react";

// TODO hay que hacerlo dinamico
// TODO para la vista responsiva, agregar un boton de mostrar mas o mostrar menos

const _CompanyCard = ({ company }) => {
  return (
    <Fragment>
      <div className="company__grid">
        <div className="card" style={{ height: "auto" }}>
          <div className="cardHeader">
            <img
              src={company[0].logo}
              alt={company[0].slug}
              className="imgencard"
            />
          </div>

          <div style={{ height: "auto" }}>
            <h3 className="center">{company[0].title}</h3>
            <p>{company[0].text}</p>
          </div>
        </div>

        <div className="card" style={{ height: "auto" }}>
          <div className="cardHeader">
            <img
              src={company[3].logo}
              alt={company[3].slug}
              className="imgencard"
            />
          </div>

          <div style={{ height: "auto" }}>
            <h3 className="center">{company[3].title}</h3>
            <p>{company[3].text}</p>
          </div>
        </div>

        <div className="card" style={{ height: "auto" }}>
          <div className="cardHeader">
            <img
              src={company[1].logo}
              alt={company[1].slug}
              className="imgencard"
            />
          </div>

          <div style={{ height: "auto" }}>
            <h3 className="center">{company[1].title}</h3>
            <p>{company[1].text}</p>
          </div>
        </div>

        <div className="card" style={{ height: "auto" }}>
          <div className="cardHeader">
            <img
              src={company[2].logo}
              alt={company[2].slug}
              className="imgencard"
            />
          </div>

          <div style={{ height: "auto" }}>
            <h3 className="center">{company[2].title}</h3>
            <p>{company[2].text}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default _CompanyCard;
