import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipmentDetailsComponent } from './components/equipment-details';

const routes: Routes = [
  {
    path: 'equipment/search:equipmentId',
    component: EquipmentDetailsComponent
  },
  {
    path: '',
    component: EquipmentDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipmentRoutingModule {}
