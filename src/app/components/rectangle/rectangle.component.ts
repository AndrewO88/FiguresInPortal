import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ResizeEvent} from 'angular-resizable-element';
import {IEntity} from '../../interface';
import {map} from 'rxjs/operators';
import {TimerService} from '../../services/timer.service';
import {TumblerService} from '../../services/tumbler.service';

function random_rgba(): string {
  const o = Math.round;
  const r = Math.random;
  const s = 255;
  return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements IEntity, OnInit {
  // interval$ = interval(1000);
  constructor(
    private interval$: TimerService,
    private tumb: TumblerService
  ) {
  }

  @Input() index = -1;
  public style: any = {
    backgroundColor: 'rgb(111,222,131)'
  };

  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX = 50;
    return !(event.rectangle.width &&
      event.rectangle.height &&
      (event.rectangle.width < MIN_DIMENSIONS_PX ||
        event.rectangle.height < MIN_DIMENSIONS_PX));
  }

  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      position: 'fixed',
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
  }

  ngOnInit(): void {
    if (this.tumb.tumbler) {
      this.interval$.int$.pipe(
        map(random_rgba)
      ).subscribe(val => this.style.backgroundColor = val);
    } else {
      this.interval$.int$.pipe(
        map(x => 'хуй')
      ).subscribe(val => this.style.backgroundColor = val);
    }
  }
}
