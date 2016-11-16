const express = require('express');
const router = express.Router();
const dataAccess = require('../data/mockData');

router.get('/tastings/', function(req, res, next) {
  dataAccess.getTastings((err, tastings) => {
    res.send(tastings);
  });
});

router.post('/tastings/', function(req, res, next) {
  dataAccess.createTasting(req.body, (err, createdTasting) => {
    res.send(createdTasting);
  });
});

module.exports = router;
