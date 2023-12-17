const router = require('express').Router();
const userRoutes = require('./user_routes');
const postRoutes = require('./post_routes');
const commentRoutes = require('comment_routes');

router.use('/user_routes', userRoutes);
router.use('/comment_routes', commentRoutes);
router.use('/post_routes', postRoutes);


module.exports = router;
