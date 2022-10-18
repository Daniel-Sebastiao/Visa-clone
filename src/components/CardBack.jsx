// React
import React from "react";

// styles
import "./Card.css";
import style from "./CardBack.module.css";

// Pictures
import logo from "../assets/visa.png";
import map from "../assets/map.png";
import pattern from "../assets/pattern.png";

const CardBack = ({ api }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="cardContent">
          <div className={style.backFace}>
            <img src={map} alt="Mapa" className={style.mapPic} />
            <div className={style.blackBar}></div>

            <div className={`row ${style.cardCvv}`}>
              <div>
                <img src={pattern} alt="Pattern Image" />
              </div>
              {api.map((key) => {
                return <p>{key.cvv}</p>;
              })}
            </div>

            <div className={`row ${style.cardText}`}>
              {api.map((key) => {
                return <p>{key.text}</p>;
              })}
            </div>

            <div className={`row ${style.Signature}`}>
              <p>CUSTOMER SIGNATURE</p>
              <img src={logo} alt="Logo Visa" width="80px" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBack;
