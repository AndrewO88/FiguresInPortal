import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RectangleComponent} from './components/rectangle/rectangle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ResizableModule} from 'angular-resizable-element';
import {PortalModule} from '@angular/cdk/portal';
import {CircleComponent} from './components/circle/circle.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {TriangleComponent} from './components/triangle/triangle.component';

@NgModule({
  declarations: [
    AppComponent,
    RectangleComponent,
    CircleComponent,
    TriangleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    ResizableModule,
    PortalModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
