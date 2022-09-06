import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { AuthService } from './auth.service';
import { take, skipWhile, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService,
    private router: Router){}
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.signedin$.pipe(
      skipWhile(value => value === null),
      take(1),
      tap((authenticated) => {
        if (!authenticated) {
          this.router.navigateByUrl('/')
        }

      })
    );
    //new Observable((Subscriber)=>{
      // Subscriber.next(true);
      // Subscriber.complete();
      
    //})
  }
}
