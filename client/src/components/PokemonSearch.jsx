import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useState} from 'react'
import {searchPokemon} from '../redux/actions/actions'
import '../styles/PokemonSearch.css'
const PokemonSearch = () => {

    const dispatch = useDispatch()
    const [poke, setPoke] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(searchPokemon(poke))
    }

    function handleSearch(e) {
        e.preventDefault();
        setPoke(e.target.value)
    }
    return (
        <div className="div-ser">
            <button type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
            <input
                onChange={(e) => handleSearch(e) }
                type="text"
                placeholder="Name Pokemon"
                value={poke}
                name="poke"
            />
        </div>
    );
};

export default PokemonSearch;