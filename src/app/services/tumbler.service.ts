import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TumblerService {
  firstTumbler = false;

  constructor() {
  }
  allColors(): void {
    this.firstTumbler = !this.firstTumbler;
  }
}
