const { Router } = require('express');
const userController = require('../controllers/userControler');

const router = Router();

router.get('/', userController.teste);

module.exports = router;