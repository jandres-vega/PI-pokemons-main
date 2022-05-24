const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const Poke = require('../routes/pokemon.routes')
const Types = require('../routes/type.routes')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemons', Poke)
router.use('/types', Types)


module.exports = router;
