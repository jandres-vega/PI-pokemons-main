const {Router} = require('express')
const {Pokemon, Type} = require('../db')
const router = Router()
const {getInfoApiPokemonHome, infoT} = require('../services/infoApiDb')

router.get('/', async (req, res) => {
    try {
        const name = req.query.name;
        const infoApi = await getInfoApiPokemonHome();
        if(name){
            const filterByName = infoApi.filter(data => data.name === name)
            if (filterByName.length === 0){
                res.status(404).send("no se encontro pokemon")
            }else {
                res.status(200).send(filterByName)
            }
        }else {
            res.status(200).send(infoApi)
        }

    }catch (e) {
        console.error(e)
    }
});

router.get('/:id', async (req, res) => {

    try {
        const infoDetail = await infoT()
        const {id} = req.params;
        if (id.length < 5) {
            const idNumber = parseInt(id)
            const filterById = infoDetail.filter((data) => data.id === idNumber)
            if (filterById.length === 0){
                res.status(404).send('no se encontro pokemon')
            }else {
                res.status(200).send(filterById)
            }
        }else {
            const filterByIdDb = infoDetail.filter((data) => data.id === id)
            if (filterByIdDb.length === 0){
                res.status(404).send('no se encuentra el pokemon')
            }else {
                res.status(200).send(filterByIdDb)
            }
        }
    }catch (e) {
        console.error(e)
    }
});

router.post('/', async (req, res) => {

    try {
        const {
            name,
            image,
            life,
            attack,
            defense,
            speed,
            height,
            weight,
            types
        } = req.body;

        let createPokemon = await Pokemon.create({
            name,
            image,
            life,
            attack,
            defense,
            speed,
            height,
            weight,
        })
        if (types.length) {
            try {
                types.map(async (data) => {
                    let typesPokemon = await Type.findOrCreate({
                        where: {name: data}
                    })
                    createPokemon.addType(typesPokemon[0])
                })
            }catch (e) {
                console.error(e)
            }
        }
        res.status(200).send("receta creada correctamente")

    }catch (e) {
        console.error(e)
    }
})

module.exports = router