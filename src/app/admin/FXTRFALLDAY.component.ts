import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductConfigurationRepository } from '../dataProvider/repositories/product.configuration.repository';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { CustomDate } from './date.model';


@Component({
    templateUrl: 'FXTRFALLDAY.component.html',
    styleUrls: ['FXTRFALLDAY.component.css'],
    selector: 'FXTRFALLDAY-component'
})
export class FXTRFALLDAYComponent {

    @Input() showing: boolean;
    //@Output() valueChange = new EventEmitter<string>();
    ngOnChanges(changes) {
        if (this.showing == true) {
            console.log('I am FXTRFALLDAY');
            this.getEffectiveDates();
        }
    }


    FXTRFALLDAYList = [];
    FXTRFALLDAYList_UN_PIVOT = [];
    editedRowIndexFXTRFALLDAY: number = -1;
    selectedEffectiveDate: string = null;
    effectiveDates = [];
    newEffectiveDate: CustomDate;
    monthsName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    constructor(private _productConfigurationRepository: ProductConfigurationRepository) {

    }
    ngOnInit() {
        if (this.showing == true) {
            console.log('I am FXTRFALLDAY');
            this.getEffectiveDates();
        }
    }
    getEffectiveDates() {
        var self = this;
        this._productConfigurationRepository.getEffectiveDates('Dolar', 'FXTRFALLDAY', function (response) {
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
        this._productConfigurationRepository.getOfferPriceMaps(type, effectiveDate, 'FXTRFALLDAY', function (response) {
            if (response.Success == true) {
                self.FXTRFALLDAYList = response.Result;
                self.FXTRFALLDAYList.forEach(item => {

                    item["MonthString"] = self.monthsName[item.Month - 1] + '-' + item.Year;
                });
            }
        });
    }
    calculateMapMatrix(type, startMonth, year) {

        this.FXTRFALLDAYList = [];
        for (var i = startMonth; i <= 12; i++) {
            this.FXTRFALLDAYList.push({
                Month: i,
                MonthString: this.monthsName[i - 1] + '-' + year,
                Year: year
            });
        }
        year++;
        for (var j = 1; j < startMonth; j++) {
            this.FXTRFALLDAYList.push({
                Month: j,
                MonthString: this.monthsName[j - 1] + '-' + year,
                Year: year
            });
        }
    }
    changeFXTRFALLDAYSelectedEffectiveDate() {
        this.loadOfferPriceMapInfo('Dolar', this.selectedEffectiveDate);
    }
    submitFXTRFALLDAY() {

        this.FXTRFALLDAYList_UN_PIVOT = [];
        var self = this;
        var newEffectiveDateString = self.getFullDate(self.newEffectiveDate);
        this.FXTRFALLDAYList.forEach(item => {
            self.FXTRFALLDAYList_UN_PIVOT.push(
                {
                    EffectiveDate: newEffectiveDateString,
                    Year: item.Year,
                    Month: item.Month,
                    Duration: '3 mth',
                    Value: item.mth3 ? item.mth3 : 0,
                    Type: 'Dolar',
                    TierKind: 'A',
                    PlanCode: 'FXTRFALLDAY'
                },
                {
                    EffectiveDate: newEffectiveDateString,
                    Year: item.Year,
                    Month: item.Month,
                    Duration: '6 mth',
                    Value: item.mth6 ? item.mth6 : 0,
                    Type: 'Dolar',
                    TierKind: 'A',
                    PlanCode: 'FXTRFALLDAY'
                },
                {
                    EffectiveDate: newEffectiveDateString,
                    Year: item.Year,
                    Month: item.Month,
                    Duration: '12 mth',
                    Value: item.mth12 ? item.mth12 : 0,
                    Type: 'Dolar',
                    TierKind: 'A',
                    PlanCode: 'FXTRFALLDAY'
                },
                {
                    EffectiveDate: newEffectiveDateString,
                    Year: item.Year,
                    Month: item.Month,
                    Duration: '18 mth',
                    Value: item.mth18 ? item.mth18 : 0,
                    Type: 'Dolar',
                    TierKind: 'A',
                    PlanCode: 'FXTRFALLDAY'
                },
                {
                    EffectiveDate: newEffectiveDateString,
                    Year: item.Year,
                    Month: item.Month,
                    Duration: '24 mth',
                    Value: item.mth24 ? item.mth24 : 0,
                    Type: 'Dolar',
                    TierKind: 'A',
                    PlanCode: 'FXTRFALLDAY'
                });
        });
        this._productConfigurationRepository.updateOfferPriceMaps(self.FXTRFALLDAYList_UN_PIVOT, function (response) {
            if (response.Success == true) {
                self.editedRowIndexFXTRFALLDAY = -1;
                self.newEffectiveDate = null;
                self.getEffectiveDates();
            }
        });
    }
    editFXTRFALLDAY(index: number) {
        this.editedRowIndexFXTRFALLDAY = index;
    }
    submitFXTRFALLDAYDisable() {
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