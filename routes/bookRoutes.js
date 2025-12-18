const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookController');

router.get('/', controller.getAll);

router.get('/add', controller.getAddForm);
router.post('/add', controller.addBook);

router.get('/edit/:id', controller.getEditForm);
router.post('/edit/:id', controller.updateBook);

router.post('/delete/:id', controller.deleteBook);

router.get('/details/:id', controller.getDetails);

module.exports = router;
