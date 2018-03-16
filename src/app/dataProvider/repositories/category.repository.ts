import { Injectable } from '@angular/core';

import { Service } from '../providers/service';

@Injectable()
export class CategoryRepository {
    constructor(private _service: Service) {

    }

    getCategories(callback) {
        this._service.getCategrories().subscribe(data => callback(data));
    }
}