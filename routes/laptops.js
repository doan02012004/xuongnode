const express = require('express')
const laptopsController = require('../controllers/laptopsController')
const router = express.Router()

router.get('/', laptopsController.cars_index);
router.get('/:id',laptopsController.cars_detail);
router.post('/',laptopsController.cars_post);
router.put('/:id',laptopsController.cars_update);
router.delete('/:id',laptopsController.cars_delete)

module.exports = router