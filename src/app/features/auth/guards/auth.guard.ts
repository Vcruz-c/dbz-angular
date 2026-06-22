import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
      private authService: AuthService,
      private router: Router
)   {}

  // método  que hay que implementar
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Aqui en guard usamos getEmail porque aqui se necesita un valor actual del email
    // de ahora, no un observable que está cambiando constantemente en el futuro.
    const email = this.authService.getEmail();

    if (email) {
      return true;
    } else {
        return this.router.createUrlTree(['/login']);
      }
  }
  
}
