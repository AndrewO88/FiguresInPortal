import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ComponentPortal} from '@angular/cdk/portal';
import {RectangleComponent} from './components/rectangle/rectangle.component';
import {IEntity} from './interface';
import {CircleComponent} from './components/circle/circle.component';
import {TimerService} from './services/timer.service';
import {TumblerService} from './services/tumbler.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  portals: ComponentPortal<IEntity>[] = [];


  constructor(
    private timerSrv: TimerService,
    private tumb: TumblerService
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  addRectangle(): void {
    this.portals.push(new ComponentPortal(RectangleComponent));
  }

  clear(): void {
    this.portals = [];
  }

  addCircle(): void {
    const circle = new ComponentPortal(CircleComponent);
    this.portals.push(circle);
  }

  checked(): void {
    console.log(this.tumb.tumbler);
    this.tumb.tumbler = !this.tumb.tumbler;
  }

  onDelete(index): void {
    this.portals.splice(index, 1);
  }
}
