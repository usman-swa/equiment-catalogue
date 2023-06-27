import { type ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FrontpageComponent } from './components/frontpage';
import { AddNewEquipmentComponent } from '../equipment';

export const FrontpageRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild([
    {
        path: 'equipment',
        component: FrontpageComponent,
        pathMatch: 'full',
    },
    {
      path: 'equipment/new',
      component: AddNewEquipmentComponent
    },
    {
        path: '',
        component: FrontpageComponent,
        pathMatch: 'full',
    },
]);
