import {Component} from '@angular/core';

@Component({
  selector: 'beers-app',
  template: `
    <nav class="navbar navbar-inverse">
      <a class="navbar-brand" routerLink="/home">Beers app</a>
      <ul class="nav navbar-nav navbar-left">
          <li><a routerLink="/tastings">Tastings</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-left">
          <li><a routerLink="/tastings/new">Create tasting</a></li>
      </ul>
    </nav>
    <div class="row content app">
      <div class="col-md-12">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})

export class AppComponent {}
