import { React, useState, useEffect } from "react";
import { sendEmail } from "./Emailjs";
import axios from 'axios';
import '../style/form.scss';

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [states, setStates] = useState([]);
  const [countries, setCountries] = useState([]);
  const [isExperimental, setIsExperimental] = useState("");
  const [isRetargetingSocialMedia, setIsRetargetingSocialMedia] = useState("");
  const [isArtworkDesign, setIsArtworkDesign] = useState("");
  const [message, setMessage] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  function checkName(event) {
    setName(event.target.value);
    toggleButton();
  }

  function checkPhone(event) {
    let phone = event.target.value;
    phone = phone.replace(/\D/g, "");
    phone = phone.substring(0, 10);
    let formattedPhone = phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    setNumber(formattedPhone);
    toggleButton();
  }

  function validatePhone(phone) {
    let re = /^[\+]?[(][0-9]{3}[)][-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return re.test(phone);
  }

  function checkEmail(event) {
    setEmail(event.target.value);
    toggleButton();
  }
  function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  function validateCountry() {
    return country.length > 0 ? true : false;
  }

  function toggleButton(isValidPhone) {

    if (name.length > 3 && isValidPhone && validateEmail(email)) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }

  const submitForm = (event) => {
    event.preventDefault();
    setSubmitAttempted(true);
    if (showButton) {
      sendEmail(name, number, email, message, country);
      console.log("formulario enviado");
    }
  };

  useEffect(() => {
    axios.get('https://countriesnow.space/api/v0.1/countries').then(response => {
      setCountries(response.data.data);
    });
  }, []);

  useEffect(() => {
    if (country) {
      axios.post(`https://countriesnow.space/api/v0.1/countries/states`, { country }).then(response => {
        setStates(response.data.data.states);
      });
    } else {
      setStates([]);
    }
  }, [country]);

  const handleCountrySelect = event => {
    setCountry(event.target.value);
    toggleButton(event.target.value.length > 0);
  };

  return (
    <div className="form">
      <form onSubmit={submitForm}>
        <h1 className="form__title-1">
          Tell us about the proyect
        </h1>

        <h2 className="form__title-2">
          We respond to inquiries quickly.
        </h2>

        <div className="form__card">
          <input
            type="text"
            value={name}
            onChange={checkName}
            placeholder="Name"
            className="form__card__input"
          />

          <input
            type="text"
            value={email}
            onChange={checkEmail}
            placeholder="Email"
            className="form__card__input"
          />

          <input
            type="text"
            value={number}
            onChange={checkPhone}
            placeholder="Phone"
            className="form__card__input"
          />

          <h2 className="form__card__title-2">
            Campaign markets
          </h2>

          <select
            name="country"
            className="form__card__input"
            value={country}
            onChange={handleCountrySelect}
          >
            <option value="">Select a country</option>
            {countries.map((country, i) => (
              <option key={i} value={country.country}>
                {country.country}
              </option>
            ))}
          </select>

          {states.length > 0 && (
            <select
              name="state"
              className="form__card__input"
            >
              <option value="">Select a state</option>
              {states.map((state, i) => (
                <option key={i} value={state}>
                  {state.name}
                </option>
              ))}
            </select>
          )}

          <h2 className="form__card__title-2">
            Campaign dates
          </h2>

          <input
            type="date"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Desired dates"
            className="form__card__input"
          />

          <h3 className="form__card__title-3">
            Select add-ons:
          </h3>

          <div>
            <input
              type="checkbox"
              value={isExperimental}
              onChange={(e) => setIsExperimental(e.target.value)}
              className="form__card__checkbox"
            />
            <span>Experiential campaign (ie: interactive games)</span>
          </div>

          <div>
            <input
              type="checkbox"
              value={isRetargetingSocialMedia}
              onChange={(e) => setIsRetargetingSocialMedia(e.target.value)}
              className="form__card__checkbox"
            />
            <span>Retargeting advertising on social media</span>
          </div>

          <div>
            <input
              type="checkbox"
              value={isArtworkDesign}
              onChange={(e) => setIsArtworkDesign(e.target.value)}
              className="form__card__checkbox"
            />
            <span>Artwork design</span>
          </div>

          <h3 className="form__card__title-3">
            What is your budget range?
          </h3>

          <select
            name="price-range"
            className="form__card__select"
          >
            <option value="value1">Value 1</option>
            <option value="value2" >
              Value 2
            </option>
            <option value="value3">Value 3</option>
          </select>

          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Describe your proyect in details"
            className="form__card__text-area"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <div
            className="form__card__btn-container"
          >
            <p className="form__card__btn-container__alert" >
              {showButton
                ? "Todos los campos están completos"
                : "Completa todos los campos requeridos"}
            </p>
            <button
              className={`form__card__btn-container__btn ${!showButton && "form__card__btn-container__btn--disabled"
                }`}
              disabled={!showButton}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
