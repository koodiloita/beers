export class Beer {
  name: string;
  type: string;
  brewery: string;
  country: string;
  wortStrength: number;
  alcohol: number;
  color: number;
  ebu: number;
}

export class Tasting {
  id: string;
  title: string;
  date: string;
  notes: string;
  grade: number;
  food: string;
  beer: Beer
}

export class TastingForm {
  title: string;
  date: string;
  notes: string;
  grade: number;
  food: string;
  beerName: string;
  beerType: string;
  beerBrewery: string;
  beerCountry: string;
  beerWortStrength: number;
  beerAlcohol: number;
  beerColor: number;
  beerEbu: number;
}
