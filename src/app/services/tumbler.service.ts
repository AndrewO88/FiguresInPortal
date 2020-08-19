import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TumblerService {
  firstTumbler = false;
  moveTumbler = false;

  constructor() {
  }
  allColors(): void {
    this.firstTumbler = !this.firstTumbler;
  }

  canMove(): void {
    this.moveTumbler = !this.moveTumbler;
  }
}
