import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FaFacebookSquare, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import '../style/footer.scss';
import Home from '../pages/Home';
import ArrowButton from './ArrowButton';
import { sendEmail } from "./FooterEmailjs";

function Footer() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [showButton, setShowButton] = useState(false);
    const [success, setSuccess] = useState(false);
    const [submitAttempted, setSubmitAttempted] = useState(false);

    function checkName(event) {
        setName(event.target.value);
        toggleButton();
    };

    function checkEmail(event) {
        setEmail(event.target.value);
        toggleButton();
    };

    function checkMessage(event) {
        setMessage(event.target.value);
        toggleButton();
    };

    function validateEmail(email) {
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const submitForm = (event) => {
        event.preventDefault();
        setSubmitAttempted(true);
        if (showButton) {
            //sendEmail(name, email, message);
            //console.log("formulario enviado");
            setSuccess(true);
        }
    };

    function toggleButton() {

        if (name.length > 3 && validateEmail(email) && message.length > 15) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    return (
        <div>
            <div className="footer-full-width">
                <div className="footer-full-width__footer">
                    <div>
                        <h1 className='footer-full-width__footer__title'>Cosmo Mobile Media</h1>

                        <p className='footer-full-width__footer__body'>
                        Thank you for visiting our website and for choosing us as your LED advertising partner. We look forward to helping you take your brand to the next level.
                        </p>

                        <Link to="/#facebook">
                            <div className='footer-full-width__footer__icon-container'>
                                <FaFacebookSquare />
                            </div>
                        </Link>

                        <Link to="/#twitter">
                            <div className='footer-full-width__footer__icon-container'>
                                <FaTwitter />
                            </div>
                        </Link>

                        <Link to="/#instagram">
                            <div className='footer-full-width__footer__icon-container'>
                                <FaInstagram />
                            </div>
                        </Link>
                    </div>
                    <div>
                        <div className="footer-full-width__footer__subtitle">
                            <button>Contact Us</button>
                        </div>

                        <div className='footer-full-width__footer__form-container'>
                            <form onSubmit={submitForm}>
                                <input
                                    type="text"
                                    placeholder='Your name'
                                    className='footer-full-width__footer__form-container__input-text'
                                    name='name'
                                    value={name}
                                    onChange={checkName}
                                />

                                <input
                                    type="text"
                                    placeholder='Your email'
                                    className='footer-full-width__footer__form-container__input-text'
                                    name='email'
                                    value={email}
                                    onChange={checkEmail}
                                />

                                <input
                                    type="text"
                                    placeholder='How can I help you?'
                                    className='footer-full-width__footer__form-container__input-text'
                                    name='mensaje'
                                    value={message}
                                    onChange={checkMessage}
                                />

                                <p className="footer-full-width__footer__form-container__alert" >
                                    {showButton
                                        ? "All fields are complete"
                                        : "Complete all required fields"}
                                </p>
                                { !success ?  <ArrowButton text={'Send'} link={'/'} styles={{ alignment: 'right', color: '#fff', fontSize: '25px', isDisable: !showButton }} /> : null }
                                <div className={ success ? "successMessage" : "successMessage dnone" }><div className="successMessage__messageText">Message sent!</div></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-line">
                <div className="copyright">
                    2023 Copyright ...
                </div>
            </div>
        </div>

    );
}

export default Footer;
