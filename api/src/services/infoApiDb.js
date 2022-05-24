const axios = require('axios')
const {Type, Pokemon} = require('../db')


const getTypePokemon = async function () {

    try {
        const types = await axios.get('https://pokeapi.co/api/v2/type');
        return types.data.results.map(data => {
            return data.name
        })
    }catch (e) {
        console.error(e)
    }
}

const precargaDb = async function () {
    const allTypes = await getTypePokemon()
    return allTypes.forEach(data => {
        Type.findOrCreate({
            where: {name: data}
        })
    })
}

const getInfoApiPokemonHome = async function () {

    try {
        const infoApi = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40')
        const infoUrl = infoApi.data.results.map(data => (data.url));
        const infoDetail = await axios.all(infoUrl.map(async index => {
            return await axios.get(index)
        }));
        return infoDetail.map(e => {
            return {
                id: e.data.id,
                name: e.data.name,
                image: e.data.sprites.other.dream_world.front_default,
                types: e.data.types.map(e => e.type.name)
            }
        })
    }catch (e) {
        console.error(e)
    }
}

const getInfoApiPokemonDetail = async function () {
    try {
        const infoApi = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40')
        const infoUrl = infoApi.data.results.map(data => (data.url));
        const infoDetail = await axios.all(infoUrl.map(async index => {
            return await axios.get(index)
        }));
        return infoDetail.map(e => {
            return {
                id: e.data.id,
                name: e.data.name,
                image: e.data.sprites.other.dream_world.front_default,
                life: e.data.stats[0].base_stat,
                attack: e.data.stats[1].base_stat,
                defense: e.data.stats[2].base_stat,
                speed: e.data.stats[5].base_stat,
                height: e.data.height,
                weight: e.data.weight,
                types: e.data.types.map(e => e.type.name),

            }
        })
    }catch (e) {
        console.error(e)
    }
}

const getPokemonDb = async function () {
    return await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
}

const infoT = async function () {
    const infoApi = await getInfoApiPokemonDetail();
    const infoDb = await getPokemonDb()
    return infoApi.concat(infoDb);
}

module.exports = {
    getTypePokemon, precargaDb, getInfoApiPokemonHome,
    getPokemonDb, infoT, getInfoApiPokemonDetail
}