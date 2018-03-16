import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    templateUrl: 'monthPicker.component.html',
    selector: 'month-picker',
    styleUrls: ['monthPicker.component.css']
})
export class MonthPickerComponent {
    @Input() date: string;
    @Input() readOnly: boolean = false;
    @Output() change = new EventEmitter<string>();

    months = [];
    years = [];
    selectedYear: any;
    selectedMonth: any;
    disabled: boolean = false;

    ngOnInit() {
        this.disabled = this.readOnly;
        this.months = [
            { val: '01', name: 'Jan' },
            { val: '02', name: 'Feb' },
            { val: '03', name: 'Mar' },
            { val: '04', name: 'Apr' },
            { val: '05', name: 'May' },
            { val: '06', name: 'Jun' },
            { val: '07', name: 'Jul' },
            { val: '08', name: 'Aug' },
            { val: '09', name: 'Sep' },
            { val: '10', name: 'Oct' },
            { val: '11', name: 'Nov' },
            { val: '12', name: 'Dec' }
        ];
        this.years = [
            { val: '2017', name: '2017' },
            { val: '2018', name: '2018' },
            { val: '2019', name: '2019' },
            { val: '2020', name: '2020' },
            { val: '2021', name: '2021' },
            { val: '2022', name: '2022' },
            { val: '2023', name: '2023' },
            { val: '2024', name: '2024' },
            { val: '2025', name: '2025' },
            { val: '2026', name: '2026' },
            { val: '2027', name: '2027' },
            { val: '2028', name: '2028' },
            { val: '2029', name: '2029' },
            { val: '2030', name: '2030' }
        ];
        if (this.date && this.date != '') {
            var arr = this.date.split("-");
            this.selectedYear = this.years.find(c => c.val == arr[0]);
            this.selectedMonth = this.months.find(c => c.val == arr[1]);
        }
    }


    changeYear() {
        console.log(this.selectedYear);
        this.date = this.selectedMonth.name + '-' + this.selectedYear.val + '-01';
        this.change.emit(this.date);
    }
    changeMonth() {
        console.log(this.selectedMonth);
        this.date = this.selectedMonth.name + '-' + this.selectedYear.val + '-01';
        this.change.emit(this.date);
    }

}