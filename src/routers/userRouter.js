const { Router } = require('express');
const userController = require('../controllers/userControler');
const validateToken = require('../middlewares/validateToken');

const router = Router();

router.post('/', userController.createUser);

router.use(validateToken);
router.get('/', userController.listAll);

module.exports = router;