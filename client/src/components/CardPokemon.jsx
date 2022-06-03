import React from 'react';
import '../styles/CardPokemon.css'
const CardPokemon = ({name, image, types}) => {
    let cont = 0
    return (
        <div>
            <div>
                <h3>{name}</h3>
            </div>
            <div className="div-img-card">
                <img src={image} alt="imagen-card" />
            </div>
            <div>
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