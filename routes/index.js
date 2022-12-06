//const express = require('express');
//const clientesController = require('../controllers/clientesController');
//const ClientesController = require('../controllers/clientesController');
//const router = express.Router();
//const HomeController = require("../controllers/homeController")

//router.get('/', HomeController.index);

//router.get('/clientes', ClientesController.index);
//router.get('/clientes/:id', ClientesController.show);
//router.post('/clientes', ClientesController.create);
//router.delete('/clientes/:id', ClientesController.delete);
//router.put('/clientes/:id', ClientesController.update);

//module.exports = router;


const express = require('express');
const router = express.Router();
const HomeController = require("../controllers/homeController")
const ClientesController = require("../controllers/clientesController")
const ProdutosController = require("../controllers/produtosController")

router.get('/', HomeController.index);

router.get('/clientes', ClientesController.index);
router.post('/clientes', ClientesController.create);
router.get('/clientes/:id', ClientesController.show);
router.delete('/clientes/:id', ClientesController.delete);
router.put('/clientes/:id', ClientesController.update);


router.get('/produtos', ProdutosController.index);
router.post('/produtos', ProdutosController.create);
router.get('/produtos/:id', ProdutosController.show);
router.delete('/produtos/:id', ProdutosController.delete);
router.put('/produtos/:id', ProdutosController.update);

module.exports = router;