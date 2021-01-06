
import { NgModule , NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// common
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';


// Modules
import { WidgetsModule } from './common/widgets/widgets.module';

@NgModule({
  exports: [
    HeaderComponent,
    FooterComponent,
    WidgetsModule,
    CommonModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    WidgetsModule,
    RouterModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})

export class SharedModule { }