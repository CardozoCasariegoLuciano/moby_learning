import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth/guards/auth.guard';
import {ErrorPageComponent} from './shared/error-page/error-page.component';

const router: Routes = [
  {
    path: "auth",
    loadChildren: () => import('./auth/auth.module').then((module) => module.AuthModule)
  },
  {
    path: "heroes",
    loadChildren: () => import('./heroes/heroes.module').then((module) => module.HeroesModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
  },
  {
    path: "404",
    component: ErrorPageComponent
  },
  {
    path: "**",
    redirectTo: "404",
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(router),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRouterModule { }
