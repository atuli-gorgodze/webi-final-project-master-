const express = require('express');
const router = express.Router();

// GET /coments — just render coments.ejs
router.get('/', (req, res) => {
    res.render('coments');
});


module.exports = router;
