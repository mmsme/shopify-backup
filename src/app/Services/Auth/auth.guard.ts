import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild,CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FormsService } from '../Forms/forms.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: FormsService, private router: Router) { }
  
  canActivate(): boolean {
    if (this.authService.loggedIn) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
//   CanDeactivate():boolean {
//   if (!this.authService.loggedIn) {
//       return true;
//     }
//     alert("you are Already logged in !!!")
//     this.router.navigate(['home']);
//     return false;
// }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
