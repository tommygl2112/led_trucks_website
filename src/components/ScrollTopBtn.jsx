import React, { useCallback, useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa"
import '../style/scroll-top-btn.scss'


function ScrollTopBtn() {
    const [y, setY] = useState(window.scrollY);
    const [isOnTop, setIsOnTop] = useState(true);

    const handleNavigation = useCallback(
        e => {
            const window = e.currentTarget;
            if ( y < 100) {
                setIsOnTop(true);
            } else {
                setIsOnTop(false);
            }
            setY(window.scrollY);
        }, [y]
    );

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    const scrollTop = () => {
        window.scrollTo(0, 0);
        setIsOnTop(true);
    }

    return (
        <div>
            {/*<div className={!isOnTop ? 'scroll-top-btn' : 'scroll-top-btn hidden-element'} onClick={scrollTop}><FaArrowUp /></div>*/}
            <div className={!isOnTop ? 'container-arrow-btn' : 'container-arrow-btn hidden-element' } onClick={scrollTop}>
            <div className="arrow"></div>
            </div>
        </div>
    )
}

export default ScrollTopBtn