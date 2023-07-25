import React, {useEffect, useState} from 'react'
import '../style/home.scss'
import { Link } from "react-router-dom";

function ArrowButton({ text, link, styles }) {

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (link === '/') {
        return (
            <button type='submit' className={ windowSize.width < 1024 ? "div-arrow-btn arrow-center" : "div-arrow-btn arrow-right"} style={{ 'color': styles.color, 'fontSize': styles.fontSize }}>
                <div className='div-arrow-btn__arrow'>
                    <div className="div-arrow-btn__arrow-text">{text}</div>
                    <div className="div-arrow-btn__arrow-container">
                        <div className="arrow-body">
                            <div className="arrow-head"></div>
                        </div>
                    </div>
                </div>
            </button>
        )
    } else {
        return (
            <Link to={link}>
                <div className={ windowSize.width < 1024 ? "div-arrow-btn arrow-center" : "div-arrow-btn arrow-left"} style={{ 'color': styles.color, 'fontSize': styles.fontSize }}>
                    <div className='div-arrow-btn__arrow'>
                        <div className="div-arrow-btn__arrow-text">{text}</div>
                        <div className="div-arrow-btn__arrow-container">
                            <div className="arrow-body">
                                <div className="arrow-head"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }

}

export default ArrowButton