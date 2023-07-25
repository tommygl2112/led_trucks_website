import React from "react";
import "../style/services.scss";
import RoundedButton from "../components/RoundedButton";
import PlanCard from "../components/services/PlanCard";
import QuestionDropDown from "../components/services/ExpandableQuestion";

function Services() {
  return (
    <>
      <div className="services-section-1">
        <div className="services-section-1__container">
          <div className="services-section-1__container__grid">
            <img
              src="/assets/services/trucka.png"
              alt="truck"
              className="services-section-1__container__grid__truck-img"
            />

            <div className="services-section-1__container__grid__container-title">
              <h2 className="services-section-1__container__grid__container-title__pretitle">
                MOBILE MEDIA
              </h2>
              <h1 className="services-section-1__container__grid__container-title__title-1">
                Truck
              </h1>
              <h1 className="services-section-1__container__grid__container-title__title-2">
                Services
              </h1>
              <p className="services-section-1__container__grid__container-title__paragraph">
              At LED Truck, we offer a range of advertising services to help you reach your target audience and increase brand awareness.
              </p>
              <RoundedButton
                fontSize={"20px"}
                text={"Learn More"}
                link={"./#1"}
              />
            </div>

            <h1 className="services-section-1__container__grid__container-title__mobile-media">
              MOBILE MEDIA
            </h1>
          </div>

          <div className="services-section-1__container__paragraph">
            <p className="services-section-1__container__paragraph__p">
              Get Ahead of the Competition with Our Precision Marketing Tools
            </p>
          </div>

          <div className="services-section-1__container__hr">
            <hr />
          </div>
        </div>
      </div>

      <div className="services-section-2">
        <div className="services-section-2__grid">
          <PlanCard
            planNumber="1"
            price="000"
            listElement1="All analytics features"
            listElement2="Up to 250,000 tracked visits"
            listElement3="Normal support"
            listElement4="Up to 3 team members"
            light={true}
          />
          <PlanCard
            planNumber="2"
            price="000"
            listElement1="All analytics features"
            listElement2="Up to 1,000,000 tracked visits"
            listElement3="Premium supportt"
            listElement4="Up to 10 team members"
          />
          <PlanCard
            planNumber="3"
            price="000"
            listElement1="All analytics features"
            listElement2="Up to 3,000,000 tracked visits"
            listElement3="Premium supportt"
            listElement4="Up to 20 team members"
            light={true}
          />
        </div>
      </div>

      <div className="services-section-3">
        <div className="services-section-3__container">
          <div>
            <h1 className="services-section-3__container__title">
            Areas{" "}
              <span className="services-section-3__container__title-2">
              We Serve
              </span>
            </h1>
            <p className="services-section-3__container__paragraph">
            We currently serve Southern California, Nevada, Texas, Louisiana, and Florida. We have new locations opening soon.
            </p>
          </div>

          <img
            className="services-section-3__container__map"
            src="/assets/services/map.png"
            alt="USA map"
          />

          <h1 className="services-section-3__container__watermark">
            MOBILE MEDIA
          </h1>
        </div>
      </div>

      <div className="services-section-4">
        <div className="services-section-4__container">
          <h1 className="services-section-4__container__title">
            Frequently Asked Questions
          </h1>
          <p className="services-section-4__container__paragraph">
          If you have any questions about other areas, please inquire below. {" "}
          </p>

          <div className="services-section-4__container__questions">
            <div className="services-section-4__container__questions__container-1">
              <QuestionDropDown
                question="CAN YOU HELP CREATE MY CAMPAIGN?"
                answer="YES! Our creative department can help you build the perfect campaign! When designing  your project we make sure they match the culture and personality of YOUR business"
              />
              <QuestionDropDown
                question="ARE YOU A FRANCHISE?"
                answer="NO. This means you’ll always be taken care of by a close-knit team. It also means you will pay the lowest, best price we can offer. Stop overpaying!"
              />
              <QuestionDropDown
                question="THE SUGGESTED TIME FRAME TO RESERVE?"
                answer="We just need 7 days prior to the date you want your ad to be out on the streets. This time is used to thoughtfully prepare your ad campaign to make sure the results are as effective as they possibly can."
              />
            </div>

            <div className="services-section-4__container__questions__container-2">
              <QuestionDropDown
                question="HOW MANY HOURS OF ADVERTISING ARE EXPECTED?"
                answer="Timing depends on factors like traffic conditions and area contracted coverage. An average time of 6-8 hours of mobile advertising is provided daily. Even when our drivers take breaks, we make sure our LED billboard truck is always situated in a highly visible location."
              />
             {/*  <QuestionDropDown
                question="Proin arcu dui id sit"
                answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
              /> */}
              {/* <QuestionDropDown
                question="Proin arcu dui id sit"
                answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
              /> */}
            </div>
          </div>
          <h1 className="services-section-4__container__mobile-media">
            MOBILE MEDIA
          </h1>
        </div>
      </div>

      <div className="services-section-5">
        <h1 className="services-section-5__text">
          Let them see you everywhere in your city
        </h1>
      </div>
    </>
  );
}

export default Services;
