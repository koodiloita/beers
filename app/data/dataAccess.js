'use strict';

const MongoClient = require('mongodb').MongoClient;

const connectionUrl = 'mongodb://localhost:27017/beers';
let db;

function initializeConnection(callback) {
  MongoClient.connect(connectionUrl, function(err, connectedDb) {
    if (err) {
      console.log('MongoDb connection failed', err);
    }
    db = connectedDb;
    callback();
  });
}

function getTastings(callback) {
  const collection = db.collection('tastings');
  collection.find({}).toArray((err, tastings) => {
    console.log('Loaded tastings', tastings);
    callback(null, tastings);
  });
}

function createTasting(tasting, callback) {
  const collection = db.collection('tastings');
  collection.insertOne(tasting, (err, result) => {
    console.log('Inserted tasting', result.insertedId);
    callback(null, result.insertedId);
  });
}

module.exports = {
  initializeConnection: initializeConnection,
  getTastings: getTastings,
  createTasting: createTasting
};
