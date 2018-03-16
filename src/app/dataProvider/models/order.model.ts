import { Injectable } from '@angular/core';

import { Cart } from './cart.model';

export interface IOrder {
    id: number;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    shipped: boolean;

    clear();
}

@Injectable()
export class Order implements IOrder {

    public id: number;
    public name: string;
    public address: string;
    public city: string;
    public state: string;
    public zip: string;
    public country: string;
    public shipped: boolean = false;

    constructor(public cart: Cart) { }

    clear() {
        this.id = null;
        this.name = this.address = this.city = null;
        this.state = this.zip = this.country = null;
        this.shipped = false;
        this.cart.clear();
    }

}
