const { Router } = require('express');
const userController = require('../controllers/userControler');
const validateToken = require('../middlewares/validateToken');

const router = Router();

router.post('/', userController.create);

router.use(validateToken);
router.get('/', userController.list);
router.get('/:id', userController.getById);
router.delete('/me', userController.delete);

module.exports = router;