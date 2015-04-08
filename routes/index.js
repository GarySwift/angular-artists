var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('artistlist', ['artistlist']);

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Node Express & Angular' });
  res.use(express.static(__dirname + "/public"));
});


router.get('/artistlist', function (req, res) {
    db.artistlist.find( function(err, docs) {
        console.log(docs);
        res.json(docs);
    });
});

module.exports = router;
