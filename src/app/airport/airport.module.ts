import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirportListarComponent } from './airport-listar/airport-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AirportListarComponent],
  exports: [AirportListarComponent]
})
export class AirportModule { }
