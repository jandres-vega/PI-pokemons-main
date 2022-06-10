import React from 'react';
import {Link} from 'react-router-dom'
import FilterByType from "../components/FilterByType";
import FilterByCreation from "../components/FilterByCreation";
import PokemonSearch from "../components/PokemonSearch";
import ButtonLoadAll from "../components/ButtonLoadAll";
import title from "../assets/pokemon.svg";
import '../styles/Header.css'

const Header = () => {
    return (
        <div className="div-header">
            <div className="div-title">
                <img src={title} alt="imag title"/>
            </div>
            <div className="div-button-create">
                <Link to="/form">
                    <button type="button">Create Pokemon</button>
                </Link>
            </div>
            <div className="div-button-back">
                <Link to="/">
                    <button type="button">Back</button>
                </Link>
            </div>
            <div className="div-load">
                <ButtonLoadAll />
            </div>
            <div className="div-filter">
                <FilterByCreation />
                <FilterByType />
            </div>
            <div className="div-search">
                <PokemonSearch />

            </div>
        </div>
    );
};

export default Header;