import axios from "axios";

export function getAllPokemon () {
    return async function(dispatch) {
        const allPogemon = await axios.get('http://localhost:3005/pokemons');
        return dispatch({
            type: 'GET_ALL_POkEMONS',
            payload: allPogemon.data
        })
    }
}

export function getAllTypes () {
    return async function(dispatch) {
        const allTypes = await axios.get('http://localhost:3005/types')
        return dispatch({
            type: 'GET_TYPES',
            payload: allTypes.data
        })
    }
}

export function getPokemon (id) {
    return async function(dispatch) {
        const detailPokemon = await axios.get(`http://localhost:3005/pokemons/${id}`)
        return dispatch({
            type: 'GET_POKEMON',
            payload: detailPokemon.data
        })
    }
}

export function orderPokemon (value) {
    return {
        type: 'ORDER_POKEMON',
        value,
    }
}

export function orderAttack (value) {
    return {
        type: 'ORDER_ATTACK',
        value
    }
}

export function filterByType(value) {
    return {
        type: 'FILTER_BY_TYPE',
        value
    }
}

export function filterByDbApi(value) {
    return {
        type: 'FILTER_BY_DB_API',
        value
    }
}

