import {Component, OnInit} from '@angular/core';
import {Beer, Tasting} from './entities';
import {TastingService} from './tasting.service';

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
    </table>`,
    providers: [TastingService]
})

export class AppComponent implements OnInit {
  tastings: Tasting[];

  constructor(private tastingService: TastingService) {}

  getTastings(): void {
    this.tastingService.getTastings().then(tastings => this.tastings = tastings);
  }

  ngOnInit(): void {
    this.getTastings();
  }
}
