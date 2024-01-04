const router = require('express').Router();
const userRoute = require('./user_routes');
const postRoute = require('./post_routes');
const commentRoute = require('./comment_routes');

router.use('/users', userRoute);
router.use('/comments', commentRoute);
router.use('/posts', postRoute);

module.exports = router;