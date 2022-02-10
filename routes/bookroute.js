const express = require('express');

const {getbooks, createbook, getBookDetails, deleteBook, updateBook
} = require("../controller/bookscontroller");

const router = express.Router();

router.route('/books').get(getbooks);

router.route('/book/:id')
.get(getBookDetails);

router.route('/admin/book/:id')
.delete(deleteBook);

router.route('/admin/book/update').put(updateBook);

router.route('/book/new').post(createbook);

module.exports = router;