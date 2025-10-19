import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ZeitformatPipe } from '../zeitformat-pipe';
import { ButtonModule } from "primeng/button";
import { LaeuferInfo } from '../laeufer-info';
import { PanelModule } from 'primeng/panel';
import { Howl } from 'howler';

@Component({
  selector: 'app-laeufer-stop',
  imports: [NgFor, ZeitformatPipe, ButtonModule, PanelModule],
  templateUrl: './laeufer-stop.html',
  styleUrl: './laeufer-stop.scss'
})
export class LaeuferStop implements OnInit {

  reset() {
    this.ergebnisse = [];
  }

  lookupName(name: string): string {
    return this.laueferService.lookup(parseInt(name.replace("qrstoptiming:", "")));
  }

  @Input()
  sekunden: number = 0;

  @Input()
  scan: Observable<string> = new Observable<string>();  

  ergebnisse: Ergebnis[] = [];

  private beep = new Howl({src: ['beep.mp3']});

  constructor(private laueferService: LaeuferInfo) {}

  ngOnInit(): void {
      this.scan.subscribe(runner => {
        const index = this.ergebnisse.findIndex(erg => erg.name === undefined);
        if (index >= 0) {
          this.beep.play()
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