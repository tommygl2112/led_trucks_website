import React from "react";
import "../style/about.scss";
import RoundedButton from "../components/RoundedButton";
import EmployeesCards from "../components/EmployeesCards";

function About() {
  const cards = [
    {
      image: "https://via.placeholder.com/310x230",
      name: "Mario Puc",
      charge: "Software Engineer",
      description:
        "Mario is responsible for developing, and maintaining our custom software for the control and monitoring of our LED advertising trucks",
      facebook: "#1",
      twitter: "#2",
      instagram: "#3",
    },
    {
      image: "https://via.placeholder.com/310x230",
      name: "Domique Salomon",
      charge: "Software Engineer",
      description:
        "With over 4 years of experience in software development, Domique has worked on a variety of exciting and challenging projects.",
      facebook: "#1",
      twitter: "#2",
      instagram: "#3",
    },
    {
      image: "https://via.placeholder.com/310x230",
      name: "Tomas Garcia",
      charge: "Software Engineer",
      description:
        "From creating mobile applications to developing software for quality control systems, Tomas has broad knowledge in the field.",
      facebook: "#1",
      twitter: "#2",
      instagram: "#3",
    },
  ];

  return (
    <>
      <div className="about-section-1">
        <div className="about-section-1__container">
          <h1 className="about-section-1__container__pretitle">WHO WE ARE</h1>

          <h1 className="about-section-1__container__title">
            About <span className="section-1__title--light">us</span>
          </h1>

          <p className="about-section-1__container__text">
            Cosmo Mobile Media is a marketing and advertising company. We
            specialize in mobile LED billboard trucks and OOH (Out-Of-Home)
            advertising throughout Las Vegas, Miami, Jacksonville, Houston, and
            Southern California.
          </p>

          {/*<RoundedButton fontSize={"20px"} text={"Learn More"} link={"./#1"} />*/}

          <div className="about-section-1__container__gif-truck-container">
            <div className="about-section-1__container__gif-truck-container__text-vertical">
              Mobile Media
            </div>
            <div className="about-section-1__container__gif-truck-container__relative">
              <img
                src="/assets/about/ezgif.com-optimize.gif"
                alt="logo"
                className="about-section-1__container__gif-truck-container__relative__truck"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="about-section-2">
        <div className="about-section-2__container">
          <img
            src="/assets/about/cosmo-logo-full.png"
            alt="logo"
            className="about-section-2__container__logo"
          />

          <div className="about-section-2__container__info">
            <p className="about-section-2__container__info__text">
              We aim to achieve maximum exposure for your message and brand
              awareness to your potential customers by taking your brand
              directly to the streets. Our team helps create transcendent ad
              campaigns based on YOUR needs and YOUR target audience.
            </p>

            {/* <RoundedButton
              margin={"0px 0px 80px 0px"}
              fontSize={"18px"}
              text={"Learn More"}
              link={"./#1"}
            /> */}

            <div className="about-section-2__container__info__divider">
              <hr />
            </div>

            <p className="about-section-2__container__info__text">
              Have any questions? <br /> Contact us! <b> +9 (999) 999-9999</b>
            </p>
          </div>
        </div>
      </div>

      <div className="about-section-3">
        <p className="about-section-3__text">
          Let them see you everywhere in your city
        </p>
      </div>

      <div className="about-section-4">
        <div className="about-section-4__container">
          <div>
            <img src="/assets/about/icon.png" alt="" />

            <h1 className="about-section-4__container__title">
              Provide Multi-Channel{" "}
              <p className="about-section-4__container__title--light">
                Customer Suport
              </p>
            </h1>

            <p className="about-section-4__container__text">
              We're here to answer any questions you may have, provide you with
              information about our services, and help you make the most of your
              experience with us.
            </p>

            <RoundedButton
              margin={"25px 0px 80px 0px"}
              fontSize={"16px"}
              text={"Learn More"}
              link={"./#1"}
            />
          </div>
          <div className="about-section-4__container__modules">
            <img src="/assets/about/modules.png" alt="" />
          </div>
        </div>
      </div>

      <div className="about-section-5">
        <div className="about-section-5__container">
          <div className="about-section-5__container__pre-title">OUR TEAM</div>
          <div className="about-section-5__container__title">
            Meet{" "}
            <span className="about-section-5__container__title--blue">
              the team
            </span>
          </div>
          <div className="about-section-5__container__text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered in some form, by injected humor
          </div>

          <EmployeesCards cards={cards} />
        </div>
      </div>
    </>
  );
}

export default About;
