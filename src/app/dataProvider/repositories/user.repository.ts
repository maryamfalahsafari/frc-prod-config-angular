import { Injectable } from '@angular/core';

import { Service } from '../providers/service';
import { IUser } from '../models/user.model';



@Injectable()
export class UserRepository {

    token: string;

    constructor(private _service: Service) {

    }

    // get authenticated(): boolean {
    //     return this.token != null;
    // }

    authenticate(userInfo: IUser, callback) {
        var self = this;
        // this._service.authenticate(userInfo).subscribe(data => {
        //     if (data.success == true) {
        //         self.token = data.token;
        //     } else {
        //         self.token = null;
        //     }
        //     callback(data);
        // });

    }
}