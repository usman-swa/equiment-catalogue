import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentRoutingModule } from './equipment.routing';
import { EquipmentComponent } from './components/search-equipment';
@NgModule({
  declarations: [EquipmentComponent],
  imports: [CommonModule, EquipmentRoutingModule],
  exports: [EquipmentComponent],
})
export class EquipmentModule {}

