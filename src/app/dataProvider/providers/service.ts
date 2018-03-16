import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api';

//import { IProduct } from '../models/product.model';

@Injectable()
export class Service {
    constructor(private _api: ApiService) {

    }
    getCategrories(): Observable<any> {
        return this._api.get('categories');
        //.do(data => { console.log(data); });
    }
    getProductsByCategoryId(categoryId: number): Observable<any> {
        return this._api.get(categoryId + '/products');
        //.do(data => { console.log(data); });
    }
    getProducts(): Observable<any> {
        return this._api.get('products');
        //.do(data => { console.log(data) });

    }
    getProductsById(id: number): Observable<any> {
        return this._api.get('products/:id', { id: id });
        //.do(data => { console.log(data) });

    }
    createProduct(product: any): Observable<any> {
        return this._api.post('products', product);
        //.do(data => { console.log(data); });
    }
    getOrders(): Observable<any> {
        return this._api.get('orders');
    }
    createOrder(order: any): Observable<any> {
        return this._api.post('orders', order);
    }
    authenticate(userInfo: any): Observable<any> {
        return this._api.post('login', userInfo);
    }
    getOfferPriceMaps(type: string, effectiveDate: string, planCode: string): Observable<any> {
        return this._api.get('Product/GetOfferPriceMaps?type=' + type + '&effectiveDate=' +
            effectiveDate + '&planCode=' + planCode);
        //.do(data => { console.log(data); });
    }
    updateOfferPriceMaps(offerPriceMaps: any) {
        return this._api.post('Product/UpdateOfferPriceMaps', offerPriceMaps);
    }
    // getTwoTiersByType(type: string): Observable<any> {
    //     return this._api.get('Product/GetTwoTiersByType?type=' + type);
    //     //.do(data => { console.log(data); });
    // }
    // updateTwoTiers(twoTiers: any) {
    //     return this._api.post('Product/UpdateTwoTiersByType', twoTiers);
    // }
    getTimeOfUses(name: string) {
        return this._api.get('Product/GetTimeOfUses?name=' + name);
    }
    updateTimeOfUses(timeOfUses: any) {
        return this._api.post('Product/UpdateTimeOfUses', timeOfUses);
    }
    getEffectiveDates(type: string, planCode: string) {
        return this._api.get('Product/GetEffectiveDates?type=' + type + '&planCode=' + planCode);
    }
    getTimeOfUseNames() {
        return this._api.get('Product/GetTimeOfUseNames');
    }
}