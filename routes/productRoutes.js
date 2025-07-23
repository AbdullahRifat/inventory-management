const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

router.get('/', controller.index);
router.get('/new', controller.newForm);
router.post('/', controller.create);
router.get('/edit/:id', controller.editForm);
router.put('/:id', controller.update);      // <-- PUT method here
router.delete('/:id', controller.delete);

module.exports = router;
