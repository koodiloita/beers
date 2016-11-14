import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TastingsComponent} from './tastings.component';

import {TastingService} from './tasting.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TastingsComponent],
  providers: [TastingService],
  bootstrap: [AppComponent]
})

export class AppModule {}
