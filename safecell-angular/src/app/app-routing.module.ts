import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { PageFailComponent } from './page-fail/page-fail.component';

const routes: Routes = [
  { path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [],
    canActivateChild: [],
    canLoad: []
  },
  {path: 'free', loadChildren: () => import('./free-view/free-view.module').then(m => m.FreeViewModule)},
  {path: '', redirectTo: '/free', pathMatch: 'prefix'},
  {path: '**', component: PageFailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthGuard
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
