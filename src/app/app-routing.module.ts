import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../app/features/auth/guards/auth.guard';


/**
 * En home ponemos canActive: [AuthGuard]
 * AuthGuard es un guard. En este archivo, en AuthGuard, definimos cuando se puede acceder a home,
 * es decir, aqui definimos el control de acceso.
 */
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/user/user.module').then(f => f.UserModule)
  },
  {
    path: '', 
    redirectTo: 'login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
