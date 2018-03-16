import { Component, OnInit } from '@angular/core';

import { ProductConfigurationRepository } from '../dataProvider/repositories/product.configuration.repository';


@Component({
    templateUrl: 'tou.component.html',
    styleUrls: ['tou.component.css']

})
export class TOUComponent implements OnInit {

    timeOfUseNameList = [];
    timeOfUseList = [];
    test: string = 'OP';
    editedRowIndex: number = -1;
    selectedName: string;
    WeekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'PH'];
    newTou: boolean = false;


    constructor(private _productConfigurationRepository: ProductConfigurationRepository) {

    }

    ngOnInit() {
        this.getTimeOfUseNames();
    }
    getTimeOfUseNames() {
        var self = this;
        this._productConfigurationRepository.getTimeOfUseNames(function (response) {
            if (response.Success) {
                self.timeOfUseNameList = response.Result;
                if (self.timeOfUseNameList && self.timeOfUseNameList.length > 0) {
                    self.selectedName = self.timeOfUseNameList[0].Name;
                    self.getTimeOfUses();

                } else {
                    self.clearMatrix();
                }
            }
        });
    }
    getTimeOfUses() {
        var self = this;
        this._productConfigurationRepository.getTimeOfUses(this.selectedName, function (response) {
            if (response.Success) {
                self.timeOfUseList = response.Result;
            }
        });
    }
    changeTimeOfUseName() {
        if (this.selectedName)
            this.getTimeOfUses();
    }
    edit(index: number) {
        this.editedRowIndex = index;
    }
    submit() {
        var self = this;
        for (var i = 0; i < this.timeOfUseList.length; ++i) {
            this.timeOfUseList[i].Name = this.selectedName;
        }
        this._productConfigurationRepository.updateTimeOfUses(this.timeOfUseList, function (response) {
            self.editedRowIndex = -1;
            self.newTou = false;
            self.getTimeOfUseNames();
        });
    }
    clearMatrix() {
        this.selectedName = null;
        this.newTou = true;
        this.timeOfUseList = [];
        for (var i = 0; i <= 7; ++i) {
            this.timeOfUseList.push({
                WeekDay: this.WeekDays[i],

            });

        }
    }
    copyMatrix() {
        this.selectedName = this.selectedName+' - Copy';
        this.newTou = true;
        //this.timeOfUseList = [];
        // for (var i = 0; i <= 7; ++i) {
        //     this.timeOfUseList.push({
        //         WeekDay: this.WeekDays[i],

        //     });

        // }
    }


}