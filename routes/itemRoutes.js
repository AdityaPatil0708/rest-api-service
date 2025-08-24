const express = require('express');
const { getItems, createItem } = require('../controllers/itemController');
const router = express.Router();

router.get('/:id', getItems);
router.post('/', createItem);

module.exports = router;
