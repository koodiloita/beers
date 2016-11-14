import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {TastingsComponent} from './tastings.component';
import {HomeComponent} from './home.component';
import {TastingFormComponent} from './tasting-form.component';

import {TastingService} from './tasting.service';

@NgModule({
  imports: [HttpModule, BrowserModule, FormsModule, RouterModule.forRoot(
    [
      {
        path: 'tastings',
        component: TastingsComponent
      },
      {
        path: 'tastings/new',
        component: TastingFormComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [AppComponent, TastingsComponent, HomeComponent, TastingFormComponent],
  providers: [TastingService],
  bootstrap: [AppComponent]
})

export class AppModule {}
