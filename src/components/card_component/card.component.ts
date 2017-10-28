import { Component } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  Name: string;
  Definition: Definition;
  constructor () {
  }
  

}
interface Definition {
  word : string,
  image: string,  
}
