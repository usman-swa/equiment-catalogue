import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentRoutingModule } from './equipment.routing';
import { EquipmentComponent } from './components/search-equipment';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [EquipmentComponent],
  imports: [CommonModule, MatTableModule, EquipmentRoutingModule],
  exports: [EquipmentComponent],
})
export class EquipmentModule {}

