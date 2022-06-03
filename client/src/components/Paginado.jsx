import React from 'react';

const Paginado = ({ pokeByPage, allPokemon, paginado }) => {

    const pagNumber = [];
    for (let i = 1; i <= Math.ceil(allPokemon / pokeByPage); i++) {
        pagNumber.push(i);
    }

    return (
        <div>
            <ul className="paginado">
                {pagNumber &&
                    pagNumber.map((number) => (
                        <li className="number" key={number}>
                            <div className="container-number">
                                <a onClick={() => paginado(number)}>{number}</a>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Paginado;