import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Scanner } from "./scanner/scanner";
import { Stoppuhr } from './stoppuhr/stoppuhr';
import { LaeuferStop } from './laeufer-stop/laeufer-stop';
import { Subject } from 'rxjs';
import { LaeuferListe } from "./laeufer-liste/laeufer-liste";

@Component({
  selector: 'app-root',
  imports: [Scanner, Stoppuhr, LaeuferStop, LaeuferListe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  sec: number = 0;
  runnerScan = new Subject<string>();

  seconds(num: number) {
    this.sec = num;
  }

  runner(event: String) {
    this.runnerScan.next(event.toString());
  }
  protected title = 'QRStopTiming2';
}
