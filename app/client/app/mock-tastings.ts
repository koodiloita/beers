import {Beer, Tasting} from './entities';

export const mockTastings: Tasting[] = [
  {
    id: '1',
    title: 'Punk IPA and grilled salmon',
    date: '2016-01-02',
    notes: 'Great beer with lots of hops. Goes well with salmon.',
    grade: 4.5,
    food: 'Grilled salmon',
    beer: {
      name: 'Punk IPA',
      type: 'IPA',
      brewery: 'Brewdog',
      country: 'Scotland',
      wortStrength: 13.1,
      alcohol: 5.6,
      color: 13.5,
      ebu: 35.5
    }
  }
];
