import {TastingForm, Tasting, Beer} from './entities';

export function formToTasting(form: TastingForm): Tasting {
  const tasting = new Tasting();
  const beer = new Beer();
  beer.name = form.beerName;
  beer.type = form.beerType;
  beer.brewery = form.beerBrewery;
  beer.country = form.beerCountry;
  beer.wortStrength = Number(form.beerWortStrength);
  beer.alcohol = Number(form.beerAlcohol);
  beer.color = Number(form.beerColor);
  beer.ebu = Number(form.beerEbu);

  tasting.title = form.title;
  tasting.date = form.date;
  tasting.notes = form.notes;
  tasting.grade = Number(form.grade);
  tasting.food = form.food;
  tasting.beer = beer;
  return tasting;
}

export function mapTastingToRequestObject(tasting: Tasting) {
  return {
    title: tasting.title,
    date: tasting.date,
    notes: tasting.notes,
    grade: tasting.grade,
    food: tasting.food,
    beerName: tasting.beer.name,
    beerType: tasting.beer.type,
    beerBrewery: tasting.beer.brewery,
    beerCountry: tasting.beer.country,
    beerWortStrength: tasting.beer.wortStrength,
    beerAlcohol: tasting.beer.alcohol,
    beerColor: tasting.beer.color,
    beerEbu: tasting.beer.ebu
  }
}

export function mapResponseToTastings(requestBody): Tasting[] {
  return requestBody.map(mapServerObjectToTasting);
}

function mapServerObjectToTasting(serverObject): Tasting {
  const tasting = new Tasting();
  const beer = new Beer();
  beer.name = serverObject.beerName;
  beer.type = serverObject.beerType;
  beer.brewery = serverObject.beerBrewery;
  beer.country = serverObject.beerCountry;
  beer.wortStrength = Number(serverObject.beerWortStrength);
  beer.alcohol = Number(serverObject.beerAlcohol);
  beer.color = Number(serverObject.beerColor);
  beer.ebu = Number(serverObject.beerEbu);

  tasting.title = serverObject.title;
  tasting.date = serverObject.date;
  tasting.notes = serverObject.notes;
  tasting.grade = Number(serverObject.grade);
  tasting.food = serverObject.food;
  tasting.beer = beer;
  tasting.id = serverObject._id;
  return tasting;
}
