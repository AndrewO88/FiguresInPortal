import {Injectable} from '@angular/core';
import {interval} from 'rxjs';
import {TumblerService} from './tumbler.service';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  constructor(
    private tumb: TumblerService
  ) {
  }

  int$ = interval(1000).pipe(filter(_ => this.tumb.firstTumbler));
}
