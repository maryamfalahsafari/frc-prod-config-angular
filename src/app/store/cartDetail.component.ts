import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Cart } from '../dataProvider/models/cart.model';

@Component({
    templateUrl: "cartDetail.component.html"
})
export class CartDetailComponent {

    constructor(private _router: Router,
                public cart: Cart) { //public cart: Cart => is using in html and should be public 

    }
    goBack() {
        this._router.navigate(['store']);
    }

}