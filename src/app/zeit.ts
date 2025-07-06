import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Zeit {

  constructor() { }

  zweiStellig(num: number): string {
    return num < 10 ? "0" + num : num.toString();
  }

  format(seconds: number): string {
    return this.zweiStellig(Math.floor(seconds / 60)) + ":" + this.zweiStellig(seconds % 60);
  }
}
