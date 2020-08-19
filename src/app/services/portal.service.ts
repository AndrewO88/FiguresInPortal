import {Injectable} from '@angular/core';
import {ComponentPortal} from '@angular/cdk/portal';
import {IEntity} from '../interface';
import {EntityComponent} from '../components/entity/entity.component';
import {BehaviorSubject, Observable} from 'rxjs';
import {TumblerService} from './tumbler.service';

@Injectable({
  providedIn: 'root'
})
export class PortalService {
  private portalsSubject: BehaviorSubject<ComponentPortal<IEntity>[]>;
  portals$: Observable<ComponentPortal<IEntity>[]>;

  constructor(
    private tumbSrv: TumblerService
  ) {
    this.portalsSubject = new BehaviorSubject<ComponentPortal<IEntity>[]>([]);
    this.portals$ = this.portalsSubject.asObservable();
  }

  clear(): void {
    this.portalsSubject.next([]);
  }

  addEntity(): void {
    const entity = new ComponentPortal(EntityComponent);
    const arr = this.portalsSubject.value;
    this.portalsSubject.next([...arr, entity]);
  }

  onDelete(index): void {
    if (!this.tumbSrv.moveTumbler) {
      const arr = [...this.portalsSubject.value];
      arr.splice(index, 1);
      this.portalsSubject.next(arr);
    }
  }
}
