const { Router } = require('express');
const { check } = require('express-validator');

const { search } = require('../controllers/liverpool.controllers');

const router = Router();

router.get('/search', [
    check('productDisplayName', 'El productDisplayName es obligatorio').not().isEmpty()
], search);


module.exports = router;