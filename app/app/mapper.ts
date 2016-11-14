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
