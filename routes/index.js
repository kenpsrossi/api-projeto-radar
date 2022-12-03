const express = require('express');
const clientesController = require('../controllers/clientesController');
const router = express.Router();
const HomeController = require("../controllers/homeController")

router.get('/', HomeController.index);

router.get('/clientes', clientesController.index);

module.exports = router;
