// React
import React from "react";

// styles
import "./Card.css";
import style from "./CardFront.module.css";

// Pictures
import chip from "../assets/chip.png";
import logo from "../assets/visa.png";
import map from "../assets/map.png";

const CardFront = ({ api }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="cardContent">
          <div className={style.frontFace}>
            <img src={map} alt="Mapa" className={style.mapPic} />

            <div className="row">
              <img src={chip} alt="Credit Card Chip" width="60px" />
              <img src={logo} alt="Credit Card Visa Logo" width="80px" />
            </div>

            <div className={`row ${style.cardNumber}`}>
              {api.map((key) => {
                return (
                  <>
                    <p>{key.numCard.firstColumn}</p>
                    <p>{key.numCard.secondColumn}</p>
                    <p>{key.numCard.thirdColumn}</p>
                    <p>{key.numCard.fourthColumn}</p>
                  </>
                );
              })}
            </div>

            <div className={`row ${style.cardHolder}`}>
              <p>CARD HOLDER</p>
              <p>VALID TILL</p>
            </div>

            <div className={`row ${style.cardValue}`}>
              {api.map((key) => {
                return (
                  <>
                    <p>{key.name}</p>
                    <p>{key.date}</p>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
