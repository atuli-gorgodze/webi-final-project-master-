const express = require('express');
const router = express.Router();
const Blog = require('../models/blog'); // make sure this path is correct

router.get('/', async function (req, res) {
    if (!req.session.user) {
        return res.redirect('/login');
    }

    try {
        const blogs = await Blog.find().sort({ createdAt: -1 }); // get blogs from DB
        res.render('newsletter', {
            title: 'Newsletter',
            email: req.session.user.email,
            blogs: blogs
        });
    } catch (err) {
        console.error('Error fetching blogs:', err);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/', function (req, res) {
    const email = req.body.email;
    console.log('Subscribed email:', email);
    res.send('Thanks for subscribing!');
});

module.exports = router;
