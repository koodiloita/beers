import {Component, OnInit} from '@angular/core';
import {Beer, Tasting} from './entities';
import {TastingService} from './tasting.service';

@Component({
  selector: 'tastings',
  template:
    `<h2>Tastings</h2>
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

export class TastingsComponent implements OnInit {
  tastings: Tasting[];

  constructor(private tastingService: TastingService) {}

  getTastings(): void {
    this.tastingService.getTastings().then(tastings => this.tastings = tastings);
  }

  ngOnInit(): void {
    this.getTastings();
  }
}
