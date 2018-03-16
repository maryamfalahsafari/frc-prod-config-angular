import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class AuthGuard {

    // constructor(private _router: Router,
    //     private _userRepository: UserRepository) {

    // }

    // canActivate(route: ActivatedRouteSnapshot,
    //     state: RouterStateSnapshot): boolean {
    //     if (!this._userRepository.authenticated) {
    //        // this.router.navigateByUrl("/admin/auth");
    //         return false;
    //     }
    //     return true;
    // }

}
