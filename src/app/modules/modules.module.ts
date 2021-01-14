import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// shared
import { SharedModule } from '../shared/shared.module';

// component
import { SiteComponent } from './site/site.component';
import { VehiclesComponent } from './vehicles/vehicles.component';


@NgModule({
  declarations: [
    SiteComponent,
    VehiclesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ]
})
export class ModulesModule { }
