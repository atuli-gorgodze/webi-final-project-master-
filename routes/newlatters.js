const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/newlatters', function (req, res, next) {
    if (req.session.user) {
        return res.redirect('/newlatters');
    }
    res.redirect('/newlatters');
});

module.exports = router;