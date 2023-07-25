import React from 'react'
import { Link } from "react-router-dom";
import '../style/rounded-button.scss'

function RoundedButton({ text, fontSize, link, light = false, margin = '0px' }) {
    return (
        <>
            <Link to={link}>
                <button className={ !light ? 'btn-rounded' : 'btn-rounded-light'} style={{ 'fontSize': fontSize, 'margin': margin }} >
                    {text}
                </button>
            </Link>
        </>
    )
}

export default RoundedButton