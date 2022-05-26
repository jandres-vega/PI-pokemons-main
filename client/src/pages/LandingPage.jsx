import React from 'react'
import {Link} from "react-router-dom";

const LandingPage = () => {

    return (
        <div>
            <Link to='/home'>
                <button>START</button>
            </Link>
        </div>
    )
}

export default LandingPage;