import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentRoutingModule } from './equipment.routing';
import { MatTableModule } from '@angular/material/table';
import { EquipmentDetailsComponent } from './components/equipment-details';
@NgModule({
  declarations: [EquipmentDetailsComponent],
  imports: [CommonModule, MatTableModule, EquipmentRoutingModule],
  exports: [EquipmentDetailsComponent],
})
export class EquipmentModule {}

