import { Pipe, PipeTransform } from '@angular/core';
import { Zeit } from './zeit';

@Pipe({
  name: 'zeitformat'
})
export class ZeitformatPipe implements PipeTransform {

  constructor(private zeitService: Zeit) {

  }

  transform(value: number, ...args: unknown[]): unknown {
    return this.zeitService.format(value);
  }

}
