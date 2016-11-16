const express = require('express');
const router = express.Router();
const dataAccess = require('../data/dataAccess');

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

router.delete('/tastings/:id', function(req, res, next) {
  const id = req.params.id;
  dataAccess.deleteTasting(id, (err, deletedId) => {
    res.send(deletedId);
  });
});

module.exports = router;
