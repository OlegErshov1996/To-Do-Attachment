const {Routes} = require('express');
const router = Routes();

router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;
