import React from 'react'
import {Link} from "react-router-dom";
import '../styles/LandingPage.css'
const LandingPage = () => {

    return (
        <div className="div-fondo">
            <div className="center">
                <div className="outer circle">
                    <Link to="/home">
                        <button type="button">START</button>
                        <span />
                        <span />
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default LandingPage;