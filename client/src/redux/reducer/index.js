const initialState = {
    allPokemonHome: [],
    copiaAllPokemon: [],
    DbApi: "all",
    pokemon: [],
    allTypes: [],
}
function rootReducer(state = initialState, action) {

    switch (action.type) {

        case 'GET_ALL_POkEMONS':
            return {
                ...state,
                allPokemonHome: action.payload,
                copiaAllPokemon: action.payload,
            }

        case 'GET_TYPES':
            return {
                ...state,
                allTypes: action.payload
            }

        case 'GET_POKEMON':
            return {
                ...state,
                pokemon: action.payload
            }

        case 'GET_POKEMON_NAME':
            return {
                ...state,
                allPokemonHome: action.payload
            }

        case 'ORDER_POKEMON':
            const orderPokemon = action.value === 'ascent' ?
                state.allPokemonHome.sort(function (a, b) {
                    if (a.name > b.name) return 1
                    if (b.name > a.name) return -1
                    return 0
                }):
                state.allPokemonHome.sort(function (a, b) {
                    if (a.name < b.name) return 1
                    if (b.name < a.name) return -1
                    return 0
                })
            return {
                ...state,
                allPokemonHome: orderPokemon
            }

        case 'ORDER_ATTACK':
            const orderAttack = action.value === 'min-max' ?
                state.allPokemonHome.sort(function (a, b) {
                   return a.attack - b.attack
                }):
                state.allPokemonHome.sort(function (a, b) {
                    return b.attack - a.attack
                })
            return {
                ...state,
                allPokemonHome: orderAttack
            }

        case 'FILTER_BY_TYPE':
            const filterByType = state.copiaAllPokemon.filter(data => {
                if (!data.types){return undefined}
                return data.types && data.types.includes(action.value)
            })
            return {
                ...state,
                allPokemonHome: filterByType
            }

        case 'FILTER_BY_DB_API':
            const filterApiDb = action.value === 'db' ?
                state.copiaAllPokemon.filter((data) => data.createdDb):
                state.copiaAllPokemon.filter((data) => !data.createdDb)

            return {
                ...state,
                allPokemonHome: filterApiDb,
                DbApi: action.value
            }

        case 'CLEAR_POKEMON':
            return {
                ...state,
                allPokemonHome: []
            }

        case 'POST_POKEMON':
            return {
                ...state
            }

        default:
            return state
    }

}

export default rootReducer;