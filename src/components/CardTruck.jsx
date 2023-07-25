import React from "react";
import RoundedButton from "../components/RoundedButton";
import "../style/truck-card.scss";

function CardTruck({ data }) {
  return (
    <div className="truck-card">
      <img className="truck-card__image" src={data.image} alt="logo" />

      <div className="truck-card__info">
        <h1 className="truck-card__info__title">{data.title}</h1>

        <p className="truck-card__info__description">{data.description}</p>

        <div className="truck-card__info__footer">
          <div className="truck-card__info__footer__date">{data.date}</div>
          <div className="truck-card__info__footer__btn">
            <RoundedButton
              margin={"0px 0px 0px 0px"}
              fontSize={"18px"}
              text={"See more"}
              link={data.link}
              light={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTruck;
