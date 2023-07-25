import React, { useState, useEffect, useRef } from "react";
import "../style/how-it-works.scss";
import RoundedButton from "../components/RoundedButton";
import ArrowButton from "../components/ArrowButton";
import CardTruck from "../components/CardTruck";
import Graphs from "../components/Graphs";

function HowItWorks() {

  const [isVisible, setIsVisible] = useState(false);

  const cardsTrucks = [
    {
      image: "/assets/isuzu.jpeg",
      title: "The Philosophy Behind Truck Advertising KPI Application",
      description:
        "If you are interested in truck advertising KPI, check Cosmo Mobile Media website to learn more about truck advertising scorecards.",
      date: "August 25, 2021",
      link: "/#1",
    },
    {
      image: "/assets/isuzu2.jpeg",
      title: "5 Reasons to Go Mobile with Your Next LED Screen Rental.",
      description:
        "When selecting the right LED screen rental product, you have choose between two options, modular and mobile. Cosmo Mobile Media.",
      date: "Dec. 14, 2021",
      link: "/#1",
    },
    {
      image: "/assets/led trucks.jpeg",
      title: "Types of Mobile Billboards to Reach Your Specific Marketing Plan",
      description:
        "There are so many ways to advertise anything nowadays. There are new ideas every day in how marketers reach target audiences.",
      date: "April 21 th 2020",
      link: "/#1",
    },
  ];

  const data = [
    { label: 'First', value: 25 },
    { label: 'Second', value: 40 },
    { label: 'Third', value: 65 },
    { label: 'Fourth ', value: 85 },
    { label: 'Fifth', value: 100 },
  ];

  const myRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );
  
    observer.observe(myRef.current);
  
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div >
      <div className="how-section-1">
        <div className="how-section-1__container">
          <div>
            <h1 className="how-section-1__container__pre-title">
              MOBILE MEDIA
            </h1>
            <h1 className="how-section-1__container__title">
              How it
              <span className="how-section-1__container__title--blue">
                {" "}
                works
              </span>
              <img
                src="/assets/how-it-works/map-pin.png"
                alt=""
                className="how-section-1__container__title__img"
              />
            </h1>
            <p className="how-section-1__container__text">
            Schedule your advertising campaign: Choose the date and duration of your advertising campaign, as well as the locations where you want your ad to be displayed.
            </p>

            <RoundedButton
              fontSize={"16px"}
              text={"Learn More"}
              link={"./#7"}
            />
          </div>
          <div className="how-section-1__container__container-image">
            <img
              src="/assets/how-it-works/map-pinned.png"
              alt="map pin"
              className="how-section-1__container__container-image__map-image"
            />
          </div>
        </div>

        <div className="how-section-1__container-slogan-mobile">
          <p className="how-section-1__container-slogan-mobile__slogan">
            Unlock Precision Marketing with Our Data-Driven Technology
          </p>
        </div>

        <div className="how-section-1__container-precision">
          <div className="how-section-1__container-precision__container-profile">
            <p className="how-section-1__container-precision__container-profile__text-vertical">
              MOBILE MEDIA
            </p>
            <img
              src="/assets/how-it-works/man.png"
              alt="business man"
              className="how-section-1__container__container-profile__image"
            />
          </div>
          <div className="how-section-1__container-precision__container-slogan">
            <p className="how-section-1__container-precision__container-slogan__slogan">
              Unlock Precision Marketing with Our Data-Driven Technology
            </p>
          </div>
        </div>
      </div>
      <div className="how-section-2">
        <div className="how-section-2__container">
          <div className="how-section-2__container__list">
            <ul>
              <li className="how-section-2__container__list__element">
                <img
                  src="/assets/how-it-works/map-pin.png"
                  alt=""
                  className="how-section-2__container__list__element__image"
                />
                <div className="how-section-2__container__list__element__info">
                  <span className="how-section-2__container__list__element__info__title">
                  Choose your ad campaign
                  </span>

                  <p className="how-section-2__container__list__element__info__text">
                  The first step is to choose your ad campaign. You can select from one of our pre-designed templates or work with our team to create a customized ad campaign tailored to your specific needs.
                  </p>

                  <ArrowButton
                    text={"Learn more"}
                    link={"/#1"}
                    styles={{ color: "#000", fontSize: "15px" }}
                  />
                </div>
              </li>

              <li className="how-section-2__container__list__element">
                <img
                  src="/assets/how-it-works/map-pin.png"
                  alt=""
                  className="how-section-2__container__list__element__image"
                />
                <div className="how-section-2__container__list__element__info">
                  <span className="how-section-2__container__list__element__info__title">
                  Select your location
                  </span>

                  <p className="how-section-2__container__list__element__info__text">
                  Once you have your ad campaign selected, you can choose your preferred location. Our LED advertising trucks can travel to various locations, ensuring maximum exposure for your ads.
                  </p>

                  <ArrowButton
                    text={"Learn more"}
                    link={"/#1"}
                    styles={{
                      alignment: "left",
                      color: "#000",
                      fontSize: "15px",
                    }}
                  />
                </div>
              </li>

              <li className="how-section-2__container__list__element">
                <img
                  src="/assets/how-it-works/map-pin.png"
                  alt=""
                  className="how-section-2__container__list__element__image"
                />
                <div className="how-section-2__container__list__element__info">
                  <span className="how-section-2__container__list__element__info__title">
                  Watch your ads go live
                  </span>

                  <p className="how-section-2__container__list__element__info__text">
                  Once your ad campaign is scheduled, our LED advertising trucks will hit the road and showcase your ads to your target audience. You can track the performance of your campaign through our reporting tools.
                  </p>

                  <ArrowButton
                    text={"Learn more"}
                    link={"/#1"}
                    styles={{
                      alignment: "left",
                      color: "#000",
                      fontSize: "15px",
                    }}
                  />
                </div>
              </li>
            </ul>
          </div>
          <div className="how-section-2__container__truck-background">
            <img
              src="/assets/how-it-works/truck.png"
              alt=""
              className="how-section-2__container__truck-background__truck-image"
            />
          </div>
        </div>
      </div>
      <div className="how-section-3">
        <div className="how-section-3__container">
          <h1 className="how-section-3__container__title">
          Read Our
            <span className="how-section-3__container__title--blue">
              {" "}
              Entries
            </span>
          </h1>

          <h2 className="how-section-3__container__subtitle">
            Elevate Your Advertising Game: Tips and Strategies
          </h2>

          <div className="how-section-3__container__cards-container">
            {cardsTrucks.map((card, index) => (
              <CardTruck data={card} key={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="how-section-4">
        <div className="how-section-4__container">
          <h1 className="how-section-4__container__title">
            Revolutionize Your Marketing Strategy with Our Data-Driven
            Technology
          </h1>

          <p className="how-section-4__container__vertical-text">
            MOBILE MEDIA
          </p>
        </div>
      </div>

      <div className="how-section-5">
        <div className="how-section-5__container">
          <div className="how-section-5__container__truck-container">
            <img
              src="/assets/how-it-works/truck-side-view.png"
              alt=""
              className="how-section-5__container__truck-container__truck"
            />
          </div>

          <div className="how-section-5__container__graphs" ref={myRef}>
            <h2 className="how-section-5__container__graphs__investment">Track your investment monthly</h2>
            <Graphs data={data} visible={isVisible} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
