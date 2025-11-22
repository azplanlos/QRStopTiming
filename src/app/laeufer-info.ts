import { Injectable, OnInit } from '@angular/core';
import { interval, shareReplay, Subject } from 'rxjs';
import { Laeufer } from './laeufer';
import { Buffer, Workbook } from 'exceljs';
import { Ergebnis } from './laeufer-stop/laeufer-stop';

@Injectable({
  providedIn: 'root'
})
export class LaeuferInfo {

  private laeuferList: Laeufer[] = [];

  lookup(startnummer: number): string {
    return this.laeuferList.find(l => l.startnummer === startnummer)?.name || "Scan ausstehend";
  }

  loadXlsx(file: File) {
    console.log("load file");
    const reader = new FileReader();
    reader.onload = ev => {
      this.laeuferList = [];
      const wb2 = new Workbook();
      wb2.xlsx.load(ev.target!.result as Buffer).then(() => {
        const ws2 = wb2.getWorksheet('Tabelle1');
        ws2!.eachRow((row, num) => {
          if (num > 1) {
            console.log("row", num, row.getCell(1).value);
            const info = {
              name: row.getCell(1).value?.toString(),
              startnummer: parseInt(row.getCell(3).value!.toString())
            } as Laeufer;
            this.laeufer.next(info);
            this.laeuferList.push(info);
          }
        });
      });
    };
    reader.readAsArrayBuffer(file);
  }

  private laeufer = new Subject<Laeufer>();
  laauferInfo$ = new Subject<Laeufer>();

  export(ergebnisse: Ergebnis[]): Promise<string> {
    const wb2 = new Workbook();
    const ws2 = wb2.addWorksheet('Ergebnisse');
    ergebnisse.forEach(erg => {
      ws2.addRow([erg.zeit, erg.name]);
    });
    return wb2.xlsx.writeBuffer().then(buffer => {
      const base64String = btoa(String.fromCharCode(...new Uint8Array(buffer)));
      const dataURL = `data:application/octet-stream;base64,${base64String}`;
      return dataURL;
    });

  }

  constructor() {
    this.laeufer.pipe(shareReplay()).subscribe(this.laauferInfo$);
    //interval(1000).subscribe(() => {
    //  console.log("send");
    //  this.laeufer.next({name: "Lukas", startnummer: Math.round(Math.random() * 20)});
    //});
    console.log("ok");
  }
}
