import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivate{
  constructor(private authService: AuthService,
  private router: Router) {}


  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.hasSessionActive()
    .pipe(
      tap((isAuth) => {
        if(!isAuth){
          this.router.navigate(["/auth/loguin"])
        }
      })
    )
  }

  canLoad( route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.hasSessionActive()
    .pipe(
      tap((isAuth) => {
        if(!isAuth){
          this.router.navigate(["/auth/loguin"])
        }
      })
    )
  }
}
