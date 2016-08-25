const router = require('koa-router')();
const controller = require('../controller/');

router.get('/', controller.index);
router.get('/songs/:song', controller.songs);
router.get('/singer/:singer', controller.singer);

module.exports = router;
