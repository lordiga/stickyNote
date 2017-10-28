import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeckComponent } from '../components/deck_component/deck.component';
import { CardComponent } from '../components/card_component/card.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
