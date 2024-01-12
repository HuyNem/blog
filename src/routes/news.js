const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');
/*
app.get('/news', (req, res) => {
    res.render('news')
})
*/
router.get('/', newsController.index);


module.exports = router;