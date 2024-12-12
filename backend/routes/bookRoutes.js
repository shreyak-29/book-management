const express = require('express');
const { getBooks, addBook, editBook, deleteBook } = require('../controllers/bookController');
const router = express.Router();

router.get('/', getBooks);
router.post('/', addBook);
router.put('/:id', editBook);
router.delete('/:id', deleteBook);

module.exports = router;
