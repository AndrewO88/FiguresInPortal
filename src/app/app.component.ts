import {Component, OnInit} from '@angular/core';
import {TimerService} from './services/timer.service';
import {TumblerService} from './services/tumbler.service';
import {PortalService} from './services/portal.service';
import {ComponentPortal} from '@angular/cdk/portal';
import {IEntity} from './interface';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  portals$: Observable<ComponentPortal<IEntity>[]> ;

  constructor(
    private timerSrv: TimerService,
    private tumbSrv: TumblerService,
    private portalSrv: PortalService
  ) {
  }

  ngOnInit(): void {
    this.portals$ = this.portalSrv.portals$;
  }

  addRectangle(): void {
    this.portalSrv.addRectangle();
  }

  clear(): void {
    this.portalSrv.clear();
  }

  addCircle(): void {
    this.portalSrv.addCircle();
  }

  onDelete(index): void {
    this.portalSrv.onDelete(index);
  }

  allColors(): void {
    this.tumbSrv.allColors();
  }

  addTriangle(): void {
    this.portalSrv.addTriangle();
  }
}
