import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentDetailsComponent } from './components/equipment-details/equipment-details.component';
import { AddNewEquipmentComponent } from './components/add-new-equipment/add-new-equipment.component';

const routes: Routes = [
    {
        path: 'equipment/search:equipmentId',
        component: EquipmentDetailsComponent
    },
    {
        path: '',
        component: EquipmentDetailsComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EquipmentRoutingModule { }
