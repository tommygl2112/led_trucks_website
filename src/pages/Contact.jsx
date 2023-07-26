import React from "react";
import "../style/contact.scss";
import RoundedButton from "../components/RoundedButton";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <>
      <div>From Contact **</div>
      <div className="contact-section-1">
        <div className="contact-section-1__container">
          <div className="contact-section-1__container__text">
            <h1 className="contact-section-1__container__text__title">
              Contact
            </h1>

            <p className="contact-section-1__container__text__paraph">
              If you're interested in learning more about our LED advertising
              services or have any questions, we'd love to hear from you. You
              can reach us by phone, email, or by filling out the contact form.
            </p>
          </div>
          <div className="contact-section-1__container__form-container">
            <div className="contact-section-1__container__form-container__form">
              <label
                htmlFor="name"
                className="contact-section-1__container__form-container__form__label"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                className="contact-section-1__container__form-container__form__input-form"
              />

              <label
                htmlFor="name"
                className="contact-section-1__container__form-container__form__label"
              >
                Email
              </label>
              <input
                type="text"
                name="name"
                className="contact-section-1__container__form-container__form__input-form"
              />

              <label
                htmlFor="name"
                className="contact-section-1__container__form-container__form__label"
              >
                Phone number
              </label>
              <input
                type="text"
                name="name"
                className="contact-section-1__container__form-container__form__input-form"
              />

              <label
                htmlFor="name"
                className="contact-section-1__container__form-container__form__label"
              >
                Message
              </label>
              <textarea
                type="text"
                name="name"
                rows={3}
                className="contact-section-1__container__form-container__form__textarea"
              ></textarea>

              <div className="contact-section-1__container__form-container__form__btn-container">
                <RoundedButton
                  fontSize={"18px"}
                  margin="20px 0px"
                  text={"Submit"}
                  link={"./#"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-section-2">
        <div className="contact-section-2__container">
          <div className="contact-section-2__container__locations">
            <div className="contact-section-2__container__locations__item">
              <div className="contact-section-2__container__locations__item__title">
                New Orleans
              </div>

              <div className="contact-section-2__container__locations__item__address">
                XXXX Stillwater Dr, New Orleans, LA XXXX, EE. UU.
              </div>

              <a
                href="./#"
                className="contact-section-2__container__locations__item__link"
              >
                View map
              </a>
            </div>

            <div className="contact-section-2__container__locations__item">
              <div className="contact-section-2__container__locations__item__title">
                Miami
              </div>

              <div className="contact-section-2__container__locations__item__address">
                XXXX SW XXth Terrace, Miami, FL XXXX, EE. UU.
              </div>

              <a
                href="./#"
                className="contact-section-2__container__locations__item__link"
              >
                View map
              </a>
            </div>

            <div className="contact-section-2__container__locations__item">
              <div className="contact-section-2__container__locations__item__title">
                San Diego
              </div>

              <div className="contact-section-2__container__locations__item__address">
                XXXX Loring St, San Diego, CA XXXXX, EE. UU.
              </div>

              <a
                href="./#"
                className="contact-section-2__container__locations__item__link"
              >
                View map
              </a>
            </div>

            <div className="contact-section-2__container__locations__item">
              <div className="contact-section-2__container__locations__item__title">
                Houston
              </div>

              <div className="contact-section-2__container__locations__item__address">
                Franklin Lofts, XXX Fannin St, Houston, TX XXXXX, EE. UU.
              </div>

              <a
                href="./#"
                className="contact-section-2__container__locations__item__link"
              >
                View map
              </a>
            </div>

            <div className="contact-section-2__container__locations__item">
              <div className="contact-section-2__container__locations__item__title">
                Jacksonville, Florida
              </div>

              <div className="contact-section-2__container__locations__item__address">
                XXXX Poe Ave, Orlando, FL XXXXX, EE. UU.
              </div>

              <a
                href="./#"
                className="contact-section-2__container__locations__item__link"
              >
                View map
              </a>
            </div>

            <div className="contact-section-2__container__locations__item">
              <div className="contact-section-2__container__locations__item__title">
                (999) 999-9999
              </div>

              <div className="contact-section-2__container__locations__item__alt-text">
                Call us on above number to get quick solution.
              </div>
            </div>

            <div className="contact-section-2__container__locations__social-media">
              <h1 className="contact-section-2__container__locations__social-media__title">
                Follow us
              </h1>

              <div className="contact-section-2__container__locations__social-media__icons">
                <a href="/*" target="_blank">
                  <div className="contact-section-2__container__locations__social-media__icons__icon">
                    <FaFacebook />
                  </div>
                </a>

                <a href="/*" target="_blank">
                  <div className="contact-section-2__container__locations__social-media__icons__icon">
                    <FaTwitter />
                  </div>
                </a>

                <a href="/*" target="_blank">
                  <div className="contact-section-2__container__locations__social-media__icons__icon">
                    <FaInstagram />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="contact-section-2__container__phone-container">
            <img
              src="/assets/contact/phone.png"
              className="contact-section-2__container__phone-container__phone-image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
