import React from 'react';
import {Link} from 'react-router-dom'
import FilterByType from "../components/FilterByType";
import FilterByCreation from "../components/FilterByCreation";

const Header = () => {
    return (
        <div>
            <div>
                <Link to="/form">
                    <button>Create Pokemones</button>
                </Link>
            </div>
            <FilterByCreation />
            <FilterByType />
        </div>
    );
};

export default Header;