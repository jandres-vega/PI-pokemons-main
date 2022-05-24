const {Router} = require('express')
const {Type} = require('../db')
const router = Router()

router.get('/', async (req, res) => {

    try {

        let getTypes = await Type.findAll()
        getTypes = getTypes.map((data) => {
            return data
        })
        res.send(getTypes)
    }catch (e) {
        console.error(e)
    }
})

module.exports = router