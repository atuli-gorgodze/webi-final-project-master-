const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    if (!req.session.user) {
        return res.redirect('/login');
    }

    res.render('coments', {
        title: 'Coments',
        email: req.session.user.email // pass email to the view
    });
});

module.exports = router;