import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'custom-switch',
    templateUrl: 'switch.component.html'
})
export class SwitchComponent {
    @Input() value: string;
    @Output() valueChange = new EventEmitter<string>();

    months = [];
    years = [];
    selectedYear: any;
    selectedMonth: any;


    ngOnInit() {
    }

    selectValue(input: string) {
        this.value = input;
        this.valueChange.emit(this.value);
    }
}