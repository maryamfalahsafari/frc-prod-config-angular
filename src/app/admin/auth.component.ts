import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserRepository } from '../dataProvider/repositories/user.repository';

@Component({
    templateUrl: 'auth.component.html',
    styleUrls: ['auth.component.css']
})
export class AuthComponent {

    userInfo: any = { username: null, password: null };
    errorMessage: string;

    constructor(private _router: Router,
        private _userRepository: UserRepository) {

    }

    ngOnInit() {

    }

    authenticate(form: NgForm) {
        if (form.valid) {
            //perform authentication
            var self = this;
            // this._userRepository.authenticate(this.userInfo, function (response) {
            //     console.log(response);
            //     if (response.success == true) {
            //         self._router.navigateByUrl('/admin/main')
            //     }else{
            //         self.errorMessage="Invalid Credential";
            //     }
            // });
        } else {
            this.errorMessage = "Form Data Invalid";
        }

    }

}