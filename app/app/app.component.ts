import {Component} from '@angular/core';
import {Beer, Tasting} from './entities.ts';

const mockTastings: Tasting[] = [
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

@Component({
  selector: 'beers-app',
  template:
    `<h1>Beers app</h1>
    <h2>Tastings</h2>
    <table class="table">
      <tr *ngFor="let tasting of tastings">
        <td>{{tasting.title}}</td>
        <td>{{tasting.beer.name}}</td>
        <td>{{tasting.date}}</td>
        <td>{{tasting.grade}}</td>
        <td>{{tasting.notes}}</td>
      </tr>
    </table>`
})

export class AppComponent {
  tastings = mockTastings;
}
