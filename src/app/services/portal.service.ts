import {Injectable} from '@angular/core';
import {ComponentPortal} from '@angular/cdk/portal';
import {IEntity} from '../interface';
import {RectangleComponent} from '../components/rectangle/rectangle.component';
import {CircleComponent} from '../components/circle/circle.component';
import {TriangleComponent} from '../components/triangle/triangle.component';

@Injectable({
  providedIn: 'root'
})
export class PortalService {
  portals: ComponentPortal<IEntity>[] = [];

  constructor(
  ) {
  }

  addRectangle(): void {
    this.portals.push(new ComponentPortal(RectangleComponent));
  }

  // clear(): void {
  //   this.portals = [];
  // }

  addCircle(): void {
    const circle = new ComponentPortal(CircleComponent);
    this.portals.push(circle);
  }

  onDelete(index): void {
    this.portals.splice(index, 1);
  }

  addTriangle(): void {
    const triangle = new ComponentPortal(TriangleComponent);
    this.portals.push(triangle);
  }
}
