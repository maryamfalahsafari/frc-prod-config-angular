import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IOrder, Order } from '../dataProvider/models/order.model';
import { OrderRepository } from '../dataProvider/repositories/order.repository';

@Component({
    templateUrl: 'checkout.component.html',
    styleUrls: ['checkout.component.css']
})
export class CheckoutComponent {

    orderSent: boolean = false;
    submitted: boolean = false;

    constructor(private _orderRepository: OrderRepository,
        public order: Order) { }

    submitOrder(form: NgForm) {
        this.submitted = true;
        if (form.valid) {
            var self = this;
            this._orderRepository.saveOrders(this.order, function (data) {
                self.order.clear();
                self.submitted = false;
                self.orderSent = true;
            });
        }
    }
}