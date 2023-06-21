import { type ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FrontpageComponent } from './frontpage.component';

export const FrontpageRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild([
    {
        path: '',
        component: FrontpageComponent,
        pathMatch: 'full',
    },
]);
