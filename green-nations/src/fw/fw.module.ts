import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkBodyComponent } from "fw/framework-body/framework-body.component";
import { ContentComponent } from "fw/content/content.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent],
  exports: [FrameworkBodyComponent]
})
export class FwModule { }
