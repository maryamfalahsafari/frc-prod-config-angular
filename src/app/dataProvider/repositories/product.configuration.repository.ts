import { Injectable } from '@angular/core';

import { Service } from '../providers/service';

@Injectable()
export class ProductConfigurationRepository {
    constructor(private _service: Service) {

    }

    getOfferPriceMaps(type: string, effectiveDate: string, planCode: string, callback) {
        this._service.getOfferPriceMaps(type, effectiveDate, planCode).subscribe(data => callback(data));
    }
    updateOfferPriceMaps(offerPriceMaps: any, callback) {
        return this._service.updateOfferPriceMaps(offerPriceMaps).subscribe(data => callback(data));
    }
    // getTwoTiersByType(type: string, callback) {
    //     this._service.getTwoTiersByType(type).subscribe(data => callback(data));
    // }
    // updateTwoTiers(twoTiers: any, callback) {
    //     return this._service.updateTwoTiers(twoTiers).subscribe(data => callback(data));
    // }
    getTimeOfUses(name: string, callback) {
        return this._service.getTimeOfUses(name).subscribe(data => callback(data));
    }
    updateTimeOfUses(timeOfUses: any, callback) {
        return this._service.updateTimeOfUses(timeOfUses).subscribe(data => callback(data));
    }
    getEffectiveDates(type: string, planCode: string, callback) {
        return this._service.getEffectiveDates(type, planCode).subscribe(data => callback(data))
    }
    getTimeOfUseNames(callback) {
        return this._service.getTimeOfUseNames().subscribe(data => callback(data));
    }


}