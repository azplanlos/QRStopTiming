import { ApplicationRef, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PanelModule } from "primeng/panel";
import { OrderListModule } from 'primeng/orderlist';
import { Laeufer } from '../laeufer';
import { QRCodeComponent } from 'angularx-qrcode';
import { LaeuferInfo } from '../laeufer-info';
import { CommonModule, NgForOf } from '@angular/common';
import { Button, ButtonDirective } from "primeng/button";
import { Buffer, Workbook } from "exceljs";

@Component({
  selector: 'app-laeufer-liste',
  imports: [PanelModule, OrderListModule, QRCodeComponent, CommonModule, ButtonDirective],
  templateUrl: './laeufer-liste.html',
  styleUrl: './laeufer-liste.scss'
})
export class LaeuferListe implements OnInit {

  onFileSelected($event: Event) {
    console.log($event);
    if ($event !== undefined && $event.target !== null && ($event.target as HTMLInputElement).files !== null) {
      this.laeuferService.loadXlsx(($event.target as HTMLInputElement).files![0]);
    }
  }

  laeufer: Laeufer[] = [];
  requiredFileType= ".xlsx";

  constructor(private laeuferService: LaeuferInfo, private appRefresh: ChangeDetectorRef) {
  }

  laeuferListe() {
    return this.laeufer;
  }

  ngOnInit(): void {
    console.log("init");
      this.laeuferService.laauferInfo$.subscribe(info => {
        this.laeufer = [...this.laeufer, info];
      });
  }

}
