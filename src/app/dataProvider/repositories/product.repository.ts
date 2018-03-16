import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Service } from '../providers/service';

import { IProduct } from '../models/product.model';

@Injectable()
export class ProductRepository {

    constructor(private _service: Service) {

    }

    getProducts(callback) {
        this._service.getProducts().subscribe(data => callback(data));
    }
    getProductsByCategoryId(categoryId: number, callback) {
        this._service.getProductsByCategoryId(categoryId).subscribe(data => callback(data));
    }
    getProductsById(id: number, callback) {
        this._service.getProductsById(id).subscribe(data => callback(data));
    }
    createProduct(product: IProduct, callback) {
        this._service.createProduct(product).subscribe(data => callback(data));
    }

}