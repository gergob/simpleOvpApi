var express = require('express');
var router = express.Router();
var cors = require('cors');
var path = require('path');

router.use(cors());
router.options('*', cors()); 

router.get('/:img', function (req, res) {
    res.sendFile(path.resolve(`public/images/${req.params.img}`));
});

module.exports = router;
