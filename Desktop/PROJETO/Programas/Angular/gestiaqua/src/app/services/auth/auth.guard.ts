import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if (sessionStorage.getItem('token') == null) {
          this.router.navigate(['/login']);
          sessionStorage.clear();
          return false;
        }
        else {
          return true;
        }
    }
}