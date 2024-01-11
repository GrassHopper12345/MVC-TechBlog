const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Agreed",
        post_id: 1,
        user_id: 1,
    },
    {
        comment_text: "Agreed",
        post_id: 1,
        user_id: 2,
    },
    {
        comment_text: "Agreed",
        post_id: 1,
        user_id: 3,
    },
    {
        comment_text: "Agreed",
        post_id: 1,
        user_id: 4,
    },
    {
        comment_text: "Disagree a lot",
        post_id: 1,
        user_id: 5,
    },
    {
        comment_text: "Agreed upon",
        post_id: 1,
        user_id: 6,
    },
    {
        comment_text: "Agreed a lot",
        post_id: 1,
        user_id: 7,
    },
    {
        comment_text: "Agreed a little bit",
        post_id: 1,
        user_id: 8,
    },
    {
        comment_text: " I'd Agree but......",
        post_id: 1,
        user_id: 9,
    },
    {
        comment_text: "I Disagree",
        post_id: 1,
        user_id: 10,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;