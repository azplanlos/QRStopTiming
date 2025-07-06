import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Scanner } from "./scanner/scanner";

@Component({
  selector: 'app-root',
  imports: [Scanner],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  runner(event: String) {
    console.log(event);
  }
  protected title = 'QRStopTiming2';
}
