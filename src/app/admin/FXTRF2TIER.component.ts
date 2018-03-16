import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductConfigurationRepository } from '../dataProvider/repositories/product.configuration.repository';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { CustomDate } from './date.model';


@Component({
    templateUrl: 'FXTRF2TIER.component.html',
    styleUrls: ['FXTRF2TIER.component.css'],
    selector: 'FXTRF2TIER-component'
})
export class FXTRF2TIERComponent {

    @Input() showing: boolean;
    //@Output() valueChange = new EventEmitter<string>();
    ngOnChanges(changes) {
        if (this.showing == true) {
            console.log('I am FXTRF2TIER');
            this.getEffectiveDates();
        }
    }


    FXTRF2TIERList = [];
    FXTRF2TIERList_UN_PIVOT = [];
    editedRowIndexFXTRF2TIER: number = -1;
    selectedEffectiveDate: string = null;
    effectiveDates = [];
    newEffectiveDate: CustomDate;
    monthsName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    constructor(private _productConfigurationRepository: ProductConfigurationRepository) {

    }
    ngOnInit() {
        if (this.showing == true) {
            console.log('I am FXTRF2TIER');
            this.getEffectiveDates();
        }
    }
    getEffectiveDates() {
        var self = this;
        this._productConfigurationRepository.getEffectiveDates('Dolar', 'FXTRF2TIER', function (response) {
            if (response.Success == true) {
                self.effectiveDates = response.Result;
                if (response.Result && response.Result.length > 0) {
                    self.selectedEffectiveDate = response.Result[0];
                    self.loadOfferPriceMapInfo('Dolar', self.selectedEffectiveDate);
                }
            }
        });
    }


    loadOfferPriceMapInfo(type: string, effectiveDate: string) {
        var self = this;
        this._productConfigurationRepository.getOfferPriceMaps(type, effectiveDate, 'FXTRF2TIER', function (response) {
            if (response.Success == true) {
                self.FXTRF2TIERList = response.Result;
                self.FXTRF2TIERList.forEach(item => {

                    item["MonthString"] = self.monthsName[item.Month - 1] + '-' + item.Year;
                });
            }
        });
    }
    calculateMapMatrix(type, startMonth, year) {

        this.FXTRF2TIERList = [];
        for (var i = startMonth; i <= 12; i++) {
            this.FXTRF2TIERList.push({
                Month: i,
                MonthString: this.monthsName[i - 1] + '-' + year,
                Year: year
            });
        }
        year++;
        for (var j = 1; j < startMonth; j++) {
            this.FXTRF2TIERList.push({
                Month: j,
                MonthString: this.monthsName[j - 1] + '-' + year,
                Year: year
            });
        }
    }
    changeFXTRF2TIERSelectedEffectiveDate() {
        this.loadOfferPriceMapInfo('Dolar', this.selectedEffectiveDate);
    }
    submitFXTRF2TIER() {

        this.FXTRF2TIERList_UN_PIVOT = [];
        var self = this;
        var newEffectiveDateString = self.getFullDate(self.newEffectiveDate);
        this.FXTRF2TIERList.forEach(item => {
            self.FXTRF2TIERList_UN_PIVOT.push(
                {
                    EffectiveDate: self.newEffectiveDate,
                    Year:item.Year,
                    Month: item.Month,
                    Duration: '3 mth',
                    Value: item.mth3P ? item.mth3P : 0,
                    Type: 'Dolar',
                    TierKind: 'P',
                    PlanCode: 'FXTRF2TIER'
                },
                {
                    EffectiveDate: self.newEffectiveDate,
                    Year:item.Year,
                    Month: item.Month,
                    Duration: '3 mth',
                    Value: item.mth3OP ? item.mth3OP : 0,
                    Type: 'Dolar',
                    TierKind: 'OP',
                    PlanCode: 'FXTRF2TIER'
                },
                {
                    EffectiveDate: self.newEffectiveDate,
                    Year:item.Year,
                    Month: item.Month,
                    Duration: '6 mth',
                    Value: item.mth6P ? item.mth6P : 0,
                    Type: 'Dolar',
                    TierKind: 'P',
                    PlanCode: 'FXTRF2TIER'
                },
                {
                    EffectiveDate: self.newEffectiveDate,
                    Year:item.Year,
                    Month: item.Month,
                    Duration: '6 mth',
                    Value: item.mth6OP ? item.mth6OP : 0,
                    Type: 'Dolar',
                    TierKind: 'OP',
                    PlanCode: 'FXTRF2TIER'
                },
                {
                    EffectiveDate: self.newEffectiveDate,
                    Year:item.Year,
                    Month: item.Month,
                    Duration: '12 mth',
                    Value: item.mth12P ? item.mth12P : 0,
                    Type: 'Dolar',
                    TierKind: 'P',
                    PlanCode: 'FXTRF2TIER'
                },
                {
                    EffectiveDate: self.newEffectiveDate,
                    Year:item.Year,
                    Month: item.Month,
                    Duration: '12 mth',
                    Value: item.mth12OP ? item.mth12OP : 0,
                    Type: 'Dolar',
                    TierKind: 'OP',
                    PlanCode: 'FXTRF2TIER'
                },
                {
                    EffectiveDate: self.newEffectiveDate,
                    Year:item.Year,
                    Month: item.Month,
                    Duration: '18 mth',
                    Value: item.mth18P ? item.mth18P : 0,
                    Type: 'Dolar',
                    TierKind: 'P',
                    PlanCode: 'FXTRF2TIER'
                },
                {
                    EffectiveDate: self.newEffectiveDate,
                    Year:item.Year,
                    Month: item.Month,
                    Duration: '18 mth',
                    Value: item.mth18OP ? item.mth18OP : 0,
                    Type: 'Dolar',
                    TierKind: 'OP',
                    PlanCode: 'FXTRF2TIER'
                },
                {
                    EffectiveDate: self.newEffectiveDate,
                    Year:item.Year,
                    Month: item.Month,
                    Duration: '24 mth',
                    Value: item.mth24P ? item.mth24P : 0,
                    Type: 'Dolar',
                    TierKind: 'P',
                    PlanCode: 'FXTRF2TIER'
                },
                {
                    EffectiveDate: self.newEffectiveDate,
                    Year:item.Year,
                    Month: item.Month,
                    Duration: '24 mth',
                    Value: item.mth24OP ? item.mth24OP : 0,
                    Type: 'Dolar',
                    TierKind: 'OP',
                    PlanCode: 'FXTRF2TIER'
                });
        });

        this._productConfigurationRepository.updateOfferPriceMaps(self.FXTRF2TIERList_UN_PIVOT, function (response) {
            if (response.Success == true) {
                self.editedRowIndexFXTRF2TIER = -1;
                self.newEffectiveDate = null;
                self.getEffectiveDates();
            }
        });
    }
    editFXTRF2TIER(index: number) {
        this.editedRowIndexFXTRF2TIER = index;
    }
    submitFXTRF2TIERDisable() {
        return !this.newEffectiveDate;
    }
    clearMatrix() {
        this.calculateMapMatrix('Dolar', this.newEffectiveDate.month, this.newEffectiveDate.year);
    }
    clearMatrixDisable() {
        return !this.newEffectiveDate;
    }
    getMonth(date: Date) {
        var d = new Date(date);
        return d.getMonth() + 1;
    }
    getYear(date: Date) {
        var d = new Date(date);
        return d.getFullYear();
    }
    getFullDate(dateParts: CustomDate) {
        return dateParts.year + '-' + dateParts.month + '-' + dateParts.day;
    }
    getDateAsObject(date: Date): CustomDate {

        var result = new CustomDate();
        result.year = date.getFullYear();
        result.month = date.getMonth() + 1; //months from 1-12
        result.day = date.getDate();

        return result;

    }
}