import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'ad', pathMatch: 'full' },
  {
    path: 'ad',
    loadChildren: () =>
      import('./admin/admin.module').then((dt) => dt.AdminModule),
  },
  {
    path: 'us',
    loadChildren: () =>
      import('./user/user.module').then((dt) => dt.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
