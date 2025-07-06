import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ZeitformatPipe } from '../zeitformat-pipe';

@Component({
  selector: 'app-laeufer-stop',
  imports: [NgFor, ZeitformatPipe],
  templateUrl: './laeufer-stop.html',
  styleUrl: './laeufer-stop.scss'
})
export class LaeuferStop implements OnInit {

  @Input()
  sekunden: number = 0;

  @Input()
  scan: Observable<string> = new Observable<string>();  

  ergebnisse: Ergebnis[] = []

  ngOnInit(): void {
      this.scan.subscribe(runner => {
        const index = this.ergebnisse.findIndex(erg => erg.name === undefined);
        console.log("next: " + index);
        if (index >= 0) {
          this.ergebnisse[index] = {name: runner, zeit: this.ergebnisse[index].zeit};
        }
      });
  }

  stopp() {
    console.log("stopp @" + this.sekunden);
    this.ergebnisse.push({name: undefined, zeit: this.sekunden})
  }
}

interface Ergebnis {
  name: string | undefined;
  zeit: number;
}