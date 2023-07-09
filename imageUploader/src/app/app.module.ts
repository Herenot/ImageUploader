import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { DragDropAreaComponent } from './drag-drop-area/drag-drop-area.component';
import { LoadingModalComponent } from './loading-modal/loading-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadImageComponent,
    DragDropAreaComponent,
    LoadingModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
