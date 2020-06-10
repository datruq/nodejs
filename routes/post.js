const express = require('express');

const { getPost } = require('../controllers/post');

const router = express.Router();

router.get('/', getPost);
module.exports = router;
