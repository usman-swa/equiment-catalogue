import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'equipment/search/:equipmentId',
    loadChildren: () =>
      import('./equipment/equipment.module').then(
        (m) => m.EquipmentModule
      ),
  },
  {
    path: '',
    loadChildren: () => import('./frontpage/frontpage.module').then((m) => m.FrontPageModule),
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/'
  },
];

@NgModule({
  // register the app routes
  imports: [RouterModule.forRoot(appRoutes)],
  // export them so RouterModule is available throughout the app
  exports: [RouterModule]
})
export class AppRoutingModule { }
