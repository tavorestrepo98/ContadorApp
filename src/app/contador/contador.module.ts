import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HijoComponent } from './pages/hijo/hijo.component';
import { NietoComponent } from './pages/nieto/nieto.component';


@NgModule({
  declarations: [
    HijoComponent,
    NietoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HijoComponent,
    NietoComponent
  ]
})
export class ContadorModule { }
