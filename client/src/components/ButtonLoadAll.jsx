import React from 'react';
import {useDispatch} from "react-redux";
import {getAllPokemon} from "../redux/actions/actions"
const ButtonLoadAll = () => {

    const dispatch = useDispatch()

    const handleLoad = (e) => {
        e.preventDefault()
        dispatch(getAllPokemon())
    }
    return (
        <div>
            <button onClick={(e) => handleLoad(e)}>All Pokemons</button>
        </div>
    );
};

export default ButtonLoadAll;