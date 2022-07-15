const { Router } = require('express');
const postController = require('../controllers/postControler');
const validateToken = require('../middlewares/validateToken');

const router = Router();

router.use(validateToken);

router.get('/', postController.list);
router.get('/teste', postController.create);

// 12.
// 4. Criar inserção de post com Managed transactions
// 5. Criar inserção de postCategory com bulkCreate e Managed transactions

module.exports = router;