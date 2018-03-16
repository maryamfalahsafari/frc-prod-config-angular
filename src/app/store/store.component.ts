import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from '../dataProvider/models/category.model';
import { IProduct } from '../dataProvider/models/product.model';

import { CategoryRepository } from '../dataProvider/repositories/category.repository';
import { ProductRepository } from '../dataProvider/repositories/product.repository';
import { Cart } from '../dataProvider/models/cart.model';


@Component({
    templateUrl: "store.component.html",
    selector: "store"

})
export class StoreComponent {

    categoryList: any = [];
    productList: any = [];
    selectedCategory = null;
    value = "Hi Maryam";

    constructor(private _categoryRepository: CategoryRepository,
        private _productRepository: ProductRepository,
        private _router: Router,
        public cart: Cart) {

    }
    ngOnInit() {
        //console.log('ready');
        var self = this;
        this._categoryRepository.getCategories(function (data) {
            self.categoryList = data.result;
        });
        this._productRepository.getProducts(function (data) {
            self.productList = data.result;
        });

    }

    categoryChange(category) {
        this.selectedCategory = category;
        var self = this;
        if (!category) {
            this._productRepository.getProducts(function (data) {
                self.productList = data.result;
            });
        } else {
            this._productRepository.getProductsByCategoryId(category.id, function (data) {
                self.productList = data.result;
            });
        }
        //console.log(this.selectedCategory);


    }
    addProductToCart(product: IProduct) {
        console.log(product);
        this.cart.addLine(product);
        this._router.navigateByUrl('/store/cart');
    }

}