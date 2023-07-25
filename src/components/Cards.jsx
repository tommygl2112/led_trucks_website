import React from 'react'

function Cards({ cards }) {
    return (
        <div className='cards-container'>
            {cards.map((card, index) => (
                <div key={index} className='cards-container__card'>
                    <div className="cards-container__card__icon-container">
                        <img className="cards-container__card__icon-container__icon" src={"/assets/" + card.icon} alt="logo" />
                    </div>

                    <h1 className='cards-container__card__title'>
                        {card.title}
                    </h1>

                    <p className='cards-container__card__body'>
                        {card.body}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Cards