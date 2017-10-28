import { Component } from '@angular/core';
import { CardComponent } from '../card_component/card.component';
@Component({
  selector: 'deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent {
  Name: string;
  Data: [CardComponent];
  constructor () {
    this.Data;
  }
  addCard(card: CardComponent, name: string) {
    this.Data.push(card);
  }
}
