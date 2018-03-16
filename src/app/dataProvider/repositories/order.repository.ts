import { Injectable } from '@angular/core';

import { IOrder } from '../models/order.model';
import { Service } from '../providers/service';

@Injectable()
export class OrderRepository {

    constructor(private _service: Service) {

    }

    getOrders(callback) {
        this._service.getOrders().subscribe(data => callback(data));
    }

    saveOrders(order: IOrder, callback) {
        this._service.createOrder(order).subscribe(data => callback(data));
    }

}