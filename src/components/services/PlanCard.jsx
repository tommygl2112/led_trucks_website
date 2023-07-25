import React from "react";
import '../../style/services/plan-card.scss'
import RoundedButton from "../RoundedButton";

export default function PlanCard({ planNumber, price, listElement1, listElement2, listElement3, listElement4, light = false }) {
    const style = light ? "plan-card-white" : "plan-card";

    return (
        <div className={style}>
            <div className={style + "__title"}>
                <img className={style + "__icon"} src={light ? "assets/services/truck-icon-blue.png" : "assets/services/truck-icon-white.png"} alt="truck icon" />
                <h1 className={style + "__title__h1"}>Plan {planNumber}</h1>
            </div>

            <div className={style + "__paragraph"}>
                <p>
                    Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.
                </p>
            </div>

            <div className={style + "__price"}>
                <span className={style + "__price__amount"}>${price}</span>
                <span className={style + "__price__time"}>/monthly</span>
            </div>

            <h2 className={style + "__subtitle"}>What’s included</h2>

            <ul className={style + "__list"}>
                <li>
                    <div className="plan-card__list__element">
                        <img src={light ? "assets/services/Check-Circle.png" : "assets/services/Check-Circle-Icon.png"} alt="included" className="plan-card__list__img" />{listElement1}
                    </div>
                </li>
                <li>
                    <div className="plan-card__list__element">
                        <img src={light ? "assets/services/Check-Circle.png" : "assets/services/Check-Circle-Icon.png"} alt="included" className="plan-card__list__img" />{listElement2}
                    </div>
                </li>
                <li>
                    <div className="plan-card__list__element">
                        <img src={light ? "assets/services/Check-Circle.png" : "assets/services/Check-Circle-Icon.png"} alt="included" className="plan-card__list__img" />{listElement3}
                    </div>
                </li>
                <li>
                    <div className="plan-card__list__element">
                        <img src={light ? "assets/services/Check-Circle.png" : "assets/services/Check-Circle-Icon.png"} alt="included" className="plan-card__list__img" />{listElement4}
                    </div>
                </li>
            </ul>

            <div className="plan-card__button">
                <RoundedButton fontSize={'20px'} text={'Contact'} link={'./#1'} light={light ? false : true} />
            </div>
        </div>
    );
}