const { Router } = require('express');
const postController = require('../controllers/postControler');
const validateToken = require('../middlewares/validateToken');

const router = Router();

router.use(validateToken);

router.get('/', postController.list);

module.exports = router;