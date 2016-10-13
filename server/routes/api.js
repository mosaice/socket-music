const router = require('koa-router')();
const catchError = require('../middleware/catchError');
const api = require('../controller/api');


router.use('/', catchError);
router.get('/search', api.search);

module.exports = router;
