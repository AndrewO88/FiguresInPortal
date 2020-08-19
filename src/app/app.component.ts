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
  portals$: Observable<ComponentPortal<IEntity>[]>;
  typeComp = '';

  constructor(
    private timerSrv: TimerService,
    private tumbSrv: TumblerService,
    private portalSrv: PortalService
  ) {
  }

  ngOnInit(): void {
    this.portals$ = this.portalSrv.portals$;
  }

  clear(): void {
    this.portalSrv.clear();
  }

  onDelete(index): void {
    this.portalSrv.onDelete(index);
  }

  allColors(): void {
    this.tumbSrv.allColors();
  }

  recieveReference(ref: any): void {
    ref.instance.image = this.typeComp;
  }

  creator(type: string): void {
    switch (type) {
      case 'bulbasaur':
        this.typeComp = 'https://i.ibb.co/d2TBdP2/hotpng-com-1.png';
        this.portalSrv.addEntity();
        break;
      case 'pikachu':
        this.typeComp = 'https://i.ibb.co/D7VbS9F/hotpng-com-2.png';
        this.portalSrv.addEntity();
        break;
      case 'squirtle':
        this.typeComp = 'https://i.ibb.co/gZFxYH4/hotpng-com-3.png';
        this.portalSrv.addEntity();
        break;
    }
  }

  canMove(): void {
    this.tumbSrv.canMove();
  }
}
