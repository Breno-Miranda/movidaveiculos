import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  exports: [
  ],
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule, 
    FormsModule 
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class WidgetsModule { }
