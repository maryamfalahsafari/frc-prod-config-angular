import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-sizer',
  templateUrl: 'sizer.component.html'
})
export class SizerComponent {
  @Input() size: string;
  @Input() readOnly: boolean = false;
  @Output() sizeChange = new EventEmitter<string>();

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
    if (this.size && this.size != '') {
      var arr = this.size.split("-");
      this.selectedYear = this.years.find(c => c.val == arr[0]);
      this.selectedMonth = this.months.find(c => c.val == arr[1]);
    }



  }

  changeYear() { this.resize(-1); }
  changeMonth() { this.resize(-1); }

  resize(delta: number) {
    this.size = this.selectedMonth.name + '-' + this.selectedYear.val;
    this.sizeChange.emit(this.size);
  }
}