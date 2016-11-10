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
