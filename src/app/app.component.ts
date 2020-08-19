import {Component, OnInit} from '@angular/core';
import {TimerService} from './services/timer.service';
import {TumblerService} from './services/tumbler.service';
import {PortalService} from './services/portal.service';
import {CdkPortalOutletAttachedRef, ComponentPortal} from '@angular/cdk/portal';
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
  recieveReference(ref: any): void {
    ref.instance.image = '';
    // https://i.ibb.co/d2TBdP2/hotpng-com-1.png
    //   https://i.ibb.co/D7VbS9F/hotpng-com-2.png
    //     https://i.ibb.co/gZFxYH4/hotpng-com-3.png
  }
}
