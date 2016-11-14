import {Component} from '@angular/core';

@Component({
  selector: 'beers-app',
  template: `
    <h1>{{title}}</h1>
    <tastings></tastings>
  `
})

export class AppComponent {
  title = 'Beers app';
}
