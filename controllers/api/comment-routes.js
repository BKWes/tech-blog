const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// /api/comments
// GET all comments
router.get('/', (req,res) => {
    Comment.findAll({})
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST comment
router.post('/', withAuth, (req,res) => {
    if (req.session) {
        Comment.create({
          comment_text: req.body.comment_text,
          user_id: req.session.user_id,
          post_id: req.body.post_id,
          // use the id from the session
        })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
      }
});

// DELETE comment
router.delete('/:id', withAuth, (req,res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCommentData => {
        if (!dbCommentData) {
            res.status(400).json({ message: 'No comment found with this id' });
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;