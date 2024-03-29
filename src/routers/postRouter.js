const { Router } = require('express');
const postController = require('../controllers/postControler');
const validateToken = require('../middlewares/validateToken');

const router = Router();

router.use(validateToken);

router.get('/', postController.list);
router.get('/search', postController.search);
router.get('/:id', postController.getById);
router.post('/', postController.create);
router.put('/:id', postController.update);
router.delete('/:id', postController.delete);

module.exports = router;