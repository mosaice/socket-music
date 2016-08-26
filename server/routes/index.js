const router = require('koa-router')();
const controller = require('../controller/');

router.get('/', controller.index);
router.get('/songs/:song', controller.songs);
router.get('/singer/:singer', controller.singer);
router.get('/album/:album', controller.album);
router.get('/songs_singer/:song/:singer', controller.songsWithSinger);
router.get('/songs_album/:song/:album', controller.songsWithAlbum);
router.get('/singer_album/:singer/:album', controller.singerWithAlbum);
router.get('/:song/:singer/:album', controller.songsWithSingerWithAlbum);

module.exports = router;
