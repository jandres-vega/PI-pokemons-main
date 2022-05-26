import React from 'react';

const CardPokemon = ({name, image, types}) => {
    let cont = 0
    return (
        <div>
            <h3>{name}</h3>
            <img src={image} alt="imagen-card"/>
            <ul>
                {
                    types?.map((type) => (
                        <li key={cont++}>{type}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default CardPokemon;