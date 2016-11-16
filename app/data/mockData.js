const uuid = require('uuid');

const mockTastings = [
  {
    id: uuid.v1(),
    title: 'Punk IPA and grilled salmon',
    date: '2016-01-02',
    notes: 'Great beer with lots of hops. Goes well with salmon.',
    grade: 4.5,
    food: 'Grilled salmon',
    beerName: 'Punk IPA',
    beerType: 'IPA',
    beerBrewery: 'Brewdog',
    beerCountry: 'Scotland',
    beerWortStrength: 13.1,
    beerAlcohol: 5.6,
    beerColor: 13.5,
    beerEbu: 35.5
  }
]

function getTastings(callback) {
  callback(null, mockTastings);
}

function createTasting(tasting, callback) {
  tasting.id = uuid.v1();
  mockTastings.push(tasting);
  callback(null, tasting);
}

module.exports = {
  getTastings: getTastings,
  createTasting: createTasting
};
