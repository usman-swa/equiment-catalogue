import { type ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FrontpageComponent } from './components/frontpage';

export const FrontpageRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild([
    {
        path: '',
        component: FrontpageComponent,
        pathMatch: 'full',
    },
]);
