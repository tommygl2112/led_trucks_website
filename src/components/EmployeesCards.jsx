import React from 'react'
import '../style/employees-cards.scss'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

function EmployeesCards({ cards }) {
  return (
    <>
      <div className='employees-cards'>
        {cards.map((card, index) => (
          <div key={index} className='employees-cards__card'>
            <img className="employees-cards__card__image" src={card.image} alt="logo" />

            <div className="employees-cards__card__info">
              <h1 className='employees-cards__card__info__name'>
                {card.name}
              </h1>

              <h2 className='employees-cards__card__info__charge'>
                {card.charge}
              </h2>

              <p className='employees-cards__card__info__description'>
                {card.description}
              </p>

              <Link to={card.facebook}>
                <div className='footer-full-width__footer__icon-container'>
                  <FaFacebookSquare />
                </div>
              </Link>

              <Link to={card.twitter}>
                <div className='footer-full-width__footer__icon-container'>
                  <FaTwitter />
                </div>
              </Link>

              <Link to={card.instagram}>
                <div className='footer-full-width__footer__icon-container'>
                  <FaInstagram />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default EmployeesCards