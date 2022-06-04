import React from 'react';
import '../styles/CardPokemon.css'
const CardPokemon = ({name, image, types}) => {
    let cont = 0
    return (
        <div className="div-card">
            <div className="div-pok">
                <h3>{name}</h3>
            </div>
            <div className="div-img-card">
                <img src={image} alt="imagen-card" />
            </div>
            <div className="div-ul-types">
                <ul>
                    {
                        types?.map((type) => (
                            <li key={cont++}>{type}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default CardPokemon;