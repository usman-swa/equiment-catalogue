
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipmentComponent } from './components/search-equipment';

const routes: Routes = [
  {
    path: 'equipment/search:equipmentId',
    component: EquipmentComponent
  },
  {
    path: '',
    component: EquipmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipmentRoutingModule {}
