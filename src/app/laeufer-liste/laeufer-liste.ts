import { Component } from '@angular/core';
import { PanelModule } from "primeng/panel";
import { OrderListModule } from 'primeng/orderlist';
import { Laeufer } from '../laeufer';


@Component({
  selector: 'app-laeufer-liste',
  imports: [PanelModule, OrderListModule],
  templateUrl: './laeufer-liste.html',
  styleUrl: './laeufer-liste.scss'
})
export class LaeuferListe {
  laeufer: Laeufer[] = [{
    name: "Lukas",
    startnummer: 1
  },
  {
    name: "Andi",
    startnummer: 2
  }];

}
