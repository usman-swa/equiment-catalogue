import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// define app routes
const appRoutes: Routes = [
  {
    // set the default route
    path: '',
    loadChildren: () => import('./frontpage/frontpage.module').then((m) => m.FrontPageModule),
  },
  {
    // redirect to the default route when an empty path is specified
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    // handle any other unspecified routes
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  // register the app routes
  imports: [RouterModule.forRoot(appRoutes)],
  // export them so RouterModule is available throughout the app
  exports: [RouterModule]
})
export class AppRoutingModule { }
