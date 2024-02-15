import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FilterComponent } from './filter/filter.component';



@NgModule({
  declarations: [
    SideBarComponent,
    FilterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SideBarComponent,FilterComponent]
})
export class LayoutModule { }
