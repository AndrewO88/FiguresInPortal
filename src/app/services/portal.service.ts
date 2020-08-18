import {Injectable} from '@angular/core';
import {ComponentPortal} from '@angular/cdk/portal';
import {IEntity} from '../interface';
import {RectangleComponent} from '../components/rectangle/rectangle.component';
import {CircleComponent} from '../components/circle/circle.component';
import {TriangleComponent} from '../components/triangle/triangle.component';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortalService {
  private portalsSubject: BehaviorSubject<ComponentPortal<IEntity>[]>;
  portals$: Observable<ComponentPortal<IEntity>[]> ;

  constructor(
  ) {
    this.portalsSubject = new BehaviorSubject<ComponentPortal<IEntity>[]>([]);
    this.portals$ =  this.portalsSubject.asObservable();
  }

  addRectangle(): void {
    // this.portals.push(new ComponentPortal(RectangleComponent));
    const arr = this.portalsSubject.value;
    this.portalsSubject.next([...arr, (new ComponentPortal(RectangleComponent))]);
  }

  clear(): void {
    // this.portals = [];
    this.portalsSubject.next([]);
  }

  addCircle(): void {
    const circle = new ComponentPortal(CircleComponent);
    // this.portals.push(circle);
    const arr = this.portalsSubject.value;
    this.portalsSubject.next([...arr, circle]);
  }

  onDelete(index): void {
    // this.portals.splice(index, 1);
    console.log(index);
    const arr = this.portalsSubject.value.splice(index, 1);
    this.portalsSubject.next([...arr]);
  }

  addTriangle(): void {
    const triangle = new ComponentPortal(TriangleComponent);
    // this.portals.push(triangle);
    const arr = this.portalsSubject.value;
    this.portalsSubject.next([...arr, triangle]);
  }
}
