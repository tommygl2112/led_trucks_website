import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaAngleUp } from "react-icons/fa";
import '../style/header.scss';
import RoundedButton from "./RoundedButton";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
    <div className="full-width-header">
      <div className="full-width-header__header">
        <div className="full-width-header__header__div-logo">
          <Link to='/'>
            <img className="full-width-header__header__div-logo__logo" src={"/assets/cosmo-logo4.png"} alt="logo" />
          </Link>
        </div>
        <div className="full-width-header__header__btns">
          <Link to="/">
            <button className="full-width-header__header__btns__btn"> Home </button>
          </Link>
          <Link to="/about">
            <button className="full-width-header__header__btns__btn"> About Us </button>
          </Link>
          <Link to="/how-it-works">
            <button className="full-width-header__header__btns__btn"> How it works </button>
          </Link>
          <Link to="/services">
            <button className="full-width-header__header__btns__btn"> Services </button>
          </Link>

          <RoundedButton fontSize={'18px'} margin="20px 0px" text={'Contact us'} link ={'./contact'} light={true}/>
        </div>
        <button
          className="full-width-header__header__hamburger-menu"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <img src={"/assets/drop-down.png"} /> : <img src={"/assets/hamburger.png"} />}
        </button>
      </div>
    </div>
    <div className={showMenu ? "mobile-menu menu show" : "mobile-menu--hide menu"}>
        <Link to="/">
          <button className="mobile-menu__btn"> Home </button>
        </Link>
        <Link to="/about">
          <button className="mobile-menu__btn"> About Us </button>
        </Link>
        <Link to="/services">
          <button className="mobile-menu__btn"> Services </button>
        </Link>
        <Link to="/contact">
          <button className="mobile-menu__btn"> Contact us </button>
        </Link>
      </div>
    </>
  );
}

export default Header;
