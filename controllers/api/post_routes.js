const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const auth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{ model: User, attributes: ['username'] }],
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [{ model: User, attributes: ['username'] },
            {
                model: Comment,
                include: [{ model: User, attributes: ['username'] }],
            },
            ],
        });
        if (!postData) {
            res.status(404).json({
                message: 'No post found using that id!'
            });
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', auth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/:id', auth, async (req, res) => {
    try {
        const updatePost = await Post.update(req.body, {
            where: { id: req.params.id },
        });
        if (!updatePost) {
            res.status(404).json({ message: 'Post not found using that id!' });
            return;
        }
        res.status(200).json(updatePost);
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete('/:id', auth, async (req, res) => {
    
})